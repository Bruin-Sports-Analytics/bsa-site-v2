import type { Metadata } from "next";
import { EventCard } from "@/components/EventCard";
import { events } from "@/data/site";

export const metadata: Metadata = {
  title: "Events",
  description: "Join upcoming Bruin Sports Analytics workshops, recruitment info sessions, hackathons, and guest speaker panels with sports industry leaders.",
  keywords: [
    "sports analytics events",
    "UCLA sports analytics info session",
    "sports data science workshops",
    "BSA recruitment events",
    "sports industry speaker panels",
    "sports analytics hackathons",
    "UCLA sports analytics club"
  ],
  openGraph: {
    title: "Events & Workshops | Bruin Sports Analytics",
    description: "Upcoming recruitment info sessions, technical workshops, and sports industry speaker panels.",
    url: "https://www.bruinsportsanalytics.org/events"
  }
};

export default function EventsPage() {
  const publicEvents = events.filter((event) => !event.isMembersOnly);

  const eventsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": publicEvents.map((event, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Event",
        "name": event.title,
        "description": event.description,
        "startDate": event.date,
        "location": {
          "@type": "Place",
          "name": event.location,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Los Angeles",
            "addressRegion": "CA"
          }
        },
        "organizer": {
          "@type": "Organization",
          "name": "Bruin Sports Analytics",
          "url": "https://www.bruinsportsanalytics.org"
        }
      }
    }))
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsJsonLd) }}
      />
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Events</span>
          <h1>Upcoming events</h1>
          <p>Public event signups will open soon through our mailing list. <br />For members of sports groups and data journalism teams, please refer to Slack.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid three">
            {publicEvents.map((event, index) => (
              <EventCard event={event} key={event.slug} isSoonest={index === 0} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
