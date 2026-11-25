import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui';
import { ContactCta } from '@/sections/ContactCta';
import { FaqList } from '@/sections/FaqList';
import { Plans } from '@/sections/Plans';

export const metadata: Metadata = {
  title: 'Paket Bulanan',
  description: 'Pilihan paket pengelolaan media sosial dan kampanye digital bulanan untuk setiap tahap bisnis.',
  alternates: { canonical: '/paket' },
};

export default function PlansPage() {
  return (
    <>
      <PageHeader
        kicker="Paket Bulanan"
        title="Investasi yang sesuai dengan tahap bisnis Anda."
        description="Semua paket mencakup strategi, produksi, dan laporan bulanan. Paket dapat disesuaikan setelah sesi konsultasi."
      />
      <Plans withHeading={false} />
      <FaqList />
      <ContactCta />
    </>
  );
}
