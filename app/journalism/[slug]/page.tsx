import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { type ArticleBlock } from "@/data/journalism";
import { getJournalismArticle, getJournalismSlugs } from "@/lib/journalism";
import { formatAuthors, slugify } from "@/lib/utils";
import styles from "./page.module.css";

type Props = {
  params: { slug: string };
};

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

export async function generateStaticParams() {
  const slugs = await getJournalismSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getJournalismArticle(params.slug);
  if (!article) {
    return { title: "Article not found" };
  }
  const keywords = [
    article.title,
    article.sport,
    `${article.sport} analytics`,
    "sports data journalism",
    "sports data science",
    "Bruin Sports Analytics",
    ...(article.techStack ?? [])
  ];

  return {
    title: article.title,
    description: article.summary,
    keywords,
    openGraph: {
      title: `${article.title} | Bruin Sports Analytics`,
      description: article.summary,
      url: `https://www.bruinsportsanalytics.org/journalism/${params.slug}`,
      type: "article",
      publishedTime: article.date ? new Date(article.date).toISOString() : undefined,
      authors: article.authors
    }
  };
}

export default async function JournalismArticlePage({ params }: Props) {
  const article = await getJournalismArticle(params.slug);
  if (!article) notFound();
  const content = article.content || [];

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": article.title,
    "description": article.summary,
    "author": article.authors.map((authorName) => ({
      "@type": "Person",
      "name": authorName
    })),
    "publisher": {
      "@type": "Organization",
      "name": "Bruin Sports Analytics",
      "url": "https://www.bruinsportsanalytics.org",
      "logo": "https://www.bruinsportsanalytics.org/assets/bsa_logo.jpeg"
    },
    "datePublished": article.date ? new Date(article.date).toISOString() : undefined,
    "articleSection": article.sport,
    "keywords": [article.sport, ...(article.techStack ?? [])].join(", "),
    "url": `https://www.bruinsportsanalytics.org/journalism/${slugify(article.title)}`
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
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
