import Image from "next/image";
import Link from "next/link";
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
  Soccer: { top: "#40D39C", bottom: "#315c21" },
  Tennis: { top: "#8BCBFF", bottom: "#1b3e61" }
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
  const readHref = article.paperUrl || article.content?.length || article.contentFile ? `/journalism/${slugify(article.title)}` : null;
  const thumbnailImg = article.images && article.images.length > 0 ? article.images[0] : null;

  const thumbnailElement = (
    <div
      className={styles.thumbnail}
      aria-hidden
      style={{ "--tone-top": tone.top, "--tone-bottom": tone.bottom } as React.CSSProperties}
    >
      {thumbnailImg ? (
        <div className={styles.thumbnailImgWrap}>
          <Image
            src={thumbnailImg.src}
            alt={thumbnailImg.alt || article.title}
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 980px) 50vw, 33vw"
            className={styles.thumbnailImg}
          />
        </div>
      ) : null}
    </div>
  );

  const bodyElement = (
    <div className={styles.body}>
      <h3 className={`${styles.title}${featured ? ` ${styles.titleFeatured}` : ""}`}>{article.title}</h3>
      <p className={styles.authors}>{formatAuthors(article.authors)}</p>
      <div className={styles.meta}>
        <span className={styles.metaLeft}>
          <span className={styles.sportBadge}>{article.sport}</span>
          <span className={styles.dot} aria-hidden />
          <span>{article.date}</span>
          <span className={styles.dot} aria-hidden />
          <span>{article.readTime} min read</span>
        </span>
      </div>
      {article.summary && <p className={styles.summary}>{article.summary}</p>}
      {article.techStack && (
        <div className={styles.techRow}>
          {article.techStack.slice(0, 3).map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <article className={`${styles.card}${featured ? ` ${styles.featured}` : ""}`}>
      {readHref ? (
        <Link href={readHref} className={styles.cardLink}>
          {thumbnailElement}
          {bodyElement}
        </Link>
      ) : (
        <>
          {thumbnailElement}
          {bodyElement}
        </>
      )}
    </article>
  );
}
