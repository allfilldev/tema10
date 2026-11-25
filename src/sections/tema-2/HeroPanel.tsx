import { ContactForm } from '@/components/ContactForm';
import { clients, stats } from '@/content/site';

export function HeroPanel() {
  return (
    <>
      {/* Panel biru naik ke belakang header supaya navbar terlihat menyatu dengan hero. */}
      <section className="-mt-[84px] px-[clamp(1rem,4vw,3rem)] pt-4">
        <div className="mx-auto max-w-[84rem] rounded-[var(--radius-panel)] bg-primary px-[clamp(1rem,3vw,2rem)] pt-[calc(84px+clamp(2rem,5vw,4rem))] pb-[clamp(2.5rem,6vw,5rem)] text-white">
          <div className="flex flex-wrap items-center gap-[clamp(2rem,5vw,4rem)] px-[clamp(0rem,2vw,1.5rem)]">
            <div className="min-w-0 flex-[1_1_520px]">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-2 text-sm font-bold">
                <span className="size-2 rounded-full bg-sun" />
                Digital &amp; Creative Agency, Semarang
              </p>
              <h1 className="text-[clamp(2.6rem,6vw,5rem)] leading-[1.04] font-extrabold tracking-[-0.04em]">
                Tumbuhkan brand Anda bersama <span className="text-sun">generasi digital.</span>
              </h1>
              <p className="mt-6 mb-8 max-w-[520px] text-lg text-sky">
                Strategi konten, kampanye iklan, dan identitas visual yang relevan bagi milenial dan Gen Z, dengan hasil yang terukur setiap bulan.
              </p>
              <div className="flex flex-wrap items-center gap-5">
                <div className="flex" aria-hidden="true">
                  {['bg-sky', 'bg-[#ffe58a]', 'bg-[#d5f5e8]'].map((c, i) => (
                    <span key={c} className={`size-11 rounded-full border-[3px] border-primary ${c} ${i ? '-ml-3' : ''}`} />
                  ))}
                </div>
                <p className="text-[15px] text-sky">
                  <strong className="text-white">150+ brand</strong> telah bekerja sama dengan kami
                </p>
              </div>
            </div>
            <div className="min-w-0 flex-[1_1_400px] rounded-[32px] bg-sun p-[clamp(1.5rem,3vw,2.25rem)] text-ink">
              <h2 className="text-[26px] font-extrabold tracking-[-0.02em]">Konsultasi gratis</h2>
              <p className="mb-5 text-sm text-[#3b3200]">Kami akan menghubungi Anda dalam 1 x 24 jam kerja.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="container-page pt-[clamp(2.5rem,5vw,4rem)]">
        <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse rounded-3xl border-2 border-line p-6">
              <dt className="mt-2 text-sm text-ink-2">{s.label}</dt>
              <dd className="text-[clamp(2rem,3.5vw,2.5rem)] leading-none font-extrabold tracking-[-0.04em] text-primary">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-label="Klien kami" className="container-page pt-10">
        <p className="mb-4 text-center text-[15px] font-semibold text-ink-2">Dipercaya lebih dari 150 brand lokal dan nasional</p>
        <ul className="flex flex-wrap justify-center gap-3">
          {clients.map((c) => (
            <li key={c.name} className="rounded-full bg-soft-2 px-6 py-3 font-extrabold text-muted">
              {c.name}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
