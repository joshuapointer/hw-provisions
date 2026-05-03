'use client';
import { HC, HS } from './design/tokens';
import { Rings, Burst, Smoke, CurvedText, Halftone } from './design/base';

export function Footer({ mobile = false }) {
  return (
    <footer style={{ background: HC.blueDark, color: HC.cream, padding: mobile ? '60px 16px 20px' : '92px 40px 28px', position: 'relative', overflow: 'hidden' }}>
      <Halftone color={HC.cream} opacity={0.06} dot={2} gap={9} />
      <div style={{ position: 'absolute', right: -120, bottom: -120, opacity: 0.18, pointerEvents: 'none' }}>
        <Rings size={520} color={HC.lime} />
      </div>
      <div style={{ position: 'absolute', left: -90, top: -90, opacity: 0.22, pointerEvents: 'none' }}>
        <Burst size={360} color={HC.amber} count={28} />
      </div>
      {!mobile && (
        <div style={{ position: 'absolute', right: 80, bottom: 40, opacity: 0.45, pointerEvents: 'none' }}>
          <Smoke size={180} color={HC.cream} opacity={0.5} />
        </div>
      )}
      {/* Banner texture */}
      <img src="/assets/mopbp8c2-Headwaters_Banner.png" alt="" aria-hidden
        style={{
          position: 'absolute', left: 0, bottom: 0, width: '100%',
          opacity: 0.18, mixBlendMode: 'screen', pointerEvents: 'none',
          objectFit: 'cover', maxHeight: 220,
        }} />
      {/* Sunny love wave */}
      <img src="/assets/mopbq0al-Sunny_love.png" alt=""
        style={{
          position: 'absolute', right: mobile ? -10 : 80, bottom: mobile ? 8 : 40,
          height: mobile ? 140 : 220, width: 'auto',
          transform: 'rotate(-4deg)',
          filter: 'drop-shadow(3px 4px 0 rgba(0,0,0,0.25)) drop-shadow(0 12px 18px rgba(0,0,0,0.30))',
          pointerEvents: 'none', zIndex: 1,
          animation: 'h-bob-rot 4.6s ease-in-out infinite',
        }} />
      <svg viewBox="0 0 1440 24" preserveAspectRatio="none" style={{
        position: 'absolute', top: -1, left: 0, width: '100%', height: 24, transform: 'scaleY(-1)',
      }}>
        <path d="M0 24 L0 8 Q 60 0, 120 8 T 240 8 T 360 8 T 480 8 T 600 8 T 720 8 T 840 8 T 960 8 T 1080 8 T 1200 8 T 1320 8 T 1440 8 L 1440 24 Z" fill={HC.blueDark} />
      </svg>
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: mobile ? '1fr' : '2fr 1fr 1fr 1fr', gap: mobile ? 24 : 40, marginBottom: 32, zIndex: 2 }}>
        <div>
          {!mobile && (
            <div style={{ position: 'relative', width: 160, height: 160 }}>
              <div style={{ position: 'absolute', inset: 0, animation: 'h-spin 28s linear infinite' }}>
                <CurvedText text="✦ stay heady · headwaters · " radius={68} fontSize={12} color={HC.lime} />
              </div>
              <img src="/assets/mopborf7-Icon-White.png" alt=""
                style={{ position: 'absolute', inset: 28, width: 104, height: 104, objectFit: 'contain',
                  filter: 'drop-shadow(2px 2px 0 rgba(0,0,0,0.3))' }} />
            </div>
          )}
          <img src="/assets/mopborf3-Horizontal-White.png" alt="Headwaters Provisions"
            style={{ height: mobile ? 42 : 64, width: 'auto', display: 'block', marginTop: mobile ? 0 : 18,
              filter: 'drop-shadow(2px 2px 0 rgba(0,0,0,0.25))' }} />
          <div style={{ ...HS.serif, fontStyle: 'italic', fontSize: mobile ? 18 : 22, color: HC.lime, marginTop: 10 }}>
            "where's your head at?"
          </div>
          <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <span style={{ ...HS.mono, fontSize: 9, color: HC.cream, padding: '6px 12px', border: `1.5px solid rgba(245,236,217,0.4)`, borderRadius: 999, letterSpacing: '0.16em' }}>NWA · ROGERS AR</span>
            <span style={{ ...HS.mono, fontSize: 9, color: HC.amber, padding: '6px 12px', border: `1.5px solid ${HC.amber}`, borderRadius: 999, letterSpacing: '0.16em' }}>EST. 2024</span>
          </div>
        </div>
        {[
          { h: 'visit',  items: ['4505 W Poplar St', 'Rogers, AR 72756', 'inside The Source'] },
          { h: 'hours',  items: ['Mon–Fri · 9–8', 'Saturday · 9–7', 'Sunday · 10–6'] },
          { h: 'holler', items: ['(479) 251-8581', 'info@headwatersprovisions.com', '@headwaters_provisions'] },
        ].map(c => (
          <div key={c.h}>
            <div style={{ ...HS.mono, fontSize: 10, color: HC.magenta, marginBottom: 8 }}>✦ {c.h}</div>
            {c.items.map(i => <div key={i} style={{ fontSize: mobile ? 11 : 13, lineHeight: 1.7, color: 'rgba(245,236,217,0.9)' }}>{i}</div>)}
          </div>
        ))}
      </div>
      <div style={{
        position: 'relative', borderTop: `1px solid rgba(245,236,217,0.2)`, paddingTop: 16,
        ...HS.mono, fontSize: 9, color: 'rgba(245,236,217,0.6)',
        display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, zIndex: 2,
      }}>
        <span>© 2026 Headwaters Provisions LLC ✦ stay heady</span>
        <span>21+ · no medical card needed</span>
      </div>
    </footer>
  );
}
