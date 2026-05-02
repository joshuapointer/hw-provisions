'use client';
import { useState } from 'react';
import { HC, HS } from '../design/tokens';
import { Halftone } from '../design/base';
import { GLYPHS, NumGlyph } from '../design/glyphs';
import { FolioRule, Reveal, PriceStamp } from '../design/interactions';

const ITEMS = [
  { sku: '047', n: '02', name: 'sage spoon · sherlock',         maker: 'sage mcclellan',  price: 240, oneOfOne: true,  img: '/assets/photo-1.avif', accent: HC.rose,    rot: -1.5 },
  { sku: '048', n: '04', name: 'walnut rolling tray',           maker: 'adam driver',     price: 88,  oneOfOne: false, img: '/assets/photo-2.avif', accent: HC.fern,    rot: 1    },
  { sku: '049', n: '06', name: 'puffco peak pro · obsidian',    maker: 'puffco',          price: 420, oneOfOne: false, img: '/assets/photo-5.avif', accent: HC.haze,    rot: -0.5 },
  { sku: '050', n: '10', name: 'organic hemp wraps · 24 pack',  maker: 'OCB',             price: 8,   oneOfOne: false, img: '/assets/photo-4.avif', accent: HC.amber,   rot: 1.5  },
  { sku: '051', n: '03', name: 'fume marble pendant',           maker: 'maple bend',      price: 165, oneOfOne: true,  img: '/assets/photo-3.avif', accent: HC.ember,   rot: -1   },
  { sku: '052', n: '11', name: 'house tee · cream-on-cream',    maker: 'headwaters',      price: 32,  oneOfOne: false, img: '/assets/photo-6.avif', accent: HC.blue,    rot: 0.5  },
];

export function BehindCounter({ mobile = false }) {
  return (
    <section style={{ background: HC.blueDark, color: HC.cream, padding: mobile ? '60px 16px' : '120px 40px', position: 'relative', overflow: 'hidden' }}>
      <Halftone color={HC.cream} opacity={0.06} dot={2} gap={9} />
      <div style={{ position: 'absolute', top: 60, right: -40, opacity: 0.15, pointerEvents: 'none' }}>
        <NumGlyph n="11" size={300} color={HC.amber} />
      </div>
      <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, marginBottom: 56 }}>
          <div>
            <FolioRule n={3} of={6} label="behind the counter" />
            <h2 style={{ ...HS.display, fontSize: mobile ? 64 : 132, lineHeight: 0.85, margin: '12px 0 0', color: HC.cream }}>
              what's<br />
              <span style={{ fontStyle: 'italic', color: HC.amber, WebkitTextStroke: `2px ${HC.ink}`, paintOrder: 'stroke fill' }}>
                on the shelf.
              </span>
            </h2>
          </div>
          <div style={{ ...HS.serif, fontStyle: 'italic', fontSize: mobile ? 15 : 18, maxWidth: 380, lineHeight: 1.45, color: 'rgba(242,230,201,0.85)' }}>
            <span style={{ ...HS.mono, fontStyle: 'normal', fontSize: 10, color: HC.amber, display: 'block', marginBottom: 8 }}>
              UPDATED THIS MORNING · MAY 02
            </span>
            no online orders. these six are here right now. when they're gone, they're gone.
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr 1fr' : 'repeat(3, 1fr)', gap: mobile ? 14 : 28 }}>
          {ITEMS.map((it, i) => (
            <Reveal key={it.sku} rotate={it.rot} delay={i * 70}>
              <ShelfCard it={it} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShelfCard({ it }) {
  const [hov, setHov] = useState(false);
  const G = GLYPHS.find(g => g.n === it.n) || GLYPHS[0];
  const Cmp = G.Cmp;
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        position: 'relative',
        transform: hov ? 'translateY(-6px) rotate(0.5deg)' : 'translateY(0) rotate(0)',
        transition: 'transform .35s cubic-bezier(.2,.8,.2,1)',
        cursor: 'pointer',
      }}>
      <div style={{
        position: 'absolute', top: -22, left: -8, zIndex: 4,
        ...HS.display, fontSize: 88, lineHeight: 1, color: HC.amber,
        WebkitTextStroke: `2px ${HC.ink}`, paintOrder: 'stroke fill',
        textShadow: `4px 4px 0 ${HC.ink}`,
        transform: hov ? 'rotate(-4deg)' : 'rotate(-2deg)',
        transition: 'transform .35s',
        pointerEvents: 'none',
      }}>{it.sku}</div>
      <div style={{
        background: HC.cream, color: HC.ink,
        border: `2px solid ${HC.ink}`, padding: 12,
        boxShadow: hov ? `9px 11px 0 ${HC.ink}` : `5px 6px 0 ${HC.ink}`,
        transition: 'box-shadow .35s',
      }}>
        <div style={{
          aspectRatio: '1/1', overflow: 'hidden', position: 'relative',
          background: `url(${it.img}) center/cover, ${HC.smoke}`,
          border: `1px solid ${HC.ink}`,
        }}>
          {it.oneOfOne && (
            <div style={{
              position: 'absolute', top: 8, left: 8,
              ...HS.mono, fontSize: 9, color: HC.ink,
              padding: '4px 8px', background: HC.amber,
              border: `1.5px solid ${HC.ink}`, letterSpacing: '0.16em',
              transform: 'rotate(-3deg)',
            }}>1 OF 1</div>
          )}
          <div style={{ position: 'absolute', bottom: 8, right: 8, opacity: hov ? 1 : 0.85, transition: 'opacity .25s' }}>
            <div style={{
              width: 36, height: 36, borderRadius: '50%',
              background: HC.cream, border: `1.5px solid ${HC.ink}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Cmp s={20} c={HC.ink} />
            </div>
          </div>
        </div>
        <div style={{ marginTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
          <div style={{ flex: 1 }}>
            <div style={{ ...HS.alt, fontSize: 16, fontWeight: 800, lineHeight: 1.15 }}>{it.name}</div>
            <div style={{ ...HS.serif, fontStyle: 'italic', fontSize: 12, color: HC.smoke, marginTop: 4 }}>by {it.maker}</div>
          </div>
          <PriceStamp amount={it.price} rotate={it.rot * 4} color={it.accent} />
        </div>
      </div>
    </div>
  );
}
