'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HC, HS } from './design/tokens';
import { CurvedText, HWMark, StampButton } from './design/base';

const LINKS = [
  { k: '/',         l: 'home' },
  { k: '/showcase', l: 'showcase' },
  { k: '/visit',    l: 'visit' },
];

export function Nav({ tone = 'light' }) {
  const pathname = usePathname();
  const emblemRef = useRef(null);
  const dark = tone === 'dark';
  const fg = dark ? HC.cream : HC.ink;
  const bg = dark ? HC.blueDark : HC.cream;

  // Scroll-velocity emblem spin
  useEffect(() => {
    if (!emblemRef.current) return;
    let last = 0, lastT = performance.now(), rot = 0, vel = 0, raf;
    const tick = () => {
      const now = performance.now();
      const dt = Math.max(1, now - lastT);
      const dy = window.scrollY - last;
      const newVel = (dy / dt) * 16;
      vel = vel * 0.85 + newVel * 0.15;
      rot += 0.18 + vel * 0.08;
      if (emblemRef.current) emblemRef.current.style.transform = `rotate(${rot}deg)`;
      last = window.scrollY; lastT = now;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      {/* DRIFT BAR */}
      <div style={{ background: HC.ink, color: HC.lime, padding: '8px 0', overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <div style={{ ...HS.mono, fontSize: 11, display: 'flex', gap: 32, animation: 'h-mq 28s linear infinite' }}>
          {[...Array(8)].map((_, i) => (
            <span key={i} style={{ display: 'inline-flex', gap: 32 }}>
              <span>✦ open daily 9–8</span>
              <span style={{ color: HC.magenta }}>· (479) 251-8581 ·</span>
              <span>✦ inside the source · rogers ar</span>
              <span style={{ color: HC.tangerine }}>· no card needed ·</span>
            </span>
          ))}
        </div>
      </div>
      {/* MAIN NAV */}
      <nav style={{ background: bg, color: fg, position: 'relative', padding: '20px 40px 36px' }}>
        <svg viewBox="0 0 1440 24" preserveAspectRatio="none" style={{
          position: 'absolute', bottom: -1, left: 0, width: '100%', height: 24, display: 'block',
        }}>
          <path d="M0 24 L0 8 Q 60 0, 120 8 T 240 8 T 360 8 T 480 8 T 600 8 T 720 8 T 840 8 T 960 8 T 1080 8 T 1200 8 T 1320 8 T 1440 8 L 1440 24 Z" fill={HC.ink} />
        </svg>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 18, textDecoration: 'none', color: fg }}>
            <div style={{ position: 'relative', width: 80, height: 80 }}>
              <div ref={emblemRef} style={{ position: 'absolute', inset: 0 }}>
                <CurvedText text="✦ where's your head at? · " radius={32} fontSize={9} color={fg} />
              </div>
              <div style={{ position: 'absolute', inset: 18 }}>
                <HWMark size={44} ring={HC.ink} />
              </div>
            </div>
            <div>
              <div style={{ ...HS.display, fontSize: 28, lineHeight: 1, color: fg }}>headwaters</div>
              <div style={{ ...HS.serif, fontStyle: 'italic', fontSize: 14, color: dark ? HC.lime : HC.blue, marginTop: 2 }}>
                provisions · NWA
              </div>
            </div>
          </Link>
          <ArcLinks links={LINKS} active={pathname} fg={fg} />
          <Link href="/visit" style={{ textDecoration: 'none' }}>
            <StampButton label="OPEN · 9 TO 8 · " center="✦" color={HC.lime} fg={HC.ink} size={92} rotate={-6} />
          </Link>
        </div>
      </nav>
    </>
  );
}

function ArcLinks({ links, active, fg }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 28, position: 'relative' }}>
      {links.map((l, i) => {
        const offset = [-2, 6, -4][i % 3];
        const rotate = [-2, 1, -1][i % 3];
        const isActive = active === l.k || (l.k !== '/' && active?.startsWith(l.k));
        const accents = [HC.magenta, HC.lime, HC.tangerine];
        return (
          <Link key={l.k} href={l.k} style={{
            position: 'relative',
            transform: `translateY(${offset}px) rotate(${rotate}deg)`,
            ...HS.alt, fontSize: 18,
            color: isActive ? HC.ink : fg,
            textDecoration: 'none',
            padding: isActive ? '6px 10px' : '6px 4px',
            background: isActive ? accents[i] : 'transparent',
            border: isActive ? `2px solid ${HC.ink}` : 'none',
            boxShadow: isActive ? `3px 3px 0 ${HC.ink}` : 'none',
            display: 'inline-block',
          }}>
            {l.l}
            {!isActive && (
              <svg style={{ position: 'absolute', bottom: -6, left: 0, width: '100%' }} height="6" viewBox="0 0 60 6" preserveAspectRatio="none">
                <path d="M0 3 Q 15 0, 30 3 T 60 3" fill="none" stroke={accents[i]} strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </Link>
        );
      })}
    </div>
  );
}

export function MobileNav({ tone = 'light' }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dark = tone === 'dark';
  const links = [
    { k: '/',         l: 'home',     i: '⌂' },
    { k: '/showcase', l: 'showcase', i: '✦' },
    { k: '/visit',    l: 'visit',    i: '◉' },
  ];
  return (
    <>
      <div style={{ background: HC.ink, color: HC.lime, padding: '6px 14px', overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <div style={{ ...HS.mono, fontSize: 9, animation: 'h-mq 22s linear infinite' }}>
          ✦ open daily 9–8 · (479) 251-8581 · inside the source · no card needed · ✦ open daily 9–8 · (479) 251-8581 · inside the source ·
        </div>
      </div>
      <header style={{
        position: 'sticky', top: 0, zIndex: 30,
        background: dark ? HC.blueDark : HC.cream, color: dark ? HC.cream : HC.ink,
        padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        borderBottom: `1px solid ${dark ? 'rgba(245,236,217,0.15)' : 'rgba(14,26,47,0.12)'}`,
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: 'inherit' }}>
          <HWMark size={32} ring={dark ? HC.cream : HC.ink} />
          <div style={{ ...HS.display, fontSize: 22, lineHeight: 1 }}>headwaters</div>
        </Link>
        <button onClick={() => setOpen(true)} style={{
          background: HC.lime, color: HC.ink, border: `2px solid ${HC.ink}`,
          padding: '8px 14px', borderRadius: 999, ...HS.mono, fontSize: 10, cursor: 'pointer',
        }}>
          MENU ✦
        </button>
      </header>
      {open && (
        <div onClick={() => setOpen(false)} style={{
          position: 'fixed', inset: 0, zIndex: 40, background: 'rgba(14,26,47,0.6)',
          animation: 'h-fade .2s',
        }}>
          <div onClick={(e) => e.stopPropagation()} style={{
            position: 'absolute', top: 0, left: 0, right: 0,
            background: HC.cream, padding: '24px 24px 36px',
            borderBottomLeftRadius: 32, borderBottomRightRadius: 32,
            border: `2px solid ${HC.ink}`, borderTop: 'none',
            animation: 'h-slide-down .3s ease-out',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <div style={{ ...HS.display, fontSize: 28 }}>menu</div>
              <button onClick={() => setOpen(false)} style={{
                background: HC.ink, color: HC.cream, border: 'none', borderRadius: '50%',
                width: 36, height: 36, ...HS.alt, fontSize: 16, cursor: 'pointer',
              }}>✕</button>
            </div>
            <div style={{ display: 'grid', gap: 12 }}>
              {links.map((l, i) => {
                const c = [HC.magenta, HC.lime, HC.tangerine][i];
                const isActive = pathname === l.k;
                return (
                  <Link key={l.k} href={l.k} onClick={() => setOpen(false)} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '20px 24px', background: isActive ? c : HC.paper,
                    border: `2px solid ${HC.ink}`, borderRadius: 18,
                    textDecoration: 'none', color: HC.ink,
                    boxShadow: isActive ? `4px 4px 0 ${HC.ink}` : 'none',
                    ...HS.alt, fontSize: 24,
                  }}>
                    <span>{l.l}</span>
                    <span style={{ ...HS.display, fontSize: 28, color: HC.blue }}>{l.i}</span>
                  </Link>
                );
              })}
            </div>
            <div style={{ marginTop: 20, padding: '14px 18px', background: HC.lime, border: `2px solid ${HC.ink}`, borderRadius: 14, ...HS.mono, fontSize: 11, textAlign: 'center' }}>
              ✦ OPEN TODAY · 9 to 8
            </div>
          </div>
        </div>
      )}
    </>
  );
}
