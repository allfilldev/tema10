import Image from 'next/image';
import Link from 'next/link';
import { Button, SectionHead, Tag } from '@/components/ui';
import { caseStudies } from '@/content/portfolio';

export function WorkGrid({ withHeading = true, limit }: { withHeading?: boolean; limit?: number }) {
  const items = limit ? caseStudies.slice(0, limit) : caseStudies;
  return (
    <section id="karya" className="container-page py-[clamp(4rem,8vw,7rem)]">
      {withHeading && (
        <SectionHead
          kicker="Portofolio"
          title="Karya pilihan kami."
          action={
            <Button href="/portofolio" variant="outline" className="min-h-12">
              Lihat semua karya
            </Button>
          }
        />
      )}
      <ul className="grid gap-x-6 gap-y-12 md:grid-cols-2">
        {items.map((c) => (
          <li key={c.slug}>
            <Link href={`/portofolio/${c.slug}`} className="group block">
              <div className="relative mb-5 aspect-[16/11] overflow-hidden rounded-[var(--radius-card)] bg-sky">
                <Image
                  src={c.cover.src}
                  alt={c.cover.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="mb-3 flex flex-wrap gap-2">
                <Tag>{c.tags[0]}</Tag>
                {c.tags[1] && <Tag tone="sun">{c.tags[1]}</Tag>}
              </div>
              <h3 className="mb-2 text-2xl leading-tight font-extrabold tracking-[-0.02em] group-hover:text-primary">
                {c.client}: {c.title.charAt(0).toLowerCase() + c.title.slice(1)}
              </h3>
              <p className="text-[15px] text-ink-2">{c.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
