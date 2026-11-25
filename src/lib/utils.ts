import { site } from '@/content/site';

/** Pesan WhatsApp standar All Fill Dev untuk semua tombol kontak. */
export const WA_MESSAGE = 'Halo All Fill Dev, saya sudah melihat katalog tema dan ingin konsultasi memilih tema yang cocok untuk usaha saya.';

/** Tanpa argumen: link kontak standar. Dengan argumen: dipakai form yang menyusun pesan sendiri. */
export const waLink = (message = WA_MESSAGE) =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;

export const formatDate = (iso: string) =>
  new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(iso));

export const pad = (n: number) => String(n).padStart(2, '0');

export const cn = (...classes: (string | false | null | undefined)[]) => classes.filter(Boolean).join(' ');
