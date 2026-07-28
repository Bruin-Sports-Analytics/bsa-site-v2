import type { CSSProperties } from "react";
import styles from "./LogoWall.module.css";

type Outcome = {
  name: string;
  category: string;
  logo?: string | null;
  logoDark?: string | null;
  logoLight?: string | null;
};

export function LogoWall({ logos }: { logos: Outcome[] }) {
  return (
    <div className={styles.wall}>
      {logos.map((outcome) => (
        <div className={styles.tile} title={`${outcome.name} — ${outcome.category}`} key={outcome.name}>
          {outcome.logo ? (
            <span className={styles.imgWrap}>
              <span
                className={styles.imgMask}
                role="img"
                aria-label={outcome.name}
                style={{
                  "--logo-mask": `url("${outcome.logo}")`,
                  ...(outcome.logoDark ? { "--logo-dark": `url("${outcome.logoDark}")` } : {}),
                  ...(outcome.logoLight ? { "--logo-light": `url("${outcome.logoLight}")` } : {}),
                } as CSSProperties}
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
