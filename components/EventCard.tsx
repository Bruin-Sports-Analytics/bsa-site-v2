import { CalendarDays, MapPin } from "lucide-react";
import { GlassSurface } from "@/components/ui/GlassSurface";
import type { Event } from "@/data/site";
import styles from "./EventCard.module.css";

type Props = {
  event: Event;
  isSoonest?: boolean;
};

export function EventCard({ event, isSoonest = false }: Props) {
  const isExternalSignup = event.rsvpUrl?.startsWith("http");

  return (
    <GlassSurface
      as="article"
      variant="regular"
      tint={isSoonest ? "gold" : event.type === "recruitment" ? "gold" : "none"}
      interactive
      radius="md"
      className={`${styles.card} ${isSoonest ? styles.soonestCard : ""}`}
    >
      <div className={styles.headerRow}>
        <span className={styles.type}>{event.type}</span>
        {isSoonest && <span className={styles.soonestBadge}>Next Event</span>}
      </div>
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <div className={styles.meta}>
        <span><CalendarDays size={16} aria-hidden /> {event.date} • {event.time}</span>
        <span><MapPin size={16} aria-hidden /> {event.location}</span>
      </div>
      {event.isMembersOnly ? (
        <span className={styles.members}>Members only</span>
      ) : (
        <a
          className="btn btn-secondary"
          href={event.rsvpUrl ?? "/events"}
          target={isExternalSignup ? "_blank" : undefined}
          rel={isExternalSignup ? "noopener noreferrer" : undefined}
        >
          Sign up soon
        </a>
      )}
    </GlassSurface>
  );
}
