import { testimonials } from '@/content/site';

const avatarTones = ['bg-sky', 'bg-[#ffe58a]', 'bg-[#d5f5e8]'];

export function Testimonials({ title = 'Apa kata klien kami.' }: { title?: string }) {
  return (
    <section className="container-page pb-[clamp(4rem,8vw,7rem)]">
      <h2 className="mb-10 text-[clamp(1.9rem,3.8vw,3rem)] leading-[1.1] font-extrabold tracking-[-0.03em]">{title}</h2>
      <ul className="grid gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <li key={t.name}>
            <figure className="flex h-full flex-col justify-between gap-7 rounded-[var(--radius-card)] bg-soft-2 p-7">
              <blockquote className="text-[17px] leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="flex items-center gap-3">
                <span
                  className={`inline-flex size-12 items-center justify-center rounded-full font-extrabold text-ink ${avatarTones[i % avatarTones.length]}`}
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block font-bold">{t.name}</span>
                  <span className="block text-sm text-ink-2">
                    {t.role}, {t.company}
                  </span>
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
