'use client';
import { useState } from 'react';
import { HC, HS } from '../design/tokens';
import { Halftone, Sunny } from '../design/base';
import { GLYPHS } from '../design/glyphs';
import { FolioRule, spawnGlyphConfetti } from '../design/interactions';

export function StickerSheet({ mobile = false }) {
  const [peeled, setPeeled] = useState({});
  const peel = (id, e) => {
    setPeeled(p => ({ ...p, [id]: !p[id] }));
    if (e && !peeled[id]) spawnGlyphConfetti(e.clientX, e.clientY);
  };

  return (
    <section style={{ background: HC.cream, padding: mobile ? '60px 16px 80px' : '120px 40px', position: 'relative', overflow: 'hidden' }}>
      <Halftone color={HC.ink} opacity={0.06} dot={2} gap={11} />
      <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, marginBottom: 48 }}>
          <div>
            <FolioRule n={4} of={6} label="house sticker sheet" />
            <h2 style={{ ...HS.display, fontSize: mobile ? 64 : 132, lineHeight: 0.85, margin: '12px 0 0' }}>
              free with<br />
              <span style={{ fontStyle: 'italic', color: HC.haze, WebkitTextStroke: `2px ${HC.ink}`, paintOrder: 'stroke fill' }}>
                any $25+.
              </span>
            </h2>
          </div>
          <div style={{ ...HS.serif, fontStyle: 'italic', fontSize: mobile ? 15 : 19, maxWidth: 380, lineHeight: 1.45 }}>
            twelve marks. peel them off. stick them on your jar, your laptop, your truck.<br />
            <span style={{ ...HS.hand, fontSize: 24, color: HC.rose }}>(go ahead, click one.)</span>
          </div>
        </div>

        <div style={{
          background: HC.paper, border: `2px solid ${HC.ink}`,
          padding: mobile ? '32px 16px' : '40px 32px', position: 'relative',
          boxShadow: `8px 10px 0 ${HC.ink}`,
        }}>
          {!mobile && (
            <Sunny pose="face" size={90} rotate={-10}
              style={{
                position: 'absolute', top: -40, right: 40, zIndex: 4,
                filter: 'drop-shadow(3px 4px 0 rgba(0,0,0,0.25))',
                pointerEvents: 'none',
              }} />
          )}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `1.5px dashed ${HC.smoke}`, paddingBottom: 12, marginBottom: 24 }}>
            <div style={{ ...HS.mono, fontSize: 10, letterSpacing: '0.2em', color: HC.smoke }}>
              HEADWATERS PROVISIONS · NWA · STICKER SHEET № 04
            </div>
            <div style={{ ...HS.mono, fontSize: 10, letterSpacing: '0.2em', color: HC.smoke }}>
              ED. OF 500 · SPRING 2026
            </div>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: mobile ? 'repeat(3, 1fr)' : 'repeat(6, 1fr)',
            gap: mobile ? 14 : 22,
          }}>
            {GLYPHS.map((g, i) => {
              const Cmp = g.Cmp;
              const isPeeled = peeled[g.n];
              const colors = [HC.rose, HC.amber, HC.haze, HC.fern, HC.ember, HC.blue];
              const c = colors[i % colors.length];
              const rot = ((i % 5) - 2) * 1.5;
              return (
                <div key={g.n} style={{ position: 'relative', aspectRatio: '1/1', cursor: 'pointer' }}
                  onClick={(e) => peel(g.n, e)}>
                  <div style={{
                    position: 'absolute', inset: 6,
                    border: `1.5px dashed ${HC.smoke}`,
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    color: HC.smoke, opacity: isPeeled ? 1 : 0,
                    transition: 'opacity .35s ease-out .2s',
                  }}>
                    <div style={{ ...HS.mono, fontSize: 10, letterSpacing: '0.2em' }}>SAVED</div>
                    <div style={{ ...HS.hand, fontSize: 18, marginTop: 4 }}>✓ thanks</div>
                  </div>
                  <div
                    onMouseEnter={(e) => { if (!isPeeled) e.currentTarget.style.transform = `rotate(${rot + 2}deg) translateY(-4px) scale(1.04)`; }}
                    onMouseLeave={(e) => { if (!isPeeled) e.currentTarget.style.transform = `rotate(${rot}deg) scale(1)`; }}
                    style={{
                      position: 'absolute', inset: 0,
                      background: c, border: `2px solid ${HC.ink}`,
                      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                      transform: isPeeled
                        ? `rotate(${rot * 4 + 14}deg) translate(${rot * 12}px, -${36 + Math.abs(rot) * 6}px) scale(0.75)`
                        : `rotate(${rot}deg) scale(1)`,
                      opacity: isPeeled ? 0 : 1,
                      transition: 'transform .55s cubic-bezier(.2,.8,.2,1), opacity .45s ease-out .25s, box-shadow .25s',
                      boxShadow: `3px 4px 0 ${HC.ink}`,
                      transformOrigin: 'bottom right',
                    }}>
                    <Cmp s={mobile ? 38 : 56} c={HC.ink} />
                    <div style={{ ...HS.mono, fontSize: 9, letterSpacing: '0.18em', marginTop: 8, color: HC.ink }}>
                      №{g.n} · {g.name}
                    </div>
                    <svg style={{ position: 'absolute', bottom: -1, right: -1, width: 18, height: 18 }} viewBox="0 0 18 18">
                      <path d="M 18 0 L 18 18 L 0 18 Z" fill={HC.cream} stroke={HC.ink} strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderTop: `1.5px dashed ${HC.smoke}`, paddingTop: 14, marginTop: 28 }}>
            <div style={{ ...HS.hand, fontSize: 22, color: HC.ink }}>peeled {Object.values(peeled).filter(Boolean).length} of 12</div>
            <div style={{ ...HS.mono, fontSize: 10, letterSpacing: '0.2em', color: HC.smoke }}>
              "stay heady" — printed in NWA on recycled paper
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
