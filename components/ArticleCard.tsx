import { Heart } from "lucide-react";
import type { JournalismArticle } from "@/data/journalism";
import { formatAuthors } from "@/lib/utils";
import styles from "./ArticleCard.module.css";

export function ArticleCard({ article }: { article: JournalismArticle }) {
  return (
    <article className={styles.card}>
      <div className={styles.thumbnail} aria-hidden />
      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.metaLeft}>
            <span>{article.date}</span>
            <span className={styles.dot} aria-hidden />
            <span>{article.readTime} min read</span>
          </span>
        </div>
        <h3 className={styles.title}>{article.title}</h3>
        <p className={styles.authors}>{formatAuthors(article.authors)}</p>
        <hr className={styles.divider} />
        <div className={styles.footer}>
          <span>{article.views} views</span>
          {article.likes > 0 && (
            <span className={styles.footerRight}>
              <Heart size={14} />
              {article.likes}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
