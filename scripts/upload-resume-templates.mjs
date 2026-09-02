#!/usr/bin/env node
// Upload resume templates to a public Supabase Storage bucket.
//
//   npm run upload-resume-templates
//
// Creates the `resume-templates` bucket (public) if it doesn't exist, uploads
// the known local PDF and TeX files from Downloads, and prints their public
// URLs. Re-runnable (upsert) for template updates.
//
// Requires SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (loaded from .env.local
// via the --env-file flag in the npm script).

import { readFile, stat } from "node:fs/promises";
import { createClient } from "@supabase/supabase-js";

const BUCKET = "resume-templates";

const FILES = [
  {
    local: "/Users/sampath/Downloads/Joe Bruin Resume Template 2.0.pdf",
    object: "joe-bruin-resume-template-2.0.pdf",
    contentType: "application/pdf"
  },
  {
    local: "/Users/sampath/Downloads/Joe Bruin Updated Resume 2.0.tex",
    object: "joe-bruin-updated-resume-2.0.tex",
    contentType: "application/x-tex"
  }
];

function fail(message) {
  console.error(`✖ ${message}`);
  process.exit(1);
}

async function main() {
  const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } = process.env;
  if (!SUPABASE_URL) fail("Missing SUPABASE_URL (set it in .env.local)");
  if (!SUPABASE_SERVICE_ROLE_KEY) fail("Missing SUPABASE_SERVICE_ROLE_KEY (set it in .env.local)");

  for (const file of FILES) {
    try {
      const fileStat = await stat(file.local);
      if (!fileStat.isFile()) fail(`Not a file: ${file.local}`);
    } catch {
      fail(`Missing local file: ${file.local}`);
    }
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

  const { error: createError } = await supabase.storage.createBucket(BUCKET, { public: true });
  if (createError && !/already exists/i.test(createError.message)) {
    fail(`Could not create bucket "${BUCKET}": ${createError.message}`);
  }
  console.log(createError ? `• Bucket "${BUCKET}" already exists.` : `✓ Created public bucket "${BUCKET}".`);

  for (const file of FILES) {
    const bytes = await readFile(file.local);
    const { error } = await supabase.storage.from(BUCKET).upload(file.object, bytes, {
      contentType: file.contentType,
      upsert: true
    });
    if (error) fail(`Upload failed for ${file.object}: ${error.message}`);

    const { data } = supabase.storage.from(BUCKET).getPublicUrl(file.object);
    console.log(`✓ ${file.object} -> ${data.publicUrl}`);
  }
}

main().catch((err) => fail(err.stack || String(err)));
