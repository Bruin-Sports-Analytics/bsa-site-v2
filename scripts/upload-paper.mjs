#!/usr/bin/env node
// Upload a project paper PDF to Supabase Storage and wire its public URL into
// data/site.ts.
//
//   npm run upload-paper -- <project-slug> <path/to/paper.pdf>
//
// Requires SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (loaded from .env.local
// via the --env-file flag in the npm script).

import { readFile, writeFile, stat } from "node:fs/promises";
import { basename, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createClient } from "@supabase/supabase-js";
import { setProjectPaper, slugifyFilename } from "./lib/update-site-paper.mjs";

const BUCKET = "project_papers";
const SITE_DATA = resolve(fileURLToPath(new URL("../data/site.ts", import.meta.url)));

function fail(message) {
  console.error(`✖ ${message}`);
  process.exit(1);
}

async function main() {
  const [slug, pdfPath] = process.argv.slice(2);

  if (!slug || !pdfPath) {
    fail("Usage: npm run upload-paper -- <project-slug> <path/to/paper.pdf>");
  }

  const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } = process.env;
  if (!SUPABASE_URL) fail("Missing SUPABASE_URL (set it in .env.local)");
  if (!SUPABASE_SERVICE_ROLE_KEY) fail("Missing SUPABASE_SERVICE_ROLE_KEY (set it in .env.local)");

  // Validate the PDF path up front.
  const absPdf = resolve(process.cwd(), pdfPath);
  let fileStat;
  try {
    fileStat = await stat(absPdf);
  } catch {
    fail(`File not found: ${pdfPath}`);
  }
  if (!fileStat.isFile()) fail(`Not a file: ${pdfPath}`);
  if (!/\.pdf$/i.test(absPdf)) fail(`Expected a .pdf file, got: ${pdfPath}`);

  // Validate the slug against site.ts *before* uploading, using a dry edit so a
  // typo fails fast without touching storage.
  const siteSource = await readFile(SITE_DATA, "utf8");
  let updatedSource;
  const objectName = slugifyFilename(basename(absPdf));
  const publicUrlPreview = `${SUPABASE_URL.replace(/\/$/, "")}/storage/v1/object/public/${BUCKET}/${objectName}`;
  try {
    updatedSource = setProjectPaper(siteSource, slug, publicUrlPreview);
  } catch (err) {
    fail(err.message);
  }

  // Upload.
  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
  const bytes = await readFile(absPdf);
  console.log(`↑ Uploading ${basename(absPdf)} → ${BUCKET}/${objectName} …`);
  const { error: uploadError } = await supabase.storage.from(BUCKET).upload(objectName, bytes, {
    contentType: "application/pdf",
    upsert: true
  });
  if (uploadError) fail(`Upload failed: ${uploadError.message}`);

  // Use the SDK's authoritative public URL, then re-apply the edit with it in
  // case it differs from the preview.
  const { data: urlData } = supabase.storage.from(BUCKET).getPublicUrl(objectName);
  const publicUrl = urlData.publicUrl;
  if (publicUrl !== publicUrlPreview) {
    updatedSource = setProjectPaper(siteSource, slug, publicUrl);
  }

  await writeFile(SITE_DATA, updatedSource);

  console.log("✓ Done.");
  console.log(`  object:  ${BUCKET}/${objectName}`);
  console.log(`  url:     ${publicUrl}`);
  console.log(`  site.ts: set links.paper for "${slug}"`);
}

main().catch((err) => fail(err.stack || String(err)));
