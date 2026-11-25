import type { Service } from './types';

const img = (slug: string, alt: string) => ({ src: `/images/services/${slug}.webp`, alt });

export const services: Service[] = [
  {
    slug: 'social-media-management',
    title: 'Social Media Management',
    summary: 'Strategi, produksi, dan pengelolaan Instagram serta TikTok secara konsisten.',
    description:
      'Kami mengelola media sosial Anda dari perencanaan hingga publikasi. Setiap bulan diawali dengan kalender konten yang Anda setujui, kemudian tim kami memproduksi, memublikasikan, dan memantau interaksi audiens.',
    deliverables: ['Riset audiens dan kompetitor', 'Kalender konten bulanan', 'Desain feed, carousel, dan reels', 'Copywriting dan riset tagar', 'Laporan performa bulanan'],
    priceFrom: 'Rp3,9 juta / bulan',
    image: img('social-media-management', 'Perencanaan konten media sosial'),
  },
  {
    slug: 'branding',
    title: 'Branding & Identitas',
    summary: 'Logo, sistem visual, dan panduan brand yang relevan bagi audiens muda.',
    description:
      'Identitas yang kuat membuat brand mudah dikenali. Kami memulai dengan workshop dan riset, kemudian merancang logo serta sistem visual yang siap digunakan di seluruh kanal.',
    deliverables: ['Workshop brand', 'Logo utama dan variasi', 'Palet warna dan tipografi', 'Brand guideline', 'Template media sosial'],
    priceFrom: 'Rp8,5 juta / proyek',
    image: img('branding', 'Proses perancangan identitas visual'),
  },
  {
    slug: 'konten-video',
    title: 'Produksi Konten Video',
    summary: 'Video pendek, reels, dan konten vertikal yang dirancang untuk performa.',
    description:
      'Konten video pendek adalah bahasa utama Gen Z. Tim kami menangani konsep, naskah, pengambilan gambar, hingga penyuntingan dengan format yang sesuai untuk setiap platform.',
    deliverables: ['Konsep dan naskah', 'Produksi di studio atau lokasi', 'Penyuntingan dan subtitle', 'Format vertikal dan horizontal', 'Rekomendasi musik dan tren'],
    priceFrom: 'Rp3 juta / sesi',
    image: img('konten-video', 'Produksi konten video'),
  },
  {
    slug: 'iklan-digital',
    title: 'Iklan Digital',
    summary: 'Kampanye Meta Ads, TikTok Ads, dan Google Ads berbasis data.',
    description:
      'Kami menyusun kampanye berdasarkan tujuan bisnis Anda, baik penjualan, prospek, maupun kunjungan toko. Iklan dioptimasi setiap minggu dan dilaporkan dengan metrik yang mudah dipahami.',
    deliverables: ['Riset audiens dan struktur kampanye', 'Materi iklan', 'Pemasangan pixel dan konversi', 'Optimasi mingguan', 'Laporan ROAS dan biaya per hasil'],
    priceFrom: 'Rp2,5 juta / bulan',
    image: img('iklan-digital', 'Dasbor performa iklan'),
  },
  {
    slug: 'kol-kreator',
    title: 'KOL & Kreator',
    summary: 'Kolaborasi dengan kreator yang audiensnya sesuai dengan target Anda.',
    description:
      'Kami memilih kreator berdasarkan data audiens, bukan sekadar jumlah pengikut. Seluruh proses, mulai dari brief, negosiasi, hingga laporan hasil, kami tangani.',
    deliverables: ['Kurasi kreator berbasis data', 'Brief dan konsep konten', 'Negosiasi dan kontrak', 'Pemantauan jadwal tayang', 'Laporan jangkauan dan konversi'],
    priceFrom: 'Rp3,5 juta / kampanye',
    image: img('kol-kreator', 'Kolaborasi dengan kreator konten'),
  },
  {
    slug: 'website',
    title: 'Website & Landing Page',
    summary: 'Halaman yang cepat, responsif, dan terhubung langsung ke WhatsApp.',
    description:
      'Website company profile atau landing page kampanye yang ringan, mudah ditemukan di Google, dan mengarahkan pengunjung langsung ke WhatsApp atau formulir.',
    deliverables: ['Desain sesuai identitas brand', 'Penulisan konten halaman', 'Integrasi WhatsApp dan formulir', 'SEO dasar dan analitik', 'Domain dan hosting tahun pertama'],
    priceFrom: 'Rp4,5 juta / proyek',
    image: img('website', 'Tampilan website di laptop dan ponsel'),
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
