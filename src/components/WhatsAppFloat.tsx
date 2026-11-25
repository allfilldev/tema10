import { waLink } from '@/lib/utils';
import { WhatsApp } from './icons';

export function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
      className="fixed right-5 bottom-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 md:right-8 md:bottom-8"
    >
      <WhatsApp className="size-7" />
    </a>
  );
}
