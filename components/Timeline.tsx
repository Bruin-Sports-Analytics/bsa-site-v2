"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import styles from "./Timeline.module.css";

type TimelineEvent = {
  date: string;
  title: string;
  detail: string;
  status: string;
  location?: string;
};

export function Timeline({ events }: { events: TimelineEvent[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.timeline}>
      <div className={styles.nodes} role="list" aria-label="Recruitment timeline">
        {events.map((event, index) => (
          <button
            className={`${styles.node} glass ${active === index ? `glass--gold ${styles.active}` : "glass--regular"}`}
            type="button"
            key={event.title}
            onClick={() => setActive(index)}
            role="listitem"
            aria-current={active === index ? "step" : undefined}
          >
            <span className={styles.nodeNumber}>{String(index + 1).padStart(2, "0")}</span>
            <span>{event.date}</span>
            <b>{event.title}</b>
          </button>
        ))}
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
