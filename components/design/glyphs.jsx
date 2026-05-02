'use client';
import { HC, HS } from './tokens';

const G01_Eye = ({ s = 64, c = 'currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 64 64" fill="none" stroke={c} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 4 32 Q 32 8, 60 32 Q 32 56, 4 32 Z" />
    <circle cx="32" cy="32" r="10" fill={c} />
    <circle cx="29" cy="29" r="2.5" fill={HC.cream} stroke="none" />
    <line x1="32" y1="2" x2="32" y2="10" /><line x1="32" y1="54" x2="32" y2="62" />
  </svg>
);

const G02_Mushroom = ({ s = 64, c = 'currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 64 64" fill="none" stroke={c} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 10 30 Q 10 10, 32 10 Q 54 10, 54 30 L 50 34 Q 32 30, 14 34 Z" fill={c} />
    <circle cx="22" cy="22" r="2.5" fill={HC.cream} stroke="none" />
    <circle cx="38" cy="18" r="3" fill={HC.cream} stroke="none" />
    <circle cx="44" cy="26" r="2" fill={HC.cream} stroke="none" />
    <path d="M 22 34 L 24 56 Q 32 58, 40 56 L 42 34" />
  </svg>
);

const G03_Sun = ({ s = 64, c = 'currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 64 64" fill="none" stroke={c} strokeWidth="2.4" strokeLinecap="round">
    <circle cx="32" cy="32" r="11" fill={c} />
    {[0,30,60,90,120,150,180,210,240,270,300,330].map((d, i) => {
      const r1 = 16, r2 = 26;
      const x1 = 32 + Math.cos(d * Math.PI / 180) * r1;
      const y1 = 32 + Math.sin(d * Math.PI / 180) * r1;
      const x2 = 32 + Math.cos(d * Math.PI / 180) * r2;
      const y2 = 32 + Math.sin(d * Math.PI / 180) * r2;
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
    })}
  </svg>
);

const G04_Mountain = ({ s = 64, c = 'currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 64 64" fill="none" stroke={c} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 4 52 L 22 22 L 32 36 L 44 14 L 60 52 Z" />
    <path d="M 22 22 L 26 28 M 44 14 L 48 22" stroke={HC.cream} strokeWidth="1.5" />
    <circle cx="48" cy="14" r="6" fill={c} />
  </svg>
);

const G05_Smoke = ({ s = 64, c = 'currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 64 64" fill="none" stroke={c} strokeWidth="2.4" strokeLinecap="round">
    <path d="M 22 58 Q 28 46, 22 38 Q 16 30, 26 22 Q 36 14, 30 6" />
    <path d="M 38 58 Q 44 48, 38 40 Q 32 32, 42 24 Q 50 16, 44 8" />
  </svg>
);

const G06_Lightning = ({ s = 64, c = 'currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 64 64" fill={c} stroke={c} strokeWidth="2" strokeLinejoin="round">
    <path d="M 36 4 L 16 32 L 28 32 L 20 60 L 48 28 L 36 28 L 42 4 Z" />
  </svg>
);

const G07_Hand = ({ s = 64, c = 'currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 64 64" fill="none" stroke={c} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 18 60 L 16 32 Q 16 28, 20 28 L 22 28 L 22 10 Q 22 6, 26 6 Q 30 6, 30 10 L 30 26 L 32 26 L 32 6 Q 32 2, 36 2 Q 40 2, 40 6 L 40 26 L 42 26 L 42 10 Q 42 6, 46 6 Q 50 6, 50 10 L 50 32 Q 50 60, 34 60 Z" fill={c} />
    <circle cx="33" cy="36" r="6" fill={HC.cream} stroke={HC.ink} />
    <circle cx="33" cy="36" r="2" fill={HC.ink} stroke="none" />
  </svg>
);

const G08_Flame = ({ s = 64, c = 'currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 64 64" fill={c} stroke={c} strokeWidth="2" strokeLinejoin="round">
    <path d="M 32 4 Q 22 18, 26 28 Q 18 24, 16 36 Q 14 50, 32 60 Q 50 50, 48 36 Q 46 24, 38 28 Q 42 18, 32 4 Z" />
    <path d="M 32 32 Q 26 38, 28 46 Q 32 52, 36 46 Q 38 38, 32 32 Z" fill={HC.cream} />
  </svg>
);

const G09_Star = ({ s = 64, c = 'currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 64 64" fill={c} stroke="none">
    <path d="M 32 4 L 36 26 L 60 32 L 36 38 L 32 60 L 28 38 L 4 32 L 28 26 Z" />
  </svg>
);

const G10_Leaf = ({ s = 64, c = 'currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 64 64" fill="none" stroke={c} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 32 60 L 32 30" />
    <path d="M 32 30 Q 18 18, 8 22 Q 14 30, 28 32 Q 16 36, 6 36 Q 14 44, 30 38" />
    <path d="M 32 30 Q 46 18, 56 22 Q 50 30, 36 32 Q 48 36, 58 36 Q 50 44, 34 38" />
    <path d="M 32 30 Q 24 14, 18 6 Q 26 6, 32 18 Q 38 6, 46 6 Q 40 14, 32 30" />
  </svg>
);

const G11_Wave = ({ s = 64, c = 'currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 64 64" fill="none" stroke={c} strokeWidth="2.4" strokeLinecap="round">
    <path d="M 4 22 Q 14 12, 24 22 T 44 22 T 60 22" />
    <path d="M 4 36 Q 14 26, 24 36 T 44 36 T 60 36" />
    <path d="M 4 50 Q 14 40, 24 50 T 44 50 T 60 50" />
  </svg>
);

const G12_Key = ({ s = 64, c = 'currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 64 64" fill="none" stroke={c} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="20" cy="32" r="12" fill={c} />
    <circle cx="20" cy="32" r="5" fill={HC.cream} stroke={HC.ink} />
    <path d="M 32 32 L 60 32 L 60 38 M 50 32 L 50 40 M 42 32 L 42 38" stroke={c} />
  </svg>
);

export const GLYPHS = [
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

export function NumGlyph({ n, size = 32, color }) {
  const g = GLYPHS.find(g => g.n === String(n).padStart(2, '0')) || GLYPHS[0];
  const Cmp = g.Cmp;
  return <Cmp s={size} c={color || HC.ink} />;
}

export function GlyphTag({ n, label, color = HC.ink, size = 'md' }) {
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

export function GlyphMark({ n, size = 110, color = HC.ink, bg = HC.cream }) {
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

export function GlyphBullet({ n, size = 18, color = HC.ink }) {
  const g = GLYPHS.find(g => g.n === String(n).padStart(2, '0')) || GLYPHS[0];
  const Cmp = g.Cmp;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color }}>
      <Cmp s={size} c={color} />
      <span style={{ ...HS.mono, fontSize: 9, opacity: 0.6 }}>{g.n}</span>
    </span>
  );
}
