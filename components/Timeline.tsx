"use client";

import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { eventDayEndsAt, hasEventEnded } from "@/lib/event-status";
import styles from "./Timeline.module.css";

type TimelineEvent = {
  date: string;
  title: string;
  detail: string;
  status: string;
  location?: string;
  endsAt: string;
};

export function Timeline({ events }: { events: TimelineEvent[] }) {
  const [active, setActive] = useState(0);
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    let timeout: number | undefined;

    const scheduleRefresh = () => {
      const currentTime = Date.now();
      setNow(currentTime);

      // On first load (and when the selected event rolls over), show the
      // first event that is still current instead of a completed event.
      const firstCurrentIndex = events.findIndex(
        (event) => !hasEventEnded(event, currentTime)
      );
      setActive((currentActive) => {
        const activeEvent = events[currentActive];
        if (
          firstCurrentIndex === -1 ||
          (activeEvent && !hasEventEnded(activeEvent, currentTime))
        ) {
          return currentActive;
        }
        return firstCurrentIndex;
      });

      const nextEnd = events
        .filter((event) => !hasEventEnded(event, currentTime))
        .map(eventDayEndsAt)
        .filter(Number.isFinite)
        .sort((a, b) => a - b)[0];

      if (nextEnd === undefined) return;
      timeout = window.setTimeout(
        scheduleRefresh,
        Math.min(Math.max(nextEnd - currentTime + 50, 1_000), 2_147_483_647)
      );
    };

    scheduleRefresh();
    return () => {
      if (timeout !== undefined) window.clearTimeout(timeout);
    };
  }, [events]);

  return (
    <div className={styles.timeline}>
      <div className={styles.nodes} role="list" aria-label="Recruitment timeline">
        {events.map((event, index) => {
          const isPast = now !== null && hasEventEnded(event, now);
          const isActive = active === index && !isPast;

          return (
            <button
              className={`${styles.node} glass ${isPast ? styles.completed : isActive ? `glass--gold ${styles.active}` : "glass--regular"}`}
              type="button"
              key={event.title}
              onClick={() => setActive(index)}
              role="listitem"
              aria-current={isActive ? "step" : undefined}
            >
              <span className={styles.nodeNumber}>{String(index + 1).padStart(2, "0")}</span>
              {event.location && (
                <span className={styles.nodeLocation} title={event.location}>
                  <MapPin size={11} aria-hidden />
                  <span className={styles.nodeLocationText}>{event.location}</span>
                </span>
              )}
              <span>{event.date}</span>
              <b>{event.title}</b>
            </button>
          );
        })}
      </div>
      <div className={styles.detail} aria-live="polite">
        <span className="eyebrow">{events[active].status}</span>
        <h3>{events[active].title}</h3>
        <p>{events[active].detail}</p>
        {events[active].location && (
          <p className={styles.location}>
            <MapPin size={14} aria-hidden /> {events[active].location}
          </p>
        )}
      </div>
    </div>
  );
}
