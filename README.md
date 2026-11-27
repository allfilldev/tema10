# Arunika Creative (Tema Company Profile: Agency Gen Z)

Tema showcase Bratamedia untuk digital/creative agency dengan target milenial dan Gen Z. Bahasa sedikit formal, warna cerah. Semua konten statis, tanpa CMS.

## Jalankan

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # cek sebelum deploy
```

Stack: Next.js 15, React 19, TypeScript 5 (jangan naik ke TS 7), Tailwind CSS 4, pnpm.

## Ganti konten

Semua teks ada di `src/content/`. UI tidak perlu disentuh.

| File | Isi |
|---|---|
| `site.ts` | Nama brand, kontak, WhatsApp, menu, hero, tentang, stats, proses, paket harga, tim, testimoni, FAQ, CTA |
| `services.ts` | Daftar layanan (otomatis jadi halaman `/layanan/[slug]`) |
| `portfolio.ts` | Studi kasus (otomatis jadi halaman `/portofolio/[slug]`) |
| `articles.ts` | Artikel (otomatis jadi halaman `/artikel/[slug]`) |
| `legal.ts` | Kebijakan privasi dan syarat ketentuan |
| `types.ts` | Format konten standar, sama untuk semua tema |

## Ganti gambar

Gambar ada di `public/images/`. Gambar sekarang masih placeholder abstrak. Ganti dengan foto asli memakai **nama file dan folder yang sama** (format `.webp`, atau ubah path di file konten).

| Folder | Ukuran disarankan |
|---|---|
| `hero.webp` | 900 x 1100 |
| `about.webp` | 1200 x 1500 |
| `services/` | 1200 x 900 |
| `work/*-cover.webp` | 1600 x 1100 |
| `work/*-1.webp`, `*-2.webp` | 1200 x 900 |
| `articles/` | 1200 x 800 |
| `team/` | 600 x 750 |

## Ganti warna dan font

Token ada di `src/app/globals.css` (blok `@theme`). Font Plus Jakarta Sans di-self-host di `src/fonts/`.

## Deploy ke Vercel

1. Push folder ini ke repo GitHub studio.
2. Di Vercel: Add New Project, pilih repo, framework otomatis terdeteksi Next.js. Tidak perlu environment variable.
3. Setelah dapat domain, ubah `site.url` di `src/content/site.ts` supaya sitemap dan meta tag benar.

## Struktur

```
src/
├── app/          halaman (beranda, tentang, layanan, portofolio, paket, artikel, kontak, legal), sitemap, robots, OG image
├── components/   Header, Footer, form kontak, tombol WhatsApp, elemen UI
├── content/      semua konten (satu-satunya yang diubah per klien)
├── sections/     section halaman (Hero, Layanan, Karya, FAQ, dll.)
└── fonts/        Plus Jakarta Sans
```

Form kontak versi showcase membuka WhatsApp dengan pesan terisi otomatis, tanpa backend.

- Logo All Fill Dev: satu warna, ganti warnanya lewat token `--color-logo` (dan `--color-logo-light` untuk latar gelap) di `src/app/globals.css`
