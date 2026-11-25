import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { WhatsApp } from '@/components/icons';
import { Button, PageHeader } from '@/components/ui';
import { site } from '@/content/site';
import { waLink } from '@/lib/utils';
import { FaqList } from '@/sections/FaqList';

export const metadata: Metadata = {
  title: 'Kontak',
  description: `Hubungi ${site.name} untuk konsultasi gratis. ${site.contact.address}.`,
  alternates: { canonical: '/kontak' },
};

export default function ContactPage() {
  const rows = [
    { label: 'WhatsApp', value: site.contact.whatsappDisplay, href: waLink() },
    { label: 'Email', value: site.contact.email, href: `mailto:${site.contact.email}` },
    { label: 'Alamat', value: site.contact.address, href: site.contact.mapsUrl },
    { label: 'Jam operasional', value: site.contact.hours },
  ];

  return (
    <>
      <PageHeader
        kicker="Kontak"
        title="Mari diskusikan kebutuhan brand Anda."
        description="Konsultasi awal tidak dikenakan biaya. Tim kami akan merespons dalam 1 x 24 jam kerja."
      />

      <section className="container-page flex flex-wrap gap-[clamp(2rem,5vw,4rem)] pb-[clamp(4rem,8vw,6rem)]">
        <div className="min-w-0 flex-[1_1_340px]">
          <dl className="flex flex-col gap-3">
            {rows.map((r) => (
              <div key={r.label} className="rounded-3xl bg-soft p-6">
                <dt className="mb-1 text-sm font-semibold text-muted">{r.label}</dt>
                <dd className="text-lg font-semibold">
                  {r.href ? (
                    <a href={r.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                      {r.value}
                    </a>
                  ) : (
                    r.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <Button href={waLink()} external variant="whatsapp" className="mt-6">
            <WhatsApp /> Chat WhatsApp
          </Button>
        </div>
        <div className="min-w-0 flex-[1.4_1_440px] rounded-[var(--radius-panel)] border-2 border-line p-[clamp(1.5rem,4vw,3rem)]">
          <h2 className="mb-2 text-[28px] font-extrabold tracking-[-0.02em]">Kirim pesan</h2>
          <p className="mb-7 text-ink-2">Isi formulir berikut, pesan Anda akan diteruskan ke WhatsApp tim kami.</p>
          <ContactForm />
        </div>
      </section>

      <FaqList />
    </>
  );
}
