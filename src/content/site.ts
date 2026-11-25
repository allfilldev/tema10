import type { About, ClientLogo, Cta, Faq, Hero, Plan, Site, Stat, Step, TeamMember, Testimonial, ThemeVariant } from './types';

// Konten demo (fiktif). Ganti file ini untuk setiap klien.

export const site: Site = {
  name: 'Arunika Creative',
  tagline: 'Digital & Creative Agency',
  description:
    'Arunika Creative membantu bisnis menjangkau milenial dan Gen Z melalui strategi konten, kampanye digital, dan identitas visual yang relevan serta terukur.',
  url: 'https://arunika-creative.vercel.app',
  logoText: 'arunika',
  city: 'Semarang',
  foundedYear: 2020,
  contact: {
    whatsapp: '62895326422692',
    whatsappDisplay: '+62 895-3264-22692',
    email: 'info@allfilldev.com',
    address: 'Pd. Bukit Agung No.1 Blok H, Sumurboto, Kec. Banyumanik, Semarang, Jawa Tengah',
    mapsUrl: 'https://maps.app.goo.gl/rhZBkKp7CNydwZQh7',
    hours: 'Senin sampai Sabtu, 07.00 sampai 22.00 WIB',
  },
  socials: [{ label: 'Instagram', href: 'https://www.instagram.com/allfilldev' }],
  nav: [
    { label: 'Tentang', href: '/tentang' },
    { label: 'Layanan', href: '/layanan' },
    { label: 'Portofolio', href: '/portofolio' },
    { label: 'Paket', href: '/paket' },
    { label: 'Artikel', href: '/artikel' },
  ],
};

export const hero: Hero = {
  eyebrow: 'Digital & Creative Agency, Semarang',
  titleLine1: 'Brand Anda,',
  titleHighlight: 'dekat',
  titleLine2: 'dengan generasi',
  titleAccent: 'berikutnya.',
  description:
    'Kami membantu bisnis menjangkau milenial dan Gen Z melalui strategi konten, kampanye digital, dan identitas visual yang relevan serta terukur.',
  primaryCta: { label: 'Jadwalkan Konsultasi', href: '/kontak' },
  secondaryCta: { label: 'Lihat Portofolio', href: '/portofolio' },
  media: { src: '/images/hero.webp', alt: 'Tim Arunika Creative saat sesi brainstorming' },
  mediaCaption: 'Tim Arunika',
  highlights: [
    { value: '48 jt+', label: 'Total jangkauan kampanye 2026' },
    { value: '+172%', label: 'Rata-rata kenaikan engagement' },
  ],
  points: ['Konsultasi awal gratis', 'Laporan bulanan transparan'],
};

export const serviceBand = ['Social Media', 'Branding', 'Konten Video', 'Iklan Digital', 'KOL', 'Website'];

export const clients: ClientLogo[] = [
  { name: 'Kopi Senja' },
  { name: 'Glowra' },
  { name: 'Nusa Sneakers' },
  { name: 'Teman Belajar' },
  { name: 'Rasa Bunda' },
  { name: 'Kos Kita' },
];

export const about: About = {
  eyebrow: 'Tentang Kami',
  title: 'Agency yang tumbuh bersama generasi digital.',
  description:
    'Didirikan pada 2020, Arunika Creative berfokus membantu brand berkomunikasi dengan audiens milenial dan Gen Z secara autentik.',
  story: [
    'Arunika berarti cahaya matahari pertama di pagi hari. Nama ini kami pilih karena kami ingin menjadi awal yang cerah bagi brand yang sedang membangun kehadirannya di dunia digital.',
    'Saat ini tim kami terdiri dari 18 profesional: strategist, desainer, videografer, content creator, dan spesialis iklan. Rata-rata usia tim 26 tahun, sehingga kami memahami bahasa dan kebiasaan audiens yang ingin Anda jangkau.',
  ],
  vision: 'Menjadi mitra kreatif terpercaya bagi brand Indonesia yang ingin relevan di mata generasi muda.',
  mission: [
    'Menyusun strategi berdasarkan riset audiens dan data performa.',
    'Menghasilkan konten berkualitas yang sesuai dengan karakter setiap platform.',
    'Menyampaikan hasil secara transparan melalui laporan berkala.',
  ],
  values: [
    { title: 'Relevan', description: 'Setiap konten dirancang sesuai bahasa dan kebiasaan audiens Anda.' },
    { title: 'Terukur', description: 'Target ditetapkan di awal dan dilaporkan secara berkala.' },
    { title: 'Kolaboratif', description: 'Anda terlibat dalam setiap keputusan penting.' },
    { title: 'Bertanggung jawab', description: 'Kami menjaga kualitas dan tenggat yang telah disepakati.' },
  ],
  image: { src: '/images/about.webp', alt: 'Suasana kantor Arunika Creative' },
};

export const stats: Stat[] = [
  { value: '150+', label: 'Brand telah kami dampingi' },
  { value: '6 thn', label: 'Pengalaman di industri kreatif' },
  { value: '4,6x', label: 'Rata-rata ROAS kampanye iklan' },
  { value: '96%', label: 'Klien memperpanjang kontrak' },
];

export const process: Step[] = [
  { title: 'Konsultasi', description: 'Memahami tujuan bisnis, audiens, dan tantangan Anda.' },
  { title: 'Strategi', description: 'Menyusun rencana konten, kanal, dan target yang terukur.' },
  { title: 'Eksekusi', description: 'Produksi dan publikasi oleh tim internal kami.' },
  { title: 'Evaluasi', description: 'Laporan bulanan dan optimasi berdasarkan data.' },
];

export const plans: Plan[] = [
  {
    name: 'Starter',
    price: 'Rp3,9 jt',
    period: '/ bulan',
    description: 'Untuk bisnis yang baru membangun kehadiran digital.',
    features: ['12 konten feed dan reels', '1 platform media sosial', 'Copywriting dan jadwal posting', 'Laporan bulanan'],
  },
  {
    name: 'Growth',
    price: 'Rp7,5 jt',
    period: '/ bulan',
    description: 'Untuk brand yang siap mempercepat pertumbuhan.',
    features: ['20 konten termasuk 8 video', '2 platform media sosial', 'Pengelolaan iklan Meta Ads', 'Laporan dan sesi review bulanan'],
    popular: true,
  },
  {
    name: 'Signature',
    price: 'Rp14 jt',
    period: '/ bulan',
    description: 'Untuk brand dengan kebutuhan kampanye menyeluruh.',
    features: ['30 konten dan produksi video', 'Iklan Meta, TikTok, dan Google', 'Kampanye KOL per kuartal', 'Account manager khusus'],
  },
];

export const team: TeamMember[] = [
  {
    name: 'Dimas Aryaguna',
    role: 'Founder & CEO',
    bio: 'Berpengalaman 9 tahun di bidang pemasaran digital dan pengembangan brand.',
    photo: { src: '/images/team/dimas.webp', alt: 'Dimas Aryaguna' },
  },
  {
    name: 'Alya Kirana',
    role: 'Creative Director',
    bio: 'Memimpin arah visual dan konsep kreatif untuk setiap kampanye.',
    photo: { src: '/images/team/alya.webp', alt: 'Alya Kirana' },
  },
  {
    name: 'Reza Mahendra',
    role: 'Head of Performance',
    bio: 'Mengelola strategi iklan digital dengan fokus pada efisiensi biaya.',
    photo: { src: '/images/team/reza.webp', alt: 'Reza Mahendra' },
  },
  {
    name: 'Putri Anindya',
    role: 'Content Lead',
    bio: 'Mengawal produksi konten video dan kolaborasi dengan kreator.',
    photo: { src: '/images/team/putri.webp', alt: 'Putri Anindya' },
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: 'Tim Arunika memahami bahasa audiens kami. Konten yang dibuat terasa relevan, dan penjualan meningkat sejak bulan kedua.',
    name: 'Nadia Prameswari',
    role: 'Founder',
    company: 'Glowra',
  },
  {
    quote: 'Prosesnya rapi dan laporannya jelas. Kami selalu tahu ke mana anggaran iklan digunakan dan hasilnya.',
    name: 'Bagas Wicaksono',
    role: 'Owner',
    company: 'Kopi Senja',
  },
  {
    quote: 'Rebranding yang dikerjakan membuat bisnis kami terlihat jauh lebih profesional di mata pelanggan muda.',
    name: 'Clarissa Halim',
    role: 'Marketing Lead',
    company: 'Teman Belajar',
  },
];

export const faqs: Faq[] = [
  {
    question: 'Berapa lama hasil mulai terlihat?',
    answer: 'Umumnya peningkatan engagement terlihat pada bulan pertama, sedangkan dampak penjualan mulai terukur pada bulan kedua hingga ketiga.',
  },
  { question: 'Apakah ada kontrak minimal?', answer: 'Kontrak minimal 3 bulan agar strategi dapat diuji dan dioptimasi dengan baik.' },
  {
    question: 'Apakah anggaran iklan termasuk dalam paket?',
    answer: 'Belum. Anggaran iklan dibayarkan langsung ke platform dan disesuaikan dengan target Anda.',
  },
  {
    question: 'Bisakah melayani klien di luar Semarang?',
    answer: 'Bisa. Kami melayani klien di seluruh Indonesia dengan koordinasi daring dan jadwal produksi di lokasi.',
  },
  {
    question: 'Bagaimana cara memulai kerja sama?',
    answer: 'Hubungi kami melalui WhatsApp atau formulir. Kami akan menjadwalkan sesi konsultasi gratis untuk memahami kebutuhan Anda.',
  },
];

export const cta: Cta = {
  title: 'Siap membawa brand Anda',
  titleAccent: 'ke level berikutnya?',
  description: 'Konsultasikan kebutuhan Anda tanpa biaya. Tim kami akan merespons dalam 1 x 24 jam kerja.',
};

// Varian homepage yang tampil di menu "Tema" pada navbar.
export const themeVariants: ThemeVariant[] = [
  { label: 'Tema 1', href: '/', description: 'Hero terang dengan kartu angka' },
  { label: 'Tema 2', href: '/tema-2', description: 'Hero biru dengan form konsultasi' },
];
