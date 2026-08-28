import type { Community } from '../types/content';

/**
 * Local communities represented on the national map.
 *
 * v0.1 lists cities only. Nothing here asserts organisers, member counts,
 * activity levels, affiliations or chapter status — those require a local
 * organiser to confirm the wording first. Adding a community later means
 * adding an entry here (plus `blurb`/`url`/`links` once confirmed); no
 * component needs to change.
 */
export const communities: readonly Community[] = [
  {
    id: 'stockholm',
    city: 'Stockholm',
    region: 'Stockholms län',
    status: 'details-pending',
    location: { lat: 59.33, lon: 18.07 },
  },
  {
    id: 'gothenburg',
    city: 'Gothenburg',
    region: 'Västra Götalands län',
    status: 'details-pending',
    location: { lat: 57.71, lon: 11.97 },
  },
  {
    id: 'lund',
    city: 'Lund',
    region: 'Skåne län',
    status: 'details-pending',
    location: { lat: 55.7, lon: 13.19 },
    labelOffset: { dx: 16, dy: 6 },
  },
  {
    id: 'malmo',
    city: 'Malmö',
    region: 'Skåne län',
    status: 'details-pending',
    location: { lat: 55.6, lon: 13.0 },
  },
];

export const statusLabels: Record<Community['status'], string> = {
  'details-pending': 'Details coming soon',
  published: 'Community page',
};
