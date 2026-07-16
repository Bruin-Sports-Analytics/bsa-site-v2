import type { Metadata } from "next";
import { EventCard } from "@/components/EventCard";
import { events } from "@/data/site";

export const metadata: Metadata = {
  title: "Events"
};

export default function EventsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Events</span>
          <h1>Workshops, speakers, meetings</h1>
          <p>Public events include RSVP actions. Members-only meetings hide sensitive location and link details.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid three">
            {events.map((event) => <EventCard event={event} key={event.slug} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
