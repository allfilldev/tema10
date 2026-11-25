import Link from 'next/link';
import { site } from '@/content/site';
import { waLink } from '@/lib/utils';
import { Logo } from './Logo';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-wrap justify-between gap-10 py-14">
        <div className="max-w-[360px] flex-[1_1_300px]">
          <Logo className="h-14" />
          <p className="mt-4 text-[15px] text-ink-2">{site.description}</p>
        </div>

        <div className="flex flex-wrap gap-x-[clamp(2rem,6vw,4.5rem)] gap-y-10 text-[15px]">
          <FooterCol title="Perusahaan">
            {[...site.nav, { label: 'Kontak', href: '/kontak' }].map((l) => (
              <Link key={l.href} href={l.href} className="text-ink-2 hover:text-primary">
                {l.label}
              </Link>
            ))}
          </FooterCol>
          <FooterCol title="Kontak" className="max-w-[280px]">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="text-ink-2 hover:text-primary">
              {site.contact.whatsappDisplay}
            </a>
            <a href={`mailto:${site.contact.email}`} className="text-ink-2 hover:text-primary">
              {site.contact.email}
            </a>
            <a href={site.contact.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-ink-2 hover:text-primary">
              {site.contact.address}
            </a>
            <span className="py-1 text-ink-2">{site.contact.hours}</span>
          </FooterCol>
          <FooterCol title="Ikuti Kami">
            {site.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-ink-2 hover:text-primary">
                {s.label}
              </a>
            ))}
          </FooterCol>
        </div>
      </div>

      <div className="container-page flex flex-wrap justify-between gap-4 pb-8 text-sm text-muted">
        <p>
          © {year} {site.name}. Seluruh hak cipta dilindungi.
        </p>
        <div className="flex gap-6">
          <Link href="/privasi" className="hover:text-ink">
            Kebijakan Privasi
          </Link>
          <Link href="/syarat-ketentuan" className="hover:text-ink">
            Syarat &amp; Ketentuan
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex flex-col gap-1.5 [&>a]:py-1 ${className ?? ''}`}>
      <p className="mb-1.5 font-extrabold">{title}</p>
      {children}
    </div>
  );
}
