import type { Metadata } from "next";
import { EventCard } from "@/components/EventCard";
import { events } from "@/data/site";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming events from Bruin Sports Analytics. Workshops, info sessions, and recruitment events."
};

export default function EventsPage() {
  const publicEvents = events.filter((event) => !event.isMembersOnly);

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
          <div className="grid two">
            {publicEvents.map((event, index) => (
              <EventCard event={event} key={event.slug} isSoonest={index === 0} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
