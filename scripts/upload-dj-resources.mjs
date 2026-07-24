#!/usr/bin/env node
// Upload the Data Journalism resource PDFs to a public Supabase Storage bucket.
//
//   npm run upload-dj-resources
//
// Creates the `dj_resources` bucket (public) if it doesn't exist, uploads the
// known local PDFs from public/assets/dj_resources with clean object names, and
// prints their public URLs. Re-runnable (upsert) for seasonal updates.
//
// Requires SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (loaded from .env.local
// via the --env-file flag in the npm script).

import { readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createClient } from "@supabase/supabase-js";

const BUCKET = "dj_resources";
const ASSET_DIR = resolve(fileURLToPath(new URL("../public/assets/dj_resources", import.meta.url)));

// local file -> object name in the bucket
const FILES = [
  { local: "bsa-creating-graphics.pdf", object: "creating-graphics.pdf" },
  { local: "data_journalism_guideline.pdf", object: "guidelines.pdf" },
  { local: "dj_spring24_timeline.pdf", object: "example-timeline.pdf" }
];

function fail(message) {
  console.error(`✖ ${message}`);
  process.exit(1);
}

async function main() {
  const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } = process.env;
  if (!SUPABASE_URL) fail("Missing SUPABASE_URL (set it in .env.local)");
  if (!SUPABASE_SERVICE_ROLE_KEY) fail("Missing SUPABASE_SERVICE_ROLE_KEY (set it in .env.local)");

  // Validate all local files up front.
  for (const f of FILES) {
    const path = resolve(ASSET_DIR, f.local);
    try {
      const s = await stat(path);
      if (!s.isFile()) fail(`Not a file: ${f.local}`);
    } catch {
      fail(`Missing local file: public/assets/dj_resources/${f.local}`);
    }
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

  // Create the bucket if it doesn't already exist.
  const { error: createError } = await supabase.storage.createBucket(BUCKET, { public: true });
  if (createError && !/already exists/i.test(createError.message)) {
    fail(`Could not create bucket "${BUCKET}": ${createError.message}`);
  }
  console.log(createError ? `• Bucket "${BUCKET}" already exists.` : `✓ Created public bucket "${BUCKET}".`);

  for (const f of FILES) {
    const bytes = await readFile(resolve(ASSET_DIR, f.local));
    const { error } = await supabase.storage.from(BUCKET).upload(f.object, bytes, {
      contentType: "application/pdf",
      upsert: true
    });
    if (error) fail(`Upload failed for ${f.object}: ${error.message}`);
    const { data } = supabase.storage.from(BUCKET).getPublicUrl(f.object);
    console.log(`✓ ${f.local}  →  ${data.publicUrl}`);
  }
}

main().catch((err) => fail(err.stack || String(err)));
