import Link from "next/link";
import { ArrowUpRight, Heart } from "lucide-react";
import type { JournalismArticle } from "@/data/journalism";
import { slugify } from "@/lib/utils";
import { formatAuthors } from "@/lib/utils";
import styles from "./ArticleCard.module.css";

const SPORT_TONES: Record<string, { top: string; bottom: string }> = {
  Basketball: { top: "#4AA8FF", bottom: "#163a5f" },
  Football: { top: "#FFB81C", bottom: "#6b4400" },
  Baseball: { top: "#40D39C", bottom: "#0f4c3a" },
  Gymnastics: { top: "#FFD100", bottom: "#8d6100" },
  Hockey: { top: "#8BCBFF", bottom: "#164d68" },
  Soccer: { top: "#40D39C", bottom: "#315c21" }
};

function getSportTone(sport: string) {
  return SPORT_TONES[sport] ?? { top: "#8BCBFF", bottom: "#1b3e61" };
}

type Props = {
  article: JournalismArticle;
  featured?: boolean;
};

export function ArticleCard({ article, featured = false }: Props) {
  const tone = getSportTone(article.sport);
  const readHref = article.paperUrl ? `/journalism/${slugify(article.title)}` : null;

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
        {(article.views != null || (article.likes ?? 0) > 0 || readHref) && (
          <div className={styles.footer}>
            <div className={styles.footerLeft}>
              {article.views != null && <span>{`${article.views} views`}</span>}
            </div>
            <div className={styles.footerRight}>
              {(article.likes ?? 0) > 0 && (
                <span className={styles.likes}>
                  <Heart size={14} aria-hidden />
                  {article.likes}
                </span>
              )}
              {readHref && (
                <Link href={readHref} className={styles.readButton}>
                  Read <ArrowUpRight size={14} aria-hidden />
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
