# Design: Data Journalism resources popover

**Date:** 2026-07-24
**Status:** Approved

## Goal

Add a "View resources" button to the right of the hero text on the Data
Journalism page (`/journalism`). Clicking it opens a popover anchored beneath
the button with three links, each opening a PDF in a new tab:

- **Creating Graphics** → `bsa-creating-graphics.pdf`
- **Guidelines** → `data_journalism_guideline.pdf`
- **Example Timeline** → `dj_spring24_timeline.pdf`

The PDFs (currently in `public/assets/dj_resources/`) are uploaded to a new
public Supabase Storage bucket and served from there.

## Non-goals (YAGNI)

- A generic multi-bucket uploader.
- Download/click tracking.
- Editing the resource list from a UI.

## Storage

- New **public** bucket `dj_resources`.
- Uploaded object names are cleaned: `creating-graphics.pdf`, `guidelines.pdf`,
  `example-timeline.pdf`.
- `scripts/upload-dj-resources.mjs` performs the upload:
  - Loads `SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY` from `.env.local`
    (via `node --env-file`, same as `upload-paper`).
  - Creates the `dj_resources` bucket (public) if it does not exist.
  - Uploads the three known local files with `upsert: true` and
    `contentType: application/pdf`.
  - Prints each public URL.
  - Committed (not one-off) because the timeline is seasonal
    (`dj_spring24_timeline`) and will be re-uploaded.
- `public/assets/dj_resources/` is gitignored (files live in Storage), matching
  `public/assets/papers/`.

## Data

Add to `data/journalism.ts`:

```ts
export type DjResource = { label: string; href: string };
export const djResources: DjResource[] = [
  { label: "Creating Graphics", href: "<public url>/creating-graphics.pdf" },
  { label: "Guidelines",        href: "<public url>/guidelines.pdf" },
  { label: "Example Timeline",  href: "<public url>/example-timeline.pdf" },
];
```

Single source of truth; no URLs hardcoded in the component.

## UI

**`components/ViewResourcesButton.tsx`** (client component, + CSS module):
- Renders a `btn-secondary`-styled "View resources" button with a caret.
- Toggles a glass popover (matching `--glass-regular-fill` + backdrop-filter)
  anchored beneath the button, listing `djResources` as links.
- Each link: `target="_blank" rel="noopener noreferrer"`.
- Closes on outside click (document mousedown listener) and Esc keydown.
- Accessibility: button has `aria-haspopup="menu"` and `aria-expanded`; the
  popover is a labelled list of links.
- Accepts `resources: DjResource[]` as a prop so it stays data-driven and
  independently testable.

**`app/journalism/page.tsx`** (stays a server component):
- Hero becomes a flex row: the `h1` + `p` text block on the left,
  `<ViewResourcesButton resources={djResources} />` on the right.
- New styles in `app/journalism/page.module.css`: `.heroRow`
  (`display:flex; justify-content:space-between; align-items:flex-start;
  gap`), with the button stacking below the text on narrow viewports
  (wrap / column at a mobile breakpoint).

## Files

- **New:** `components/ViewResourcesButton.tsx`,
  `components/ViewResourcesButton.module.css`,
  `scripts/upload-dj-resources.mjs`.
- **Modified:** `app/journalism/page.tsx`, `app/journalism/page.module.css`,
  `data/journalism.ts`, `.gitignore`.

## Error handling (upload script)

- Missing env var → explicit message naming the missing key.
- Missing local PDF → error naming the file, exit non-zero.
- Bucket-create error other than "already exists" → surface and exit non-zero.
- Upload error → surface the SDK message, exit non-zero.

## Verification

- Run `scripts/upload-dj-resources.mjs`; confirm all three public URLs return
  HTTP 200 / `application/pdf`.
- `npm run lint` passes.
- Visual check: button sits to the right of the hero text; popover opens on
  click, closes on outside-click and Esc; links open the correct PDFs in a new
  tab; layout stacks cleanly on mobile.
