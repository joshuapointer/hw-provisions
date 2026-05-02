'use client';
import { useId } from 'react';
import { HC, HS } from './tokens';

export function Rings({ size = 200, color = HC.blue, opacity = 1 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" style={{ opacity }}>
      <g fill="none" stroke={color} strokeWidth="1.5">
        {[...Array(28)].map((_, i) => (
          <circle key={i} cx="100" cy="100" r={4 + i * 3.4} strokeDasharray={`${22 + i * 2} ${10 + i}`} />
        ))}
      </g>
    </svg>
  );
}

export function Burst({ size = 200, color = HC.blue, count = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200">
      <g fill={color}>
        {[...Array(count)].map((_, i) => (
          <path key={i} d="M99 0 L101 0 L100 100 Z" transform={`rotate(${(360 / count) * i} 100 100)`} />
        ))}
        <circle cx="100" cy="100" r="14" fill={color} />
      </g>
    </svg>
  );
}

export function Squiggle({ width = 200, color = HC.magenta }) {
  return (
    <svg width={width} height="14" viewBox={`0 0 ${width} 14`}>
      <path
        d={`M0 7 Q ${width / 8} 0, ${width / 4} 7 T ${width / 2} 7 T ${(3 * width) / 4} 7 T ${width} 7`}
        fill="none" stroke={color} strokeWidth="3" strokeLinecap="round"
      />
    </svg>
  );
}

export function HWMark({ size = 48, ring = HC.cream }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="49" fill={HC.blue} stroke={ring} strokeWidth="1" />
      <g fill={HC.cream}>
        {[...Array(16)].map((_, i) => (
          <path key={i} d="M49 8 L51 8 L50 50 Z" transform={`rotate(${i * 22.5} 50 50)`} />
        ))}
        <circle cx="50" cy="50" r="6" />
      </g>
    </svg>
  );
}

export function Mushroom({ size = 80, cap = HC.rose, stem = HC.cream, dots = HC.cream }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <path d="M 18 50 Q 18 18, 50 18 Q 82 18, 82 50 L 78 56 Q 50 50, 22 56 Z"
        fill={cap} stroke={HC.ink} strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="36" cy="34" r="4.5" fill={dots} />
      <circle cx="58" cy="28" r="6" fill={dots} />
      <circle cx="68" cy="42" r="3.5" fill={dots} />
      <circle cx="42" cy="46" r="3" fill={dots} />
      <path d="M 36 56 L 38 86 Q 50 90, 62 86 L 64 56"
        fill={stem} stroke={HC.ink} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M 42 64 Q 50 66, 58 64" fill="none" stroke={HC.ink} strokeWidth="1.8" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

export function Eye({ size = 80, iris = HC.blue, lash = HC.ink }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <path d="M 8 50 Q 50 16, 92 50 Q 50 84, 8 50 Z" fill="#FFF8E5" stroke={lash} strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="50" cy="50" r="18" fill={iris} stroke={lash} strokeWidth="2" />
      <circle cx="50" cy="50" r="8" fill={lash} />
      <circle cx="44" cy="44" r="4" fill="#FFF8E5" />
      {[15, 25, 35, 45, 55, 65, 75, 85].map((x, i) => (
        <line key={i} x1={x} y1={i % 2 === 0 ? 18 : 14} x2={x} y2="26" stroke={lash} strokeWidth="2" strokeLinecap="round" />
      ))}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <line key={i} x1="50" y1="50"
          x2={50 + Math.cos(deg * Math.PI / 180) * 44}
          y2={50 + Math.sin(deg * Math.PI / 180) * 44}
          stroke={iris} strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 4" opacity="0.5" />
      ))}
    </svg>
  );
}

export function Smoke({ size = 80, color = HC.smoke, opacity = 0.7 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ opacity }}>
      <g fill="none" stroke={color} strokeWidth="3" strokeLinecap="round">
        <path d="M 30 90 Q 40 70, 30 56 Q 20 42, 36 30 Q 52 18, 44 8" />
        <path d="M 50 90 Q 60 72, 52 58 Q 44 44, 56 32 Q 68 20, 60 10" />
        <path d="M 70 90 Q 78 74, 72 60 Q 66 46, 76 34" />
      </g>
    </svg>
  );
}

export function SunRise({ size = 200, sun = HC.amber, mountain = HC.blueDeep, sky = HC.cream }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200">
      <rect width="200" height="200" fill={sky} />
      <g fill={sun}>
        {[...Array(16)].map((_, i) => (
          <path key={i} d="M99 30 L101 30 L100 100 Z" transform={`rotate(${i * 22.5} 100 100)`} opacity={i % 2 === 0 ? 1 : 0.7} />
        ))}
      </g>
      <circle cx="100" cy="100" r="32" fill={sun} stroke={HC.ink} strokeWidth="2" />
      <path d="M 0 200 L 0 140 L 30 110 L 60 130 L 90 90 L 120 120 L 150 100 L 180 130 L 200 115 L 200 200 Z"
        fill={mountain} stroke={HC.ink} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M 30 110 L 40 122 L 50 116 M 90 90 L 100 102 L 110 96 M 150 100 L 160 110 L 170 105"
        fill="none" stroke={HC.cream} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export function Lightning({ size = 60, color = HC.amber }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <path d="M 50 6 L 28 56 L 46 56 L 32 94 L 72 40 L 54 40 L 62 6 Z"
        fill={color} stroke={HC.ink} strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  );
}

export function Hand({ size = 80, color = HC.cream, palm = HC.rose }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <path d="M 30 92 L 26 50 Q 26 42, 32 42 L 36 42 L 36 14 Q 36 8, 42 8 Q 48 8, 48 14 L 48 38 L 52 38 L 52 8 Q 52 2, 58 2 Q 64 2, 64 8 L 64 38 L 68 38 L 68 14 Q 68 8, 74 8 Q 80 8, 80 14 L 80 50 Q 80 92, 56 92 Z"
        fill={color} stroke={HC.ink} strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="54" cy="56" r="10" fill={palm} stroke={HC.ink} strokeWidth="2" />
      <circle cx="54" cy="56" r="3" fill={HC.ink} />
    </svg>
  );
}

export function Glyph({ size = 14, kind, color = 'currentColor' }) {
  const kinds = ['mushroom', 'eye', 'sun', 'lightning', 'star'];
  const k = kind || kinds[Math.floor(Math.random() * kinds.length)];
  if (k === 'mushroom') return (
    <span style={{ display: 'inline-block', width: size, height: size, verticalAlign: 'middle' }}>
      <svg viewBox="0 0 20 20" width={size} height={size}>
        <path d="M 4 9 Q 4 4 10 4 Q 16 4 16 9 L 14 11 Q 10 10 6 11 Z M 7 11 L 8 18 L 12 18 L 13 11 Z" fill={color} />
      </svg>
    </span>
  );
  if (k === 'eye') return (
    <span style={{ display: 'inline-block', width: size, height: size, verticalAlign: 'middle' }}>
      <svg viewBox="0 0 20 20" width={size} height={size}>
        <path d="M 2 10 Q 10 4 18 10 Q 10 16 2 10 Z" fill="none" stroke={color} strokeWidth="2" />
        <circle cx="10" cy="10" r="3" fill={color} />
      </svg>
    </span>
  );
  if (k === 'sun') return (
    <span style={{ display: 'inline-block', width: size, height: size, verticalAlign: 'middle' }}>
      <svg viewBox="0 0 20 20" width={size} height={size}>
        <circle cx="10" cy="10" r="4" fill={color} />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((d, i) => (
          <line key={i} x1="10" y1="10"
            x2={10 + Math.cos(d * Math.PI / 180) * 9}
            y2={10 + Math.sin(d * Math.PI / 180) * 9}
            stroke={color} strokeWidth="2" strokeLinecap="round" />
        ))}
      </svg>
    </span>
  );
  if (k === 'lightning') return (
    <span style={{ display: 'inline-block', width: size, height: size, verticalAlign: 'middle' }}>
      <svg viewBox="0 0 20 20" width={size} height={size}>
        <path d="M 10 2 L 5 11 L 9 11 L 7 18 L 14 8 L 10 8 L 12 2 Z" fill={color} />
      </svg>
    </span>
  );
  return <span style={{ display: 'inline-block', verticalAlign: 'middle', color, fontSize: size }}>✦</span>;
}

export function Halftone({ color = HC.ink, opacity = 0.18, dot = 3, gap = 8 }) {
  const id = useId();
  return (
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity }} preserveAspectRatio="none">
      <defs>
        <pattern id={id} width={gap} height={gap} patternUnits="userSpaceOnUse">
          <circle cx={gap / 2} cy={gap / 2} r={dot / 2} fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

export function Grain({ opacity = 0.1 }) {
  return (
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none', opacity,
      backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' seed='5'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.7 0'/></filter><rect width='200' height='200' filter='url(%23n)'/></svg>")`,
      mixBlendMode: 'multiply',
    }} />
  );
}

export function Sticker({ children, color = HC.cream, rotate = -3, padding = 14, shadow = true, peel = true }) {
  return (
    <div style={{
      position: 'relative', display: 'inline-block', padding,
      background: color, border: `2.5px solid ${HC.ink}`,
      transform: `rotate(${rotate}deg)`,
      boxShadow: shadow ? `5px 5px 0 ${HC.ink}` : 'none',
    }}>
      {children}
      {peel && (
        <svg style={{ position: 'absolute', bottom: -2, right: -2, width: 24, height: 24 }} viewBox="0 0 24 24">
          <path d="M 24 0 L 24 24 L 0 24 Z" fill={HC.cream} stroke={HC.ink} strokeWidth="2" />
          <path d="M 24 0 L 0 24" stroke={HC.ink} strokeWidth="1.5" opacity="0.3" />
        </svg>
      )}
    </div>
  );
}

export function CurvedText({ text = "where's your head at? · ", radius = 60, fontSize = 12, color = HC.ink }) {
  const id = useId();
  const size = (radius + fontSize) * 2 + 8;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <defs>
        <path id={id} d={`M ${size / 2}, ${size / 2} m -${radius}, 0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`} />
      </defs>
      <text fill={color} style={{ ...HS.mono, fontSize }}>
        <textPath href={`#${id}`}>{text.repeat(4)}</textPath>
      </text>
    </svg>
  );
}

export function StampButton({ label = 'CLICK · ME · ', center = '✦', color = HC.blue, fg = HC.cream, size = 140, rotate = -8 }) {
  const stampId = `stamp-${label.replace(/[^a-z0-9]/gi, '')}`;
  return (
    <div style={{
      width: size, height: size, position: 'relative',
      transform: `rotate(${rotate}deg)`, cursor: 'pointer',
    }}>
      <svg viewBox="0 0 100 100" width={size} height={size} style={{ position: 'absolute', inset: 0 }}>
        <circle cx="50" cy="50" r="48" fill={color} stroke={HC.ink} strokeWidth="1.5" />
        <circle cx="50" cy="50" r="38" fill="none" stroke={fg} strokeWidth="1" strokeDasharray="2 3" />
        <defs>
          <path id={stampId} d="M 50,50 m -32, 0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0" />
        </defs>
        <text fill={fg} style={{ ...HS.mono, fontSize: 7, letterSpacing: '0.2em' }}>
          <textPath href={`#${stampId}`}>{label.repeat(6)}</textPath>
        </text>
      </svg>
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        ...HS.display, fontSize: size * 0.18, color: fg, textAlign: 'center', lineHeight: 1,
      }}>{center}</div>
    </div>
  );
}

export function TicketButton({ children, color = HC.lime, fg = HC.ink, size = 'lg', icon = '→' }) {
  const sizes = {
    sm: { padW: 16, padH: 10, fs: 12 },
    md: { padW: 22, padH: 14, fs: 14 },
    lg: { padW: 30, padH: 18, fs: 16 },
  }[size];
  return (
    <button style={{
      position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 12,
      padding: `${sizes.padH}px ${sizes.padW + 12}px ${sizes.padH}px ${sizes.padW + 18}px`,
      background: color, color: fg, ...HS.alt, fontSize: sizes.fs,
      border: `2px solid ${HC.ink}`, cursor: 'pointer',
      clipPath: 'polygon(8px 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 8px 100%, 0 50%)',
      filter: `drop-shadow(4px 4px 0 ${HC.ink})`,
    }}>
      <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: HC.ink }} />
      <span>{children}</span>
      <span style={{ ...HS.display, fontSize: sizes.fs * 1.4 }}>{icon}</span>
    </button>
  );
}

export function BlobButton({ children, color = HC.magenta, fg = HC.ink, rotate = -2 }) {
  return (
    <button style={{
      position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 10,
      padding: '20px 36px', background: 'transparent', border: 'none', cursor: 'pointer',
      transform: `rotate(${rotate}deg)`,
    }}>
      <svg viewBox="0 0 200 80" preserveAspectRatio="none" style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0,
      }}>
        <path d="M 14 8 C 60 -2 130 4 188 10 C 198 30 196 60 184 72 C 130 78 70 76 12 70 C 2 50 4 22 14 8 Z"
          fill={color} stroke={HC.ink} strokeWidth="2" />
      </svg>
      <span style={{ position: 'relative', zIndex: 1, color: fg, ...HS.alt, fontSize: 16 }}>
        {children}
      </span>
    </button>
  );
}
