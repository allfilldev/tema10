import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHeader } from '@/components/ui';
import { about } from '@/content/site';
import { cn } from '@/lib/utils';
import { ContactCta } from '@/sections/ContactCta';
import { StatsPanel } from '@/sections/StatsPanel';
import { TeamGrid } from '@/sections/TeamGrid';
import { Testimonials } from '@/sections/Testimonials';

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description: about.description,
  alternates: { canonical: '/tentang' },
};

const valueTones = ['bg-primary text-white', 'bg-sun text-ink', 'bg-soft text-ink', 'bg-ink text-white'];

export default function AboutPage() {
  return (
    <>
      <PageHeader kicker={about.eyebrow} title={about.title} description={about.description} />

      <section className="container-page flex flex-wrap items-start gap-[clamp(2rem,5vw,4.5rem)] py-[clamp(3rem,6vw,5rem)]">
        <div className="relative aspect-[4/5] min-w-0 flex-[1_1_340px] overflow-hidden rounded-[var(--radius-card)] bg-sky">
          <Image src={about.image.src} alt={about.image.alt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
        </div>
        <div className="min-w-0 flex-[1_1_420px]">
          <p className="kicker mb-3">Cerita Kami</p>
          <div className="space-y-5 text-[17px] text-ink-2">
            {about.story.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div className="mt-10 rounded-[var(--radius-card)] bg-soft p-7">
            <p className="kicker mb-2">Visi</p>
            <p className="text-xl leading-snug font-bold">{about.vision}</p>
            <p className="kicker mt-8 mb-3">Misi</p>
            <ol className="space-y-3 text-ink-2">
              {about.mission.map((m, i) => (
                <li key={m} className="flex gap-3">
                  <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-extrabold text-white">{i + 1}</span>
                  {m}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="container-page pb-[clamp(4rem,8vw,6rem)]">
        <h2 className="mb-8 text-[clamp(1.9rem,3.8vw,3rem)] leading-[1.1] font-extrabold tracking-[-0.03em]">Nilai yang kami pegang.</h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {about.values.map((v, i) => (
            <li key={v.title} className={cn('rounded-[var(--radius-card)] p-7', valueTones[i % valueTones.length])}>
              <h3 className="mb-2 text-2xl font-extrabold tracking-[-0.02em]">{v.title}</h3>
              <p className="text-[15px] opacity-90">{v.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <StatsPanel />
      <TeamGrid />
      <Testimonials />
      <ContactCta />
    </>
  );
}
