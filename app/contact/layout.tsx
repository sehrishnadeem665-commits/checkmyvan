import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact CheckMyVan — Van & Leisure Vehicle Check Enquiries UK',
  description:
    'Get in touch with CheckMyVan for van, campervan, or motorhome check enquiries, fleet quotes, or technical support. Call 020 7946 0958 or email info@checkmyvan.com. London facility open Mon–Sat.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact CheckMyVan — Van & Leisure Vehicle Check Enquiries',
    description:
      'Call 020 7946 0958 or email info@checkmyvan.com. Visit our London facility at 24 Meridian Way, SW18 4QL. Open Mon–Sat.',
    url: 'https://checkmyvan.com/contact',
    images: ['/opengraph-image'],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
