'use client';

import { useState, type FormEvent } from 'react';
import { services } from '@/content/services';
import { site } from '@/content/site';
import { waLink } from '@/lib/utils';

// Versi showcase: formulir mengirim pesan lewat WhatsApp, tanpa backend.
export function ContactForm() {
  const [error, setError] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') ?? '').trim();
    const company = String(data.get('company') ?? '').trim();
    const need = String(data.get('need') ?? '').trim();
    if (!name || !need) {
      setError('Mohon isi nama dan kebutuhan Anda.');
      return;
    }
    setError('');
    const service = String(data.get('service') ?? '');
    const message = [
      `Halo ${site.name}, saya ${name}${company ? ` dari ${company}` : ''}.`,
      service && `Layanan yang diminati: ${service}.`,
      `Kebutuhan: ${need}`,
    ]
      .filter(Boolean)
      .join('\n');
    window.open(waLink(message), '_blank', 'noopener,noreferrer');
  };

  const label = 'flex min-w-0 flex-col gap-2 text-sm font-semibold text-ink';
  const field =
    'min-h-12 w-full min-w-0 rounded-2xl border-2 border-line bg-white px-4 py-3 text-base font-normal outline-none transition-colors placeholder:text-muted focus:border-primary';

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <label className={label}>
        Nama lengkap
        <input name="name" type="text" autoComplete="name" placeholder="Nama Anda" required className={field} />
      </label>
      <label className={label}>
        Nama bisnis
        <input name="company" type="text" autoComplete="organization" placeholder="Opsional" className={field} />
      </label>
      <label className={`${label} sm:col-span-2`}>
        Layanan yang diminati
        <select name="service" defaultValue="" className={field}>
          <option value="">Belum yakin, ingin konsultasi terlebih dahulu</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </label>
      <label className={`${label} sm:col-span-2`}>
        Ceritakan kebutuhan Anda
        <textarea
          name="need"
          rows={4}
          placeholder="Contoh: kami ingin meningkatkan penjualan produk melalui TikTok"
          required
          className={`${field} resize-none`}
        />
      </label>
      {error && (
        <p role="alert" className="text-sm font-semibold text-[#c2410c] sm:col-span-2">
          {error}
        </p>
      )}
      <button
        type="submit"
        className="min-h-[52px] cursor-pointer rounded-full bg-primary px-7 font-bold text-white transition-colors hover:bg-primary-dark sm:col-span-2 sm:justify-self-start"
      >
        Kirim melalui WhatsApp
      </button>
    </form>
  );
}
