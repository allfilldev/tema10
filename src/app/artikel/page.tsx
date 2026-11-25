import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui';
import { ArticleCards } from '@/sections/ArticleCards';
import { ContactCta } from '@/sections/ContactCta';

export const metadata: Metadata = {
  title: 'Artikel',
  description: 'Wawasan seputar strategi konten, media sosial, dan branding untuk menjangkau milenial dan Gen Z.',
  alternates: { canonical: '/artikel' },
};

export default function ArticlesPage() {
  return (
    <>
      <PageHeader
        kicker="Artikel"
        title="Wawasan untuk brand Anda."
        description="Panduan praktis seputar strategi konten, media sosial, dan branding untuk audiens generasi muda."
      />
      <ArticleCards withHeading={false} />
      <ContactCta />
    </>
  );
}
