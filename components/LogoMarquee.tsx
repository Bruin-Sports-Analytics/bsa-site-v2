"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "@/app/page.module.css";

type Outcome = { name: string; category: string; logo?: string | null; logoScale?: number };

const SPEED = 45; // auto-scroll speed in px/second

function MarqueeRow({ row }: { row: Outcome[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    let raf = 0;
    let last = performance.now();
    let carry = 0;
    let running = false;

    // The row renders three identical copies. Keep the scroll position inside the
    // middle copy so there is always a full set of buffer on both sides — the
    // browser never clamps at 0 or the max, so it loops endlessly in either
    // direction. Wrapping by one set lands on a visually identical position.
    const wrap = () => {
      const seg = el.scrollWidth / 3;
      if (seg <= 0) return;
      if (el.scrollLeft >= seg * 2) el.scrollLeft -= seg;
      else if (el.scrollLeft < seg) el.scrollLeft += seg;
    };

    // Start in the middle copy.
    el.scrollLeft = el.scrollWidth / 3;

    const tick = (now: number) => {
      if (!running) return;
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (!reduceMotion.matches) {
        carry += SPEED * dt;
        const whole = Math.trunc(carry);
        if (whole) {
          el.scrollLeft += whole;
          carry -= whole;
        }
      }
      wrap();
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running || reduceMotion.matches) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };

    // Only animate while the row is actually on screen.
    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0 }
    );
    io.observe(el);

    return () => {
      stop();
      io.disconnect();
    };
  }, []);

  return (
    <div className={styles.marqueeRow} ref={ref}>
      <div className={styles.marqueeTrack}>
        {[...row, ...row, ...row].map((outcome, index) => (
          <div
            className={styles.logoTile}
            title={`${outcome.name} — ${outcome.category}`}
            aria-hidden={index >= row.length}
            key={`${outcome.name}-${index}`}
          >
            {outcome.logo ? (
              <span className={styles.logoImgWrap}>
                <Image
                  src={outcome.logo}
                  alt={outcome.name}
                  fill
                  sizes="180px"
                  className={styles.logoImg}
                  style={outcome.logoScale ? { transform: `scale(${outcome.logoScale})` } : undefined}
                />
              </span>
            ) : (
              <span className={styles.logoText}>{outcome.name}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function LogoMarquee({ rows }: { rows: Outcome[][] }) {
  return (
    <div className={styles.logoMarquee}>
      {rows.map((row, index) => (
        <MarqueeRow key={index} row={row} />
      ))}
    </div>
  );
}
