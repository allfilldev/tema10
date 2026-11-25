import type { CaseStudy } from './types';

const img = (slug: string, n: string, alt: string) => ({ src: `/images/work/${slug}-${n}.webp`, alt });

export const caseStudies: CaseStudy[] = [
  {
    slug: 'glowra',
    client: 'Glowra',
    title: 'Peluncuran sunscreen untuk Gen Z',
    category: 'Iklan Digital',
    tags: ['Iklan Digital', 'KOL'],
    summary: '2,4 juta tayangan dan 3.100 penjualan dalam 30 hari.',
    challenge:
      'Glowra meluncurkan sunscreen pertama di tengah pasar yang sangat kompetitif. Target utamanya adalah mahasiswi dan pekerja muda usia 18 sampai 26 tahun.',
    solution:
      'Kami menggabungkan 15 kreator TikTok kategori skincare dengan kampanye TikTok Ads dan Meta Ads. Konten kreator dengan performa terbaik digunakan kembali sebagai materi iklan.',
    results: [
      { value: '2,4 jt', label: 'Total tayangan' },
      { value: '3.100', label: 'Penjualan dalam 30 hari' },
      { value: '5,2x', label: 'ROAS kampanye' },
    ],
    year: '2026',
    cover: img('glowra', 'cover', 'Kampanye peluncuran Glowra'),
    gallery: [img('glowra', '1', 'Konten kreator untuk Glowra'), img('glowra', '2', 'Materi iklan Glowra')],
  },
  {
    slug: 'kopi-senja',
    client: 'Kopi Senja',
    title: 'Rebranding kedai kopi kampus',
    category: 'Branding',
    tags: ['Branding', 'Social Media'],
    summary: 'Kunjungan gerai naik 74% dalam tiga bulan pertama.',
    challenge:
      'Kopi Senja berlokasi dekat dua kampus besar, tetapi identitasnya kurang menarik bagi mahasiswa dan media sosialnya jarang diperbarui.',
    solution:
      'Kami merancang ulang logo, kemasan, dan interior visual dengan warna yang lebih cerah, lalu mengelola Instagram dan TikTok dengan konten harian bertema kehidupan kampus.',
    results: [
      { value: '+74%', label: 'Kunjungan gerai' },
      { value: '18 rb', label: 'Pengikut baru' },
      { value: '2,3x', label: 'Pesanan melalui DM' },
    ],
    year: '2025',
    cover: img('kopi-senja', 'cover', 'Identitas baru Kopi Senja'),
    gallery: [img('kopi-senja', '1', 'Kemasan baru Kopi Senja'), img('kopi-senja', '2', 'Konten Instagram Kopi Senja')],
  },
  {
    slug: 'nusa-sneakers',
    client: 'Nusa Sneakers',
    title: 'Seri konten TikTok mingguan',
    category: 'Konten Video',
    tags: ['Konten Video', 'TikTok'],
    summary: '41 ribu pengikut baru dan 3 video viral.',
    challenge: 'Nusa Sneakers memiliki produk berkualitas, tetapi akun TikTok-nya belum memiliki format konten yang konsisten.',
    solution:
      'Kami membuat tiga format konten berseri: ulasan jujur, padu padan gaya, dan cerita di balik produksi. Konten diproduksi setiap minggu dengan karyawan sebagai talent.',
    results: [
      { value: '41 rb', label: 'Pengikut baru' },
      { value: '3', label: 'Video lebih dari 1 juta tayangan' },
      { value: '+58%', label: 'Kunjungan ke toko online' },
    ],
    year: '2026',
    cover: img('nusa-sneakers', 'cover', 'Produksi konten Nusa Sneakers'),
    gallery: [img('nusa-sneakers', '1', 'Behind the scene konten'), img('nusa-sneakers', '2', 'Cuplikan video TikTok')],
  },
  {
    slug: 'teman-belajar',
    client: 'Teman Belajar',
    title: 'Landing page pendaftaran kursus',
    category: 'Website',
    tags: ['Website', 'Iklan Digital'],
    summary: 'Biaya per pendaftar turun 38% setelah halaman baru.',
    challenge: 'Iklan Teman Belajar mendatangkan banyak klik, tetapi halaman pendaftarannya lambat dan membingungkan sehingga konversi rendah.',
    solution:
      'Kami merancang landing page baru yang ringan dengan alur pendaftaran tiga langkah dan tombol WhatsApp, lalu menyesuaikan materi iklan agar konsisten dengan halaman.',
    results: [
      { value: '-38%', label: 'Biaya per pendaftar' },
      { value: '1,1 dtk', label: 'Waktu muat halaman' },
      { value: '+2,1x', label: 'Tingkat konversi' },
    ],
    year: '2025',
    cover: img('teman-belajar', 'cover', 'Landing page Teman Belajar'),
    gallery: [img('teman-belajar', '1', 'Tampilan mobile landing page'), img('teman-belajar', '2', 'Materi iklan Teman Belajar')],
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
