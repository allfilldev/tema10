import type { LegalDoc } from '@/content/legal';
import { formatDate } from '@/lib/utils';

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <article className="mx-auto max-w-[760px] px-[clamp(1rem,4vw,3rem)] py-[clamp(3rem,7vw,5.5rem)]">
      <h1 className="text-[clamp(2.2rem,5vw,3.75rem)] leading-[1.06] font-extrabold tracking-[-0.035em]">{doc.title}</h1>
      <p className="mt-4 mb-12 text-sm text-muted">Terakhir diperbarui {formatDate(doc.updated)}</p>
      {doc.sections.map((s) => (
        <section key={s.heading} className="mb-10">
          <h2 className="mb-3 text-2xl font-extrabold tracking-[-0.02em]">{s.heading}</h2>
          <p className="text-[17px] leading-relaxed text-ink-2">{s.body}</p>
        </section>
      ))}
    </article>
  );
}
