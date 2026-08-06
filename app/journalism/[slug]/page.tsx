import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { articles } from "@/data/journalism";
import { formatAuthors, slugify } from "@/lib/utils";
import styles from "./page.module.css";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return articles
    .filter((article) => article.paperUrl)
    .map((article) => ({ slug: slugify(article.title) }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = articles.find((item) => item.paperUrl && slugify(item.title) === params.slug);
  return { title: article?.title ?? "Journalism Article" };
}

export default function JournalismArticlePage({ params }: Props) {
  const article = articles.find((item) => item.paperUrl && slugify(item.title) === params.slug);
  if (!article?.paperUrl) notFound();

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
            <span className="eyebrow">Full paper</span>
            <a
              href={article.paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.externalLink}
            >
              Open in new tab <ArrowUpRight size={14} aria-hidden />
            </a>
          </div>
          <iframe
            src={article.paperUrl}
            title={`${article.title} — paper`}
            className={styles.iframe}
          />
        </div>
      </section>
    </main>
  );
}
