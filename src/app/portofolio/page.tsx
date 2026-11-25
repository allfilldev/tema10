import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui';
import { ContactCta } from '@/sections/ContactCta';
import { WorkGrid } from '@/sections/WorkGrid';

export const metadata: Metadata = {
  title: 'Portofolio',
  description: 'Studi kasus kampanye digital, branding, dan konten video untuk brand yang menyasar milenial dan Gen Z.',
  alternates: { canonical: '/portofolio' },
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        kicker="Portofolio"
        title="Karya yang menghasilkan dampak nyata."
        description="Beberapa proyek bersama brand skincare, kedai kopi, fesyen, dan pendidikan."
      />
      <WorkGrid withHeading={false} />
      <ContactCta />
    </>
  );
}
