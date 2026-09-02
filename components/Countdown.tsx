"use client";

import { useEffect, useState } from "react";
import { ResumeTemplatesButton } from "./ResumeTemplatesButton";
import styles from "./Countdown.module.css";

const TARGET = new Date("2026-09-23T00:00:00");

function getTimeLeft() {
  const diff = TARGET.getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<ReturnType<typeof getTimeLeft>>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set initial value on client only to prevent hydration mismatch
    setTimeLeft(getTimeLeft());
    setMounted(true);

    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  // Don't render until client-side to avoid hydration mismatch
  if (!mounted || !timeLeft) return null;

  const units = [
    { value: timeLeft.days, label: "days" },
    { value: timeLeft.hours, label: "hrs" },
    { value: timeLeft.minutes, label: "min" },
    { value: timeLeft.seconds, label: "sec" },
  ];

  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>Applications open in</span>
      <div className={styles.units}>
        {units.map(({ value, label }) => (
          <div className={styles.unit} key={label}>
            <span className={styles.value}>{String(value).padStart(2, "0")}</span>
            <span className={styles.unitLabel}>{label}</span>
          </div>
        ))}
      </div>
      <div className={styles.resumeTemplates}>
        <ResumeTemplatesButton />
      </div>
    </div>
  );
}
