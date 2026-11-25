import { serviceBand } from '@/content/site';

export function ServiceBand() {
  const row = [...serviceBand, ...serviceBand, ...serviceBand, ...serviceBand];
  return (
    <div className="overflow-hidden py-5" aria-hidden="true">
      <div className="-mx-5 -rotate-[1.2deg] overflow-hidden bg-sun py-4">
      <div className="flex w-max animate-marquee items-center gap-10 pr-10 text-[clamp(1.1rem,2vw,1.6rem)] font-extrabold tracking-[-0.02em] whitespace-nowrap">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            {item}
            <span className="size-2.5 rounded-full bg-primary" />
          </span>
        ))}
      </div>
      </div>
    </div>
  );
}
