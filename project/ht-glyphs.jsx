/* ============================================================
   HEADWATERS — Numbered Glyph Series + polish utilities
   The 12 cataloged marks that recur as the shop's signature.
   ============================================================ */

/* ── №01 EYE ─────────────────────────────────────────────────── */
const G01_Eye = ({ s = 64, c = 'currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 64 64" fill="none" stroke={c} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 4 32 Q 32 8, 60 32 Q 32 56, 4 32 Z" />
    <circle cx="32" cy="32" r="10" fill={c} />
    <circle cx="29" cy="29" r="2.5" fill={HC.cream} stroke="none" />
    <line x1="32" y1="2" x2="32" y2="10" /><line x1="32" y1="54" x2="32" y2="62" />
  </svg>
);

/* ── №02 MUSHROOM ────────────────────────────────────────────── */
const G02_Mushroom = ({ s = 64, c = 'currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 64 64" fill="none" stroke={c} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 10 30 Q 10 10, 32 10 Q 54 10, 54 30 L 50 34 Q 32 30, 14 34 Z" fill={c} />
    <circle cx="22" cy="22" r="2.5" fill={HC.cream} stroke="none" /><circle cx="38" cy="18" r="3" fill={HC.cream} stroke="none" /><circle cx="44" cy="26" r="2" fill={HC.cream} stroke="none" />
    <path d="M 22 34 L 24 56 Q 32 58, 40 56 L 42 34" />
  </svg>
);

/* ── №03 SUN ─────────────────────────────────────────────────── */
const G03_Sun = ({ s = 64, c = 'currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 64 64" fill="none" stroke={c} strokeWidth="2.4" strokeLinecap="round">
    <circle cx="32" cy="32" r="11" fill={c} />
    {[0,30,60,90,120,150,180,210,240,270,300,330].map((d,i) => {
      const r1 = 16, r2 = 26;
      const x1 = 32 + Math.cos(d*Math.PI/180) * r1; const y1 = 32 + Math.sin(d*Math.PI/180) * r1;
      const x2 = 32 + Math.cos(d*Math.PI/180) * r2; const y2 = 32 + Math.sin(d*Math.PI/180) * r2;
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
    })}
  </svg>
);

/* ── №04 MOUNTAIN ────────────────────────────────────────────── */
const G04_Mountain = ({ s = 64, c = 'currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 64 64" fill="none" stroke={c} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 4 52 L 22 22 L 32 36 L 44 14 L 60 52 Z" />
    <path d="M 22 22 L 26 28 M 44 14 L 48 22" stroke={HC.cream} strokeWidth="1.5" />
    <circle cx="48" cy="14" r="6" fill={c} />
  </svg>
);

/* ── №05 SMOKE ───────────────────────────────────────────────── */
const G05_Smoke = ({ s = 64, c = 'currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 64 64" fill="none" stroke={c} strokeWidth="2.4" strokeLinecap="round">
    <path d="M 22 58 Q 28 46, 22 38 Q 16 30, 26 22 Q 36 14, 30 6" />
    <path d="M 38 58 Q 44 48, 38 40 Q 32 32, 42 24 Q 50 16, 44 8" />
  </svg>
);

/* ── №06 LIGHTNING ───────────────────────────────────────────── */
const G06_Lightning = ({ s = 64, c = 'currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 64 64" fill={c} stroke={c} strokeWidth="2" strokeLinejoin="round">
    <path d="M 36 4 L 16 32 L 28 32 L 20 60 L 48 28 L 36 28 L 42 4 Z" />
  </svg>
);

/* ── №07 HAND ────────────────────────────────────────────────── */
const G07_Hand = ({ s = 64, c = 'currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 64 64" fill="none" stroke={c} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 18 60 L 16 32 Q 16 28, 20 28 L 22 28 L 22 10 Q 22 6, 26 6 Q 30 6, 30 10 L 30 26 L 32 26 L 32 6 Q 32 2, 36 2 Q 40 2, 40 6 L 40 26 L 42 26 L 42 10 Q 42 6, 46 6 Q 50 6, 50 10 L 50 32 Q 50 60, 34 60 Z" fill={c} />
    <circle cx="33" cy="36" r="6" fill={HC.cream} stroke={HC.ink} />
    <circle cx="33" cy="36" r="2" fill={HC.ink} stroke="none" />
  </svg>
);

/* ── №08 FLAME ───────────────────────────────────────────────── */
const G08_Flame = ({ s = 64, c = 'currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 64 64" fill={c} stroke={c} strokeWidth="2" strokeLinejoin="round">
    <path d="M 32 4 Q 22 18, 26 28 Q 18 24, 16 36 Q 14 50, 32 60 Q 50 50, 48 36 Q 46 24, 38 28 Q 42 18, 32 4 Z" />
    <path d="M 32 32 Q 26 38, 28 46 Q 32 52, 36 46 Q 38 38, 32 32 Z" fill={HC.cream} />
  </svg>
);

/* ── №09 STAR (8-point) ─────────────────────────────────────── */
const G09_Star = ({ s = 64, c = 'currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 64 64" fill={c} stroke="none">
    <path d="M 32 4 L 36 26 L 60 32 L 36 38 L 32 60 L 28 38 L 4 32 L 28 26 Z" />
  </svg>
);

/* ── №10 LEAF (cannabis-adjacent fan, abstracted) ───────────── */
const G10_Leaf = ({ s = 64, c = 'currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 64 64" fill="none" stroke={c} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 32 60 L 32 30" />
    <path d="M 32 30 Q 18 18, 8 22 Q 14 30, 28 32 Q 16 36, 6 36 Q 14 44, 30 38" />
    <path d="M 32 30 Q 46 18, 56 22 Q 50 30, 36 32 Q 48 36, 58 36 Q 50 44, 34 38" />
    <path d="M 32 30 Q 24 14, 18 6 Q 26 6, 32 18 Q 38 6, 46 6 Q 40 14, 32 30" />
  </svg>
);

/* ── №11 WAVE ────────────────────────────────────────────────── */
const G11_Wave = ({ s = 64, c = 'currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 64 64" fill="none" stroke={c} strokeWidth="2.4" strokeLinecap="round">
    <path d="M 4 22 Q 14 12, 24 22 T 44 22 T 60 22" />
    <path d="M 4 36 Q 14 26, 24 36 T 44 36 T 60 36" />
    <path d="M 4 50 Q 14 40, 24 50 T 44 50 T 60 50" />
  </svg>
);

/* ── №12 KEY (gateway) ──────────────────────────────────────── */
const G12_Key = ({ s = 64, c = 'currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 64 64" fill="none" stroke={c} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="20" cy="32" r="12" fill={c} />
    <circle cx="20" cy="32" r="5" fill={HC.cream} stroke={HC.ink} />
    <path d="M 32 32 L 60 32 L 60 38 M 50 32 L 50 40 M 42 32 L 42 38" stroke={c} />
  </svg>
);

const GLYPHS = [
  { n: '01', name: 'eye',       Cmp: G01_Eye },
  { n: '02', name: 'mushroom',  Cmp: G02_Mushroom },
  { n: '03', name: 'sun',       Cmp: G03_Sun },
  { n: '04', name: 'mountain',  Cmp: G04_Mountain },
  { n: '05', name: 'smoke',     Cmp: G05_Smoke },
  { n: '06', name: 'lightning', Cmp: G06_Lightning },
  { n: '07', name: 'hand',      Cmp: G07_Hand },
  { n: '08', name: 'flame',     Cmp: G08_Flame },
  { n: '09', name: 'star',      Cmp: G09_Star },
  { n: '10', name: 'leaf',      Cmp: G10_Leaf },
  { n: '11', name: 'wave',      Cmp: G11_Wave },
  { n: '12', name: 'key',       Cmp: G12_Key },
];

/* Catalog lookup */
function NumGlyph({ n, size = 32, color }) {
  const g = GLYPHS.find(g => g.n === String(n).padStart(2, '0')) || GLYPHS[0];
  const Cmp = g.Cmp;
  return <Cmp s={size} c={color || HC.ink} />;
}

/* Tiny inline glyph + number tag — used as section markers */
function GlyphTag({ n, label, color = HC.ink, size = 'md' }) {
  const sz = size === 'sm' ? 18 : size === 'lg' ? 36 : 24;
  const g = GLYPHS.find(g => g.n === String(n).padStart(2, '0')) || GLYPHS[0];
  const Cmp = g.Cmp;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color }}>
      <Cmp s={sz} c={color} />
      <span style={{ ...HS.mono, fontSize: sz * 0.42, letterSpacing: '0.12em' }}>
        №{g.n}{label ? ` · ${label}` : ''}
      </span>
    </span>
  );
}

/* Big stamped section opener — circular emblem with the glyph + number */
function GlyphMark({ n, size = 110, color = HC.ink, bg = HC.cream }) {
  const g = GLYPHS.find(g => g.n === String(n).padStart(2, '0')) || GLYPHS[0];
  const Cmp = g.Cmp;
  return (
    <div style={{
      position: 'relative', width: size, height: size,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <svg viewBox="0 0 100 100" width={size} height={size} style={{ position: 'absolute', inset: 0 }}>
        <circle cx="50" cy="50" r="48" fill={bg} stroke={color} strokeWidth="2" />
        <circle cx="50" cy="50" r="42" fill="none" stroke={color} strokeWidth="0.5" strokeDasharray="1.5 2" />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Cmp s={size * 0.46} c={color} />
        <div style={{ ...HS.mono, fontSize: size * 0.09, color, letterSpacing: '0.18em', marginTop: 2 }}>№{g.n}</div>
      </div>
    </div>
  );
}

/* Bullet — used in lists, replaces "•" */
function GlyphBullet({ n, size = 18, color = HC.ink }) {
  const g = GLYPHS.find(g => g.n === String(n).padStart(2, '0')) || GLYPHS[0];
  const Cmp = g.Cmp;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color }}>
      <Cmp s={size} c={color} />
      <span style={{ ...HS.mono, fontSize: 9, opacity: 0.6 }}>{g.n}</span>
    </span>
  );
}

/* ============================================================
   POLISH UTILITIES
   ============================================================ */

/* Lazy-reveal: sections drop in like stickers being placed */
function useReveal(rotate = 0) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { setShown(true); io.unobserve(el); } });
    }, { threshold: 0.15, rootMargin: '0px 0px -80px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const style = {
    opacity: shown ? 1 : 0,
    transform: shown ? `rotate(${rotate}deg) translateY(0) scale(1)` : `rotate(${rotate - 4}deg) translateY(28px) scale(0.96)`,
    transition: 'opacity .55s cubic-bezier(.2,.8,.2,1), transform .65s cubic-bezier(.2,.8,.2,1)',
  };
  return [ref, style];
}

function Reveal({ children, rotate = 0, delay = 0, as: As = 'div', style: extra, ...rest }) {
  const [ref, st] = useReveal(rotate);
  return (
    <As ref={ref} style={{ ...st, transitionDelay: `${delay}ms`, ...extra }} {...rest}>
      {children}
    </As>
  );
}

/* Hover-sticker: tilts +1deg on hover with smooth easing */
function HoverSticker({ children, baseRotate = -2, hoverRotate = 1, lift = 4, scale = 1.02, style: extra, ...rest }) {
  const [hov, setHov] = React.useState(false);
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

/* Confetti trail — spawns a small glyph that floats up and fades on click */
function spawnGlyphConfetti(x, y, color) {
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

function getGlyphPath(n) {
  // Simplified inline paths for confetti
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

/* Hook to attach confetti to a click target */
function useConfettiOnClick() {
  return React.useCallback((e) => {
    spawnGlyphConfetti(e.clientX, e.clientY);
  }, []);
}

/* Drop-cap — large glyph as the first letter of a paragraph */
function DropCap({ glyphN, color = HC.rose, children }) {
  return (
    <div style={{ ...HS.serif, fontSize: 22, lineHeight: 1.45, fontStyle: 'italic', overflow: 'hidden' }}>
      <span style={{ float: 'left', marginRight: 14, marginTop: 4, marginBottom: 0 }}>
        <GlyphMark n={glyphN} size={88} color={color} bg={HC.cream} />
      </span>
      {children}
    </div>
  );
}

/* Numbered hairline rule — "№ 03 / OF 06" */
function FolioRule({ n, of, label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, color: HC.ink, ...HS.mono, fontSize: 10, letterSpacing: '0.16em' }}>
      <span>№ {String(n).padStart(2,'0')}</span>
      <span style={{ flex: 1, height: 1, background: HC.ink, opacity: 0.4 }} />
      {label && <span style={{ fontStyle: 'italic', textTransform: 'none' }}>{label}</span>}
      {label && <span style={{ flex: 1, height: 1, background: HC.ink, opacity: 0.4 }} />}
      <span>OF {String(of).padStart(2,'0')}</span>
    </div>
  );
}

/* Big monogrammed lockup */
function Monogram({ size = 120, color = HC.ink }) {
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

/* Price stamp — used on shelf items */
function PriceStamp({ amount, rotate = -8, color = HC.rose }) {
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

Object.assign(window, {
  GLYPHS, NumGlyph, GlyphTag, GlyphMark, GlyphBullet,
  useReveal, Reveal, HoverSticker, spawnGlyphConfetti, useConfettiOnClick,
  DropCap, FolioRule, Monogram, PriceStamp,
});
