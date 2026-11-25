'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { themeVariants } from '@/content/site';
import { cn } from '@/lib/utils';

/** Dropdown "Tema" di navbar desktop untuk berpindah antar varian homepage. */
export function ThemeMenu({ pathname, onBlue }: { pathname: string; onBlue?: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const activeTheme = themeVariants.some((t) => t.href === pathname);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="menu-tema"
        className={cn(
          'inline-flex cursor-pointer items-center gap-1.5 rounded-full px-4 py-2 transition-colors',
          onBlue ? 'hover:bg-white/15' : 'hover:bg-white',
          activeTheme && (onBlue ? 'bg-white/15' : 'bg-white text-primary'),
        )}
      >
        Tema
        <svg className={cn('size-3.5 transition-transform', open && 'rotate-180')} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div
          id="menu-tema"
          className="absolute top-full left-1/2 z-50 mt-3 flex w-[220px] -translate-x-1/2 flex-col gap-1.5 rounded-3xl bg-white p-2.5 text-ink shadow-[0_24px_60px_-20px_rgba(15,16,32,0.3)]"
        >
          {themeVariants.map((t) => {
            const active = t.href === pathname;
            return (
              <Link
                key={t.href}
                href={t.href}
                aria-current={active ? 'page' : undefined}
                className={cn('block rounded-[18px] px-4 py-3.5 transition-colors', active ? 'bg-soft' : 'hover:bg-soft')}
              >
                <span className="flex items-center gap-2 text-[17px] font-extrabold">
                  {t.label}
                  {active && <span className="rounded-full bg-sun px-2.5 py-0.5 text-[11px] font-extrabold">Aktif</span>}
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
