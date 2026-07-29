import Image from "next/image";
import styles from "./LogoWall.module.css";

type Outcome = { name: string; category: string; logo?: string | null; logoScale?: number };

export function LogoWall({ logos }: { logos: Outcome[] }) {
  return (
    <div className={styles.wall}>
      {logos.map((outcome) => (
        <div className={styles.tile} title={`${outcome.name} — ${outcome.category}`} key={outcome.name}>
          {outcome.logo ? (
            <span className={styles.imgWrap}>
              <Image
                src={outcome.logo}
                alt={outcome.name}
                fill
                sizes="200px"
                className={styles.img}
                style={outcome.logoScale ? { transform: `scale(${outcome.logoScale})` } : undefined}
              />
            </span>
          ) : (
            <span className={styles.text}>{outcome.name}</span>
          )}
        </div>
      ))}
    </div>
  );
}
