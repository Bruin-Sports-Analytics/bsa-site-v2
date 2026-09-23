"use client";

import { useEffect, useState } from "react";
import { EventCard } from "@/components/EventCard";
import type { Event } from "@/data/site";
import { eventDayEndsAt, upcomingEvents } from "@/lib/event-status";

type Props = {
  events: Event[];
  limit?: number;
  emptyMessage?: string;
};

export function UpcomingEventCards({ events, limit, emptyMessage }: Props) {
  const [now, setNow] = useState<number | null>(null);
  const visibleEvents = now === null ? events : upcomingEvents(events, now);
  const displayedEvents = limit === undefined ? visibleEvents : visibleEvents.slice(0, limit);

  useEffect(() => {
    let timeout: number | undefined;

    const scheduleRefresh = () => {
      const currentTime = Date.now();
      setNow(currentTime);

      const nextEnd = upcomingEvents(events, currentTime)
        .map(eventDayEndsAt)
        .filter(Number.isFinite)
        .sort((a, b) => a - b)[0];

      if (nextEnd === undefined) return;

      // Re-check immediately after the nearest event's calendar day ends.
      const delay = Math.min(Math.max(nextEnd - currentTime + 50, 1_000), 2_147_483_647);
      timeout = window.setTimeout(scheduleRefresh, delay);
    };

    scheduleRefresh();
    return () => {
      if (timeout !== undefined) window.clearTimeout(timeout);
    };
  }, [events]);

  if (!displayedEvents.length) {
    return emptyMessage ? <p className="section-lede">{emptyMessage}</p> : null;
  }

  return (
    <div className="grid three">
      {displayedEvents.map((event, index) => (
        <EventCard event={event} key={event.slug} isSoonest={index === 0} />
      ))}
    </div>
  );
}
