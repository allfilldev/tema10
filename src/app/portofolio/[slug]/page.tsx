import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight } from '@/components/icons';
import { Tag } from '@/components/ui';
import { caseStudies, getCaseStudy } from '@/content/portfolio';
import { ContactCta } from '@/sections/ContactCta';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => caseStudies.map((c) => ({ slug: c.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = getCaseStudy((await params).slug);
  if (!c) return {};
  return {
    title: `${c.client}: ${c.title}`,
    description: c.summary,
    alternates: { canonical: `/portofolio/${c.slug}` },
    openGraph: { images: [c.cover.src] },
  };
}

export default async function CaseDetailPage({ params }: Props) {
  const c = getCaseStudy((await params).slug);
  if (!c) notFound();
  const idx = caseStudies.findIndex((x) => x.slug === c.slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <>
      <section className="container-page pt-[clamp(2.5rem,6vw,5rem)] pb-[clamp(2rem,4vw,3rem)]">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
          <Link href="/portofolio" className="hover:text-primary">
            Portofolio
          </Link>{' '}
          / <span className="font-semibold text-ink">{c.client}</span>
        </nav>
        <div className="mb-5 flex flex-wrap gap-2">
          {c.tags.map((t, i) => (
            <Tag key={t} tone={i === 0 ? 'sky' : 'sun'}>
              {t}
            </Tag>
          ))}
        </div>
        <h1 className="max-w-5xl text-[clamp(2.4rem,5.6vw,4.75rem)] leading-[1.04] font-extrabold tracking-[-0.04em]">
          {c.client}: <span className="text-primary">{c.title.charAt(0).toLowerCase() + c.title.slice(1)}</span>
        </h1>
        <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-sm">
          {[
            ['Klien', c.client],
            ['Kategori', c.category],
            ['Tahun', c.year],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="text-muted">{k}</dt>
              <dd className="font-bold">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="container-page">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-panel)] bg-sky sm:aspect-[16/8]">
          <Image src={c.cover.src} alt={c.cover.alt} fill priority sizes="(min-width: 1280px) 1184px, 100vw" className="object-cover" />
        </div>
      </div>

      <section className="container-page py-[clamp(3rem,6vw,4.5rem)]">
        <dl className="grid gap-4 sm:grid-cols-3">
          {c.results.map((r, i) => (
            <div key={r.label} className={`flex flex-col-reverse rounded-[var(--radius-card)] p-7 ${i === 0 ? 'bg-primary text-white' : i === 1 ? 'bg-sun' : 'bg-soft'}`}>
              <dt className="mt-2 text-sm opacity-90">{r.label}</dt>
              <dd className="text-[clamp(2.25rem,4.5vw,3.5rem)] leading-none font-extrabold tracking-[-0.04em]">{r.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="container-page grid gap-6 pb-[clamp(3rem,6vw,4.5rem)] md:grid-cols-2">
        <div className="rounded-[var(--radius-card)] bg-soft-2 p-8">
          <h2 className="kicker mb-3">Tantangan</h2>
          <p className="text-[17px] leading-relaxed text-ink-2">{c.challenge}</p>
        </div>
        <div className="rounded-[var(--radius-card)] bg-soft-2 p-8">
          <h2 className="kicker mb-3">Solusi</h2>
          <p className="text-[17px] leading-relaxed text-ink-2">{c.solution}</p>
        </div>
      </section>

      <section className="container-page grid gap-4 pb-[clamp(3rem,6vw,4.5rem)] md:grid-cols-2">
        {c.gallery.map((g) => (
          <div key={g.src} className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] bg-sky">
            <Image src={g.src} alt={g.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
        ))}
      </section>

      <section className="container-page">
        <Link href={`/portofolio/${next.slug}`} className="group flex flex-wrap items-center justify-between gap-6 rounded-[var(--radius-card)] bg-soft p-8 hover:bg-sky">
          <div>
            <p className="kicker mb-2">Studi kasus berikutnya</p>
            <p className="text-[clamp(1.5rem,3vw,2.25rem)] leading-tight font-extrabold tracking-[-0.03em]">
              {next.client}: {next.title.charAt(0).toLowerCase() + next.title.slice(1)}
            </p>
          </div>
          <span className="inline-flex size-14 items-center justify-center rounded-full bg-primary text-white transition-transform group-hover:translate-x-1">
            <ArrowRight className="size-5" />
          </span>
        </Link>
      </section>

      <ContactCta />
    </>
  );
}
