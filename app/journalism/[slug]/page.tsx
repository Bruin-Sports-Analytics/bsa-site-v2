import type { Metadata } from "next";
import { readFileSync } from "node:fs";
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

const sectionHeadings = [
  "Background",
  "Best of 3 Dominance",
  "Grand Slam Disappointment",
  "Time is the Enemy...",
  "But Time is Also a Friend",
  "Goal of this Article",
  "Predicting NBA Free Agent Salaries",
  "Introduction Relevance",
  "Introduction",
  "Terms to Know",
  "It's more than just the goalkeeper",
  "It's More Than Just the Goalkeeper",
  "Understanding Contracts and Free Agency",
  "Methodology Organizing the Data",
  "Methodology and Rationale",
  "Methodology",
  "Interesting Notes",
  "An Attempt to Create our Own Statistic",
  "Final Variable Selection & Model Creation",
  "Results",
  "Some top performers:",
  "Editor's Picks",
  "Next Steps",
  "Conclusion and Further Remarks",
  "Conclusion",
  "Why GameScore",
  "Exploring the Data",
  "Finding the Keys to Success",
  "Other Issues and Future Plans",
  "Sources and Credits",
  "Measuring Performance of All Teams",
  "Key for \"Stage Reached\" Variable",
  "Analyzing the Performance of the Finalists",
  "What is it?",
  "StatsBomb"
].sort((a, b) => b.length - a.length);

const ignoredExtractedText = new Set([
  "Subscribe to our newsletter!",
  "email address Subscribe",
  "via GIPHY"
]);

function textToBlocks(text: string): ArticleBlock[] {
  return text
    .split(/\n{2,}/)
    .map((value) => value.replace(/\s+/g, " ").trim())
    .filter((value) => value && !ignoredExtractedText.has(value))
    .flatMap((value) => {
      const exactHeading = sectionHeadings.find((heading) => value === heading);
      if (exactHeading) {
        return [{ type: "heading", text: exactHeading } satisfies ArticleBlock];
      }

      const leadingHeading = sectionHeadings.find((heading) => value.startsWith(`${heading} `));
      if (leadingHeading) {
        const paragraph = value.slice(leadingHeading.length).trim();
        return [
          { type: "heading", text: leadingHeading } satisfies ArticleBlock,
          { type: "paragraph", text: paragraph } satisfies ArticleBlock
        ];
      }

      return [{ type: "paragraph", text: value } satisfies ArticleBlock];
    });
}

function fileContentBlocks(article: JournalismArticle): ArticleBlock[] {
  if (!article.contentFile) return [];

  try {
    const filePath = path.join(contentDirectory, article.contentFile);
    const rawBlocks = textToBlocks(readFileSync(filePath, "utf8"));
    if (!article.images?.length) return rawBlocks;

    const imagesToInsert = [...article.images].sort((a, b) => b.afterParagraph - a.afterParagraph);
    const finalBlocks = [...rawBlocks];

    for (const img of imagesToInsert) {
      let count = 0;
      let targetIndex = finalBlocks.length;
      for (let i = 0; i < finalBlocks.length; i++) {
        if (finalBlocks[i].type === "paragraph" || finalBlocks[i].type === "heading") {
          count++;
          if (count === img.afterParagraph) {
            targetIndex = i + 1;
            break;
          }
        }
      }
      finalBlocks.splice(targetIndex, 0, {
        type: "image",
        src: img.src,
        alt: img.alt,
        caption: img.caption,
        width: img.width,
        height: img.height
      });
    }

    return finalBlocks;
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
          {article.summary && <p className={styles.summary}>{article.summary}</p>}
          <div className="tag-row" style={{ marginTop: 10 }}>
            <span className="tag">{article.date}</span>
            <span className="tag">{article.readTime} min read</span>
            {article.techStack?.map((item) => (
              <span className="tag" key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.paperSection}>
        <div className="container">
          <div className={styles.paperHeader}>
            <span className="eyebrow">Article</span>
            {article.paperUrl ? (
              <a
                href={article.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.externalLink}
              >
                Open original PDF <ArrowUpRight size={14} aria-hidden />
              </a>
            ) : null}
          </div>
          <article className={styles.articleBody}>
            {content.length ? (
              content.map((block, index) => {
                if (block.type === "heading") {
                  return block.level === 3
                    ? <h3 key={`${block.text}-${index}`}>{block.text}</h3>
                    : <h2 key={`${block.text}-${index}`}>{block.text}</h2>;
                }

                if (block.type === "table") {
                  return (
                    <div className={styles.tableWrap} key={`table-${index}`}>
                      <table>
                        <thead>
                          <tr>
                            {block.columns.map((column) => <th key={column}>{column}</th>)}
                          </tr>
                        </thead>
                        <tbody>
                          {block.rows.map((row) => (
                            <tr key={row.join("-")}>
                              {row.map((cell, cellIndex) => <td key={`${cell}-${cellIndex}`}>{cell}</td>)}
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
                          alt={block.alt}
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

                return <p key={`${block.text.slice(0, 32)}-${index}`}>{block.text}</p>;
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
