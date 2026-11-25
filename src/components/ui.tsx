import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowRight } from './icons';
import { cn } from '@/lib/utils';

type BtnProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'sun' | 'dark' | 'whatsapp' | 'white';
  arrow?: boolean;
  external?: boolean;
  className?: string;
};

const variants = {
  primary: 'bg-primary text-white hover:bg-primary-dark',
  outline: 'border-2 border-ink text-ink hover:bg-ink hover:text-white',
  sun: 'bg-sun text-ink hover:bg-white',
  dark: 'bg-ink text-white hover:bg-primary',
  whatsapp: 'bg-wa text-ink hover:bg-wa-dark',
  white: 'bg-white text-ink hover:bg-sun',
};

export function Button({ href, children, variant = 'primary', arrow, external, className }: BtnProps) {
  const cls = cn(
    'inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full px-6 py-3 font-bold transition-colors duration-200',
    variants[variant],
    className,
  );
  const content = (
    <>
      {children}
      {arrow && <ArrowRight className="size-[18px]" />}
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {content}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}

export function SectionHead({
  kicker,
  title,
  description,
  center,
  action,
}: {
  kicker: string;
  title: string;
  description?: string;
  center?: boolean;
  action?: ReactNode;
}) {
  if (center) {
    return (
      <div className="mx-auto mb-12 max-w-[700px] text-center">
        <p className="kicker mb-3">{kicker}</p>
        <h2 className="text-[clamp(1.9rem,3.8vw,3rem)] leading-[1.1] font-extrabold tracking-[-0.03em]">{title}</h2>
        {description && <p className="mt-4 text-ink-2">{description}</p>}
      </div>
    );
  }
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
      <div className="max-w-[660px]">
        <p className="kicker mb-3">{kicker}</p>
        <h2 className="text-[clamp(2rem,4.2vw,3.5rem)] leading-[1.08] font-extrabold tracking-[-0.035em]">{title}</h2>
      </div>
      {action ?? (description && <p className="max-w-[400px] text-ink-2">{description}</p>)}
    </div>
  );
}

export function PageHeader({ kicker, title, description }: { kicker: string; title: string; description?: string }) {
  return (
    <section className="container-page pt-[clamp(2.5rem,6vw,5rem)] pb-[clamp(2rem,4vw,3.5rem)]">
      <div className="rounded-[var(--radius-panel)] bg-soft px-[clamp(1.5rem,5vw,4.5rem)] py-[clamp(2.5rem,6vw,5rem)]">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-sun-soft px-3.5 py-2 text-sm font-bold text-sun-ink">
          <span className="size-2 rounded-full bg-[#ffb800]" />
          {kicker}
        </p>
        <h1 className="max-w-4xl text-[clamp(2.4rem,5.6vw,4.75rem)] leading-[1.04] font-extrabold tracking-[-0.04em]">{title}</h1>
        {description && <p className="mt-5 max-w-2xl text-[clamp(1rem,1.5vw,1.15rem)] text-ink-2">{description}</p>}
      </div>
    </section>
  );
}

export function Tag({ children, tone = 'sky' }: { children: ReactNode; tone?: 'sky' | 'sun' }) {
  return (
    <span
      className={cn(
        'rounded-full px-3 py-1.5 text-[13px] font-bold',
        tone === 'sky' ? 'bg-sky text-sky-ink' : 'bg-sun-soft text-sun-ink',
      )}
    >
      {children}
    </span>
  );
}
