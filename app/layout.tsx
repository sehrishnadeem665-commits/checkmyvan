import './globals.css';
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { ScrollProgress } from '@/components/site/scroll-progress';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://checkmyvan.com'),
  title: {
    default: 'CheckMyVan — Van, Campervan & Motorhome Inspections',
    template: '%s | CheckMyVan',
  },
  description:
    'Specialist UK inspections for vans, campervans, and motorhomes. Choose pre-purchase, safety, diagnostic, or habitation checks and receive a clear digital report.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'CheckMyVan',
    title: 'CheckMyVan — Van, Campervan & Motorhome Inspections',
    description:
      'Specialist UK inspections for vans, campervans, and motorhomes. Choose pre-purchase, safety, diagnostic, or habitation checks and receive a clear digital report.',
    url: 'https://checkmyvan.com',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'CheckMyVan — independent van, campervan and motorhome inspections',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CheckMyVan — Van, Campervan & Motorhome Inspections',
    description:
      'Specialist UK inspections for vans, campervans, and motorhomes. Choose pre-purchase, safety, diagnostic, or habitation checks and receive a clear digital report.',
    images: [
      {
        url: '/opengraph-image',
        alt: 'CheckMyVan — independent van, campervan and motorhome inspections',
      },
    ],
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased">
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
