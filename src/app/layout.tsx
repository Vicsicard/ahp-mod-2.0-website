import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk', display: 'swap' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono', display: 'swap' });

export const metadata: Metadata = {
  title: 'AHP Module 2.0 - Make Your Site AI-Ready',
  description: 'AHP Module 2.0 helps your content get understood by AI crawlers and ensures your business is part of the answer.',
  keywords: 'AI optimization, SEO, content optimization, AI crawlers, AI visibility, AHP Module',
  authors: [{ name: 'AHP Module Team' }],
  metadataBase: new URL('https://ahpmodule.com'),
  openGraph: {
    title: 'AHP Module 2.0 - Make Your Site AI-Ready',
    description: 'AHP Module 2.0 helps your content get understood by AI crawlers and ensures your business is part of the answer.',
    url: 'https://ahpmodule.com',
    siteName: 'AHP Module 2.0',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AHP Module 2.0',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AHP Module 2.0 - Make Your Site AI-Ready',
    description: 'AHP Module 2.0 helps your content get understood by AI crawlers and ensures your business is part of the answer.',
    images: ['/images/twitter-image.jpg'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#45A29E',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-charcoal min-h-screen">
        {children}
      </body>
    </html>
  );
}
