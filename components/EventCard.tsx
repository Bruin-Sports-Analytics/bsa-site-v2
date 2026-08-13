import { CalendarDays, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { GlassSurface } from "@/components/ui/GlassSurface";
import type { Event } from "@/data/site";
import { formatEventDate } from "@/lib/utils";
import styles from "./EventCard.module.css";

export function EventCard({ event }: { event: Event }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true, margin: "0px 0px -18% 0px" }}
      transition={{ opacity: { duration: 0.5 }, y: { duration: 0.5 }, scale: { type: "spring", stiffness: 400, damping: 17 } }}
    >
      <GlassSurface as="article" variant="regular" tint={event.type === "recruitment" ? "gold" : "none"} interactive radius="md" className={styles.card}>
        <span className={styles.type}>{event.type}</span>
        <h3>{event.title}</h3>
        <p>{event.description}</p>
        <div className={styles.meta}>
          <span><CalendarDays size={16} aria-hidden /> {formatEventDate(event.startTime)}</span>
          <span><MapPin size={16} aria-hidden /> {event.location}</span>
        </div>
        {event.isMembersOnly ? (
          <span className={styles.members}>Members only</span>
        ) : (
          <a className="btn btn-secondary" href={event.rsvpUrl ?? "/events"}>RSVP</a>
        )}
      </GlassSurface>
    </motion.div>
  );
}
