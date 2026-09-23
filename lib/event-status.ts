type TimedEvent = {
  endsAt: string;
};

/**
 * Events remain current through their entire Los Angeles calendar day, even
 * when their scheduled end time has passed. `endsAt` carries the appropriate
 * local UTC offset for the event date.
 */
export function eventDayEndsAt(event: TimedEvent) {
  const match = event.endsAt.match(/^(\d{4}-\d{2}-\d{2}).*(Z|[+-]\d{2}:\d{2})$/);
  return match ? Date.parse(`${match[1]}T23:59:59.999${match[2]}`) : Number.NaN;
}

export function hasEventEnded(event: TimedEvent, now = Date.now()) {
  const endOfEventDay = eventDayEndsAt(event);
  return Number.isFinite(endOfEventDay) && endOfEventDay < now;
}

export function upcomingEvents<T extends TimedEvent>(events: T[], now = Date.now()) {
  return events.filter((event) => !hasEventEnded(event, now));
}
