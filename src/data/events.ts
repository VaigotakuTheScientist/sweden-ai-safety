import type { EventEntry } from '../types/content';

/**
 * Events shown on the site.
 *
 * IMPORTANT: `events` is the list rendered to visitors. It is empty because no
 * national events calendar has been confirmed yet, and showing invented events
 * would mislead people. When real events exist, add them here (or replace this
 * module with a feed/aggregation step returning the same shape) and the events
 * section will render them without further component changes.
 */
export const events: readonly EventEntry[] = [];

/**
 * SAMPLE DATA — NOT RENDERED ANYWHERE ON THE PUBLIC SITE.
 *
 * Kept only to document the expected shape of a real entry for whoever wires
 * up the calendar next. Do not import this into a page.
 */
export const sampleEventsForReference: readonly EventEntry[] = [
  {
    id: 'sample-reading-group',
    title: 'Sample: introductory reading group, session 1',
    start: '2026-09-18T18:00:00+02:00',
    end: '2026-09-18T20:00:00+02:00',
    city: 'Sample City',
    venue: 'Sample venue, room 000',
    organiser: 'stockholm',
    format: 'in-person',
    registrationUrl: 'https://example.org/sample-registration',
    description:
      'Sample entry used to document the event data shape. Never render this on the public site.',
    tags: ['sample', 'reading group'],
  },
];

/** Upcoming events, soonest first. Returns an empty list while none are confirmed. */
export function getUpcomingEvents(now: Date = new Date()): readonly EventEntry[] {
  return [...events]
    .filter((event) => new Date(event.end ?? event.start).getTime() >= now.getTime())
    .sort((a, b) => a.start.localeCompare(b.start));
}
