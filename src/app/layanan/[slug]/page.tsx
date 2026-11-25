import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, Check } from '@/components/icons';
import { Button } from '@/components/ui';
import { getService, services } from '@/content/services';
import { waLink } from '@/lib/utils';
import { ContactCta } from '@/sections/ContactCta';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => services.map((s) => ({ slug: s.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getService((await params).slug);
  if (!s) return {};
  return { title: s.title, description: s.summary, alternates: { canonical: `/layanan/${s.slug}` } };
}

export default async function ServiceDetailPage({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) notFound();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="container-page pt-[clamp(2.5rem,6vw,5rem)]">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
          <Link href="/layanan" className="hover:text-primary">
            Layanan
          </Link>{' '}
          / <span className="font-semibold text-ink">{service.title}</span>
        </nav>
        <div className="flex flex-wrap items-end gap-[clamp(2rem,5vw,4rem)]">
          <div className="min-w-0 flex-[1_1_480px]">
            <h1 className="text-[clamp(2.4rem,5.6vw,4.75rem)] leading-[1.04] font-extrabold tracking-[-0.04em]">{service.title}</h1>
            <p className="mt-5 max-w-2xl text-[clamp(1rem,1.5vw,1.2rem)] text-ink-2">{service.summary}</p>
          </div>
          <div className="relative aspect-[4/3] min-w-0 flex-[1_1_360px] overflow-hidden rounded-[var(--radius-card)] bg-sky">
            <Image src={service.image.src} alt={service.image.alt} fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="container-page flex flex-wrap gap-[clamp(2rem,5vw,4rem)] py-[clamp(3.5rem,7vw,6rem)]">
        <div className="min-w-0 flex-[2_1_480px]">
          <p className="mb-10 text-[clamp(1.1rem,1.7vw,1.3rem)] leading-relaxed">{service.description}</p>
          <h2 className="kicker mb-4">Yang Anda dapatkan</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {service.deliverables.map((d) => (
              <li key={d} className="flex items-center gap-3 rounded-2xl bg-soft px-5 py-4 font-semibold">
                <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  <Check className="size-4" />
                </span>
                {d}
              </li>
            ))}
          </ul>
        </div>
        <aside className="min-w-0 flex-[1_1_300px] self-start rounded-[var(--radius-card)] bg-primary p-8 text-white lg:sticky lg:top-28">
          <p className="mb-2 text-sm font-semibold text-white/85">Mulai dari</p>
          <p className="mb-5 text-3xl font-extrabold tracking-[-0.03em] text-sun">{service.priceFrom}</p>
          <p className="mb-7 text-sm text-white/90">Harga akhir disesuaikan dengan kebutuhan. Konsultasi awal tidak dikenakan biaya.</p>
          <Button href={waLink()} external variant="sun" className="w-full">
            Konsultasikan via WhatsApp
          </Button>
        </aside>
      </section>

      <section className="container-page pb-[clamp(2rem,4vw,3rem)]">
        <h2 className="mb-6 text-2xl font-extrabold">Layanan lainnya</h2>
        <ul className="grid gap-4 md:grid-cols-3">
          {others.map((s) => (
            <li key={s.slug}>
              <Link href={`/layanan/${s.slug}`} className="group flex h-full items-start justify-between gap-4 rounded-3xl bg-soft p-6 hover:bg-sky">
                <span>
                  <span className="mb-1 block text-lg font-extrabold group-hover:text-primary">{s.title}</span>
                  <span className="block text-sm text-ink-2">{s.summary}</span>
                </span>
                <ArrowUpRight className="size-5 shrink-0" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <ContactCta />
    </>
  );
}
