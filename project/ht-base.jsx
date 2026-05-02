/* ============================================================
   HEADWATERS — Heady Trip BASE (de-conventionalized chrome)
   Anchored on brand blue #387CCC from logo.
   ============================================================ */

const HC = {
  /* Brand anchor — kept */
  blue: '#387CCC',
  blueDeep: '#1F4A8A',
  blueDark: '#0B1F3D',
  /* Smokier paper, amber-tinted */
  cream: '#F2E6C9',
  creamWarm: '#E5D2A5',
  ink: '#1A1207',     /* warmer near-black, ink-on-newsprint */
  /* Headshop accents — amber, smoky rose, hazy purple, fern */
  amber: '#E6A933',     /* old-gold / mustard / smoke-stained brass */
  rose: '#C44A6A',      /* burgundy / dusty rose */
  haze: '#8B5FB0',      /* hazy purple, blacklight-poster */
  fern: '#6B8E3D',      /* mossy green, vintage tobacco label */
  ember: '#D8541E',     /* hot-coal orange */
  smoke: '#6B6457',     /* warm grey */
  paper: '#EFE2BD',     /* aged paper */
  /* Legacy aliases — keep components rendering */
  lime: '#E6A933',      /* alias to amber so existing refs warm up */
  magenta: '#C44A6A',   /* alias to rose */
  tangerine: '#D8541E', /* alias to ember */
};

const HS = {
  page: { fontFamily: '"Space Grotesk", sans-serif', color: HC.ink, background: HC.cream, width: 1440 },
  /* Heavier slab-display — poster-art-y */
  display: { fontFamily: '"Bowlby One SC", "Shrikhand", serif', letterSpacing: '-0.01em', fontWeight: 400 },
  /* Headshop hand-lettering for accents */
  hand: { fontFamily: '"Caveat", cursive', fontWeight: 700, letterSpacing: '0' },
  alt: { fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 800, letterSpacing: '-0.03em' },
  serif: { fontFamily: '"Fraunces", serif', fontVariationSettings: '"opsz" 144, "SOFT" 50' },
  mono: { fontFamily: '"IBM Plex Mono", monospace', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase' },
};

function Rings({ size = 200, color = HC.blue, opacity = 1 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" style={{ opacity }}>
      <g fill="none" stroke={color} strokeWidth="1.5">
        {[...Array(28)].map((_, i) => (
          <circle key={i} cx="100" cy="100" r={4 + i*3.4} strokeDasharray={`${22+i*2} ${10+i}`} />
        ))}
      </g>
    </svg>
  );
}

function Burst({ size = 200, color = HC.blue, count = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200">
      <g fill={color}>
        {[...Array(count)].map((_, i) => (
          <path key={i} d="M99 0 L101 0 L100 100 Z" transform={`rotate(${(360/count)*i} 100 100)`} />
        ))}
        <circle cx="100" cy="100" r="14" fill={color} />
      </g>
    </svg>
  );
}

function Squiggle({ width = 200, color = HC.magenta }) {
  return (
    <svg width={width} height="14" viewBox={`0 0 ${width} 14`}>
      <path d={`M0 7 Q ${width/8} 0, ${width/4} 7 T ${width/2} 7 T ${3*width/4} 7 T ${width} 7`}
        fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function HWMark({ size = 48, ring = HC.cream }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="49" fill={HC.blue} stroke={ring} strokeWidth="1" />
      <g fill={HC.cream}>
        {[...Array(16)].map((_, i) => (
          <path key={i} d="M49 8 L51 8 L50 50 Z" transform={`rotate(${i*22.5} 50 50)`} />
        ))}
        <circle cx="50" cy="50" r="6" />
      </g>
    </svg>
  );
}

/* ============================================================
   HEADSHOP ICONOGRAPHY — mushroom, eye, smoke, sun, mountain, lightning, hand
   ============================================================ */
function Mushroom({ size = 80, cap = HC.rose, stem = HC.cream, dots = HC.cream }) {
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

function Eye({ size = 80, iris = HC.blue, lash = HC.ink }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <path d="M 8 50 Q 50 16, 92 50 Q 50 84, 8 50 Z" fill="#FFF8E5" stroke={lash} strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="50" cy="50" r="18" fill={iris} stroke={lash} strokeWidth="2" />
      <circle cx="50" cy="50" r="8" fill={lash} />
      <circle cx="44" cy="44" r="4" fill="#FFF8E5" />
      {/* lashes */}
      {[15, 25, 35, 45, 55, 65, 75, 85].map((x, i) => (
        <line key={i} x1={x} y1={i % 2 === 0 ? 18 : 14} x2={x} y2="26" stroke={lash} strokeWidth="2" strokeLinecap="round" />
      ))}
      {/* rays */}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <line key={i} x1="50" y1="50" x2={50 + Math.cos(deg * Math.PI / 180) * 44} y2={50 + Math.sin(deg * Math.PI / 180) * 44}
          stroke={iris} strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 4" opacity="0.5" />
      ))}
    </svg>
  );
}

function Smoke({ size = 80, color = HC.smoke, opacity = 0.7 }) {
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

function SunRise({ size = 200, sun = HC.amber, mountain = HC.blueDeep, sky = HC.cream }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200">
      <rect width="200" height="200" fill={sky} />
      {/* sun rays */}
      <g fill={sun}>
        {[...Array(16)].map((_, i) => (
          <path key={i} d="M99 30 L101 30 L100 100 Z" transform={`rotate(${i*22.5} 100 100)`} opacity={i % 2 === 0 ? 1 : 0.7} />
        ))}
      </g>
      <circle cx="100" cy="100" r="32" fill={sun} stroke={HC.ink} strokeWidth="2" />
      {/* mountains */}
      <path d="M 0 200 L 0 140 L 30 110 L 60 130 L 90 90 L 120 120 L 150 100 L 180 130 L 200 115 L 200 200 Z"
        fill={mountain} stroke={HC.ink} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M 30 110 L 40 122 L 50 116 M 90 90 L 100 102 L 110 96 M 150 100 L 160 110 L 170 105"
        fill="none" stroke={HC.cream} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

function Lightning({ size = 60, color = HC.amber }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <path d="M 50 6 L 28 56 L 46 56 L 32 94 L 72 40 L 54 40 L 62 6 Z"
        fill={color} stroke={HC.ink} strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  );
}

function Hand({ size = 80, color = HC.cream, palm = HC.rose }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <path d="M 30 92 L 26 50 Q 26 42, 32 42 L 36 42 L 36 14 Q 36 8, 42 8 Q 48 8, 48 14 L 48 38 L 52 38 L 52 8 Q 52 2, 58 2 Q 64 2, 64 8 L 64 38 L 68 38 L 68 14 Q 68 8, 74 8 Q 80 8, 80 14 L 80 50 Q 80 92, 56 92 Z"
        fill={color} stroke={HC.ink} strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="54" cy="56" r="10" fill={palm} stroke={HC.ink} strokeWidth="2" />
      <circle cx="54" cy="56" r="3" fill={HC.ink} />
    </svg>
  );
}

/* Glyph — a randomly-picked headshop icon, used in place of ✦ stars */
function Glyph({ size = 14, kind, color = 'currentColor' }) {
  const kinds = ['mushroom', 'eye', 'sun', 'lightning', 'star'];
  const k = kind || kinds[Math.floor(Math.random() * kinds.length)];
  if (k === 'mushroom') return <span style={{ display: 'inline-block', width: size, height: size, verticalAlign: 'middle' }}>
    <svg viewBox="0 0 20 20" width={size} height={size}><path d="M 4 9 Q 4 4 10 4 Q 16 4 16 9 L 14 11 Q 10 10 6 11 Z M 7 11 L 8 18 L 12 18 L 13 11 Z" fill={color} /></svg>
  </span>;
  if (k === 'eye') return <span style={{ display: 'inline-block', width: size, height: size, verticalAlign: 'middle' }}>
    <svg viewBox="0 0 20 20" width={size} height={size}><path d="M 2 10 Q 10 4 18 10 Q 10 16 2 10 Z" fill="none" stroke={color} strokeWidth="2" /><circle cx="10" cy="10" r="3" fill={color} /></svg>
  </span>;
  if (k === 'sun') return <span style={{ display: 'inline-block', width: size, height: size, verticalAlign: 'middle' }}>
    <svg viewBox="0 0 20 20" width={size} height={size}><circle cx="10" cy="10" r="4" fill={color} />{[0,45,90,135,180,225,270,315].map((d,i) => <line key={i} x1="10" y1="10" x2={10 + Math.cos(d*Math.PI/180)*9} y2={10 + Math.sin(d*Math.PI/180)*9} stroke={color} strokeWidth="2" strokeLinecap="round" />)}</svg>
  </span>;
  if (k === 'lightning') return <span style={{ display: 'inline-block', width: size, height: size, verticalAlign: 'middle' }}>
    <svg viewBox="0 0 20 20" width={size} height={size}><path d="M 10 2 L 5 11 L 9 11 L 7 18 L 14 8 L 10 8 L 12 2 Z" fill={color} /></svg>
  </span>;
  return <span style={{ display: 'inline-block', verticalAlign: 'middle', color, fontSize: size }}>✦</span>;
}

/* Halftone dot pattern — Ben-Day-style screenprint texture */
function Halftone({ color = HC.ink, opacity = 0.18, size = 'cover', dot = 3, gap = 8 }) {
  const id = React.useId();
  return (
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity }} preserveAspectRatio="none">
      <defs>
        <pattern id={id} width={gap} height={gap} patternUnits="userSpaceOnUse">
          <circle cx={gap/2} cy={gap/2} r={dot/2} fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

/* Screen-print grain — fine noisy texture */
function Grain({ opacity = 0.1 }) {
  return (
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none', opacity,
      backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' seed='5'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.7 0'/></filter><rect width='200' height='200' filter='url(%23n)'/></svg>")`,
      mixBlendMode: 'multiply',
    }} />
  );
}

/* Sticker — peel-corner tilted card, used to layer photos & callouts */
function Sticker({ children, color = HC.cream, rotate = -3, padding = 14, shadow = true, peel = true }) {
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


function CurvedText({ text = "where's your head at? · ", radius = 60, fontSize = 12, color = HC.ink }) {
  const id = React.useId();
  const size = (radius + fontSize) * 2 + 8;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <defs>
        <path id={id} d={`M ${size/2}, ${size/2} m -${radius}, 0 a ${radius},${radius} 0 1,1 ${radius*2},0 a ${radius},${radius} 0 1,1 -${radius*2},0`} />
      </defs>
      <text fill={color} style={{ ...HS.mono, fontSize }}>
        <textPath href={`#${id}`}>{text.repeat(4)}</textPath>
      </text>
    </svg>
  );
}

/* ============================================================
   NOVEL: Stamp button — circular wax-seal with curved text
   ============================================================ */
function StampButton({ label = "CLICK · ME · ", center = "✦", color = HC.blue, fg = HC.cream, size = 140, rotate = -8 }) {
  return (
    <div style={{
      width: size, height: size, position: 'relative',
      transform: `rotate(${rotate}deg)`, cursor: 'pointer',
    }}>
      <svg viewBox="0 0 100 100" width={size} height={size} style={{ position: 'absolute', inset: 0 }}>
        <circle cx="50" cy="50" r="48" fill={color} stroke={HC.ink} strokeWidth="1.5" />
        <circle cx="50" cy="50" r="38" fill="none" stroke={fg} strokeWidth="1" strokeDasharray="2 3" />
        <defs>
          <path id={`stamp-${label}`} d="M 50,50 m -32, 0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0" />
        </defs>
        <text fill={fg} style={{ ...HS.mono, fontSize: 7, letterSpacing: '0.2em' }}>
          <textPath href={`#stamp-${label}`}>{label.repeat(6)}</textPath>
        </text>
      </svg>
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        ...HS.display, fontSize: size*0.18, color: fg, textAlign: 'center', lineHeight: 1,
      }}>{center}</div>
    </div>
  );
}

/* ============================================================
   NOVEL: Ticket-stub button — perforated edge with notch
   ============================================================ */
function TicketButton({ children, color = HC.lime, fg = HC.ink, size = 'lg', icon = '→' }) {
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
      <span style={{
        display: 'inline-block', width: 6, height: 6, borderRadius: '50%',
        background: HC.ink,
      }} />
      <span>{children}</span>
      <span style={{ ...HS.display, fontSize: sizes.fs * 1.4 }}>{icon}</span>
    </button>
  );
}

/* ============================================================
   NOVEL: Wobble button — irregular squircle with wobble blob
   ============================================================ */
function BlobButton({ children, color = HC.magenta, fg = HC.ink, rotate = -2 }) {
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

/* ============================================================
   NOVEL NAV: orbital nav — emblem with link planets around it
   plus a sticky drift bar at top with phone/hours
   ============================================================ */
function Nav({ active = 'home', tone = 'light' }) {
  const links = [
    { k: 'home', l: 'home' },
    { k: 'showcase', l: 'showcase' },
    { k: 'visit', l: 'visit' },
    { k: 'journal', l: 'journal' },
    { k: 'about', l: 'about' },
  ];
  const dark = tone === 'dark';
  const fg = dark ? HC.cream : HC.ink;
  const bg = dark ? HC.blueDark : HC.cream;
  return (
    <>
      {/* DRIFT BAR */}
      <div style={{
        background: HC.ink, color: HC.lime, padding: '8px 0',
        overflow: 'hidden', whiteSpace: 'nowrap',
      }}>
        <div style={{ ...HS.mono, fontSize: 11, display: 'flex', gap: 32 }}>
          {[...Array(6)].map((_, i) => (
            <span key={i} style={{ display: 'inline-flex', gap: 32 }}>
              <span>✦ open daily 9–8</span>
              <span style={{ color: HC.magenta }}>· (479) 251-8581 ·</span>
              <span>✦ inside the source · rogers ar</span>
              <span style={{ color: HC.tangerine }}>· no card needed ·</span>
            </span>
          ))}
        </div>
      </div>

      {/* MAIN NAV — wavy bottom edge, off-grid emblem */}
      <nav style={{
        background: bg, color: fg, position: 'relative',
        padding: '20px 40px 36px',
      }}>
        {/* wavy bottom mask */}
        <svg viewBox="0 0 1440 24" preserveAspectRatio="none" style={{
          position: 'absolute', bottom: -1, left: 0, width: '100%', height: 24, display: 'block',
        }}>
          <path d="M0 24 L0 8 Q 60 0, 120 8 T 240 8 T 360 8 T 480 8 T 600 8 T 720 8 T 840 8 T 960 8 T 1080 8 T 1200 8 T 1320 8 T 1440 8 L 1440 24 Z"
            fill={HC.ink} />
        </svg>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* LEFT: emblem with curved text orbit */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 18, textDecoration: 'none', color: fg }}>
            <div style={{ position: 'relative', width: 80, height: 80 }}>
              <div style={{ position: 'absolute', inset: 0, animation: 'hw-spin 22s linear infinite' }}>
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
          </a>

          {/* CENTER: arc-arranged links */}
          <ArcLinks links={links} active={active} fg={fg} />

          {/* RIGHT: stamp CTA */}
          <a href="#" style={{ textDecoration: 'none' }}>
            <StampButton label="OPEN · 9 TO 8 · " center="✦" color={HC.lime} fg={HC.ink} size={92} rotate={-6} />
          </a>
        </div>
      </nav>
      <style>{`
        @keyframes hw-spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
      `}</style>
    </>
  );
}

/* Arc/wavy nav links — each link sits at slightly different vertical offset,
   underline is a wavy hand-drawn squiggle on active */
function ArcLinks({ links, active, fg }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 28, position: 'relative' }}>
      {links.map((l, i) => {
        const offset = [-2, 6, -4, 8, -6, 4][i % 6];
        const rotate = [-2, 1, -1, 2, -1, 1][i % 6];
        const isActive = active === l.k;
        const accents = [HC.magenta, HC.lime, HC.tangerine, HC.blue, HC.magenta, HC.lime];
        return (
          <a key={l.k} href="#" style={{
            position: 'relative',
            transform: `translateY(${offset}px) rotate(${rotate}deg)`,
            ...HS.alt, fontSize: 18,
            color: isActive ? HC.ink : fg,
            textDecoration: 'none',
            padding: '6px 4px',
            background: isActive ? accents[i] : 'transparent',
            border: isActive ? `2px solid ${HC.ink}` : 'none',
            boxShadow: isActive ? `3px 3px 0 ${HC.ink}` : 'none',
            paddingLeft: isActive ? 10 : 4,
            paddingRight: isActive ? 10 : 4,
          }}>
            {l.l}
            {!isActive && (
              <svg style={{ position: 'absolute', bottom: -6, left: 0, width: '100%' }} height="6" viewBox="0 0 60 6" preserveAspectRatio="none">
                <path d="M0 3 Q 15 0, 30 3 T 60 3" fill="none" stroke={accents[i]} strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </a>
        );
      })}
    </div>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */
function Footer() {
  return (
    <footer style={{ background: HC.blueDark, color: HC.cream, padding: '64px 40px 28px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: -120, bottom: -120, opacity: 0.18 }}>
        <Rings size={520} color={HC.lime} />
      </div>
      {/* wavy top edge */}
      <svg viewBox="0 0 1440 24" preserveAspectRatio="none" style={{
        position: 'absolute', top: -1, left: 0, width: '100%', height: 24, transform: 'scaleY(-1)',
      }}>
        <path d="M0 24 L0 8 Q 60 0, 120 8 T 240 8 T 360 8 T 480 8 T 600 8 T 720 8 T 840 8 T 960 8 T 1080 8 T 1200 8 T 1320 8 T 1440 8 L 1440 24 Z"
          fill={HC.blueDark} />
      </svg>
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
        <div>
          <div style={{ position: 'relative', width: 140, height: 140 }}>
            <div style={{ position: 'absolute', inset: 0, animation: 'hw-spin 28s linear infinite' }}>
              <CurvedText text="✦ stay heady · headwaters · " radius={58} fontSize={11} color={HC.lime} />
            </div>
            <div style={{ position: 'absolute', inset: 30 }}>
              <HWMark size={80} ring={HC.cream} />
            </div>
          </div>
          <div style={{ ...HS.display, fontSize: 64, color: HC.cream, lineHeight: 0.9, marginTop: 20 }}>headwaters</div>
          <div style={{ ...HS.serif, fontStyle: 'italic', fontSize: 22, color: HC.lime, marginTop: 8 }}>
            "where's your head at?"
          </div>
        </div>
        {[
          { h: 'visit', items: ['4505 W Poplar St', 'Rogers, AR 72756', 'inside The Source'] },
          { h: 'hours', items: ['Mon–Fri · 9–8', 'Saturday · 9–7', 'Sunday · 10–6'] },
          { h: 'holler', items: ['(479) 251-8581', 'info@headwatersprovisions.com', '@headwaters_provisions'] },
        ].map(c => (
          <div key={c.h}>
            <div style={{ ...HS.mono, fontSize: 11, color: HC.magenta, marginBottom: 12 }}>✦ {c.h}</div>
            {c.items.map(i => <div key={i} style={{ fontSize: 13, lineHeight: 1.7, color: 'rgba(245,236,217,0.9)' }}>{i}</div>)}
          </div>
        ))}
      </div>
      <div style={{
        position: 'relative', borderTop: `1px solid rgba(245,236,217,0.2)`, paddingTop: 20,
        ...HS.mono, fontSize: 10, color: 'rgba(245,236,217,0.6)',
        display: 'flex', justifyContent: 'space-between',
      }}>
        <span>© 2026 Headwaters Provisions LLC ✦ stay heady</span>
        <span>21+ · no medical card needed</span>
      </div>
    </footer>
  );
}

/* ============================================================
   MARQUEE
   ============================================================ */
function Marquee({ bg = HC.ink, fg = HC.lime, text = "where's your head at?" }) {
  return (
    <section style={{
      background: bg, color: fg, padding: '18px 0',
      borderTop: `2px solid ${HC.ink}`, borderBottom: `2px solid ${HC.ink}`,
      overflow: 'hidden', whiteSpace: 'nowrap',
    }}>
      <div style={{ ...HS.display, fontSize: 32, display: 'flex', gap: 40 }}>
        {[...Array(8)].map((_, i) => <span key={i}>{text} ✦ headwaters provisions ✦</span>)}
      </div>
    </section>
  );
}

window.HC = HC; window.HS = HS;
window.Rings = Rings; window.Burst = Burst; window.Squiggle = Squiggle; window.HWMark = HWMark;
window.Mushroom = Mushroom; window.Eye = Eye; window.Smoke = Smoke; window.SunRise = SunRise;
window.Lightning = Lightning; window.Hand = Hand; window.Glyph = Glyph;
window.Halftone = Halftone; window.Grain = Grain; window.Sticker = Sticker;
window.CurvedText = CurvedText; window.StampButton = StampButton; window.TicketButton = TicketButton; window.BlobButton = BlobButton;
window.Nav = Nav; window.Footer = Footer; window.Marquee = Marquee;
