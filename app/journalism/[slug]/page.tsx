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

function fileContentBlocks(article: JournalismArticle): ArticleBlock[] {
  if (!article.contentFile) return [];

  try {
    const filePath = path.join(contentDirectory, article.contentFile);
    const blocks: ArticleBlock[] = readFileSync(filePath, "utf8")
      .split(/\n{2,}/)
      .map((text) => text.replace(/\s+/g, " ").trim())
      .filter(Boolean)
      .map((text) => ({ type: "paragraph", text }));

    article.images?.forEach((image) => {
      blocks.splice(Math.min(image.afterParagraph + 1, blocks.length), 0, {
        type: "image",
        src: image.src,
        alt: image.alt,
        caption: image.caption,
        width: image.width,
        height: image.height
      });
    });

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
  return { title: article?.title ?? "Journalism Article" };
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
                      <Image
                        src={block.src}
                        alt={block.alt}
                        width={block.width ?? 1200}
                        height={block.height ?? 760}
                        sizes="(max-width: 760px) 100vw, 960px"
                      />
                      {block.caption ? <figcaption>{block.caption}</figcaption> : null}
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
