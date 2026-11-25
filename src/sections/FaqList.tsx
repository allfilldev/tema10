import { Plus } from '@/components/icons';
import { faqs } from '@/content/site';

export function FaqList() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  };
  return (
    <section id="faq" className="bg-soft">
      <div className="mx-auto max-w-[880px] px-[clamp(1rem,4vw,3rem)] py-[clamp(4rem,8vw,6.5rem)]">
        <h2 className="mb-8 text-center text-[clamp(1.9rem,3.8vw,3rem)] leading-[1.1] font-extrabold tracking-[-0.03em]">
          Pertanyaan yang sering diajukan
        </h2>
        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => (
            <details key={f.question} open={i === 0} className="group rounded-[20px] bg-white px-6 py-4">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-bold [&::-webkit-details-marker]:hidden">
                {f.question}
                <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-transform group-open:rotate-45">
                  <Plus className="size-4" />
                </span>
              </summary>
              <p className="mt-2 mb-1 max-w-[680px] text-ink-2">{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
}
