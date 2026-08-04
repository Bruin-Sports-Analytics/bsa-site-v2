import { Heart } from "lucide-react";
import type { JournalismArticle } from "@/data/journalism";
import { formatAuthors } from "@/lib/utils";
import styles from "./ArticleCard.module.css";

const SPORT_TONES: Record<string, { top: string; bottom: string }> = {
  Basketball: { top: "#4AA8FF", bottom: "#163a5f" },
  Football: { top: "#FFB81C", bottom: "#6b4400" },
  Baseball: { top: "#40D39C", bottom: "#0f4c3a" },
  Gymnastics: { top: "#FFD100", bottom: "#8d6100" }
};

function getSportTone(sport: string) {
  return SPORT_TONES[sport] ?? { top: "#8BCBFF", bottom: "#1b3e61" };
}

export function ArticleCard({ article, featured = false }: { article: JournalismArticle; featured?: boolean }) {
  const tone = getSportTone(article.sport);

  return (
    <article className={`${styles.card}${featured ? ` ${styles.featured}` : ""}`}>
      <div
        className={styles.thumbnail}
        aria-hidden
        style={{ "--tone-top": tone.top, "--tone-bottom": tone.bottom } as React.CSSProperties}
      >
        <span className={styles.thumbnailSport}>{article.sport}</span>
        <span className={styles.thumbnailMeta}>{article.readTime} min read</span>
      </div>
      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.metaLeft}>
            <span>{article.date}</span>
            <span className={styles.dot} aria-hidden />
            <span>{article.readTime} min read</span>
          </span>
        </div>
        <h3 className={`${styles.title}${featured ? ` ${styles.titleFeatured}` : ""}`}>{article.title}</h3>
        <p className={styles.authors}>{formatAuthors(article.authors)}</p>
        <hr className={styles.divider} />
        {(article.views != null || (article.likes ?? 0) > 0) && (
          <div className={styles.footer}>
            <span>{article.views != null ? `${article.views} views` : ""}</span>
            {(article.likes ?? 0) > 0 && (
              <span className={styles.footerRight}>
                <Heart size={14} aria-hidden />
                {article.likes}
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
