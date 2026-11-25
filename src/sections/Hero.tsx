import Image from 'next/image';
import { Check } from '@/components/icons';
import { Button } from '@/components/ui';
import { hero } from '@/content/site';

export function Hero() {
  const [h1, h2] = hero.highlights ?? [];
  return (
    <section className="container-page flex flex-wrap items-center gap-[clamp(2rem,5vw,4rem)] pt-[clamp(2.5rem,7vw,6rem)] pb-[clamp(3rem,6vw,5rem)]">
      <div className="min-w-0 flex-[1_1_480px]">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-sun-soft px-3.5 py-2 text-sm font-bold text-sun-ink">
          <span className="size-2 rounded-full bg-[#ffb800]" />
          {hero.eyebrow}
        </p>
        <h1 className="text-[clamp(2.75rem,6.4vw,5.5rem)] leading-[1.02] font-extrabold tracking-[-0.04em]">
          {hero.titleLine1} {hero.titleHighlight && <span className="marker">{hero.titleHighlight}</span>} {hero.titleLine2}{' '}
          <span className="text-primary">{hero.titleAccent}</span>
        </h1>
        <p className="mt-7 mb-9 max-w-[520px] text-[clamp(1rem,1.5vw,1.2rem)] text-ink-2">{hero.description}</p>
        <div className="flex flex-wrap gap-3">
          <Button href={hero.primaryCta.href} arrow>
            {hero.primaryCta.label}
          </Button>
          <Button href={hero.secondaryCta.href} variant="outline">
            {hero.secondaryCta.label}
          </Button>
        </div>
        {hero.points && (
          <ul className="mt-10 flex flex-wrap gap-6 text-sm text-ink-2">
            {hero.points.map((p) => (
              <li key={p} className="inline-flex items-center gap-2">
                <Check className="size-[18px] text-[#1f9d55]" />
                {p}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="grid min-w-0 flex-[1_1_440px] grid-cols-2 gap-4">
        <div className="relative row-span-2 min-h-[360px] overflow-hidden rounded-[var(--radius-card)] bg-sky sm:min-h-[420px]">
          <Image src={hero.media.src} alt={hero.media.alt} fill priority sizes="(min-width: 1024px) 300px, 50vw" className="object-cover" />
        </div>
        {h1 && (
          <div className="flex min-h-[172px] flex-col justify-between gap-4 rounded-[var(--radius-card)] bg-primary p-6 text-white">
            <span className="text-sm font-semibold">{h1.label}</span>
            <span className="text-[clamp(2.25rem,4vw,3.5rem)] leading-none font-extrabold tracking-[-0.04em]">{h1.value}</span>
          </div>
        )}
        {h2 && (
          <div className="flex min-h-[172px] flex-col justify-between gap-4 rounded-[var(--radius-card)] bg-sun p-6 text-ink">
            <span className="text-sm font-semibold">{h2.label}</span>
            <span className="text-[clamp(2.25rem,4vw,3.5rem)] leading-none font-extrabold tracking-[-0.04em]">{h2.value}</span>
          </div>
        )}
      </div>
    </section>
  );
}
