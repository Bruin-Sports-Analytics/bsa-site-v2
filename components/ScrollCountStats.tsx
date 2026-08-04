"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import pageStyles from "@/app/page.module.css";
import styles from "./ScrollCountStats.module.css";

const DURATION_MS = 1200;

type Stat = { label: string; value: number };

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

  return (
    <section ref={sectionRef} className={styles.section} aria-label="Bruin Sports Analytics impact metrics">
      <div className="container">
        <div className={pageStyles.rail}>
          {stats.map((stat, index) => (
            <div key={stat.label} data-load-reveal style={{ "--flow-delay": `${520 + index * 70}ms` } as CSSProperties}>
              <b>{Math.round(progress * stat.value)}</b>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
