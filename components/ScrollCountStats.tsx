"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ScrollCountStats.module.css";

const DURATION_MS = 1200;

type Stat = { label: string; value: number };

const segmentMap: Record<string, string[]> = {
  "0": ["top", "upperLeft", "upperRight", "lowerLeft", "lowerRight", "bottom"],
  "1": ["upperRight", "lowerRight"],
  "2": ["top", "upperRight", "middle", "lowerLeft", "bottom"],
  "3": ["top", "upperRight", "middle", "lowerRight", "bottom"],
  "4": ["upperLeft", "upperRight", "middle", "lowerRight"],
  "5": ["top", "upperLeft", "middle", "lowerRight", "bottom"],
  "6": ["top", "upperLeft", "middle", "lowerLeft", "lowerRight", "bottom"],
  "7": ["top", "upperRight", "lowerRight"],
  "8": ["top", "upperLeft", "upperRight", "middle", "lowerLeft", "lowerRight", "bottom"],
  "9": ["top", "upperLeft", "upperRight", "middle", "lowerRight", "bottom"]
};

const segments = ["top", "upperLeft", "upperRight", "middle", "lowerLeft", "lowerRight", "bottom"];

function SevenSegmentDigit({ value }: { value: string }) {
  const activeSegments = new Set(segmentMap[value] ?? []);

  return (
    <span className={styles.digit} aria-hidden="true">
      {segments.map((segment) => (
        <span
          className={`${styles.segment} ${styles[segment]} ${activeSegments.has(segment) ? styles.segmentActive : ""}`}
          key={segment}
        />
      ))}
    </span>
  );
}

function SevenSegmentValue({ value, ariaLabel }: { value: string; ariaLabel: string }) {
  return (
    <span className={styles.scoreValue} aria-label={ariaLabel}>
      {value.split("").map((character, index) => (
        character === ":"
          ? <span className={styles.colon} aria-hidden="true" key={`${character}-${index}`} />
          : <SevenSegmentDigit value={character} key={`${character}-${index}`} />
      ))}
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

  const statByLabel = new Map(stats.map((stat) => [stat.label, stat]));
  const scoreItems = [
    { label: "Active projects", value: statByLabel.get("Active projects")?.value ?? 0 },
    { label: "Season", value: "20:26" },
    { label: "Sports groups", value: statByLabel.get("Sports groups")?.value ?? 0 },
    { label: "Current members", value: statByLabel.get("Current members")?.value ?? 0 },
    { label: "UCLA Athletics Partners", value: statByLabel.get("UCLA Athletics Partners")?.value ?? 0 },
    { label: "Years at UCLA", value: statByLabel.get("Years at UCLA")?.value ?? 0 }
  ];

  return (
    <section ref={sectionRef} className={styles.section} aria-label="Bruin Sports Analytics impact metrics">
      <div className={styles.inner}>
        <div className={styles.scoreboard} data-load-reveal>
          <div className={styles.scoreboardTitle}>AT A GLANCE</div>
          <div className={styles.scoreGrid}>
            {scoreItems.map((stat) => {
              const displayValue = typeof stat.value === "number"
                ? String(Math.round(progress * stat.value)).padStart(2, "0")
                : stat.value;

              return (
                <div className={styles.stat} key={stat.label}>
                  <span className={styles.statLabel}>{stat.label}</span>
                  <SevenSegmentValue value={displayValue} ariaLabel={`${stat.label}: ${displayValue}`} />
                </div>
              );
            })}
          </div>
          <span className={`${styles.corner} ${styles.cornerTopLeft}`} aria-hidden="true" />
          <span className={`${styles.corner} ${styles.cornerTopRight}`} aria-hidden="true" />
          <span className={`${styles.corner} ${styles.cornerBottomLeft}`} aria-hidden="true" />
          <span className={`${styles.corner} ${styles.cornerBottomRight}`} aria-hidden="true" />
            </div>
      </div>
    </section>
  );
}
