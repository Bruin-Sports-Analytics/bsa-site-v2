#!/usr/bin/env node
// Import Data Journalism article metadata, parsed content blocks, and local
// journalism assets into Supabase.
//
//   npm run migrate-journalism-to-supabase
//
// Requires SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY. The npm script loads
// them from .env.local.

import { mkdir, readFile, rm, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { createClient } from "@supabase/supabase-js";

const ROOT = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const ASSETS_DIR = path.join(ROOT, "public", "assets", "journalism");
const SCRATCH_DIR = path.join(ROOT, "scratch");
const PREVIEW_PATH = path.join(SCRATCH_DIR, "journalism-migration-import.json");
const BUCKET = "journalism-assets";
const BATCH_SIZE = 500;

function fail(message) {
  console.error(`✖ ${message}`);
  process.exit(1);
}

function runDryRunJsonExport() {
  return new Promise((resolve, reject) => {
    const child = spawn(
      process.execPath,
      ["scripts/dry-run-migrate-journalism.mjs", "--json-out", path.relative(ROOT, PREVIEW_PATH)],
      { cwd: ROOT, stdio: "inherit" }
    );
    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`dry-run-migrate-journalism exited with code ${code}`));
    });
  });
}

async function upsertBatch(supabase, table, rows, options = {}) {
  for (let index = 0; index < rows.length; index += BATCH_SIZE) {
    const batch = rows.slice(index, index + BATCH_SIZE);
    const { error } = await supabase.from(table).upsert(batch, options);
    if (error) fail(`Upsert failed for ${table}: ${error.message}`);
  }
}

async function insertBatch(supabase, table, rows) {
  for (let index = 0; index < rows.length; index += BATCH_SIZE) {
    const batch = rows.slice(index, index + BATCH_SIZE);
    const { error } = await supabase.from(table).insert(batch);
    if (error) fail(`Insert failed for ${table}: ${error.message}`);
  }
}

async function deleteByArticleIds(supabase, table, articleIds) {
  for (let index = 0; index < articleIds.length; index += BATCH_SIZE) {
    const ids = articleIds.slice(index, index + BATCH_SIZE);
    const { error } = await supabase.from(table).delete().in("article_id", ids);
    if (error) fail(`Delete failed for ${table}: ${error.message}`);
  }
}

async function fetchArticlesBySlug(supabase, slugs) {
  const articles = [];
  const slugBatchSize = 75;

  for (let index = 0; index < slugs.length; index += slugBatchSize) {
    const batch = slugs.slice(index, index + slugBatchSize);
    const { data, error } = await supabase
      .from("journalism_articles")
      .select("id, slug")
      .in("slug", batch);
    if (error) fail(`Could not fetch saved articles: ${error.message}`);
    articles.push(...(data || []));
  }

  return articles;
}

async function uploadAssets(supabase, assetRows) {
  const { error: createError } = await supabase.storage.createBucket(BUCKET, { public: true });
  if (createError && !/already exists/i.test(createError.message)) {
    fail(`Could not create bucket "${BUCKET}": ${createError.message}`);
  }

  console.log(createError ? `• Bucket "${BUCKET}" already exists.` : `✓ Created public bucket "${BUCKET}".`);

  for (let index = 0; index < assetRows.length; index++) {
    const asset = assetRows[index];
    const diskPath = path.join(ASSETS_DIR, asset.storage_path);
    const fileStat = await stat(diskPath);
    if (!fileStat.isFile()) fail(`Not a file: ${asset.local_path}`);

    const ext = path.extname(asset.storage_path).toLowerCase();
    const contentType =
      ext === ".png" ? "image/png"
        : ext === ".jpg" || ext === ".jpeg" ? "image/jpeg"
          : ext === ".gif" ? "image/gif"
            : ext === ".webp" ? "image/webp"
              : "application/octet-stream";

    const bytes = await readFile(diskPath);
    const { error } = await supabase.storage.from(BUCKET).upload(asset.storage_path, bytes, {
      contentType,
      upsert: true
    });
    if (error) fail(`Upload failed for ${asset.storage_path}: ${error.message}`);

    if ((index + 1) % 250 === 0 || index + 1 === assetRows.length) {
      console.log(`✓ Uploaded ${index + 1}/${assetRows.length} journalism assets`);
    }
  }
}

async function main() {
  const skipAssets = process.argv.includes("--skip-assets");
  const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } = process.env;
  if (!SUPABASE_URL) fail("Missing SUPABASE_URL (set it in .env.local)");
  if (!SUPABASE_SERVICE_ROLE_KEY) fail("Missing SUPABASE_SERVICE_ROLE_KEY (set it in .env.local)");

  await mkdir(SCRATCH_DIR, { recursive: true });
  await runDryRunJsonExport();

  const preview = JSON.parse(await readFile(PREVIEW_PATH, "utf8"));
  if (preview.counts.duplicate_slugs > 0) fail("Duplicate article slugs found; fix before importing.");
  if (preview.counts.missing_content_files > 0) fail("Missing content files found; fix before importing.");

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: { persistSession: false, autoRefreshToken: false }
  });

  const { error: schemaCheckError } = await supabase
    .from("journalism_articles")
    .select("id", { head: true, count: "exact" })
    .limit(1);
  if (schemaCheckError) {
    fail(
      `Journalism tables are not available in Supabase yet: ${schemaCheckError.message}\n` +
        "Apply supabase/migrations/20260905000000_create_journalism_tables.sql with Supabase MCP execute_sql/apply_migration or the Supabase SQL editor, then re-run this script."
    );
  }

  if (skipAssets) {
    console.log("• Skipping asset uploads.");
  } else {
    await uploadAssets(supabase, preview.asset_rows);
  }

  const articleRows = preview.articles.map((article) => ({
    slug: article.slug,
    title: article.title,
    summary: article.summary,
    sport: article.sport,
    published_on: article.published_on,
    date_label: article.date_label,
    year: article.year,
    read_time_minutes: article.read_time_minutes,
    paper_url: article.paper_url,
    featured: article.featured,
    is_published: article.is_published,
    sort_order: article.sort_order,
    source_content_file: article.source_content_file,
    raw_metadata: { metadata_images: article.metadata_images },
    updated_at: new Date().toISOString()
  }));

  await upsertBatch(supabase, "journalism_articles", articleRows, { onConflict: "slug" });

  const savedArticles = await fetchArticlesBySlug(
    supabase,
    preview.articles.map((article) => article.slug)
  );

  const articleIdBySlug = new Map(savedArticles.map((article) => [article.slug, article.id]));
  const articleIds = savedArticles.map((article) => article.id);

  await deleteByArticleIds(supabase, "journalism_article_authors", articleIds);
  await deleteByArticleIds(supabase, "journalism_article_blocks", articleIds);
  await deleteByArticleIds(supabase, "journalism_article_assets", articleIds);

  const authorRows = [];
  const blockRows = [];
  const assetRows = [];

  for (const article of preview.articles) {
    const articleId = articleIdBySlug.get(article.slug);
    if (!articleId) fail(`Missing saved article id for ${article.slug}`);

    for (const author of article.authors) {
      authorRows.push({ article_id: articleId, position: author.position, name: author.name });
    }

    for (const block of article.blocks) {
      blockRows.push({ article_id: articleId, position: block.position, block: block.block });
    }

    for (const image of article.metadata_images) {
      const storagePath = image.src?.startsWith("https://")
        ? decodeURIComponent(new URL(image.src).pathname.split(`/${BUCKET}/`)[1] || "")
        : image.src?.replace(/^\/assets\/journalism\//, "");
      if (!storagePath) continue;
      assetRows.push({
        article_id: articleId,
        local_path: image.src?.startsWith("https://") ? null : image.src,
        storage_bucket: BUCKET,
        storage_path: storagePath,
        public_url: image.src,
        alt: image.alt || null,
        caption: image.caption || null,
        position: image.position
      });
    }
  }

  await insertBatch(supabase, "journalism_article_authors", authorRows);
  await insertBatch(supabase, "journalism_article_blocks", blockRows);
  await upsertBatch(supabase, "journalism_article_assets", assetRows, {
    onConflict: "storage_bucket,storage_path"
  });

  const unassignedAssetRows = preview.asset_rows.map((asset) => ({
    article_id: null,
    local_path: asset.local_path,
    storage_bucket: asset.storage_bucket,
    storage_path: asset.storage_path,
    public_url: asset.public_url,
    alt: null,
    caption: null,
    position: null
  }));
  await upsertBatch(supabase, "journalism_article_assets", unassignedAssetRows, {
    onConflict: "storage_bucket,storage_path",
    ignoreDuplicates: true
  });

  const { count, error: countError } = await supabase
    .from("journalism_articles")
    .select("*", { count: "exact", head: true });
  if (countError) fail(`Could not verify article count: ${countError.message}`);

  if (existsSync(PREVIEW_PATH)) await rm(PREVIEW_PATH);

  console.log(`✓ Imported ${preview.counts.articles} articles, ${authorRows.length} authors, ${blockRows.length} blocks.`);
  console.log(`✓ Verified journalism_articles row count: ${count}`);
}

main().catch((error) => fail(error.stack || String(error)));
