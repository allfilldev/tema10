import { stats } from '@/content/site';

export function StatsPanel({
  title = 'Hasil yang dapat Anda ukur, bukan sekadar janji.',
  description = 'Setiap kampanye memiliki target yang disepakati di awal dan dilaporkan secara berkala.',
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="container-page">
      <div className="flex flex-wrap items-center gap-10 rounded-[var(--radius-panel)] bg-primary px-[clamp(1.5rem,5vw,4.5rem)] py-[clamp(2.5rem,6vw,5rem)] text-white">
        <div className="min-w-0 flex-[1_1_360px]">
          <h2 className="mb-4 text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.1] font-extrabold tracking-[-0.03em]">{title}</h2>
          <p className="max-w-[440px] text-white/90">{description}</p>
        </div>
        <dl className="grid min-w-0 flex-[1_1_480px] grid-cols-2 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse rounded-3xl bg-ink/15 p-6">
              <dt className="mt-2.5 text-sm text-white">{s.label}</dt>
              <dd className="text-[clamp(2.25rem,4vw,3.25rem)] leading-none font-extrabold tracking-[-0.04em] text-sun">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
