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
    default: 'CheckMyVan — Digital PDF Vehicle Reports',
    template: '%s | CheckMyVan',
  },
  description:
    'Digital PDF Reports for vans, campervans, and motorhomes. Choose pre-purchase, safety, diagnostics, or habitation topics and receive your report by email. No physical inspection included.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'CheckMyVan',
    title: 'CheckMyVan — Digital PDF Vehicle Reports',
    description:
      'Digital PDF Reports for vans, campervans, and motorhomes. Choose pre-purchase, safety, diagnostics, or habitation topics and receive your report by email. No physical inspection included.',
    url: 'https://checkmyvan.com',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'CheckMyVan — Digital PDF Reports for vans, campervans and motorhomes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CheckMyVan — Digital PDF Vehicle Reports',
    description:
      'Digital PDF Reports for vans, campervans, and motorhomes. Choose pre-purchase, safety, diagnostics, or habitation topics and receive your report by email. No physical inspection included.',
    images: [
      {
        url: '/opengraph-image',
        alt: 'CheckMyVan — Digital PDF Reports for vans, campervans and motorhomes',
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
