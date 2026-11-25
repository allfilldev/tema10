import { site } from './site';

export type LegalDoc = { title: string; updated: string; sections: { heading: string; body: string }[] };

export const privacy: LegalDoc = {
  title: 'Kebijakan Privasi',
  updated: '2026-11-01',
  sections: [
    {
      heading: 'Data yang kami kumpulkan',
      body: `Saat Anda menghubungi ${site.name} lewat formulir atau WhatsApp, kami menerima nama, nomor telepon, dan isi pesan yang Anda kirim. Website ini juga dapat memakai analitik untuk mengetahui halaman yang paling sering dikunjungi.`,
    },
    {
      heading: 'Penggunaan data',
      body: 'Data dipakai hanya untuk membalas pertanyaan, menyusun penawaran, dan menjalankan proyek yang disepakati. Kami tidak menjual atau membagikan data pribadi kepada pihak lain untuk kepentingan pemasaran.',
    },
    {
      heading: 'Penyimpanan dan keamanan',
      body: 'Data disimpan selama dibutuhkan untuk keperluan di atas. Kami menjaga akses data hanya untuk tim yang menangani proyek Anda.',
    },
    {
      heading: 'Hak Anda',
      body: `Anda dapat meminta salinan, perbaikan, atau penghapusan data pribadi dengan menghubungi ${site.contact.email}.`,
    },
  ],
};

export const terms: LegalDoc = {
  title: 'Syarat & Ketentuan',
  updated: '2026-11-01',
  sections: [
    {
      heading: 'Ruang lingkup layanan',
      body: 'Detail pekerjaan, jadwal, dan biaya untuk setiap proyek dituangkan dalam penawaran tertulis yang disetujui kedua pihak sebelum pekerjaan dimulai.',
    },
    {
      heading: 'Pembayaran',
      body: 'Layanan bulanan dibayar di awal periode. Proyek dibayar dengan termin sesuai penawaran. Pekerjaan dimulai setelah pembayaran pertama diterima.',
    },
    {
      heading: 'Revisi',
      body: 'Setiap paket mencakup jumlah revisi tertentu sesuai penawaran. Revisi di luar jumlah tersebut atau perubahan ruang lingkup dapat dikenakan biaya tambahan.',
    },
    {
      heading: 'Hak cipta',
      body: 'Setelah pelunasan, hak penggunaan hasil kerja menjadi milik klien. Kami dapat menampilkan hasil kerja sebagai portofolio kecuali disepakati lain.',
    },
  ],
};
