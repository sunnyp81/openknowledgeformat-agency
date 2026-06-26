// Central site configuration and navigation (agency).
export const SITE_TITLE = 'Open Knowledge Format Agency';
export const SITE_TAGLINE =
  'We help teams convert operational knowledge into Open Knowledge Format.';
export const SITE_DESCRIPTION =
  'Independent implementation agency that converts your docs, support KBs, data catalogs, and wikis into Google’s Open Knowledge Format (OKF) bundles. Book a readiness audit.';
export const SITE_ORIGIN = 'https://openknowledgeformat.agency';
export const SITE_NAME_SHORT = 'OKF Agency';

// Primary CTA (rendered as a button in the header).
export const PRIMARY_CTA = { href: '/okf-readiness-audit/', label: 'Book an audit' };

export const NAV: { href: string; label: string }[] = [
  { href: '/services/', label: 'Services' },
  { href: '/okf-readiness-audit/', label: 'Readiness Audit' },
  { href: '/pricing/', label: 'Pricing' },
  { href: '/case-study-template/', label: 'Case Studies' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];

export const CRUMB_LABELS: Record<string, string> = {
  services: 'Services',
  'okf-readiness-audit': 'Readiness Audit',
  'okf-implementation': 'Implementation',
  'okf-knowledge-base-migration': 'KB Migration',
  'okf-for-ai-agents': 'OKF for AI Agents',
  'case-study-template': 'Case Studies',
  pricing: 'Pricing',
  contact: 'Contact',
  about: 'About',
};

export const OFFICIAL = {
  blog: 'https://cloud.google.com/blog/products/data-analytics/how-the-open-knowledge-format-can-improve-data-sharing',
  repo: 'https://github.com/GoogleCloudPlatform/knowledge-catalog',
  spec: 'https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md',
  academy: 'https://openknowledgeformat.academy',
};
