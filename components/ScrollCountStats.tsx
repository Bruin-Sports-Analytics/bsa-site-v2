"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import pageStyles from "@/app/page.module.css";
import styles from "./ScrollCountStats.module.css";

const DURATION = 1400; // ms

type Stat = { label: string; value: number };

export function ScrollCountStats({ stats }: { stats: Stat[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = sectionRef.current;
    if (!el) return;

    let hasRun = false;

    const run = () => {
      if (hasRun) return;
      hasRun = true;
      observer.disconnect();

      setProgress(0);

      // Block scroll during count-up
      const prevent = (e: Event) => e.preventDefault();
      window.addEventListener("wheel", prevent, { passive: false });
      window.addEventListener("touchmove", prevent, { passive: false });

      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / DURATION, 1);
        const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
        setProgress(eased);
        if (t < 1) {
          requestAnimationFrame(tick);
        } else {
          window.removeEventListener("wheel", prevent);
          window.removeEventListener("touchmove", prevent);
        }
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) run(); },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
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
