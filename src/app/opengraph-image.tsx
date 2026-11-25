import { ImageResponse } from 'next/og';
import { hero, site } from '@/content/site';

export const alt = `${site.name}, ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#2348ff',
          color: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
        }}
      >
        <div style={{ fontSize: 36, fontWeight: 700, display: 'flex' }}>
          {site.logoText}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', fontSize: 92, lineHeight: 0.95, letterSpacing: -4 }}>
          <span style={{ fontWeight: 800 }}>{`${hero.titleLine1} ${hero.titleHighlight ?? ''}`}</span>
          <div style={{ display: 'flex', gap: 24, fontWeight: 800 }}>
            <span>{hero.titleLine2}</span>
            <span style={{ color: '#ffd43b' }}>{hero.titleAccent}</span>
          </div>
        </div>
        <div style={{ fontSize: 26, color: '#dce2ff', display: 'flex' }}>{`${site.tagline}, ${site.city}`}</div>
      </div>
    ),
    size,
  );
}
