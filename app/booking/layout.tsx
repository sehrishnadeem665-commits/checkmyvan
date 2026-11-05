import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Order a Digital PDF Vehicle Report — CheckMyVan',
  description:
    'Order a Digital PDF Report for your van, campervan, or motorhome. Enter your vehicle details and complete your order online. No physical inspection included.',
  alternates: { canonical: '/booking' },
  openGraph: {
    title: 'Order a Digital PDF Vehicle Report | CheckMyVan',
    description:
      'Choose a Digital PDF Report, enter your vehicle details, and complete your order online. Physical inspection is not included.',
    url: 'https://checkmyvan.com/booking',
    images: ['/opengraph-image'],
  },
};

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
