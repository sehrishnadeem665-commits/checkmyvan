import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About CheckMyVan — 15 Years of Trusted Van & Leisure Vehicle Checks',
  description:
    'Learn about CheckMyVan inspections for vans, campervans, and motorhomes, including pre-purchase, road-safety, diagnostic, and habitation checks.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About CheckMyVan — Trusted UK Van & Leisure Vehicle Experts',
    description:
      'Vehicle-specific inspections for vans, campervans, and motorhomes across the UK.',
    url: 'https://checkmyvan.com/about',
    images: ['/opengraph-image'],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
