import { test } from "node:test";
import assert from "node:assert/strict";
import { setProjectPaper, slugifyFilename } from "./update-site-paper.mjs";

const SAMPLE = `import type { Project } from "@/data/site";

export const projects: Project[] = [
  {
    title: "First Paper",
    slug: "first-paper",
    techStack: ["Python"],
    links: { paper: "https://example.com/old-first.pdf" },
    visibility: "public"
  },
  {
    title: "Second Paper",
    slug: "second-paper",
    techStack: ["R"],
    links: { paper: "/projects/second-paper" },
    visibility: "public"
  },
  {
    title: "No Paper Yet",
    slug: "no-paper",
    techStack: ["Julia"],
    links: { repo: "https://github.com/x/y" },
    visibility: "public"
  }
];
`;

test("replaces an existing paper URL for the matching slug only", () => {
  const out = setProjectPaper(SAMPLE, "first-paper", "https://cdn/new-first.pdf");
  assert.match(out, /slug: "first-paper",\n\s*techStack: \["Python"\],\n\s*links: \{ paper: "https:\/\/cdn\/new-first\.pdf" \}/);
  // other projects untouched
  assert.match(out, /links: \{ paper: "\/projects\/second-paper" \}/);
  assert.match(out, /links: \{ repo: "https:\/\/github\.com\/x\/y" \}/);
});

test("replaces an internal-route paper value", () => {
  const out = setProjectPaper(SAMPLE, "second-paper", "https://cdn/second.pdf");
  assert.match(out, /slug: "second-paper",[\s\S]*?links: \{ paper: "https:\/\/cdn\/second\.pdf" \}/);
});

test("inserts a paper key when links has none", () => {
  const out = setProjectPaper(SAMPLE, "no-paper", "https://cdn/np.pdf");
  assert.match(out, /links: \{ paper: "https:\/\/cdn\/np\.pdf", repo: "https:\/\/github\.com\/x\/y" \}/);
});

test("throws when the slug is not found", () => {
  assert.throws(() => setProjectPaper(SAMPLE, "missing", "https://cdn/x.pdf"), /slug "missing" not found/);
});

test("escapes special characters in the URL", () => {
  const out = setProjectPaper(SAMPLE, "first-paper", 'https://cdn/a"b.pdf');
  assert.match(out, /links: \{ paper: "https:\/\/cdn\/a\\"b\.pdf" \}/);
});

test("output still parses as the same project count", () => {
  const out = setProjectPaper(SAMPLE, "first-paper", "https://cdn/new.pdf");
  assert.equal((out.match(/slug:/g) || []).length, 3);
});

test("slugifyFilename produces a clean .pdf name", () => {
  assert.equal(
    slugifyFilename("A Quantitative Framework & Analysis (2019).pdf"),
    "a-quantitative-framework-and-analysis-2019.pdf"
  );
  assert.equal(slugifyFilename("wr_blocking.PDF"), "wr-blocking.pdf");
});
