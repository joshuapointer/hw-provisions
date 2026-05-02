'use client';
import Link from 'next/link';
import { HC, HS } from './design/tokens';
import { Rings, CurvedText, HWMark } from './design/base';

export function Footer({ mobile = false }) {
  return (
    <footer style={{ background: HC.blueDark, color: HC.cream, padding: mobile ? '40px 16px 20px' : '64px 40px 28px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: -120, bottom: -120, opacity: 0.18, pointerEvents: 'none' }}>
        <Rings size={520} color={HC.lime} />
      </div>
      <svg viewBox="0 0 1440 24" preserveAspectRatio="none" style={{
        position: 'absolute', top: -1, left: 0, width: '100%', height: 24, transform: 'scaleY(-1)',
      }}>
        <path d="M0 24 L0 8 Q 60 0, 120 8 T 240 8 T 360 8 T 480 8 T 600 8 T 720 8 T 840 8 T 960 8 T 1080 8 T 1200 8 T 1320 8 T 1440 8 L 1440 24 Z" fill={HC.blueDark} />
      </svg>
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: mobile ? '1fr' : '2fr 1fr 1fr 1fr', gap: mobile ? 24 : 40, marginBottom: 32 }}>
        <div>
          {!mobile && (
            <div style={{ position: 'relative', width: 140, height: 140 }}>
              <div style={{ position: 'absolute', inset: 0, animation: 'h-spin 28s linear infinite' }}>
                <CurvedText text="✦ stay heady · headwaters · " radius={58} fontSize={11} color={HC.lime} />
              </div>
              <div style={{ position: 'absolute', inset: 30 }}>
                <HWMark size={80} ring={HC.cream} />
              </div>
            </div>
          )}
          <div style={{ ...HS.display, fontSize: mobile ? 40 : 56, color: HC.cream, lineHeight: 0.9, marginTop: mobile ? 0 : 16 }}>headwaters</div>
          <div style={{ ...HS.serif, fontStyle: 'italic', fontSize: mobile ? 16 : 20, color: HC.lime, marginTop: 6 }}>
            "where's your head at?"
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
        display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8,
      }}>
        <span>© 2026 Headwaters Provisions LLC ✦ stay heady</span>
        <span>21+ · no medical card needed</span>
      </div>
    </footer>
  );
}
