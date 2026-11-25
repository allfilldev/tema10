import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui';
import { ContactCta } from '@/sections/ContactCta';
import { FaqList } from '@/sections/FaqList';
import { ProcessSteps } from '@/sections/ProcessSteps';
import { ServicesBento } from '@/sections/ServicesBento';

export const metadata: Metadata = {
  title: 'Layanan',
  description: 'Social media management, branding, produksi konten video, iklan digital, KOL, dan website untuk brand yang menyasar milenial dan Gen Z.',
  alternates: { canonical: '/layanan' },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        kicker="Layanan"
        title="Solusi lengkap untuk brand yang ingin tumbuh."
        description="Pilih layanan sesuai kebutuhan, atau kombinasikan menjadi paket bulanan yang terintegrasi."
      />
      <ServicesBento withHeading={false} />
      <ProcessSteps />
      <FaqList />
      <ContactCta />
    </>
  );
}
