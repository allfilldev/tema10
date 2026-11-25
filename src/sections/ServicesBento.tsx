import Link from 'next/link';
import { ArrowUpRight } from '@/components/icons';
import { SectionHead } from '@/components/ui';
import { services } from '@/content/services';
import { cn, pad } from '@/lib/utils';

// Pola warna kartu berulang: biru, lembut, kuning, lembut, gelap, lembut.
const tones = [
  { card: 'bg-primary text-white', icon: 'bg-sun text-ink' },
  { card: 'bg-soft text-ink', icon: 'bg-primary text-white' },
  { card: 'bg-sun text-ink', icon: 'bg-ink text-sun' },
  { card: 'bg-soft text-ink', icon: 'bg-primary text-white' },
  { card: 'bg-ink text-white', icon: 'bg-sun text-ink' },
  { card: 'bg-soft text-ink', icon: 'bg-primary text-white' },
];

export function ServicesBento({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section id="layanan" className="container-page py-[clamp(4rem,8vw,7rem)]">
      {withHeading && (
        <SectionHead
          kicker="Layanan"
          title="Solusi lengkap untuk brand yang ingin tumbuh."
          description="Pilih layanan sesuai kebutuhan, atau kombinasikan menjadi paket bulanan yang terintegrasi."
        />
      )}
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const t = tones[i % tones.length];
          return (
            <li key={s.slug}>
              <Link
                href={`/layanan/${s.slug}`}
                className={cn(
                  'group flex h-full min-h-[260px] flex-col justify-between gap-8 rounded-[var(--radius-card)] p-7 transition-transform duration-200 hover:-translate-y-1',
                  t.card,
                )}
              >
                <span className="flex items-start justify-between">
                  <span className={cn('inline-flex size-[52px] items-center justify-center rounded-2xl text-lg font-extrabold', t.icon)}>{pad(i + 1)}</span>
                  <ArrowUpRight className="size-6 opacity-0 transition-opacity group-hover:opacity-100" />
                </span>
                <span>
                  <span className="mb-2.5 block text-2xl leading-tight font-extrabold tracking-[-0.02em]">{s.title}</span>
                  <span className="block text-[15px] opacity-85">{s.summary}</span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
