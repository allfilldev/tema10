import { WhatsApp } from '@/components/icons';
import { Button } from '@/components/ui';
import { cta } from '@/content/site';
import { waLink } from '@/lib/utils';

export function ContactCta() {
  return (
    <section className="container-page py-[clamp(4rem,8vw,6.5rem)]">
      <div className="flex flex-wrap items-center justify-between gap-8 rounded-[var(--radius-panel)] bg-sun px-[clamp(1.5rem,5vw,4.5rem)] py-[clamp(2.5rem,6vw,5rem)]">
        <div className="min-w-0 flex-[1_1_480px]">
          <h2 className="mb-4 text-[clamp(2.1rem,4.6vw,4rem)] leading-[1.04] font-extrabold tracking-[-0.04em]">
            {cta.title} {cta.titleAccent}
          </h2>
          <p className="max-w-[520px] text-lg text-[#3b3200]">{cta.description}</p>
        </div>
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
