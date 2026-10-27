import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book Your Van or Leisure Vehicle Check Online — CheckMyVan UK',
  description:
    'Book a check for your van, campervan, or motorhome. Choose a service, enter your vehicle details, and review your booking online.',
  alternates: { canonical: '/booking' },
  openGraph: {
    title: 'Book Your Van or Leisure Vehicle Check Online | CheckMyVan',
    description:
      'Choose a vehicle check service, enter your vehicle details, and review your booking online.',
    url: 'https://checkmyvan.com/booking',
    images: ['/opengraph-image'],
  },
};

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
