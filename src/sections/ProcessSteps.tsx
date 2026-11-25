import { SectionHead } from '@/components/ui';
import { process } from '@/content/site';
import { cn } from '@/lib/utils';

export function ProcessSteps() {
  return (
    <section className="bg-soft">
      <div className="container-page py-[clamp(4rem,8vw,6.5rem)]">
        <SectionHead center kicker="Alur Kerja" title="Proses yang jelas dari awal hingga laporan." />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <li key={step.title} className="rounded-3xl bg-white p-7">
              <span
                className={cn(
                  'mb-6 inline-flex size-12 items-center justify-center rounded-full text-lg font-extrabold',
                  i % 2 === 0 ? 'bg-primary text-white' : 'bg-sun text-ink',
                )}
              >
                {i + 1}
              </span>
              <h3 className="mb-2 text-xl font-extrabold tracking-[-0.01em]">{step.title}</h3>
              <p className="text-[15px] text-ink-2">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
