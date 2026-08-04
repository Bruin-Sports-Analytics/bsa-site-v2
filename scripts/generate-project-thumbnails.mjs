import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const siteSource = path.join(repoRoot, "data", "site.ts");
const outputDir = path.join(repoRoot, "public", "assets", "project-thumbnails");
const tempDir = path.join(repoRoot, ".tmp", "project-thumbnails");
const pdfToPpm = process.env.PDFTOPPM ?? "pdftoppm";
const maxPages = Number(process.env.THUMBNAIL_MAX_PAGES ?? 20);
const minGraphScore = Number(process.env.THUMBNAIL_MIN_GRAPH_SCORE ?? 0.2);

const source = fs.readFileSync(siteSource, "utf8");
const projectRegex = /title:\s*"([^"]+)"[\s\S]*?slug:\s*"([^"]+)"[\s\S]*?links:\s*\{\s*paper:\s*"([^"]+)"/g;

const projects = [];
for (const match of source.matchAll(projectRegex)) {
  const [, title, slug, paper] = match;
  projects.push({ title, slug, paper });
}

if (!projects.length) {
  throw new Error("No project papers found in data/site.ts");
}

fs.rmSync(outputDir, { recursive: true, force: true });
fs.rmSync(tempDir, { recursive: true, force: true });
fs.mkdirSync(outputDir, { recursive: true });
fs.mkdirSync(tempDir, { recursive: true });

function scoreImage(imagePath) {
  const script = `
from PIL import Image, ImageFilter, ImageStat
import sys

path = sys.argv[1]
img = Image.open(path).convert("RGB")
if img.width > 1100:
    new_height = max(1, round(img.height * (1100 / img.width)))
    img = img.resize((1100, new_height))
gray = img.convert("L")
hist = gray.histogram()
total = gray.width * gray.height
nonwhite = sum(hist[:245]) / total
edges = gray.filter(ImageFilter.FIND_EDGES)
edge_mean = ImageStat.Stat(edges).mean[0] / 255
color_std = sum(ImageStat.Stat(img).stddev) / (3 * 128)
score = (edge_mean * 2.2) + (color_std * 1.4) + (nonwhite * 0.5)
print(score)
`;

  const result = spawnSync("python3", ["-c", script, imagePath], { encoding: "utf8" });
  if (result.status !== 0) {
    throw new Error(result.stderr || `Failed to score ${imagePath}`);
  }
  return Number.parseFloat(result.stdout.trim()) || 0;
}

function countWords(pdfPath, pageNumber) {
  const result = spawnSync(
    "pdftotext",
    ["-f", String(pageNumber), "-l", String(pageNumber), "-layout", pdfPath, "-"],
    { encoding: "utf8" }
  );

  if (result.status !== 0) {
    throw new Error(result.stderr || `Failed to extract text from page ${pageNumber}`);
  }

  const text = result.stdout.trim();
  const words = text.match(/\b[\w'%.-]+\b/g) ?? [];
  return words.length;
}

function getPageCount(pdfPath) {
  const result = spawnSync("pdfinfo", [pdfPath], { encoding: "utf8" });
  if (result.status !== 0) {
    throw new Error(result.stderr || `Failed to read pdf metadata for ${pdfPath}`);
  }

  const match = result.stdout.match(/^Pages:\s+(\d+)/m);
  return Number.parseInt(match?.[1] ?? "0", 10);
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ acceptDownloads: true });
page.setDefaultTimeout(120000);
page.setDefaultNavigationTimeout(120000);

try {
  for (const project of projects) {
    const pdfPath = path.join(tempDir, `${project.slug}.pdf`);
    const candidateBase = path.join(tempDir, project.slug);
    const finalPath = path.join(outputDir, `${project.slug}.png`);
    const downloadPromise = page.waitForEvent("download");

    await page.goto(project.paper, { waitUntil: "domcontentloaded" }).catch(() => {});
    const download = await downloadPromise;
    await download.saveAs(pdfPath);

    const pageCount = getPageCount(pdfPath);
    const pagesToScan = Math.max(1, Math.min(maxPages, pageCount));

    const render = spawnSync(pdfToPpm, ["-png", "-f", "1", "-l", String(pagesToScan), pdfPath, candidateBase], {
      stdio: "inherit"
    });

    if (render.status !== 0) {
      throw new Error(`pdftoppm failed for ${project.slug}`);
    }

    const candidates = fs
      .readdirSync(tempDir)
      .filter((name) => name.startsWith(`${project.slug}-`) && name.endsWith(".png"))
      .map((name) => ({
        name,
        page: Number.parseInt(name.match(/-(\d+)\.png$/)?.[1] ?? "1", 10),
        path: path.join(tempDir, name)
      }))
      .sort((a, b) => a.page - b.page);

    if (!candidates.length) {
      throw new Error(`No rendered pages found for ${project.slug}`);
    }

    let best = candidates[0];
    let bestScore = -Infinity;
    let eligibleCount = 0;
    for (const candidate of candidates) {
      const graphScore = scoreImage(candidate.path);
      if (graphScore < minGraphScore) continue;
      eligibleCount += 1;
      const words = countWords(pdfPath, candidate.page);
      const score = (graphScore * 3) - (words / 260);
      if (score > bestScore) {
        best = candidate;
        bestScore = score;
      }
    }

    if (eligibleCount === 0) {
      bestScore = -Infinity;
      for (const candidate of candidates) {
        const words = countWords(pdfPath, candidate.page);
        const score = (scoreImage(candidate.path) * 3) - (words / 260);
        if (score > bestScore) {
          best = candidate;
          bestScore = score;
        }
      }
    }

    fs.copyFileSync(best.path, finalPath);
    console.log(`wrote ${project.slug}.png (page ${best.page}, score ${bestScore.toFixed(3)})`);

    for (const candidate of candidates) {
      fs.rmSync(candidate.path, { force: true });
    }
  }
} finally {
  await page.close();
  await browser.close();
  fs.rmSync(tempDir, { recursive: true, force: true });
}
