/**
 * Shared content types for the Sweden AI Safety site.
 *
 * These types describe the *shape* of project content so that pages and
 * components never hard-code copy. Fields that we cannot yet state truthfully
 * are optional: an absent field means "not established yet", and components
 * must render an honest empty state rather than a placeholder that reads as
 * fact.
 */

/** Approximate WGS84 location, used for the national network map. */
export interface GeoPoint {
  readonly lat: number;
  readonly lon: number;
}

/**
 * How settled a local community's relationship to the national network is.
 * Deliberately descriptive rather than legal: the governance model
 * (federation, chapters, single organisation) is an open project question and
 * must not be implied by the website.
 */
export type CommunityStatus =
  /** Listed as a city in the network; public details not confirmed yet. */
  | 'details-pending'
  /** Public details confirmed and published on this site. */
  | 'published';

export interface CommunityLink {
  readonly label: string;
  readonly href: string;
}

export interface Community {
  /** Stable slug, used for anchors, map nodes and future routes. */
  readonly id: string;
  /** City name as it should be displayed (Swedish spelling). */
  readonly city: string;
  /** Län / region the city sits in. */
  readonly region: string;
  readonly status: CommunityStatus;
  readonly location: GeoPoint;
  /**
   * One neutral sentence about the local community. Leave undefined until a
   * local organiser has confirmed wording — do not describe activity levels,
   * size or affiliations that have not been agreed.
   */
  readonly blurb?: string;
  /** Public page for the local community, once one exists. */
  readonly url?: string;
  /** Additional confirmed links (calendar, chat, mailing list, …). */
  readonly links?: readonly CommunityLink[];
  /** Contact address, once a real one is agreed. Never invent one. */
  readonly contactEmail?: string;
  /** Nudges an overlapping map label so nearby cities stay readable. */
  readonly labelOffset?: { readonly dx: number; readonly dy: number };
}

export type EventFormat = 'in-person' | 'online' | 'hybrid';

export interface EventEntry {
  readonly id: string;
  readonly title: string;
  /** ISO 8601 date or date-time, e.g. "2026-09-18" or "2026-09-18T18:00:00+02:00". */
  readonly start: string;
  /** ISO 8601 end, when the event spans more than a single session. */
  readonly end?: string;
  readonly city: string;
  readonly venue?: string;
  /** `Community.id` of the community hosting the event. */
  readonly organiser?: string;
  readonly format?: EventFormat;
  readonly registrationUrl?: string;
  readonly description?: string;
  readonly tags?: readonly string[];
}

export interface NavItem {
  readonly label: string;
  readonly href: string;
  /** Marks the single call-to-action styled item in the header. */
  readonly emphasis?: boolean;
}

export interface InvolvementRoute {
  readonly id: string;
  readonly title: string;
  readonly description: string;
}

export interface Activity {
  readonly id: string;
  readonly title: string;
  readonly description: string;
}
