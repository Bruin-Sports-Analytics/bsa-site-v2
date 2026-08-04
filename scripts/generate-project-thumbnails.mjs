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

fs.mkdirSync(outputDir, { recursive: true });
fs.mkdirSync(tempDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ acceptDownloads: true });
page.setDefaultTimeout(120000);
page.setDefaultNavigationTimeout(120000);

try {
  for (const project of projects) {
    const pdfPath = path.join(tempDir, `${project.slug}.pdf`);
    const pngBase = path.join(outputDir, project.slug);
    const downloadPromise = page.waitForEvent("download");

    await page.goto(project.paper, { waitUntil: "domcontentloaded" }).catch(() => {});
    const download = await downloadPromise;
    await download.saveAs(pdfPath);

    const render = spawnSync(pdfToPpm, ["-png", "-f", "1", "-l", "1", "-singlefile", pdfPath, pngBase], {
      stdio: "inherit"
    });

    if (render.status !== 0) {
      throw new Error(`pdftoppm failed for ${project.slug}`);
    }

    console.log(`wrote ${project.slug}.png`);
  }
} finally {
  await page.close();
  await browser.close();
}
