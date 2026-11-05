import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact CheckMyVan — Digital PDF Report Enquiries',
  description:
    'Contact CheckMyVan with questions about Digital PDF Reports for vans, campervans, and motorhomes. Email info@checkmyvan.com.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact CheckMyVan — Digital PDF Report Enquiries',
    description:
      'Email info@checkmyvan.com with questions about Digital PDF Reports. Reports are digital products; no physical inspection is included.',
    url: 'https://checkmyvan.com/contact',
    images: ['/opengraph-image'],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
