"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { sports } from "@/data/site";
import styles from "./Navigation.module.css";

interface Props {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export function TeamsCarousel({ activeIndex, setActiveIndex }: Props) {
  const total = sports.length;
  const sport = sports[activeIndex];
  const SportIcon = sport.icon;

  function prev() {
    setActiveIndex((activeIndex - 1 + total) % total);
  }

  function next() {
    setActiveIndex((activeIndex + 1) % total);
  }

  function handleWheel(e: React.WheelEvent) {
    e.preventDefault();
    if (e.deltaY > 0) next();
    else prev();
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowRight") next();
    else if (e.key === "ArrowLeft") prev();
  }

  return (
    <div
      className={styles.teamsCarousel}
      onWheel={handleWheel}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className={styles.teamsCarouselBody}>
        <Link
          href={`/work/${sport.slug}`}
          className={styles.teamsCarouselCard}
          style={{ background: sport.accent }}
          aria-label={`${sport.name} team page`}
        >
          <SportIcon size={44} color="rgba(0,0,0,0.65)" aria-hidden />
        </Link>
        <div className={styles.teamsCarouselInfo}>
          <div className={styles.teamsCarouselHeader}>
            <Link href={`/work/${sport.slug}`} className={styles.teamsCarouselName}>
              {sport.name}
            </Link>
            <span className={styles.teamsCarouselCount}>{activeIndex + 1}/{total}</span>
          </div>
          <p className={styles.teamsCarouselDesc}>{sport.description}</p>
          <div className={styles.teamsSubLinks}>
            <Link href={`/work/${sport.slug}/consulting`}>Consulting</Link>
            <Link href={`/work/${sport.slug}/research`}>Research</Link>
            {sport.slug === "tennis" && (
              <a
                href="https://match-manager-umber.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Match Manager ↗
              </a>
            )}
          </div>
        </div>
      </div>
      <div className={styles.teamsCarouselNav}>
        <button
          type="button"
          onClick={prev}
          aria-label="Previous team"
          className={styles.teamsCarouselChevron}
        >
          <ChevronLeft size={14} />
        </button>
        {sports.map((s, i) => (
          <button
            key={s.slug}
            type="button"
            onClick={() => setActiveIndex(i)}
            aria-label={`Go to ${s.name}`}
            className={`${styles.teamsCarouselDot}${i === activeIndex ? ` ${styles.teamsCarouselDotActive}` : ""}`}
          />
        ))}
        <button
          type="button"
          onClick={next}
          aria-label="Next team"
          className={styles.teamsCarouselChevron}
        >
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}
