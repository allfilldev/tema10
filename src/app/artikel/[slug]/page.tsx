import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Tag } from '@/components/ui';
import { articles, getArticle } from '@/content/articles';
import { site } from '@/content/site';
import { formatDate } from '@/lib/utils';
import { ContactCta } from '@/sections/ContactCta';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => articles.map((a) => ({ slug: a.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const a = getArticle((await params).slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.excerpt,
    alternates: { canonical: `/artikel/${a.slug}` },
    openGraph: { type: 'article', publishedTime: a.date, images: [a.cover.src] },
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const a = getArticle((await params).slug);
  if (!a) notFound();
  const related = articles.filter((x) => x.slug !== a.slug).slice(0, 2);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.excerpt,
    datePublished: a.date,
    image: `${site.url}${a.cover.src}`,
    publisher: { '@type': 'Organization', name: site.name },
  };

  return (
    <>
      <article>
        <header className="mx-auto max-w-[820px] px-[clamp(1rem,4vw,3rem)] pt-[clamp(2.5rem,6vw,5rem)] pb-10">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
            <Link href="/artikel" className="hover:text-primary">
              Artikel
            </Link>
          </nav>
          <div className="mb-5 flex flex-wrap items-center gap-3 text-sm text-muted">
            <Tag>{a.category}</Tag>
            <time dateTime={a.date}>{formatDate(a.date)}</time>· {a.readingMinutes} menit baca
          </div>
          <h1 className="text-[clamp(2.2rem,5vw,3.75rem)] leading-[1.06] font-extrabold tracking-[-0.035em]">{a.title}</h1>
          <p className="mt-5 text-lg text-ink-2">{a.excerpt}</p>
        </header>

        <div className="container-page">
          <div className="relative mx-auto aspect-[2/1] max-w-[1040px] overflow-hidden rounded-[var(--radius-panel)] bg-sky">
            <Image src={a.cover.src} alt={a.cover.alt} fill priority sizes="(min-width: 1040px) 1040px, 100vw" className="object-cover" />
          </div>
        </div>

        <div className="mx-auto max-w-[720px] px-[clamp(1rem,4vw,3rem)] py-[clamp(3rem,6vw,4.5rem)] text-[18px] leading-[1.75] text-ink-2">
          {a.body.map((block, i) => (
            <section key={i} className="mb-8">
              {block.heading && <h2 className="mb-3 text-[26px] leading-tight font-extrabold tracking-[-0.02em] text-ink">{block.heading}</h2>}
              {block.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="mb-5">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
      </article>

      <section className="container-page">
        <h2 className="mb-6 text-2xl font-extrabold">Baca juga</h2>
        <ul className="grid gap-5 md:grid-cols-2">
          {related.map((r) => (
            <li key={r.slug}>
              <Link href={`/artikel/${r.slug}`} className="group block rounded-3xl bg-soft p-7 hover:bg-sky">
                <p className="mb-2 text-[13px] text-muted">{formatDate(r.date)}</p>
                <p className="text-xl leading-snug font-extrabold group-hover:text-primary">{r.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <ContactCta />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
