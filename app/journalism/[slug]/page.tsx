import type { Metadata } from "next";
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { articles, type ArticleBlock, type JournalismArticle } from "@/data/journalism";
import { formatAuthors, slugify } from "@/lib/utils";
import styles from "./page.module.css";

type Props = {
  params: { slug: string };
};

const contentDirectory = path.join(process.cwd(), "content", "journalism");

function renderInline(text: string): React.ReactNode {
  const tokens: React.ReactNode[] = [];
  const regex = /(\*\*.*?\*\*|\*.*?\*|\[.*?\]\(.*?\))/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      tokens.push(text.slice(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith("**") && token.endsWith("**")) {
      tokens.push(<strong key={match.index}>{token.slice(2, -2)}</strong>);
    } else if (token.startsWith("*") && token.endsWith("*")) {
      tokens.push(<em key={match.index}>{token.slice(1, -1)}</em>);
    } else if (token.startsWith("[") && token.includes("](")) {
      const closingBracket = token.indexOf("](");
      const linkText = token.slice(1, closingBracket);
      const linkUrl = token.slice(closingBracket + 2, -1);
      tokens.push(
        <a
          key={match.index}
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.inlineLink}
        >
          {linkText}
        </a>
      );
    }
    lastIndex = match.index + token.length;
  }
  if (lastIndex < text.length) {
    tokens.push(text.slice(lastIndex));
  }
  return tokens.length > 0 ? tokens : text;
}

function parseMarkdownToBlocks(rawMd: string): ArticleBlock[] {
  const lines = rawMd.split("\n");
  const blocks: ArticleBlock[] = [];
  let currentList: { ordered: boolean; items: string[] } | null = null;
  let currentTable: { headers: string[]; rows: string[][] } | null = null;
  let currentParagraph: string[] = [];

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      const text = currentParagraph.join(" ").trim();
      if (text) {
        blocks.push({ type: "paragraph", text });
      }
      currentParagraph = [];
    }
  };

  const flushList = () => {
    if (currentList) {
      blocks.push({ type: "list", ordered: currentList.ordered, items: currentList.items });
      currentList = null;
    }
  };

  const flushTable = () => {
    if (currentTable && currentTable.headers.length > 0) {
      blocks.push({ type: "table", columns: currentTable.headers, rows: currentTable.rows });
      currentTable = null;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (!line) {
      flushParagraph();
      flushList();
      flushTable();
      continue;
    }

    // Embedded Markdown Image: ![alt](src)
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

    // Filter out author bylines, subscribe CTAs, and publication metadata
    if (
      /^(by:|written\s+by:|authors?:|published:|subscribe\b)/i.test(line) ||
      /^(\*\*|\*)(by:|written\s+by:|authors?:)/i.test(line)
    ) {
      continue;
    }

    // Headings that are author bylines e.g. "## By Billy Peir", "### By Nathan Wetmore"
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

    // Top-of-article standalone byline e.g. "By Billy Peir" or "**By Billy Peir**"
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

    // Headings
    if (line.startsWith("### ")) {
      flushParagraph();
      flushList();
      flushTable();
      const headingText = line.slice(4).trim().replace(/^\*\*|\*\*$/g, "").trim();
      blocks.push({ type: "heading", level: 3, text: headingText });
      continue;
    }
    if (line.startsWith("## ")) {
      flushParagraph();
      flushList();
      flushTable();
      const headingText = line.slice(3).trim().replace(/^\*\*|\*\*$/g, "").trim();
      blocks.push({ type: "heading", level: 2, text: headingText });
      continue;
    }
    if (line.startsWith("# ")) {
      flushParagraph();
      flushList();
      flushTable();
      const headingText = line.slice(2).trim().replace(/^\*\*|\*\*$/g, "").trim();
      blocks.push({ type: "heading", level: 2, text: headingText });
      continue;
    }

    // Blockquote
    if (line.startsWith("> ")) {
      flushParagraph();
      flushList();
      flushTable();
      blocks.push({ type: "blockquote", text: line.slice(2).trim() });
      continue;
    }

    // Lists
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

    // Tables
    if (line.startsWith("|") && line.endsWith("|")) {
      flushParagraph();
      flushList();
      const cells = line.slice(1, -1).split("|").map((c) => c.trim());
      if (cells.every((c) => /^---+$/.test(c))) {
        continue;
      }
      if (!currentTable) {
        currentTable = { headers: cells.map(c => c.replace(/^\*\*|\*\*$/g, "").trim()), rows: [] };
      } else {
        currentTable.rows.push(cells);
      }
      continue;
    }

    // Normal paragraph line
    currentParagraph.push(line);
  }

  flushParagraph();
  flushList();
  flushTable();

  return blocks;
}

function fileContentBlocks(article: JournalismArticle): ArticleBlock[] {
  if (!article.contentFile) return [];

  try {
    const mdPath = path.join(contentDirectory, article.contentFile.replace(/\.txt$/, ".md"));
    const txtPath = path.join(contentDirectory, article.contentFile);
    const targetPath = existsSync(mdPath) ? mdPath : txtPath;

    if (!existsSync(targetPath)) return [];

    const raw = readFileSync(targetPath, "utf8");
    const blocks = parseMarkdownToBlocks(raw);
    return blocks;
  } catch {
    return [];
  }
}

export function generateStaticParams() {
  return articles
    .filter((article) => article.paperUrl || article.content?.length || article.contentFile)
    .map((article) => ({ slug: slugify(article.title) }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = articles.find((item) => (item.paperUrl || item.content?.length || item.contentFile) && slugify(item.title) === params.slug);
  if (!article) {
    return { title: "Article not found" };
  }
  return {
    title: article.title,
    description: article.summary
  };
}

export default function JournalismArticlePage({ params }: Props) {
  const article = articles.find((item) => (item.paperUrl || item.content?.length || item.contentFile) && slugify(item.title) === params.slug);
  if (!article) notFound();
  const content = article.content?.length ? article.content : fileContentBlocks(article);

  return (
    <main>
      <section className={styles.header}>
        <div className="container">
          <span className="eyebrow">Data Journalism · {article.sport}</span>
          <h1 className={styles.title}>{article.title}</h1>
          <p className={styles.authors}>{formatAuthors(article.authors)}</p>
          <div className="tag-row" style={{ marginTop: 14, alignItems: "center" }}>
            <span className="tag">{article.date}</span>
            <span className="tag">{article.readTime} min read</span>
            {article.techStack?.map((item) => (
              <span className="tag" key={item}>{item}</span>
            ))}
            {article.paperUrl ? (
              <a
                href={article.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.externalLink}
                style={{ marginLeft: "auto" }}
              >
                Open original PDF <ArrowUpRight size={14} aria-hidden />
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <section className={styles.paperSection}>
        <div className="container">
          <article className={styles.articleBody}>
            {content.length ? (
              content.map((block, index) => {
                if (block.type === "heading") {
                  return block.level === 3
                    ? <h3 key={`${block.text}-${index}`}>{block.text}</h3>
                    : <h2 key={`${block.text}-${index}`}>{block.text}</h2>;
                }

                if (block.type === "blockquote") {
                  return (
                    <blockquote className={styles.blockquote} key={`quote-${index}`}>
                      <p>{renderInline(block.text)}</p>
                    </blockquote>
                  );
                }

                if (block.type === "list") {
                  if (block.ordered) {
                    return (
                      <ol key={`list-${index}`}>
                        {block.items.map((item, i) => (
                          <li key={`${item.slice(0, 16)}-${i}`}>{renderInline(item)}</li>
                        ))}
                      </ol>
                    );
                  }
                  return (
                    <ul key={`list-${index}`}>
                      {block.items.map((item, i) => (
                        <li key={`${item.slice(0, 16)}-${i}`}>{renderInline(item)}</li>
                      ))}
                    </ul>
                  );
                }

                if (block.type === "table") {
                  return (
                    <div className={styles.tableWrap} key={`table-${index}`}>
                      <table>
                        <thead>
                          <tr>
                            {(block.columns || block.headers || []).map((column, i) => (
                              <th key={`${column}-${i}`}>{renderInline(column.replace(/^\*\*|\*\*$/g, "").trim())}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {block.rows.map((row, rIdx) => (
                            <tr key={`row-${rIdx}`}>
                              {row.map((cell, cellIndex) => <td key={`${cell}-${cellIndex}`}>{renderInline(cell)}</td>)}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                }

                if (block.type === "image") {
                  return (
                    <figure className={styles.figure} key={`${block.src}-${index}`}>
                      <div className={styles.imageContainer}>
                        <Image
                          src={block.src}
                          alt={block.alt || article.title}
                          width={block.width ?? 1200}
                          height={block.height ?? 760}
                          sizes="(max-width: 860px) 100vw, 860px"
                          className={styles.chartImage}
                        />
                      </div>
                      {block.caption ? (
                        <figcaption className={styles.figcaption}>
                          <span className={styles.captionBadge}>FIGURE</span>
                          <span className={styles.captionText}>{block.caption}</span>
                        </figcaption>
                      ) : null}
                    </figure>
                  );
                }

                return <p key={`${block.text.slice(0, 32)}-${index}`}>{renderInline(block.text)}</p>;
              })
            ) : (
              <>
                <p className={styles.articleLead}>{article.summary}</p>
                <h2>About this analysis</h2>
                <p>
                  This Data Journalism piece is part of the Bruin Sports Analytics archive. The native page keeps the article metadata, summary, authors, sport, and source link readable on site while the original PDF remains available for the complete preserved version.
                </p>
              </>
            )}
          </article>
        </div>
      </section>
    </main>
  );
}
