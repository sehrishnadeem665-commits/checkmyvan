import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing — Van, Campervan & Motorhome Inspections UK',
  description:
    'Clear pricing for van, campervan, and motorhome inspections in the UK. Choose a safety, pre-purchase, or premium check, with motorhome habitation checks available.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Pricing — Van, Campervan & Motorhome Checks | CheckMyVan',
    description:
      'Compare inspection prices for vans, campervans, and motorhomes. Habitation, safety, and diagnostic services are priced by service.',
    url: 'https://checkmyvan.com/pricing',
    images: ['/opengraph-image'],
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
