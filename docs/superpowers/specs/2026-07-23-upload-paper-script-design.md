# Design: `upload-paper` script

**Date:** 2026-07-23
**Status:** Approved

## Problem

Project paper PDFs live in a public Supabase Storage bucket (`project_papers`, project
ref `hfpruaivskrkweobtvcf`). Adding a paper today is manual: upload via the dashboard,
copy the public URL, paste it into the correct project's `links.paper` in `data/site.ts`.
This is tedious and error-prone (wrong URL, wrong project, `%20`-laden filenames).

## Goal

One command that uploads a PDF and wires the resulting public URL into the matching
project in `data/site.ts`:

```
npm run upload-paper -- <project-slug> <path/to/paper.pdf>
```

## Non-goals (YAGNI)

- Batch / multi-file upload.
- Deleting or renaming existing bucket files.
- Creating new project entries in `data/site.ts`.
- Any runtime use of Supabase by the site (it stays static-URL only).

## Flow

1. **Load credentials** via `node --env-file=.env.local` (Node v25 supports this; no
   `dotenv` dependency). Reads `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`. Exit with
   a clear message if either is missing.
2. **Validate inputs before any upload (fail fast):**
   - The path argument exists and ends in `.pdf`.
   - `<project-slug>` matches a project in `data/site.ts`. If not, print the list of
     valid slugs and exit non-zero.
3. **Derive the object name:** `slugify(basename-without-extension) + ".pdf"`, mirroring
   the `slugify` in `lib/utils.ts` (`toLowerCase`, `&`→`and`, non-alphanumerics→`-`, trim
   leading/trailing `-`). Produces clean names like `wr-blocking-effectiveness-framework.pdf`.
4. **Upload** the file bytes to the `project_papers` bucket with `upsert: true` and
   `contentType: "application/pdf"`. Re-running overwrites the same object rather than
   erroring.
5. **Get the public URL** from the SDK's `getPublicUrl` (authoritative — not hand-built).
6. **Edit `data/site.ts`** to set the matched project's `links.paper` to the new URL
   (see strategy below).
7. **Print a summary:** object name, public URL, and confirmation that `site.ts` was
   updated.

## `site.ts` edit strategy — TypeScript AST

`typescript` (5.9.3) is already a dependency, so the script edits via the AST rather than
regex:

- Parse `data/site.ts` into a source file.
- Find the object literal in the `projects` array whose `slug` string property equals the
  target slug (error if zero or more than one match).
- Locate its `links` property, then the `paper` string-literal node within.
  - If `paper` exists, splice the new URL into the string literal by exact source offsets.
  - If `links` exists but has no `paper` key, insert a `paper` property.
- Write the modified source back to `data/site.ts`.

Rationale: anchored regex can silently replace the wrong string when projects are
reordered or formatting changes; offset-based AST edits target the exact node. Trade-off
is ~40 lines vs ~15, acceptable because this edits source-of-truth data.

## Files touched

- **New:** `scripts/upload-paper.mjs`.
- **Modified:** `package.json` — add `"upload-paper": "node --env-file=.env.local scripts/upload-paper.mjs"` and `@supabase/supabase-js` under `devDependencies`.
- **Modified:** `.env.local` — add `SUPABASE_URL=` and `SUPABASE_SERVICE_ROLE_KEY=`
  placeholders for the user to fill in (already gitignored via `.env*`).

## Error handling

- Missing env var → explicit message naming the missing key.
- File not found or not `.pdf` → error, exit non-zero.
- Slug not found / multiple matches → error listing valid slugs.
- Supabase upload error → surface the SDK error message, exit non-zero.

## Security

The service-role key is a full-access secret. It lives only in `.env.local`, which is
covered by the existing `.env*` rule in `.gitignore`. The key is never printed and never
committed.
