import { Check, WhatsApp } from '@/components/icons';
import { Button } from '@/components/ui';
import { plans, testimonials } from '@/content/site';
import { cn, waLink } from '@/lib/utils';

export function PlansPanel() {
  return (
    <section className="container-page py-[clamp(4rem,8vw,6.5rem)]">
      <div className="rounded-[var(--radius-panel)] bg-soft p-[clamp(1.5rem,5vw,4rem)]">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="kicker mb-3">Paket Bulanan</p>
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] font-extrabold tracking-[-0.035em]">Pilih paket sesuai tahap bisnis Anda.</h2>
          </div>
          <p className="max-w-[340px] text-[15px] text-ink-2">Harga belum termasuk anggaran iklan dan pajak.</p>
        </div>
        <ul className="grid gap-4 lg:grid-cols-3">
          {plans.map((p) => (
            <li key={p.name} className={cn('flex flex-col gap-4 rounded-[var(--radius-card)] p-7', p.popular ? 'bg-primary text-white' : 'bg-white text-ink')}>
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-xl font-extrabold">{p.name}</h3>
                {p.popular && <span className="rounded-full bg-sun px-3 py-1 text-xs font-extrabold text-ink">Paling diminati</span>}
              </div>
              <p>
                <span className="text-4xl font-extrabold tracking-[-0.03em]">{p.price}</span>
                <span className={cn('text-sm', p.popular ? 'text-white/85' : 'text-ink-2')}> {p.period}</span>
              </p>
              <ul className="flex flex-1 flex-col gap-2 text-[15px]">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-[18px] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button href={waLink()} external variant={p.popular ? 'sun' : 'dark'} className="min-h-12 w-full">
                Pilih Paket
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const quoteTones = ['bg-sun-soft', 'bg-sky'];

export function TestimonialPair() {
  return (
    <section className="container-page pb-[clamp(4rem,8vw,6.5rem)]">
      <ul className="grid gap-4 md:grid-cols-2">
        {testimonials.slice(0, 2).map((t, i) => (
          <li key={t.name}>
            <figure className={cn('flex h-full flex-col justify-between gap-5 rounded-[var(--radius-card)] p-7', quoteTones[i])}>
              <blockquote className="text-xl leading-[1.45] font-bold tracking-[-0.01em]">“{t.quote}”</blockquote>
              <figcaption className="text-[15px]">
                <strong>{t.name}</strong> · {t.role}, {t.company}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function CtaOutline() {
  return (
    <section className="container-page py-[clamp(4rem,8vw,6.5rem)]">
      <div className="flex flex-wrap items-center justify-between gap-6 rounded-[var(--radius-panel)] border-2 border-line p-[clamp(1.5rem,5vw,4rem)]">
        <h2 className="flex-[1_1_480px] text-[clamp(1.9rem,4vw,3.25rem)] leading-[1.08] font-extrabold tracking-[-0.035em]">
          Siap membawa brand Anda ke level berikutnya?
        </h2>
        <div className="flex flex-wrap gap-3">
          <Button href={waLink()} external variant="whatsapp" className="min-h-14 font-extrabold">
            <WhatsApp /> Chat WhatsApp
          </Button>
          <Button href="/kontak" className="min-h-14 font-extrabold">
            Isi Formulir
          </Button>
        </div>
      </div>
    </section>
  );
}
