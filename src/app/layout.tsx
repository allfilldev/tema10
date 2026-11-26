import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ShowcaseCTA } from '@/components/ShowcaseCTA';
import { site } from '@/content/site';
import './globals.css';

// Font di-self-host di repo (tidak bergantung ke Google Fonts saat build).
const jakarta = localFont({ src: '../fonts/PlusJakartaSans-Variable.woff2', weight: '200 800', variable: '--font-jakarta', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | ${site.tagline} ${site.city}`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { type: 'website', locale: 'id_ID', siteName: site.name },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/' },
};

export const viewport: Viewport = { themeColor: '#ffffff' };

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: site.name,
  description: site.description,
  url: site.url,
  email: site.contact.email,
  telephone: `+${site.contact.whatsapp}`,
  foundingDate: String(site.foundedYear),
  address: { '@type': 'PostalAddress', streetAddress: site.contact.address, addressLocality: site.city, addressCountry: 'ID' },
  sameAs: site.socials.map((s) => s.href),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={jakarta.variable}>
      <body>
        <a href="#konten" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white">
          Langsung ke konten
        </a>
        <Header />
        <main id="konten">{children}</main>
        <Footer />
        <ShowcaseCTA />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </body>
    </html>
  );
}
