import Image from 'next/image';
import { SectionHead } from '@/components/ui';
import { team } from '@/content/site';

export function TeamGrid() {
  return (
    <section className="container-page py-[clamp(4rem,8vw,7rem)]">
      <SectionHead kicker="Tim Kami" title="Orang-orang di balik setiap kampanye." description="Tim muda dengan pengalaman di industri kreatif dan pemasaran digital." />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((m) => (
          <li key={m.name} className="rounded-[var(--radius-card)] bg-soft-2 p-3 pb-6">
            <div className="relative mb-5 aspect-[4/5] overflow-hidden rounded-[22px] bg-sky">
              <Image src={m.photo.src} alt={m.photo.alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="px-3">
              <h3 className="text-xl font-extrabold tracking-[-0.01em]">{m.name}</h3>
              <p className="mb-2 text-sm font-bold text-primary">{m.role}</p>
              <p className="text-[15px] text-ink-2">{m.bio}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
