import type { Metadata } from 'next';
import { FaqList } from '@/sections/FaqList';
import { CtaOutline, PlansPanel, TestimonialPair } from '@/sections/tema-2/Closing';
import { HeroPanel } from '@/sections/tema-2/HeroPanel';
import { ProcessRow, ServicesSplit, WorksDark } from '@/sections/tema-2/Middle';

export const metadata: Metadata = {
  title: 'Tema 2',
  alternates: { canonical: '/tema-2' },
};

// Varian homepage kedua: hero biru dengan form konsultasi.
export default function HomeTheme2Page() {
  return (
    <>
      <HeroPanel />
      <ServicesSplit />
      <WorksDark />
      <ProcessRow />
      <PlansPanel />
      <TestimonialPair />
      <FaqList />
      <CtaOutline />
    </>
  );
}
