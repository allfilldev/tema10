import type { Article } from './types';

const cover = (slug: string, alt: string) => ({ src: `/images/articles/${slug}.webp`, alt });

export const articles: Article[] = [
  {
    slug: 'tren-konten-gen-z-2026',
    title: 'Tren konten yang disukai Gen Z pada 2026',
    excerpt: 'Konten yang autentik, singkat, dan melibatkan audiens masih menjadi kunci. Berikut pola yang kami amati dari ratusan kampanye.',
    date: '2026-10-28',
    readingMinutes: 5,
    category: 'Strategi Konten',
    cover: cover('tren-konten-gen-z-2026', 'Tren konten Gen Z'),
    body: [
      {
        paragraphs: [
          'Gen Z tumbuh bersama media sosial, sehingga mereka cepat mengenali konten yang terasa dibuat-buat. Dari kampanye yang kami kelola sepanjang tahun ini, ada beberapa pola yang konsisten menghasilkan interaksi tinggi.',
        ],
      },
      {
        heading: 'Autentik lebih penting daripada sempurna',
        paragraphs: [
          'Video yang direkam dengan ponsel dan menampilkan orang sungguhan sering kali mengalahkan produksi mahal. Tampilkan karyawan, proses produksi, atau pelanggan asli Anda.',
        ],
      },
      {
        heading: 'Tiga detik pertama menentukan',
        paragraphs: [
          'Sebagian besar penonton memutuskan untuk lanjut menonton atau menggulir dalam beberapa detik pertama. Mulailah dengan pertanyaan, hasil akhir, atau pernyataan yang memancing rasa ingin tahu.',
        ],
      },
      {
        heading: 'Ajak audiens terlibat',
        paragraphs: [
          'Format seperti polling, tanya jawab, dan balasan video untuk komentar membuat audiens merasa didengar. Interaksi ini juga membantu konten menjangkau lebih banyak orang.',
        ],
      },
    ],
  },
  {
    slug: 'tiktok-atau-instagram',
    title: 'TikTok atau Instagram: mana yang tepat untuk bisnis Anda?',
    excerpt: 'Keduanya efektif, tetapi untuk tujuan yang berbeda. Pahami karakter masing-masing sebelum menentukan prioritas.',
    date: '2026-09-30',
    readingMinutes: 6,
    category: 'Social Media',
    cover: cover('tiktok-atau-instagram', 'Perbandingan TikTok dan Instagram'),
    body: [
      {
        paragraphs: [
          'Pertanyaan ini sering kami terima dari klien baru. Jawabannya bergantung pada tujuan bisnis, jenis produk, dan kapasitas tim Anda dalam memproduksi konten.',
        ],
      },
      {
        heading: 'TikTok untuk menjangkau orang baru',
        paragraphs: [
          'Algoritma TikTok memberi peluang besar bagi akun baru untuk menjangkau audiens luas. Platform ini cocok untuk membangun kesadaran merek dan memperkenalkan produk.',
        ],
      },
      {
        heading: 'Instagram untuk membangun kepercayaan',
        paragraphs: [
          'Instagram berfungsi seperti etalase digital. Calon pelanggan sering memeriksa profil Instagram sebelum memutuskan membeli, sehingga feed yang rapi dan testimoni yang jelas sangat berpengaruh.',
        ],
      },
      {
        heading: 'Rekomendasi kami',
        paragraphs: [
          'Untuk sebagian besar bisnis, mulailah dengan satu platform dan kelola secara konsisten. Setelah ritme produksi stabil, gunakan ulang konten video di platform kedua.',
        ],
      },
    ],
  },
  {
    slug: 'brand-voice-untuk-gen-z',
    title: 'Menyusun brand voice yang relevan untuk Gen Z',
    excerpt: 'Santai tidak berarti asal. Brand voice yang baik tetap konsisten, jelas, dan mencerminkan nilai bisnis Anda.',
    date: '2026-08-19',
    readingMinutes: 4,
    category: 'Branding',
    cover: cover('brand-voice-untuk-gen-z', 'Menyusun brand voice'),
    body: [
      {
        paragraphs: [
          'Banyak brand mencoba terdengar muda dengan memakai bahasa gaul secara berlebihan. Hasilnya justru terasa canggung. Brand voice yang efektif berangkat dari karakter bisnis Anda sendiri.',
        ],
      },
      {
        heading: 'Tentukan tiga sifat utama',
        paragraphs: ['Pilih tiga kata yang menggambarkan kepribadian brand, misalnya hangat, jujur, dan optimis. Gunakan ketiganya sebagai acuan setiap kali menulis.'],
      },
      {
        heading: 'Buat daftar kata yang dipakai dan dihindari',
        paragraphs: ['Daftar sederhana ini membantu seluruh tim menulis dengan nada yang sama, baik di caption, balasan komentar, maupun layanan pelanggan.'],
      },
      {
        heading: 'Konsisten di semua kanal',
        paragraphs: ['Audiens akan lebih mudah mengenali brand Anda jika nada bicara di media sosial, website, dan kemasan terasa sama.'],
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
