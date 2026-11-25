import { Button } from '@/components/ui';

export default function NotFound() {
  return (
    <section className="container-page py-[clamp(4rem,10vw,8rem)]">
      <div className="rounded-[var(--radius-panel)] bg-soft px-[clamp(1.5rem,5vw,4.5rem)] py-[clamp(3rem,8vw,6rem)] text-center">
        <p className="mb-4 text-[clamp(4rem,12vw,9rem)] leading-none font-extrabold tracking-[-0.05em] text-primary">404</p>
        <h1 className="mb-4 text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold tracking-[-0.03em]">Halaman tidak ditemukan.</h1>
        <p className="mx-auto mb-8 max-w-md text-ink-2">Alamat yang Anda tuju mungkin salah ketik atau halamannya telah dipindahkan.</p>
        <Button href="/" arrow>
          Kembali ke beranda
        </Button>
      </div>
    </section>
  );
}
