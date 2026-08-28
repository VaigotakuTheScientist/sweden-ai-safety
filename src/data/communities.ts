import type { Community } from '../types/content';

/**
 * Local communities represented on the national map.
 *
 * Names and primary links below point to currently public community pages.
 * Nothing here asserts organisers, member counts, activity levels,
 * affiliations or chapter status.
 */
export const communities: readonly Community[] = [
  {
    id: 'stockholm',
    name: 'Stockholm AI Safety',
    city: 'Stockholm',
    region: 'Stockholms län',
    status: 'published',
    url: 'https://www.meetup.com/stockholm-ai-safety/',
    location: { lat: 59.33, lon: 18.07 },
  },
  {
    id: 'gothenburg',
    name: 'AI Safety Gothenburg',
    city: 'Gothenburg',
    region: 'Västra Götalands län',
    status: 'published',
    url: 'https://www.aisafetygothenburg.org/',
    location: { lat: 57.71, lon: 11.97 },
  },
  {
    id: 'lund',
    name: 'Lund AI Safety',
    city: 'Lund',
    region: 'Skåne län',
    status: 'published',
    url: 'https://www.meetup.com/lund-ai-safety/',
    location: { lat: 55.7, lon: 13.19 },
    labelOffset: { dx: 16, dy: 6 },
  },
  {
    id: 'malmo',
    name: 'Malmo AI Safety',
    city: 'Malmö',
    region: 'Skåne län',
    status: 'published',
    url: 'https://www.meetup.com/ai-safety-malmo/',
    location: { lat: 55.6, lon: 13.0 },
  },
];
