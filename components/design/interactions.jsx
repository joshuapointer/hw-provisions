'use client';
import { useRef, useState, useEffect, useCallback } from 'react';
import { HC, HS } from './tokens';
import { GLYPHS, GlyphMark } from './glyphs';

export function useReveal(rotate = 0) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { setShown(true); io.unobserve(el); } });
    }, { threshold: 0.15, rootMargin: '0px 0px -80px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const style = {
    opacity: shown ? 1 : 0,
    transform: shown
      ? `rotate(${rotate}deg) translateY(0) scale(1)`
      : `rotate(${rotate - 4}deg) translateY(28px) scale(0.96)`,
    transition: 'opacity .55s cubic-bezier(.2,.8,.2,1), transform .65s cubic-bezier(.2,.8,.2,1)',
  };
  return [ref, style];
}

export function Reveal({ children, rotate = 0, delay = 0, as: As = 'div', style: extra, ...rest }) {
  const [ref, st] = useReveal(rotate);
  return (
    <As ref={ref} style={{ ...st, transitionDelay: `${delay}ms`, ...extra }} {...rest}>
      {children}
    </As>
  );
}

export function HoverSticker({ children, baseRotate = -2, hoverRotate = 1, lift = 4, scale = 1.02, style: extra, ...rest }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-block',
        transform: hov
          ? `rotate(${hoverRotate}deg) translateY(-${lift}px) scale(${scale})`
          : `rotate(${baseRotate}deg)`,
        transition: 'transform .35s cubic-bezier(.2,.8,.2,1), filter .35s',
        filter: hov ? `drop-shadow(8px 12px 0 ${HC.ink})` : `drop-shadow(4px 6px 0 ${HC.ink})`,
        ...extra,
      }}
      {...rest}>
      {children}
    </div>
  );
}

function getGlyphPath(n) {
  const paths = {
    '01': '<path d="M 4 32 Q 32 8, 60 32 Q 32 56, 4 32 Z" /><circle cx="32" cy="32" r="8" fill="currentColor" />',
    '02': '<path d="M 10 30 Q 10 10, 32 10 Q 54 10, 54 30 L 50 34 Q 32 30, 14 34 Z" /><path d="M 22 34 L 24 56 Q 32 58, 40 56 L 42 34" />',
    '03': '<circle cx="32" cy="32" r="10" /><line x1="32" y1="6" x2="32" y2="18" /><line x1="32" y1="46" x2="32" y2="58" /><line x1="6" y1="32" x2="18" y2="32" /><line x1="46" y1="32" x2="58" y2="32" /><line x1="14" y1="14" x2="22" y2="22" /><line x1="42" y1="42" x2="50" y2="50" /><line x1="50" y1="14" x2="42" y2="22" /><line x1="22" y1="42" x2="14" y2="50" />',
    '06': '<path d="M 36 4 L 16 32 L 28 32 L 20 60 L 48 28 L 36 28 L 42 4 Z" />',
    '08': '<path d="M 32 4 Q 22 18, 26 28 Q 18 24, 16 36 Q 14 50, 32 60 Q 50 50, 48 36 Q 46 24, 38 28 Q 42 18, 32 4 Z" />',
    '09': '<path d="M 32 4 L 36 26 L 60 32 L 36 38 L 32 60 L 28 38 L 4 32 L 28 26 Z" />',
  };
  return paths[n] || paths['09'];
}

export function spawnGlyphConfetti(x, y, color) {
  if (typeof document === 'undefined') return;
  const colors = [HC.amber, HC.rose, HC.haze, HC.fern, HC.ember];
  for (let i = 0; i < 3; i++) {
    const el = document.createElement('div');
    const g = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
    const c = color || colors[Math.floor(Math.random() * colors.length)];
    const dx = (Math.random() - 0.5) * 80;
    const dy = -60 - Math.random() * 80;
    const rot = (Math.random() - 0.5) * 80;
    el.style.cssText = `position: fixed; left: ${x - 12}px; top: ${y - 12}px; pointer-events: none; z-index: 9999; transition: transform 1.1s cubic-bezier(.2,.8,.2,1), opacity 1.1s ease-out; will-change: transform, opacity;`;
    el.innerHTML = `<svg width="24" height="24" viewBox="0 0 64 64" stroke="${c}" fill="${g.n === '06' || g.n === '08' || g.n === '09' ? c : 'none'}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">${getGlyphPath(g.n)}</svg>`;
    document.body.appendChild(el);
    requestAnimationFrame(() => {
      el.style.transform = `translate(${dx}px, ${dy}px) rotate(${rot}deg) scale(1.2)`;
      el.style.opacity = '0';
    });
    setTimeout(() => el.remove(), 1200);
  }
}

export function useConfettiOnClick() {
  return useCallback((e) => {
    spawnGlyphConfetti(e.clientX, e.clientY);
  }, []);
}

export function DropCap({ glyphN, color = HC.rose, children }) {
  return (
    <div style={{ ...HS.serif, fontSize: 22, lineHeight: 1.45, fontStyle: 'italic', overflow: 'hidden' }}>
      <span style={{ float: 'left', marginRight: 14, marginTop: 4, marginBottom: 0 }}>
        <GlyphMark n={glyphN} size={88} color={color} bg={HC.cream} />
      </span>
      {children}
    </div>
  );
}

export function FolioRule({ n, of: ofNum, label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, color: HC.ink, ...HS.mono, fontSize: 10, letterSpacing: '0.16em' }}>
      <span>№ {String(n).padStart(2, '0')}</span>
      <span style={{ flex: 1, height: 1, background: HC.ink, opacity: 0.4 }} />
      {label && <span style={{ fontStyle: 'italic', textTransform: 'none' }}>{label}</span>}
      {label && <span style={{ flex: 1, height: 1, background: HC.ink, opacity: 0.4 }} />}
      <span>OF {String(ofNum).padStart(2, '0')}</span>
    </div>
  );
}

export function Monogram({ size = 120, color = HC.ink }) {
  return (
    <div style={{ display: 'inline-block', position: 'relative' }}>
      <div style={{ ...HS.display, fontSize: size, lineHeight: 0.78, letterSpacing: '-0.06em', color, fontStyle: 'italic' }}>
        H<span style={{ display: 'inline-block', transform: 'translateY(-0.06em)' }}>w</span>
      </div>
      <div style={{ ...HS.mono, fontSize: size * 0.09, color, opacity: 0.7, letterSpacing: '0.22em', marginTop: -4 }}>
        provisions · NWA
      </div>
    </div>
  );
}

export function PriceStamp({ amount, rotate = -8, color = HC.rose }) {
  return (
    <div style={{
      transform: `rotate(${rotate}deg)`, display: 'inline-block',
      padding: '6px 12px', background: 'transparent',
      border: `2.5px solid ${color}`, color,
      ...HS.alt, fontSize: 22, fontWeight: 800,
      filter: `drop-shadow(2px 2px 0 ${HC.ink})`,
      letterSpacing: '-0.02em',
    }}>
      ${amount}
    </div>
  );
}
