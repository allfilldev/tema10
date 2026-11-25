import type { MetadataRoute } from 'next';
import { articles } from '@/content/articles';
import { caseStudies } from '@/content/portfolio';
import { services } from '@/content/services';
import { site } from '@/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/tema-2', '/tentang', '/layanan', '/portofolio', '/paket', '/artikel', '/kontak', '/privasi', '/syarat-ketentuan'];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, changeFrequency: 'monthly' as const, priority: p === '' ? 1 : 0.7 })),
    ...services.map((s) => ({ url: `${site.url}/layanan/${s.slug}`, priority: 0.6 })),
    ...caseStudies.map((c) => ({ url: `${site.url}/portofolio/${c.slug}`, priority: 0.6 })),
    ...articles.map((a) => ({ url: `${site.url}/artikel/${a.slug}`, lastModified: a.date, priority: 0.5 })),
  ];
}
