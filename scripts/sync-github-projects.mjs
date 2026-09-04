/**
 * scripts/sync-github-projects.mjs
 *
 * Fetches all public repos from the Bruin Sports Analytics GitHub org and:
 *   1. Patches `links.github` into existing projects in data/site.ts that
 *      have a matching repo (by slug or known name mapping).
 *   2. Prints stub entries for repos that don't yet exist in site.ts so
 *      you can review and add them manually.
 *
 * Usage:
 *   node scripts/sync-github-projects.mjs
 *   node scripts/sync-github-projects.mjs --dry-run   # preview without writing
 *
 * Optional env:
 *   GITHUB_TOKEN=ghp_xxx   Raises API rate limit from 60 → 5000 req/hr
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_TS = path.join(__dirname, "../data/site.ts");
const ORG = "Bruin-Sports-Analytics";
const DRY_RUN = process.argv.includes("--dry-run");

// ─── Repos to always skip (infra / site / meta) ───────────────────────────
const SKIP_REPOS = new Set([
  "bsa-site-v2",
  "bsa-site",
  ".github",
]);

// ─── Manual slug overrides ─────────────────────────────────────────────────
// Maps GitHub repo name → existing project slug in site.ts.
// null = not in site.ts yet (will be shown as a new stub).
const SLUG_OVERRIDES = {
  "nfl-ot-4th-down-model":                  "nfl-ot-4th-down-decision-engine",
  "qb-optimality":                           "qb-pocket-clutch-ratings",
  "UCLA-WBB-RAG-Development-Spring-2025":    null,
  "NBA-Fantasy-Points-Research-Fall-2025":   null,
  "BTC-Computer-Vision-Tagger-Winter-2026":  null,
  "NBA-What-If-Analysis-Spring-2026":        null,
  "nflpa_24":                                null,
};

// ─── Fetch all repos from the org (handles pagination) ────────────────────
async function fetchRepos() {
  const headers = { "User-Agent": "bsa-site-sync" };
  if (process.env.GITHUB_TOKEN) {
    headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  const repos = [];
  let page = 1;
  while (true) {
    const url = `https://api.github.com/orgs/${ORG}/repos?per_page=100&sort=updated&page=${page}`;
    const res = await fetch(url, { headers });
    if (!res.ok) throw new Error(`GitHub API ${res.status}: ${await res.text()}`);
    const batch = await res.json();
    if (!batch.length) break;
    repos.push(...batch);
    if (batch.length < 100) break;
    page++;
  }
  return repos;
}

// ─── Slugify a repo name ──────────────────────────────────────────────────
function repoToSlug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

// ─── Extract existing project slugs from site.ts ─────────────────────────
function extractExistingSlugs(content) {
  const slugs = new Set();
  for (const m of content.matchAll(/slug:\s*"([^"]+)"/g)) slugs.add(m[1]);
  return slugs;
}

// ─── Extract existing github links (slug → url) ───────────────────────────
function extractExistingGithubLinks(content) {
  const map = new Map();
  for (const m of content.matchAll(/slug:\s*"([^"]+)"[\s\S]*?links:\s*\{([^}]*)\}/g)) {
    const gh = m[2].match(/github:\s*"([^"]+)"/);
    if (gh) map.set(m[1], gh[1]);
  }
  return map;
}

// ─── Patch links.github into site.ts for a given project slug ────────────
function patchGithubLink(content, slug, githubUrl) {
  const re = new RegExp(
    `(slug:\\s*"${slug}"[\\s\\S]*?links:\\s*\\{)([^}]*)(\\})`, "m"
  );
  const match = content.match(re);
  if (!match) return { content, changed: false };
  if (match[2].includes("github:")) return { content, changed: false };
  const body = match[2].trimEnd().replace(/,?\s*$/, "");
  return {
    content: content.replace(re, `$1${body}, github: "${githubUrl}" $3`),
    changed: true,
  };
}

// ─── Build a stub entry for an unrecognized repo ─────────────────────────
function buildStub(repo) {
  const pushed = (repo.pushed_at ?? new Date().toISOString()).split("T")[0];
  const lang = repo.language ?? "Python";
  return [
    `  // ⚠️  NEW — fill in TODOs and move into the projects array`,
    `  // {`,
    `  //   title: "${repo.name.replace(/-|_/g, " ")}",`,
    `  //   slug: "${repoToSlug(repo.name)}",`,
    `  //   sport: "TODO", // baseball|basketball|football|tennis|volleyball|other`,
    `  //   projectType: "TODO", // Research | Tool | Consulting`,
    `  //   status: "Active",`,
    `  //   academicYear: "TODO", // e.g. "2025-26"`,
    `  //   summary: "${(repo.description ?? "TODO").replace(/"/g, '\\"')}",`,
    `  //   problem: "TODO",`,
    `  //   approach: "TODO",`,
    `  //   result: "TODO",`,
    `  //   members: [],`,
    `  //   techStack: ["${lang}"],`,
    `  //   links: { github: "${repo.html_url}" },`,
    `  //   visibility: "public",`,
    `  //   featured: false,`,
    `  //   lastUpdated: "${pushed}"`,
    `  // },`,
  ].join("\n");
}

// ─── Main ─────────────────────────────────────────────────────────────────
async function main() {
  console.log(`\n🔄  Fetching repos from github.com/${ORG}…`);
  const repos = await fetchRepos();
  console.log(`   Found ${repos.length} total repos\n`);

  let content = fs.readFileSync(SITE_TS, "utf8");
  const existingSlugs = extractExistingSlugs(content);
  const existingGithubLinks = extractExistingGithubLinks(content);

  const patched = [];
  const alreadyLinked = [];
  const newRepos = [];
  const skipped = [];

  for (const repo of repos) {
    if (repo.private || repo.archived || repo.fork) {
      skipped.push(`${repo.name} (private/archived/fork)`); continue;
    }
    if (SKIP_REPOS.has(repo.name)) {
      skipped.push(`${repo.name} (infra)`); continue;
    }

    let targetSlug;
    if (Object.prototype.hasOwnProperty.call(SLUG_OVERRIDES, repo.name)) {
      targetSlug = SLUG_OVERRIDES[repo.name];
    } else {
      const candidate = repoToSlug(repo.name);
      targetSlug = existingSlugs.has(candidate) ? candidate : null;
    }

    if (!targetSlug || !existingSlugs.has(targetSlug)) {
      newRepos.push(repo); continue;
    }

    if (existingGithubLinks.has(targetSlug)) {
      alreadyLinked.push(`${repo.name} → ${targetSlug}`); continue;
    }

    const result = patchGithubLink(content, targetSlug, repo.html_url);
    if (result.changed) { content = result.content; patched.push(`${repo.name} → ${targetSlug}`); }
  }

  if (!DRY_RUN && patched.length > 0) {
    fs.writeFileSync(SITE_TS, content, "utf8");
    console.log(`💾  Wrote ${patched.length} github link(s) to data/site.ts`);
  }

  console.log("✅  Matched to existing projects:");
  if (alreadyLinked.length === 0 && patched.length === 0) console.log("   (none)");
  for (const p of alreadyLinked) console.log(`   ⏭  Already linked: ${p}`);
  for (const p of patched) console.log(`   ${DRY_RUN ? "[DRY RUN] " : ""}🔗  Patched: ${p}`);

  if (newRepos.length > 0) {
    console.log(`\n🆕  ${newRepos.length} new repos not yet in site.ts:\n`);
    for (const r of newRepos) {
      console.log(`   📦  ${r.name}`);
      console.log(`       ${r.html_url}`);
      console.log(`       ${r.description ?? "(no description)"}`);
      console.log(`       ${r.language ?? "?"} · pushed ${r.pushed_at?.split("T")[0]}`);
      console.log();
    }
    console.log("─── Stub entries (copy into data/site.ts, fill TODOs) ───\n");
    for (const r of newRepos) { console.log(buildStub(r)); console.log(); }
  }

  if (skipped.length) console.log(`\n⏭  Skipped: ${skipped.join(", ")}`);
  console.log(`\nDone. ${patched.length} patched · ${alreadyLinked.length} already linked · ${newRepos.length} new.\n`);
}

main().catch((err) => { console.error("❌ ", err.message); process.exit(1); });
