import type { Activity, InvolvementRoute } from '../types/content';

/** The three deliberately modest things the network does today. */
export const activities: readonly Activity[] = [
  {
    id: 'connect',
    title: 'Connect',
    description:
      'Find people and communities working on AI safety across Sweden.',
  },
  {
    id: 'learn',
    title: 'Learn',
    description:
      'Build useful understanding of technical AI safety, governance, and related areas.',
  },
  {
    id: 'coordinate',
    title: 'Coordinate',
    description:
      'Share events, resources, knowledge, opportunities, and infrastructure across local communities.',
  },
];

/** Ways to contribute, shown in the "Get involved" section. */
export const involvementRoutes: readonly InvolvementRoute[] = [
  {
    id: 'join',
    title: 'Join a local community',
    description: 'Meet people working on AI safety in your city.',
  },
  {
    id: 'attend',
    title: 'Attend an event',
    description: 'Talks, reading groups and workshops hosted across the network.',
  },
  {
    id: 'learn',
    title: 'Learn about AI safety',
    description: 'Work through technical and governance material with others.',
  },
  {
    id: 'organise',
    title: 'Help organise',
    description: 'Support events, outreach, programmes or shared infrastructure.',
  },
  {
    id: 'start',
    title: 'Start a community in your city',
    description: 'Bring people together where no local community exists yet.',
  },
];
