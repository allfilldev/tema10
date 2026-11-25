import { Check } from '@/components/icons';
import { Button, SectionHead } from '@/components/ui';
import { plans } from '@/content/site';
import { cn, waLink } from '@/lib/utils';

export function Plans({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section id="paket" className="container-page py-[clamp(4rem,8vw,7rem)]">
      {withHeading && <SectionHead center kicker="Paket Bulanan" title="Investasi yang sesuai dengan tahap bisnis Anda." />}
      <ul className="grid items-stretch gap-5 lg:grid-cols-3">
        {plans.map((p) => (
          <li
            key={p.name}
            className={cn(
              'flex flex-col gap-5 rounded-[32px] border-2 p-8',
              p.popular ? 'border-primary bg-primary text-white' : 'border-line bg-white text-ink',
            )}
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-[22px] font-extrabold">{p.name}</h3>
              {p.popular && <span className="rounded-full bg-sun px-3 py-1.5 text-xs font-extrabold text-ink">Paling diminati</span>}
            </div>
            <p>
              <span className="text-[40px] font-extrabold tracking-[-0.03em]">{p.price}</span>
              <span className={cn('text-[15px]', p.popular ? 'text-white/85' : 'text-ink-2')}> {p.period}</span>
            </p>
            <p className={cn('text-[15px]', p.popular ? 'text-white/90' : 'text-ink-2')}>{p.description}</p>
            <ul className="flex flex-1 flex-col gap-2.5 text-[15px]">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 size-[18px] shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Button
              href={waLink()}
              external
              variant={p.popular ? 'sun' : 'dark'}
              className="min-h-12 w-full"
            >
              Pilih Paket
            </Button>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-center text-sm text-muted">Harga belum termasuk anggaran iklan dan pajak. Paket dapat disesuaikan dengan kebutuhan Anda.</p>
    </section>
  );
}
