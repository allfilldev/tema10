'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { site, themeVariants } from '@/content/site';
import { cn } from '@/lib/utils';
import { Close, Menu } from './icons';
import { Logo } from './Logo';
import { ThemeMenu } from './ThemeMenu';

// Halaman yang header-nya tampil di atas panel biru.
const BLUE_ROUTES = ['/tema-2'];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const blue = BLUE_ROUTES.includes(pathname);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 px-[clamp(1rem,4vw,3rem)] pt-4">
      <div
        className={cn(
          'mx-auto flex max-w-[80rem] items-center justify-between gap-3 rounded-full py-2.5 pr-2.5 pl-6 backdrop-blur-md',
          blue ? 'bg-primary/95 text-white' : 'bg-soft/95 shadow-[0_8px_30px_-12px_rgba(15,16,32,0.15)]',
        )}
      >
        <Logo light={blue} priority className="h-10 sm:h-11" />

        <nav aria-label="Navigasi utama" className="hidden items-center gap-1 text-[15px] font-semibold lg:flex">
          <ThemeMenu pathname={pathname} onBlue={blue} />
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={cn(
                'rounded-full px-4 py-2 transition-colors',
                blue ? 'hover:bg-white/15' : 'hover:bg-white',
                isActive(item.href) && 'bg-white text-primary',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/kontak"
            className={cn(
              'hidden min-h-11 items-center rounded-full px-5 text-[15px] font-bold transition-colors sm:inline-flex',
              blue ? 'bg-white text-ink hover:bg-sun' : 'bg-primary text-white hover:bg-primary-dark',
            )}
          >
            Hubungi Kami
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            className="inline-flex size-11 items-center justify-center rounded-full bg-white text-ink lg:hidden"
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 top-[84px] bottom-0 overflow-y-auto bg-white lg:hidden">
          <nav aria-label="Navigasi mobile" className="container-page flex flex-col gap-2 py-6">
            <p className="kicker mb-1">Tema</p>
            <div className="mb-3 grid grid-cols-2 gap-2">
              {themeVariants.map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  aria-current={pathname === t.href ? 'page' : undefined}
                  className={cn('rounded-2xl px-4 py-3 text-lg font-extrabold', pathname === t.href ? 'bg-sun text-ink' : 'bg-soft')}
                >
                  {t.label}
                </Link>
              ))}
            </div>
            {[...site.nav, { label: 'Kontak', href: '/kontak' }].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={cn('rounded-2xl px-5 py-4 text-2xl font-extrabold tracking-tight', isActive(item.href) ? 'bg-sky text-primary' : 'bg-soft')}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/kontak" className="mt-4 inline-flex min-h-[52px] items-center justify-center rounded-full bg-primary font-bold text-white">
              Jadwalkan Konsultasi
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
