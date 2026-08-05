import type { Metadata } from "next";
import { CalendarDays } from "lucide-react";
import { GlassSurface } from "@/components/ui/GlassSurface";
import { recruitment } from "@/data/site";
import eventCardStyles from "@/components/EventCard.module.css";

export const metadata: Metadata = {
  title: "Events"
};

export default function EventsPage() {
  const awarenessEvents = recruitment.timelineEvents.filter((event) => event.status === "Awareness");

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Events</span>
          <h1>Upcoming events</h1>
          <p>Public events include RSVP actions. <br />For members of sports groups and data journalism teams, please refer to slack.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid three">
            {awarenessEvents.map((event) => (
              <GlassSurface
                as="article"
                variant="regular"
                tint="gold"
                interactive
                radius="md"
                className={eventCardStyles.card}
                key={`${event.date}-${event.title}`}
              >
                <span className={eventCardStyles.type}>{event.status}</span>
                <h3>{event.title}</h3>
                <p>{event.detail}</p>
                <div className={eventCardStyles.meta}>
                  <span><CalendarDays size={16} aria-hidden /> {event.date}</span>
                </div>
              </GlassSurface>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
