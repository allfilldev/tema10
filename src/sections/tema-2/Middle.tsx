import Link from 'next/link';
import { Button } from '@/components/ui';
import { caseStudies } from '@/content/portfolio';
import { services } from '@/content/services';
import { process } from '@/content/site';
import { cn, pad } from '@/lib/utils';

export function ServicesSplit() {
  return (
    <section className="container-page flex flex-wrap gap-[clamp(2rem,5vw,4rem)] py-[clamp(4rem,8vw,6.5rem)]">
      <div className="min-w-0 flex-[1_1_340px]">
        <p className="kicker mb-3">Layanan</p>
        <h2 className="mb-4 text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] font-extrabold tracking-[-0.035em]">Satu tim untuk semua kebutuhan digital Anda.</h2>
        <p className="mb-7 text-ink-2">Dari strategi hingga eksekusi, setiap layanan dapat berdiri sendiri atau digabungkan dalam paket bulanan.</p>
        <Button href="/layanan">Lihat semua layanan</Button>
      </div>
      <ul className="grid min-w-0 flex-[1.4_1_520px] gap-3 sm:grid-cols-2">
        {services.map((s, i) => (
          <li key={s.slug}>
            <Link href={`/layanan/${s.slug}`} className="group flex h-full items-start gap-4 rounded-[22px] bg-soft-2 p-5 transition-colors hover:bg-sky">
              <span
                className={cn(
                  'inline-flex size-11 shrink-0 items-center justify-center rounded-[14px] font-extrabold',
                  i % 2 === 0 ? 'bg-primary text-white' : 'bg-sun text-ink',
                )}
              >
                {pad(i + 1)}
              </span>
              <span>
                <span className="mb-1 block text-[17px] font-extrabold group-hover:text-primary">{s.title}</span>
                <span className="block text-sm text-ink-2">{s.summary}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

const workTones = ['bg-primary text-white', 'bg-sun text-ink', 'bg-[#e9e4ff] text-ink', 'bg-[#d5f5e8] text-ink'];

export function WorksDark() {
  return (
    <section className="bg-ink text-white">
      <div className="container-page py-[clamp(4rem,8vw,6.5rem)]">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] font-extrabold tracking-[-0.035em]">
            Hasil kerja <span className="text-sun">berbicara.</span>
          </h2>
          <Link
            href="/portofolio"
            className="inline-flex min-h-12 items-center rounded-full border-2 border-white px-5 font-bold transition-colors hover:bg-white hover:text-ink"
          >
            Lihat portofolio
          </Link>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {caseStudies.map((c, i) => (
            <li key={c.slug}>
              <Link
                href={`/portofolio/${c.slug}`}
                className={cn('flex h-full min-h-[320px] flex-col justify-between gap-6 rounded-[var(--radius-card)] p-6 transition-transform hover:-translate-y-1', workTones[i % 4])}
              >
                <span className="text-[13px] font-bold opacity-90">{c.tags.join(' · ')}</span>
                <span>
                  <span className="block text-[52px] leading-none font-extrabold tracking-[-0.04em]">{c.results[0].value}</span>
                  <span className="mt-1.5 block text-sm opacity-90">{c.results[0].label}</span>
                </span>
                <span className="text-[19px] leading-snug font-extrabold">
                  {c.client}: {c.title.charAt(0).toLowerCase() + c.title.slice(1)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ProcessRow() {
  return (
    <section className="container-page pt-[clamp(4rem,8vw,6.5rem)]">
      <p className="kicker mb-3">Alur Kerja</p>
      <h2 className="mb-9 text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] font-extrabold tracking-[-0.035em]">Empat langkah yang jelas.</h2>
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {process.map((s, i) => (
          <li key={s.title} className="flex items-start gap-4 rounded-3xl border-2 border-line p-5">
            <span
              className={cn(
                'inline-flex size-10 shrink-0 items-center justify-center rounded-full font-extrabold',
                i % 2 === 0 ? 'bg-primary text-white' : 'bg-sun text-ink',
              )}
            >
              {i + 1}
            </span>
            <span>
              <span className="mb-1 block text-lg font-extrabold">{s.title}</span>
              <span className="block text-sm text-ink-2">{s.description}</span>
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
