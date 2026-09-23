"use client";

import { useEffect, useState } from "react";
import styles from "./Countdown.module.css";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type Props = {
  target: string;
  label: string;
  actionHref: string;
  actionLabel: string;
};

function getTimeLeft(target: string): TimeLeft | null {
  const diff = new Date(target).getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown({ target, label, actionHref, actionLabel }: Props) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const updateTimeLeft = () => setTimeLeft(getTimeLeft(target));

    // Set initial value on client only to prevent hydration mismatch
    updateTimeLeft();
    setMounted(true);

    const id = setInterval(updateTimeLeft, 1000);
    return () => clearInterval(id);
  }, [target]);

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
      <span className={styles.label}>{label}</span>
      <div className={styles.units}>
        {units.map(({ value, label }) => (
          <div className={styles.unit} key={label}>
            <span className={styles.value}>{String(value).padStart(2, "0")}</span>
            <span className={styles.unitLabel}>{label}</span>
          </div>
        ))}
      </div>
      <div className={styles.action}>
        <a className="btn btn-primary" href={actionHref} target="_blank" rel="noopener noreferrer" data-analytics="recruitment_countdown_apply_click">
          {actionLabel}
        </a>
      </div>
    </div>
  );
}
