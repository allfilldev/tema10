import { clients } from '@/content/site';

export function ClientLogos() {
  return (
    <section aria-label="Klien kami" className="container-page pt-[clamp(3.5rem,7vw,5.5rem)]">
      <p className="mb-6 text-center text-[15px] font-semibold text-ink-2">Dipercaya lebih dari 150 brand lokal dan nasional</p>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {clients.map((c) => (
          <li key={c.name} className="flex h-16 items-center justify-center rounded-2xl bg-soft-2 font-extrabold tracking-[-0.01em] text-muted">
            {c.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
