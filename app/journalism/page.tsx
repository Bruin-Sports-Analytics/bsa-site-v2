import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/data/journalism";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Journalism"
};

export default function JournalismPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Journalism</h1>
        </div>
      </section>
      <section className={styles.articles}>
        <div className="container">
          <div className={styles.list}>
            {articles.map((article) => (
              <ArticleCard key={article.title} article={article} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
