#!/usr/bin/env node
// Upload the Data Journalism archived-article PDFs to a public Supabase
// Storage bucket.
//
//   npm run upload-dj-archive
//
// Creates the `dj_archive` bucket (public) if it doesn't exist, uploads every
// PDF in public/assets/dj_archive to the bucket using the local filename as
// the object name (upsert), and prints their public URLs. Re-runnable — re-run
// after dropping a new PDF into the folder to sync it to Supabase.
//
// Object names keep the on-disk filename (e.g. "alex_zverev.pdf") to match the
// public URLs already hardcoded in data/journalism.ts.
//
// Requires SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (loaded from .env.local
// via the --env-file flag in the npm script).

import { readFile, readdir, stat } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createClient } from "@supabase/supabase-js";

const BUCKET = "dj_archive";
const ASSET_DIR = resolve(fileURLToPath(new URL("../public/assets/dj_archive", import.meta.url)));

function fail(message) {
  console.error(`✖ ${message}`);
  process.exit(1);
}

async function listPdfs() {
  const entries = await readdir(ASSET_DIR);
  return entries.filter((name) => /\.pdf$/i.test(name)).sort();
}

async function main() {
  const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } = process.env;
  if (!SUPABASE_URL) fail("Missing SUPABASE_URL (set it in .env.local)");
  if (!SUPABASE_SERVICE_ROLE_KEY) fail("Missing SUPABASE_SERVICE_ROLE_KEY (set it in .env.local)");

  const pdfs = await listPdfs();
  if (!pdfs.length) fail(`No PDFs found in public/assets/dj_archive`);

  // Make sure each entry is a regular file before uploading anything.
  for (const name of pdfs) {
    const s = await stat(resolve(ASSET_DIR, name));
    if (!s.isFile()) fail(`Not a file: ${name}`);
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

  // Create the bucket if it doesn't already exist.
  const { error: createError } = await supabase.storage.createBucket(BUCKET, { public: true });
  if (createError && !/already exists/i.test(createError.message)) {
    fail(`Could not create bucket "${BUCKET}": ${createError.message}`);
  }
  console.log(createError ? `• Bucket "${BUCKET}" already exists.` : `✓ Created public bucket "${BUCKET}".`);

  for (const name of pdfs) {
    const bytes = await readFile(resolve(ASSET_DIR, name));
    const { error } = await supabase.storage.from(BUCKET).upload(name, bytes, {
      contentType: "application/pdf",
      upsert: true
    });
    if (error) fail(`Upload failed for ${name}: ${error.message}`);
    const { data } = supabase.storage.from(BUCKET).getPublicUrl(name);
    console.log(`✓ ${name}  →  ${data.publicUrl}`);
  }
}

main().catch((err) => fail(err.stack || String(err)));
