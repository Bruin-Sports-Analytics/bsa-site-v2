"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import styles from "./ScrollCountStats.module.css";

const DURATION_MS = 1200;

type Stat = { label: string; value: number };

const SEGMENTS: Record<string, string> = {
  "0": "abcedf",
  "1": "bc",
  "2": "abged",
  "3": "abgcd",
  "4": "fgbc",
  "5": "afgcd",
  "6": "afgecd",
  "7": "abc",
  "8": "abcdefg",
  "9": "abfgcd"
};

function SegmentNumber({ value, label }: { value: string; label: string }) {
  return (
    <span className={styles.segmentNumber} aria-label={`${label}: ${value.replace(":", "")}`}>
      <span className="sr-only">{value}</span>
      <span className={styles.digitRow} aria-hidden>
        {Array.from(value).map((character, characterIndex) => {
          if (character === ":") {
            return <span className={styles.colon} key={`colon-${characterIndex}`}><i /><i /></span>;
          }

          const activeSegments = SEGMENTS[character] ?? "";
          return (
            <span className={styles.digit} key={`${character}-${characterIndex}`}>
              {"abcdefg".split("").map((segment) => (
                <i
                  className={`${styles.segment} ${styles[`segment${segment.toUpperCase()}`]} ${activeSegments.includes(segment) ? styles.segmentActive : ""}`}
                  key={segment}
                />
              ))}
            </span>
          );
        })}
      </span>
    </span>
  );
}

export function ScrollCountStats({ stats }: { stats: Stat[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = sectionRef.current;
    if (!el) return;

    let frame = 0;
    let hasRun = false;

    const run = () => {
      if (hasRun) return;
      hasRun = true;
      observer.disconnect();
      setProgress(0);

      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / DURATION_MS, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setProgress(eased);

        if (t < 1) {
          frame = window.requestAnimationFrame(tick);
        }
      };

      frame = window.requestAnimationFrame(tick);
    };

    setProgress(0);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) run();
      },
      { threshold: 0.45 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const values = stats.map((stat) => Math.round(progress * stat.value).toString().padStart(2, "0"));

  const statCell = (index: number, className: string) => {
    const stat = stats[index];
    if (!stat) return null;

    return (
      <div
        className={`${styles.statCell} ${className}`}
        data-load-reveal
        style={{ "--flow-delay": `${520 + index * 70}ms` } as CSSProperties}
      >
        <span className={styles.statLabel}>{stat.label}</span>
        <SegmentNumber value={values[index]} label={stat.label} />
      </div>
    );
  };

  return (
    <section ref={sectionRef} className={styles.section} aria-label="Bruin Sports Analytics impact metrics">
      <div className="container">
        <div className={styles.scoreboard}>
          <div className={styles.boardHeader}>
            <strong>Bruin Sports Analytics</strong>
          </div>
          <div className={styles.scoreGrid}>
            {statCell(0, styles.projects)}
            <div className={styles.seasonCell}>
              <span className={styles.statLabel}>Season</span>
              <SegmentNumber value="20:26" label="Season" />
            </div>
            {statCell(1, styles.sports)}
            {statCell(2, styles.members)}
            {statCell(4, styles.partners)}
            {statCell(3, styles.years)}
          </div>
        </div>
      </div>
    </section>
  );
}
