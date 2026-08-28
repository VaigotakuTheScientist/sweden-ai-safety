import type { EventEntry } from '../types/content';

/**
 * Confirmed upcoming events shown on the site.
 *
 * Keep this list factual and small. Add an event only when its public listing
 * confirms the key details; if no events are confirmed, leave the list empty.
 * A future feed/aggregation step can replace this module while preserving the
 * same EventEntry shape.
 */
export const events: readonly EventEntry[] = [
  {
    id: 'stockholm-ais-went-rogue-2026-09-02',
    title: '[Reading Group] AIs Went Rogue, Now What?',
    start: '2026-09-02T18:00:00+02:00',
    city: 'Stockholm',
    venue: 'EA Sweden, Sveavägen 76',
    organiser: 'stockholm',
    format: 'in-person',
    registrationUrl: 'https://www.meetup.com/stockholm-ai-safety/',
    tags: ['reading group', 'AI safety'],
  },
];

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

/** Upcoming events, soonest first. */
export function getUpcomingEvents(now: Date = new Date()): readonly EventEntry[] {
  return [...events]
    .filter((event) => new Date(event.end ?? event.start).getTime() >= now.getTime())
    .sort((a, b) => a.start.localeCompare(b.start));
}
