import styles from "./HeroVisual.module.css";

export function HeroVisual() {
  const points = Array.from({ length: 34 }, (_, index) => index);

  return (
    <div className={styles.visual} aria-hidden="true">
      <div className={styles.court}>
        <span />
        <span />
        <span />
      </div>
      <div className={styles.orbit}>
        {points.map((point) => (
          <i key={point} style={{ "--i": point } as React.CSSProperties} />
        ))}
      </div>
      <svg className={styles.paths} viewBox="0 0 520 520" role="presentation">
        <path d="M75 370 C155 110 315 115 435 185" />
        <path d="M92 205 C185 285 315 310 462 250" />
        <path d="M118 405 C255 345 335 220 382 84" />
      </svg>
      <div className={`${styles.metric} ${styles.metricOne}`}>
        <b>18</b>
        <span>active projects</span>
      </div>
      <div className={`${styles.metric} ${styles.metricTwo}`}>
        <b>5</b>
        <span>sports covered</span>
      </div>
      <div className={`${styles.metric} ${styles.metricThree}`}>
        <b>64</b>
        <span>current members</span>
      </div>
    </div>
  );
}
