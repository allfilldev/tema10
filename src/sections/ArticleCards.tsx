import Image from 'next/image';
import Link from 'next/link';
import { Button, SectionHead, Tag } from '@/components/ui';
import { articles } from '@/content/articles';
import { formatDate } from '@/lib/utils';

export function ArticleCards({ withHeading = true, limit }: { withHeading?: boolean; limit?: number }) {
  const items = limit ? articles.slice(0, limit) : articles;
  return (
    <section className="container-page py-[clamp(4rem,8vw,7rem)]">
      {withHeading && (
        <SectionHead
          kicker="Artikel"
          title="Wawasan untuk brand Anda."
          action={
            <Button href="/artikel" variant="outline" className="min-h-12">
              Semua artikel
            </Button>
          }
        />
      )}
      <ul className="grid gap-6 md:grid-cols-3">
        {items.map((a) => (
          <li key={a.slug}>
            <Link href={`/artikel/${a.slug}`} className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-soft-2">
              <div className="relative aspect-[3/2] bg-sky">
                <Image
                  src={a.cover.src}
                  alt={a.cover.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex flex-wrap items-center gap-3 text-[13px] text-muted">
                  <Tag>{a.category}</Tag>
                  {formatDate(a.date)}
                </div>
                <h3 className="text-xl leading-snug font-extrabold tracking-[-0.01em] group-hover:text-primary">{a.title}</h3>
                <p className="text-[15px] text-ink-2">{a.excerpt}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
