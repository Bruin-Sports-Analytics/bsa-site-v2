#!/usr/bin/env node
// Dry-run the local Data Journalism migration to Supabase.
//
//   npm run dry-run-migrate-journalism
//   npm run dry-run-migrate-journalism -- --json-out scratch/journalism-migration-preview.json
//
// This does not connect to Supabase or write files unless --json-out is passed.

import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const SUMMARY_FILE = path.join(ROOT, "data", "journalismSummaries.ts");
const CONTENT_DIR = path.join(ROOT, "content", "journalism");
const ASSETS_DIR = path.join(ROOT, "public", "assets", "journalism");
const STORAGE_BASE =
  "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/journalism-assets";

function slugify(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function parseDate(value) {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return null;
  return parsed.toISOString().slice(0, 10);
}

function extractJsonArray(source) {
  const marker = "export const articleSummaries";
  const markerIndex = source.indexOf(marker);
  if (markerIndex === -1) {
    throw new Error("Could not find articleSummaries export.");
  }

  const assignmentIndex = source.indexOf("=", markerIndex);
  const arrayStart = source.indexOf("[", assignmentIndex);
  const arrayEnd = source.lastIndexOf("];");
  if (assignmentIndex === -1 || arrayStart === -1 || arrayEnd === -1 || arrayEnd <= arrayStart) {
    throw new Error("Could not locate articleSummaries array bounds.");
  }

  return JSON.parse(source.slice(arrayStart, arrayEnd + 1));
}

function parseMarkdownToBlocks(rawMd) {
  const lines = rawMd.split("\n");
  const blocks = [];
  let currentList = null;
  let currentTable = null;
  let currentParagraph = [];

  const flushParagraph = () => {
    if (!currentParagraph.length) return;
    const text = currentParagraph.join(" ").trim();
    if (text) blocks.push({ type: "paragraph", text });
    currentParagraph = [];
  };

  const flushList = () => {
    if (!currentList) return;
    blocks.push({ type: "list", ordered: currentList.ordered, items: currentList.items });
    currentList = null;
  };

  const flushTable = () => {
    if (!currentTable || !currentTable.headers.length) return;
    blocks.push({ type: "table", columns: currentTable.headers, rows: currentTable.rows });
    currentTable = null;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (!line) {
      flushParagraph();
      flushList();
      flushTable();
      continue;
    }

    const imgMatch = line.match(/^!\[(.*?)\]\((.*?)\)$/);
    if (imgMatch) {
      flushParagraph();
      flushList();
      flushTable();
      blocks.push({
        type: "image",
        src: imgMatch[2],
        alt: imgMatch[1] || "Figure",
        caption: imgMatch[1] || undefined,
        width: 1200,
        height: 700
      });
      continue;
    }

    if (
      /^(by:|written\s+by:|authors?:|published:|subscribe\b)/i.test(line) ||
      /^(\*\*|\*)(by:|written\s+by:|authors?:)/i.test(line)
    ) {
      continue;
    }

    const headingPrefixMatch = line.match(/^#{1,6}\s+(.*)$/);
    if (headingPrefixMatch) {
      const headingText = headingPrefixMatch[1].trim();
      if (/^(by:|written\s+by:|authors?:|published:|subscribe\b)/i.test(headingText)) {
        continue;
      }
      if (/^by\s+/i.test(headingText)) {
        const rest = headingText.slice(3).trim();
        if (!/^(age|position|year|sport|team|tier|category|conference|round|metric|season|decade|country|player\s+type)\b/i.test(rest)) {
          continue;
        }
      }
    }

    if (i <= 6) {
      const clean = line.replace(/^(\*\*|\*)|(\*\*|\*)$/g, "").trim();
      if (/^by\s+[A-Z]/i.test(clean)) {
        const rest = clean.slice(3).trim();
        if (!/^(the|this|a|an|studying|analyzing|comparing|using|calculating|examining|looking|virtue|isolating|contrast|understanding|taking|plotting|measuring|evaluating|determining|diving)\b/i.test(rest)) {
          if (!/^(age|position|year|sport|team|tier|category|conference|round|metric|season)\b/i.test(rest)) {
            continue;
          }
        }
      }
    }

    if (line.startsWith("### ")) {
      flushParagraph();
      flushList();
      flushTable();
      blocks.push({ type: "heading", level: 3, text: line.slice(4).trim().replace(/^\*\*|\*\*$/g, "").trim() });
      continue;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      flushList();
      flushTable();
      blocks.push({ type: "heading", level: 2, text: line.slice(3).trim().replace(/^\*\*|\*\*$/g, "").trim() });
      continue;
    }

    if (line.startsWith("# ")) {
      flushParagraph();
      flushList();
      flushTable();
      blocks.push({ type: "heading", level: 2, text: line.slice(2).trim().replace(/^\*\*|\*\*$/g, "").trim() });
      continue;
    }

    if (line.startsWith("> ")) {
      flushParagraph();
      flushList();
      flushTable();
      blocks.push({ type: "blockquote", text: line.slice(2).trim() });
      continue;
    }

    if (line.startsWith("- ") || line.startsWith("* ")) {
      flushParagraph();
      flushTable();
      if (!currentList || currentList.ordered) {
        flushList();
        currentList = { ordered: false, items: [] };
      }
      currentList.items.push(line.slice(2).trim());
      continue;
    }

    const olMatch = line.match(/^(\d+)\.\s+(.*)$/);
    if (olMatch) {
      flushParagraph();
      flushTable();
      if (!currentList || !currentList.ordered) {
        flushList();
        currentList = { ordered: true, items: [] };
      }
      currentList.items.push(olMatch[2].trim());
      continue;
    }

    if (line.startsWith("|") && line.endsWith("|")) {
      flushParagraph();
      flushList();
      const cells = line.slice(1, -1).split("|").map((cell) => cell.trim());
      if (cells.every((cell) => /^---+$/.test(cell))) continue;
      if (!currentTable) {
        currentTable = { headers: cells.map((cell) => cell.replace(/^\*\*|\*\*$/g, "").trim()), rows: [] };
      } else {
        currentTable.rows.push(cells);
      }
      continue;
    }

    currentParagraph.push(line);
  }

  flushParagraph();
  flushList();
  flushTable();
  return blocks;
}

function toStorageUrl(localSrc) {
  if (!localSrc?.startsWith("/assets/journalism/")) return localSrc;
  return `${STORAGE_BASE}/${localSrc.replace(/^\/assets\/journalism\//, "")}`;
}

async function readArticleBlocks(article) {
  if (Array.isArray(article.content) && article.content.length) {
    return article.content.map((block) => block.type === "image" ? { ...block, src: toStorageUrl(block.src) } : block);
  }
  if (!article.contentFile) return { blocks: [], missingContent: true };

  const mdPath = path.join(CONTENT_DIR, article.contentFile.replace(/\.txt$/, ".md"));
  const txtPath = path.join(CONTENT_DIR, article.contentFile);
  const targetPath = existsSync(mdPath) ? mdPath : txtPath;
  if (!existsSync(targetPath)) return { blocks: [], missingContent: true };

  const raw = await readFile(targetPath, "utf8");
  const blocks = parseMarkdownToBlocks(raw).map((block) => (
    block.type === "image" ? { ...block, src: toStorageUrl(block.src) } : block
  ));
  return { blocks, missingContent: false };
}

async function listFilesRecursive(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await listFilesRecursive(fullPath));
    } else if (entry.isFile()) {
      files.push(fullPath);
    }
  }
  return files;
}

function parseArgs() {
  const args = process.argv.slice(2);
  const jsonOutIndex = args.indexOf("--json-out");
  return {
    jsonOut: jsonOutIndex === -1 ? null : args[jsonOutIndex + 1] || null
  };
}

async function main() {
  const { jsonOut } = parseArgs();
  const summaries = extractJsonArray(await readFile(SUMMARY_FILE, "utf8"));
  const assetFiles = await listFilesRecursive(ASSETS_DIR);
  const articles = [];
  const slugCounts = new Map();
  const missingContent = [];
  const blockCounts = new Map();
  let referencedImages = 0;

  for (let i = 0; i < summaries.length; i++) {
    const article = summaries[i];
    const slug = slugify(article.title);
    slugCounts.set(slug, (slugCounts.get(slug) || 0) + 1);

    const result = await readArticleBlocks(article);
    const blocks = Array.isArray(result) ? result : result.blocks;
    if (!Array.isArray(result) && result.missingContent) {
      missingContent.push({ slug, contentFile: article.contentFile || null });
    }

    for (const block of blocks) {
      blockCounts.set(block.type, (blockCounts.get(block.type) || 0) + 1);
      if (block.type === "image") referencedImages++;
    }

    const metadataImages = (article.images || []).map((image, position) => ({
      ...image,
      src: toStorageUrl(image.src),
      position
    }));

    articles.push({
      slug,
      title: article.title,
      summary: article.summary || null,
      sport: article.sport,
      published_on: parseDate(article.date),
      date_label: article.date,
      year: article.year || null,
      read_time_minutes: article.readTime || 0,
      paper_url: article.paperUrl || null,
      featured: Boolean(article.featured),
      is_published: true,
      sort_order: i,
      source_content_file: article.contentFile || null,
      authors: (article.authors || []).map((name, position) => ({ name, position })),
      blocks: blocks.map((block, position) => ({ position, block })),
      metadata_images: metadataImages
    });
  }

  const duplicateSlugs = Array.from(slugCounts.entries())
    .filter(([, count]) => count > 1)
    .map(([slug, count]) => ({ slug, count }));

  const assetRows = await Promise.all(assetFiles.map(async (file) => {
    const relativePath = path.relative(ASSETS_DIR, file);
    const fileStat = await stat(file);
    return {
      local_path: `/assets/journalism/${relativePath}`,
      storage_bucket: "journalism-assets",
      storage_path: relativePath,
      public_url: `${STORAGE_BASE}/${relativePath}`,
      bytes: fileStat.size
    };
  }));

  const preview = {
    generated_at: new Date().toISOString(),
    counts: {
      articles: articles.length,
      authors: articles.reduce((sum, article) => sum + article.authors.length, 0),
      blocks: articles.reduce((sum, article) => sum + article.blocks.length, 0),
      metadata_images: articles.reduce((sum, article) => sum + article.metadata_images.length, 0),
      referenced_markdown_images: referencedImages,
      storage_assets: assetRows.length,
      duplicate_slugs: duplicateSlugs.length,
      missing_content_files: missingContent.length
    },
    block_counts: Object.fromEntries(Array.from(blockCounts.entries()).sort(([a], [b]) => a.localeCompare(b))),
    duplicate_slugs: duplicateSlugs,
    missing_content_files: missingContent,
    sample_articles: articles.slice(0, 3).map((article) => ({
      slug: article.slug,
      title: article.title,
      authors: article.authors.length,
      blocks: article.blocks.length,
      metadata_images: article.metadata_images.length
    })),
    articles,
    asset_rows: assetRows
  };

  if (jsonOut) {
    const outPath = path.resolve(ROOT, jsonOut);
    await writeFile(outPath, `${JSON.stringify(preview, null, 2)}\n`);
  }

  console.log("Data Journalism Supabase migration dry run");
  console.log(`articles: ${preview.counts.articles}`);
  console.log(`authors: ${preview.counts.authors}`);
  console.log(`blocks: ${preview.counts.blocks}`);
  console.log(`metadata images: ${preview.counts.metadata_images}`);
  console.log(`markdown image blocks: ${preview.counts.referenced_markdown_images}`);
  console.log(`storage assets: ${preview.counts.storage_assets}`);
  console.log(`duplicate slugs: ${preview.counts.duplicate_slugs}`);
  console.log(`missing content files: ${preview.counts.missing_content_files}`);
  console.log(`block types: ${JSON.stringify(preview.block_counts)}`);
  if (jsonOut) console.log(`json preview: ${jsonOut}`);
}

main().catch((error) => {
  console.error(error.stack || String(error));
  process.exit(1);
});
