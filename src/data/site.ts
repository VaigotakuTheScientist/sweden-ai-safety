import type { NavItem } from '../types/content';

/**
 * Site-level copy and navigation.
 *
 * Positioning is deliberately modest: Sweden AI Safety is currently exploring
 * a shared national layer for local AI safety communities. Do not add claims
 * about legal structure, membership numbers, funding, partnerships, impact or
 * institutional endorsement — those are unresolved project questions.
 */
export const site = {
  name: 'Sweden AI Safety',
  /** Shown in the header wordmark. */
  wordmark: 'Sweden AI Safety',
  title: 'Sweden AI Safety — a network of AI safety communities across Sweden',
  description:
    'Sweden AI Safety is a network of people and local communities working to understand and reduce risks from advanced AI.',
  locale: 'en',
} as const;

/**
 * Top navigation. `Learn` is deliberately absent while `/learn` is still a
 * holding page — the route and its architecture stay, so it only needs adding
 * back here once there is something to read.
 */
export const primaryNav: readonly NavItem[] = [
  { label: 'Communities', href: '/#communities' },
  { label: 'Events', href: '/#events' },
  { label: 'About', href: '/about' },
  { label: 'Get involved', href: '/get-involved', emphasis: true },
];

export const footerNav: readonly NavItem[] = [
  { label: 'Communities', href: '/#communities' },
  { label: 'Events', href: '/#events' },
  { label: 'Learn', href: '/learn' },
  { label: 'About', href: '/about' },
];

/**
 * Outbound channels. Left empty on purpose: no LinkedIn page and no shared
 * contact address exist yet, and the footer renders them as "coming soon"
 * rather than linking somewhere invented.
 */
export const contactChannels: readonly { label: string; href?: string }[] = [
  { label: 'LinkedIn' },
  { label: 'Contact' },
];
