/* ============================================================
   HEADWATERS — Heady Trip BASE (scrapbook v3 — dimension + texture)

   What changed from v2:
   - paperShadow() helper: contact + mid + cast stack on every paper element
   - PaperTexture: noise / linen / kraft / fiber variants (was a single noise)
   - MaskingTape: translucent sheen, fiber banding, frayed ends, real shadow
   - TapedPhoto: paper bevel on the print, corner curl, layered drop shadow
   - TornCard: soft inner fiber shadow + layered drop
   - Sticker / Tape / Button / Nav / Footer: shadow language unified
   ============================================================ */

const HC = {
  blue:     '#387CCC',
  blueDeep: '#1F4A8A',
  blueDark: '#10325F',
  cream:    '#F5ECD9',
  creamSoft:'#FAF3E1',
  creamDeep:'#EDE0BD',
  creamWarm:'#E6D6AC',  /* deeper paper for layering */
  ink:      '#1A1207',
  yellow:   '#FFE066',
  yellowDeep: '#F5C944',
  /* Tape — translucent washi feel */
  tape:     'rgba(255, 224, 102, 0.78)',
  tapeBlue: 'rgba(56, 124, 204, 0.72)',
  tapeWhite:'rgba(250, 243, 225, 0.92)',
  tapeKraft:'rgba(196, 158, 102, 0.78)',
  shadow:   'rgba(26,18,7,0.20)',
  shadowSoft:'rgba(26,18,7,0.10)',
  shadowFar:'rgba(26,18,7,0.07)',
  shadowInk:'rgba(26,18,7,0.95)',
};

const HS = {
  page:    { fontFamily: '"Gunnar", -apple-system, BlinkMacSystemFont, system-ui, sans-serif', color: HC.ink, background: HC.cream, width: 1440 },
  display: { fontFamily: '"Holtzman Rounded", "Bowlby One SC", system-ui, sans-serif', letterSpacing: '-0.005em', fontWeight: 400 },
  serif:   { fontFamily: '"Sonoran", "Iowan Old Style", Georgia, serif', fontWeight: 400 },
  body:    { fontFamily: '"Gunnar", system-ui, sans-serif', fontWeight: 400 },
  /* alt = Sonoran in roman — used for buttons, captions, mid-weight UI labels */
  alt:     { fontFamily: '"Sonoran", "Iowan Old Style", Georgia, serif', fontWeight: 400, letterSpacing: '0.005em' },
  /* hand = Caveat — used for marginalia + handwritten captions */
  hand:    { fontFamily: '"Caveat", "Reenie Beanie", "Brush Script MT", cursive', fontWeight: 700 },
  mono:    { fontFamily: '"IBM Plex Mono", ui-monospace, Menlo, monospace', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase' },
};

/* ============================================================
   PAPER SHADOW — layered contact + mid + cast.
   Single offset shadows look fake. Real paper lifts in stages:
   a sharp 1px contact line, a soft mid drop, and a long diffuse cast.
   level: 1 (resting) | 2 (lifted) | 3 (floating) | 4 (peeling off page)
   ============================================================ */
function paperShadow(level = 2, hardOffset = true) {
  /* Hard cartoon-style offset (the "you can see daylight under the paper") */
  const hard = {
    1: `2px 3px 0 ${HC.shadowSoft}`,
    2: `4px 5px 0 ${HC.shadowSoft}`,
    3: `6px 8px 0 ${HC.shadow}`,
    4: `8px 10px 0 ${HC.shadow}`,
  }[level];

  /* Soft realistic stack */
  const soft = {
    1: `0 1px 1px rgba(0,0,0,0.06), 0 4px 6px ${HC.shadowFar}`,
    2: `0 1px 1px rgba(0,0,0,0.07), 0 6px 10px ${HC.shadowFar}, 0 16px 22px ${HC.shadowFar}`,
    3: `0 1px 2px rgba(0,0,0,0.08), 0 10px 16px ${HC.shadowSoft}, 0 24px 32px ${HC.shadowFar}`,
    4: `0 2px 3px rgba(0,0,0,0.10), 0 14px 22px ${HC.shadowSoft}, 0 32px 46px ${HC.shadowFar}`,
  }[level];

  return hardOffset ? `${hard}, ${soft}` : soft;
}

/* ============================================================
   PAPER TEXTURE — multiple paper stocks, each with its own grain.
   variant: 'noise' (default subtle fractal)
          | 'linen' (long horizontal fiber, magazine paper)
          | 'kraft' (warmer, denser, brown-paper)
          | 'fiber' (visible long fibers, art-paper)
   ============================================================ */
function PaperTexture({ variant = 'noise', opacity, color = HC.ink, blend = 'multiply' }) {
  const presets = {
    noise: {
      svg: `<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>`,
      size: '220px 220px',
      defaultOpacity: 0.06,
    },
    linen: {
      svg: `<svg xmlns='http://www.w3.org/2000/svg' width='320' height='320'><filter id='l'><feTurbulence type='fractalNoise' baseFrequency='0.012 0.95' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23l)'/></svg>`,
      size: '320px 320px',
      defaultOpacity: 0.10,
    },
    kraft: {
      svg: `<svg xmlns='http://www.w3.org/2000/svg' width='280' height='280'><filter id='k'><feTurbulence type='fractalNoise' baseFrequency='0.62' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.32  0 0 0 0 0.22  0 0 0 0 0.12  0 0 0 0.62 0'/></filter><rect width='100%' height='100%' filter='url(%23k)'/></svg>`,
      size: '280px 280px',
      defaultOpacity: 0.18,
    },
    fiber: {
      svg: `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><filter id='f'><feTurbulence type='turbulence' baseFrequency='0.018 0.7' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0'/><feComponentTransfer><feFuncA type='discrete' tableValues='0 0 0 0 0 0.6 0 0 1 0 0 0'/></feComponentTransfer></filter><rect width='100%' height='100%' filter='url(%23f)'/></svg>`,
      size: '400px 400px',
      defaultOpacity: 0.22,
    },
  };
  const p = presets[variant] || presets.noise;
  return (
    <div aria-hidden style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      opacity: opacity ?? p.defaultOpacity, mixBlendMode: blend,
      backgroundImage: `url("data:image/svg+xml;utf8,${p.svg}")`,
      backgroundSize: p.size,
    }} />
  );
}

/* Back-compat alias — many call-sites still say <PaperGrain ... />. */
function PaperGrain({ opacity = 0.06, color = HC.ink, blend = 'multiply', variant = 'noise' }) {
  return <PaperTexture variant={variant} opacity={opacity} color={color} blend={blend} />;
}

/* ============================================================
   PAPER STACK — wraps any element so it sits on top of a layered
   stack of slightly visible paper sheets behind it (peek at the
   edges). Adds depth without the consumer needing to think about it.
   ============================================================ */
function PaperStack({ children, layers = 2, rotateStep = 0.6, offsetStep = 4, color = HC.creamDeep, style = {} }) {
  return (
    <div style={{ position: 'relative', ...style }}>
      {[...Array(layers)].map((_, i) => {
        const idx = i + 1;
        return (
          <div key={i} aria-hidden style={{
            position: 'absolute', inset: 0,
            background: color,
            transform: `rotate(${idx * rotateStep * (i % 2 === 0 ? -1 : 1)}deg) translate(${idx * offsetStep}px, ${idx * offsetStep}px)`,
            boxShadow: paperShadow(1, false),
            zIndex: -1 - i,
          }} />
        );
      })}
      {children}
    </div>
  );
}

/* ============================================================
   LOGO
   ============================================================ */
function Logo({ kind = 'horizontal-blue', height = 56, style = {} }) {
  const map = {
    'horizontal-blue':   'mopborf1-Horizontal-Blue.png',
    'horizontal-white':  'mopborf3-Horizontal-White.png',
    'horizontal-black':  'mopborf0-Horizontal-Black.png',
    'icon-blue':         'mopborf6-Icon-Blue.png',
    'icon-white':        'mopborf7-Icon-White.png',
    'badge-blue':        'mopborfk-Logo-Blue.png',
    'badge-white':       'mopborfn-Logo-White.png',
  };
  return <img src={map[kind]} alt="Headwaters Provisions" style={{ height, width: 'auto', display: 'block', ...style }} />;
}

/* ============================================================
   SUNNY mascot
   ============================================================ */
function Sunny({ mood = 'face', size = 220, style = {} }) {
  const map = {
    face:        'mopbq0aq-Sunny_no_background.png',
    sign:        'mopbq0a5-Sunny_Holding_Sign.png',
    walk:        'mopbq0bk-Sunny_Walk.png',
    woo:         'mopbq0bq-Sunny_Woo.png',
    jump:        'mopbq0ae-Sunny_jump.png',
    peace:       'mopbq0av-Sunny_peace.png',
    love:        'mopbq0al-Sunny_love.png',
    smoking:     'mopbq0b8-Sunny_Smoking.PNG',
    rain:        'mopbq0b0-Sunny_Rain.png',
    thumbs:      'mopbq0be-Sunny_Thumbs_Up.png',
    hat:         'mopbq09z-Sunny_hat.png',
  };
  /* Layered drop-shadow stack: contact + cast. Sunny lifts off the page. */
  return <img src={map[mood]} alt="Sunny" style={{
    height: size, width: 'auto', display: 'block',
    filter: 'drop-shadow(2px 3px 0 rgba(0,0,0,0.18)) drop-shadow(8px 14px 16px rgba(0,0,0,0.18))',
    ...style,
  }} />;
}

/* ============================================================
   MASKING TAPE — washi-tape with sheen, fiber banding, frayed ends.
   The tape now reads as a translucent strip with a real cast shadow,
   slight color variation along its length, and torn ragged ends.
   ============================================================ */
function MaskingTape({
  width = 96, height = 22, color = HC.tape, rotate = -8,
  top, left, right, bottom, style = {},
}) {
  /* Frayed-end clip — the strip's left and right edges are jagged. */
  const fraying = 'polygon(0% 18%, 3% 0%, 7% 14%, 0% 38%, 4% 60%, 0% 82%, 5% 100%, 96% 96%, 100% 78%, 98% 56%, 100% 30%, 95% 6%, 92% 22%, 96% 44%)';
  return (
    <div aria-hidden style={{
      position: 'absolute',
      width, height,
      top, left, right, bottom,
      transform: `rotate(${rotate}deg)`,
      filter: `drop-shadow(0 1px 1px rgba(0,0,0,0.18)) drop-shadow(2px 3px 4px rgba(0,0,0,0.16))`,
      ...style,
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        clipPath: fraying,
        background: `
          linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 22%, rgba(0,0,0,0.04) 78%, rgba(0,0,0,0.10) 100%),
          repeating-linear-gradient(90deg, ${color} 0 4px, ${color} 4px 5px, rgba(0,0,0,0.05) 5px 6px),
          ${color}
        `,
        backgroundBlendMode: 'normal, multiply, normal',
      }} />
      {/* fiber striations along the length */}
      <div style={{
        position: 'absolute', inset: 0, clipPath: fraying,
        background: `repeating-linear-gradient(90deg, transparent 0 20px, rgba(0,0,0,0.05) 20px 21px, transparent 21px 50px, rgba(255,255,255,0.10) 50px 51px)`,
        mixBlendMode: 'multiply',
        opacity: 0.6,
      }} />
    </div>
  );
}

/* ============================================================
   TORN CARD — paper card with deckled top + bottom edges,
   inner fiber shadow on the torn edges, layered drop.
   edges: 'all' | 'top' | 'bottom' | 'none'
   ============================================================ */
function TornCard({
  children, bg = HC.creamSoft, edges = 'top', rotate = 0, padding = '32px 34px',
  border = HC.ink, shadow = true, level = 2, texture = 'noise', style = {}, onClick,
}) {
  const tornTop    = '0% 4%, 4% 0%, 12% 3%, 22% 0%, 34% 4%, 46% 1%, 58% 4%, 70% 0%, 82% 3%, 92% 0%, 100% 4%';
  const tornBottom = '100% 96%, 92% 100%, 82% 97%, 70% 100%, 58% 96%, 46% 99%, 34% 96%, 22% 100%, 12% 97%, 4% 100%, 0% 96%';
  const flatTop    = '0% 0%, 100% 0%';
  const flatBottom = '100% 100%, 0% 100%';

  let clip;
  if (edges === 'all')        clip = `polygon(${tornTop}, ${tornBottom})`;
  else if (edges === 'top')   clip = `polygon(${tornTop}, ${flatBottom})`;
  else if (edges === 'bottom')clip = `polygon(${flatTop}, ${tornBottom})`;
  else                        clip = undefined;

  /* Inner fiber-edge shadow direction follows torn side */
  const innerShadow = edges === 'all'
    ? 'inset 0 4px 8px -4px rgba(0,0,0,0.18), inset 0 -4px 8px -4px rgba(0,0,0,0.18)'
    : edges === 'top'
    ? 'inset 0 6px 8px -4px rgba(0,0,0,0.20)'
    : edges === 'bottom'
    ? 'inset 0 -6px 8px -4px rgba(0,0,0,0.20)'
    : 'none';

  return (
    <div onClick={onClick} style={{
      position: 'relative',
      background: bg,
      padding,
      transform: rotate ? `rotate(${rotate}deg)` : undefined,
      clipPath: clip,
      boxShadow: shadow ? `${paperShadow(level)}, ${innerShadow}` : innerShadow,
      ...style,
    }}>
      {/* Subtle paper texture inside the card */}
      {texture && <PaperTexture variant={texture} opacity={0.05} blend="multiply" />}
      <div style={{ position: 'relative' }}>{children}</div>
    </div>
  );
}

/* ============================================================
   TAPED PHOTO — image inside a paper backing, with bevel ring,
   corner curl, masking tape strips, and a layered drop.
   ============================================================ */
function TapedPhoto({
  src, alt = '', aspect = '4/3', rotate = -2,
  tapeColor = HC.tape, caption, captionAlign = 'left',
  size = 380, level = 3, curl = true, style = {},
}) {
  return (
    <div style={{
      position: 'relative',
      transform: `rotate(${rotate}deg)`,
      background: HC.creamSoft,
      padding: 14,
      paddingBottom: caption ? 14 : 18,
      width: size,
      maxWidth: '100%',
      boxShadow: paperShadow(level),
      ...style,
    }}>
      {/* Paper backing has a faint linen grain */}
      <PaperTexture variant="linen" opacity={0.08} blend="multiply" />

      {/* The print itself: bevel ring + faint inner vignette */}
      <div style={{
        position: 'relative',
        aspectRatio: aspect,
        background: `url(${src}) center/cover`,
        backgroundColor: HC.creamDeep,
        boxShadow: `
          inset 0 0 0 1px rgba(255,255,255,0.18),
          inset 0 1px 2px rgba(255,255,255,0.30),
          inset 0 0 18px rgba(0,0,0,0.18),
          0 1px 2px rgba(0,0,0,0.10)
        `,
      }} />

      {caption && (
        <div style={{
          position: 'relative',
          ...HS.serif, fontStyle: 'italic',
          fontSize: 13, color: HC.ink, opacity: 0.82,
          marginTop: 10, paddingTop: 6,
          borderTop: `1px dashed rgba(26,18,7,0.25)`,
          textAlign: captionAlign,
        }}>{caption}</div>
      )}

      {/* Corner curl — bottom-right paper lift */}
      {curl && (
        <div aria-hidden style={{
          position: 'absolute', bottom: -2, right: -2,
          width: 36, height: 36, pointerEvents: 'none',
          background: `linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.10) 50%, rgba(0,0,0,0.18) 70%, rgba(0,0,0,0) 80%)`,
          clipPath: 'polygon(100% 0%, 100% 100%, 0% 100%)',
          filter: 'blur(0.4px)',
        }} />
      )}

      {/* Tape strips */}
      <MaskingTape width={92} height={20} color={tapeColor} rotate={-12} top={-10} left={-22} />
      <MaskingTape width={86} height={20} color={tapeColor} rotate={9}    top={-10} right={-18} />
    </div>
  );
}

/* ============================================================
   STICKER — paper scrap with stronger shadow + slight sheen.
   ============================================================ */
function Sticker({
  children, color = HC.yellow, fg = HC.ink, rotate = -4,
  padX = 12, padY = 6, fontSize = 11, style = {}, torn = true,
}) {
  const clip = torn
    ? 'polygon(2% 12%, 10% 0%, 26% 8%, 44% 0%, 62% 6%, 80% 0%, 98% 8%, 100% 32%, 96% 60%, 100% 90%, 88% 100%, 70% 94%, 48% 100%, 26% 92%, 8% 100%, 0% 70%, 4% 38%)'
    : undefined;
  return (
    <span style={{
      display: 'inline-block', position: 'relative',
      transform: `rotate(${rotate}deg)`,
      background: `
        linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 35%, rgba(0,0,0,0.06) 100%),
        ${color}
      `,
      color: fg,
      padding: `${padY}px ${padX}px`,
      ...HS.mono, fontSize,
      letterSpacing: '0.12em',
      clipPath: clip,
      filter: `drop-shadow(2px 3px 0 ${HC.shadowSoft}) drop-shadow(0 4px 6px ${HC.shadowFar})`,
      ...style,
    }}>
      {children}
    </span>
  );
}

/* ============================================================
   TAPE — paper-tape "PRESENTS:" tag, kept for back-compat.
   ============================================================ */
function Tape({ children, rotate = -2, color = HC.tapeWhite, fg = HC.ink, padX = 16, padY = 8, fontSize = 12 }) {
  return (
    <div style={{
      display: 'inline-block', position: 'relative',
      transform: `rotate(${rotate}deg)`,
      background: `
        linear-gradient(180deg, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0) 40%, rgba(0,0,0,0.05) 100%),
        ${color}
      `,
      color: fg,
      padding: `${padY}px ${padX}px`,
      ...HS.display, fontSize,
      letterSpacing: '0.04em', textTransform: 'uppercase', lineHeight: 1.15,
      filter: `drop-shadow(2px 3px 0 ${HC.shadowSoft}) drop-shadow(0 5px 8px ${HC.shadowFar})`,
      clipPath: 'polygon(2% 8%, 14% 0%, 28% 6%, 46% 2%, 64% 8%, 82% 0%, 96% 6%, 100% 28%, 96% 60%, 100% 92%, 86% 100%, 68% 96%, 48% 100%, 28% 94%, 8% 100%, 0% 72%, 4% 36%)',
    }}>
      {children}
    </div>
  );
}

/* ============================================================
   HIGHLIGHTER — yellow stripe behind a word
   ============================================================ */
function Highlight({ children, color = HC.yellow, padX = 8, padY = 2, skew = -1 }) {
  return (
    <span style={{
      position: 'relative', display: 'inline-block',
      padding: `${padY}px ${padX}px`,
      transform: `skewX(${skew}deg)`,
    }}>
      <span style={{
        position: 'absolute', inset: 0,
        background: color,
        transform: `skewX(${-skew * 1.5}deg) translateY(8%)`,
        zIndex: 0,
        boxShadow: `0 1px 2px rgba(0,0,0,0.10)`,
      }} />
      <span style={{ position: 'relative', zIndex: 1, transform: `skewX(${-skew}deg)`, display: 'inline-block' }}>
        {children}
      </span>
    </span>
  );
}

/* ============================================================
   TORN BAND — full-width section divider with a torn edge.
   side: 'top' | 'bottom'
   ============================================================ */
function TornBand({ color = HC.cream, side = 'top', height = 28 }) {
  const points = side === 'top'
    ? 'M0,28 L0,16 L60,8 L120,18 L200,4 L280,14 L380,2 L480,12 L580,4 L680,16 L780,2 L880,14 L980,4 L1080,16 L1200,2 L1320,14 L1440,6 L1440,28 Z'
    : 'M0,0 L60,12 L140,2 L220,12 L320,4 L420,16 L540,6 L640,16 L760,4 L860,14 L960,2 L1080,12 L1200,4 L1320,16 L1440,6 L1440,0 Z';
  /* A subtle drop-shadow under the torn edge sells the lift */
  const dropFilter = side === 'top'
    ? 'drop-shadow(0 -2px 3px rgba(0,0,0,0.10)) drop-shadow(0 -6px 10px rgba(0,0,0,0.06))'
    : 'drop-shadow(0 2px 3px rgba(0,0,0,0.10)) drop-shadow(0 6px 10px rgba(0,0,0,0.06))';
  return (
    <div aria-hidden style={{
      width: '100%', height, lineHeight: 0,
      marginTop: side === 'top' ? -height + 2 : 0,
      marginBottom: side === 'bottom' ? -height + 2 : 0,
      position: 'relative', zIndex: 2,
      filter: dropFilter,
    }}>
      <svg viewBox="0 0 1440 28" preserveAspectRatio="none" width="100%" height={height} style={{ display: 'block' }}>
        <path d={points} fill={color} />
      </svg>
    </div>
  );
}

/* ============================================================
   PRIMARY BUTTON — layered shadow, subtle sheen.
   ============================================================ */
function Button({ children, color = HC.yellow, fg = HC.ink, size = 'lg', shadow = HC.ink, as = 'button', icon, ...rest }) {
  const sizes = {
    sm: { padW: 22, padH: 14, fs: 20, gap: 10, shX: 4, shY: 5, br: 6 },
    md: { padW: 28, padH: 18, fs: 26, gap: 12, shX: 5, shY: 6, br: 8 },
    lg: { padW: 36, padH: 22, fs: 34, gap: 14, shX: 6, shY: 7, br: 10 },
  }[size];
  const Tag = as;
  const baseShadow = `${sizes.shX}px ${sizes.shY}px 0 ${shadow}, 0 8px 14px rgba(0,0,0,0.14)`;
  const pressShadow = `1px 1px 0 ${shadow}, 0 2px 4px rgba(0,0,0,0.12)`;
  const handleEnter = (e) => {
    e.currentTarget.style.transform = 'translate(-1px,-2px) rotate(-0.4deg)';
    e.currentTarget.style.boxShadow = `${sizes.shX + 2}px ${sizes.shY + 2}px 0 ${shadow}, 0 14px 22px rgba(0,0,0,0.18)`;
  };
  const handleLeave = (e) => {
    e.currentTarget.style.transform = 'none';
    e.currentTarget.style.boxShadow = baseShadow;
  };
  const handleDown = (e) => {
    e.currentTarget.style.transform = `translate(${sizes.shX - 1}px, ${sizes.shY - 1}px)`;
    e.currentTarget.style.boxShadow = pressShadow;
  };
  const handleUp = (e) => handleEnter(e);
  return (
    <Tag {...rest}
      onMouseEnter={(e) => { handleEnter(e); rest.onMouseEnter && rest.onMouseEnter(e); }}
      onMouseLeave={(e) => { handleLeave(e); rest.onMouseLeave && rest.onMouseLeave(e); }}
      onMouseDown={(e) => { handleDown(e); rest.onMouseDown && rest.onMouseDown(e); }}
      onMouseUp={(e) => { handleUp(e); rest.onMouseUp && rest.onMouseUp(e); }}
      style={{
      display: 'inline-flex', alignItems: 'center', gap: sizes.gap,
      padding: `${sizes.padH}px ${sizes.padW}px`,
      background: `
        linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 38%, rgba(0,0,0,0.06) 100%),
        ${color}
      `,
      color: fg,
      ...HS.display,
      fontSize: sizes.fs,
      letterSpacing: '-0.005em',
      lineHeight: 1,
      textTransform: 'lowercase',
      border: `2.5px solid ${HC.ink}`,
      borderRadius: sizes.br,
      cursor: 'pointer',
      textDecoration: 'none',
      boxShadow: baseShadow,
      transition: 'transform .15s cubic-bezier(.34,1.56,.64,1), box-shadow .15s',
      ...rest.style,
    }}>
      {children}
      {icon && <span style={{ fontSize: sizes.fs * 0.95, display: 'inline-block' }}>{icon}</span>}
    </Tag>
  );
}

/* ============================================================
   NAV — single line with a subtle paper-edge shadow under it.
   ============================================================ */
function Nav({ active = 'home', tone = 'light' }) {
  const links = [
    { k: 'home',     l: 'home' },
    { k: 'showcase', l: 'showcase' },
    { k: 'visit',    l: 'visit' },
    { k: 'journal',  l: 'journal' },
    { k: 'about',    l: 'about' },
  ];
  const dark = tone === 'dark';
  const fg     = dark ? HC.cream : HC.ink;
  const bg     = dark ? HC.blue  : HC.cream;
  const logoKind = dark ? 'horizontal-white' : 'horizontal-blue';
  const accent = dark ? HC.yellow : HC.blue;

  return (
    <nav style={{
      position: 'relative', zIndex: 5,
      background: bg, color: fg,
      padding: '20px 40px',
      borderBottom: `2px solid ${HC.ink}`,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      boxShadow: `0 4px 6px rgba(0,0,0,0.08), 0 12px 18px rgba(0,0,0,0.05)`,
    }}>
      <PaperTexture variant={dark ? 'noise' : 'linen'} opacity={dark ? 0.05 : 0.08} blend={dark ? 'screen' : 'multiply'} />
      <a href="#" style={{ position: 'relative', display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <Logo kind={logoKind} height={42} />
      </a>

      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 30 }}>
        {links.map(l => {
          const isActive = active === l.k;
          return (
            <a key={l.k} href="#" style={{
              position: 'relative',
              ...HS.display, fontSize: 17,
              color: fg, textDecoration: 'none',
              textTransform: 'uppercase', letterSpacing: '0.02em',
              paddingBottom: 4,
            }}>
              {l.l}
              {isActive && (
                <span style={{
                  position: 'absolute', bottom: -5, left: 0, right: 0,
                  height: 5, background: accent, borderRadius: 2,
                  boxShadow: `0 1px 2px rgba(0,0,0,0.18)`,
                }} />
              )}
            </a>
          );
        })}
      </div>

      <div style={{ position: 'relative' }}>
        <Button color={dark ? HC.yellow : HC.blue} fg={dark ? HC.ink : HC.cream} size="sm" shadow={HC.ink} as="a" href="#">
          drop in →
        </Button>
      </div>
    </nav>
  );
}

/* ============================================================
   FOOTER — torn top edge, scrapbook feel + paper texture
   ============================================================ */
function Footer() {
  return (
    <>
      <TornBand color={HC.blueDark} side="bottom" height={28} />
      <footer style={{ background: HC.blueDark, color: HC.cream, padding: '64px 40px 28px', position: 'relative' }}>
        <PaperTexture variant="fiber" opacity={0.10} color={HC.cream} blend="screen" />
        <PaperTexture variant="noise" opacity={0.06} color={HC.cream} blend="screen" />
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 48, marginBottom: 44 }}>
          <div>
            <Logo kind="horizontal-white" height={56} style={{ marginBottom: 22 }} />
            <p style={{ ...HS.serif, fontSize: 22, lineHeight: 1.35, color: HC.cream, fontStyle: 'italic', maxWidth: 320, margin: 0 }}>
              "Where's your <Highlight color={HC.yellow}>head at?</Highlight>"
            </p>
            <div style={{ marginTop: 24, display: 'flex', alignItems: 'flex-end', gap: 16 }}>
              <Sunny mood="peace" size={110} />
              <Sticker color={HC.yellow} rotate={-6}>stay heady</Sticker>
            </div>
          </div>
          {[
            { h: 'visit',  items: ['4505 W Poplar', 'Rogers, AR', 'Inside The Source'] },
            { h: 'hours',  items: ['Mon–Fri · 9–8', 'Sat · 9–7', 'Sun · 10–6'] },
            { h: 'holler', items: ['(479) 251-8581', 'info@headwatersprovisions.com', '@headwaters_provisions'] },
          ].map(c => (
            <div key={c.h}>
              <div style={{ ...HS.mono, fontSize: 10, color: HC.yellow, marginBottom: 12 }}>{c.h}</div>
              {c.items.map(i => <div key={i} style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(245,236,217,0.92)' }}>{i}</div>)}
            </div>
          ))}
        </div>
        <div style={{
          position: 'relative',
          borderTop: '1px dashed rgba(245,236,217,0.28)', paddingTop: 18,
          ...HS.mono, fontSize: 10, color: 'rgba(245,236,217,0.55)',
          display: 'flex', justifyContent: 'space-between',
        }}>
          <span>© 2026 Headwaters Provisions</span>
          <span>21+ · No card needed</span>
          <span>NWA · since 2024</span>
        </div>
      </footer>
    </>
  );
}

/* ============================================================
   MARQUEE — a strip of inked card stock with a real shadow under it
   ============================================================ */
function Marquee({ bg = HC.ink, fg = HC.yellow, text = "where's your head at?", count = 8 }) {
  return (
    <section style={{
      position: 'relative', zIndex: 3,
      background: bg, color: fg,
      padding: '18px 0',
      borderTop: `2px solid ${HC.ink}`, borderBottom: `2px solid ${HC.ink}`,
      overflow: 'hidden', whiteSpace: 'nowrap',
      boxShadow: `0 3px 6px rgba(0,0,0,0.18), 0 10px 18px rgba(0,0,0,0.10)`,
    }}>
      <PaperTexture variant="kraft" opacity={0.16} blend="screen" />
      <div style={{ position: 'relative', ...HS.display, fontSize: 32, letterSpacing: '0.01em', textTransform: 'uppercase', display: 'flex', gap: 36 }}>
        {[...Array(count)].map((_, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 36 }}>
            {text}
            <span style={{ display: 'inline-block', width: 12, height: 12, background: fg, borderRadius: '50%', boxShadow: '0 1px 2px rgba(0,0,0,0.4)' }} />
          </span>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   SECTION KICKER
   ============================================================ */
function Kicker({ children, color = HC.blue }) {
  return (
    <div style={{ ...HS.mono, fontSize: 11, color, display: 'flex', alignItems: 'center', gap: 10 }}>
      <span style={{ width: 24, height: 2, background: color, display: 'inline-block' }} />
      {children}
    </div>
  );
}

/* ============================================================
   SunSparkle — small radiating sun (echo of Sunny's logo rays)
   used as a decorative dot, between words, marquee separator.
   ============================================================ */
function SunSparkle({ size = 16, color = HC.ink, style = {} }) {
  const rays = [];
  const cnt = 12;
  for (let i = 0; i < cnt; i++) {
    const a = (i / cnt) * Math.PI * 2;
    const x1 = 50 + Math.cos(a) * 22;
    const y1 = 50 + Math.sin(a) * 22;
    const x2 = 50 + Math.cos(a) * 46;
    const y2 = 50 + Math.sin(a) * 46;
    rays.push(<line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="6" strokeLinecap="round" />);
  }
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} style={{ display: 'inline-block', verticalAlign: 'middle', ...style }} aria-hidden>
      {rays}
      <circle cx="50" cy="50" r="14" fill={color} />
    </svg>
  );
}

/* ============================================================
   SmokeBurst — 16-point spiky starburst (echo of 420 raffle star)
   ============================================================ */
function SmokeBurst({ size = 240, fill = HC.cream, stroke = HC.ink, strokeWidth = 3, points = 16, style = {} }) {
  const pts = [];
  for (let i = 0; i < points * 2; i++) {
    const a = (i / (points * 2)) * Math.PI * 2 - Math.PI / 2;
    const r = i % 2 === 0 ? 50 : 30;
    pts.push(`${50 + Math.cos(a) * r},${50 + Math.sin(a) * r}`);
  }
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} style={{ display: 'block', filter: `drop-shadow(3px 4px 0 rgba(0,0,0,0.18))`, ...style }} aria-hidden>
      <polygon points={pts.join(' ')} fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="miter" />
    </svg>
  );
}

/* ============================================================
   Megaphone — recreated from the OTD pricing flyer
   ============================================================ */
function Megaphone({ size = 280, color = HC.cream, accent = '#C13E2E', style = {} }) {
  return (
    <svg viewBox="0 0 240 200" width={size} height={(size * 200) / 240} style={{ display: 'block', filter: 'drop-shadow(4px 6px 0 rgba(0,0,0,0.20)) drop-shadow(0 10px 18px rgba(0,0,0,0.12))', ...style }} aria-hidden>
      {/* horn cone */}
      <path d="M 60 70 L 220 18 L 220 178 L 60 130 Z" fill={color} stroke={HC.ink} strokeWidth="4" strokeLinejoin="miter" />
      {/* horn front rim */}
      <ellipse cx="220" cy="98" rx="10" ry="80" fill={accent} stroke={HC.ink} strokeWidth="4" />
      {/* horn rim shadow band */}
      <path d="M 220 18 L 220 178 L 210 168 L 210 28 Z" fill="rgba(0,0,0,0.18)" />
      {/* throat */}
      <rect x="46" y="78" width="22" height="46" fill={accent} stroke={HC.ink} strokeWidth="4" />
      {/* trigger / handle */}
      <path d="M 30 90 L 46 90 L 46 116 L 30 116 Z" fill={HC.ink} />
      <rect x="14" y="100" width="20" height="60" rx="6" fill={color} stroke={HC.ink} strokeWidth="4" />
      {/* coiled cord */}
      <path d="M 200 130 q 12 12 -2 22 q -16 12 4 24 q 18 12 -4 22" fill="none" stroke={HC.ink} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

/* ============================================================
   HandSign — minimal hand silhouette holding nothing, used to
   carry text/sign in scrapbook compositions.
   ============================================================ */
function HandSign({ size = 200, color = HC.cream, style = {} }) {
  return (
    <svg viewBox="0 0 160 200" width={size} height={(size * 200) / 160} style={{ display: 'block', filter: 'drop-shadow(3px 4px 0 rgba(0,0,0,0.18))', ...style }} aria-hidden>
      {/* sleeve */}
      <path d="M 30 200 L 30 160 Q 30 120 80 120 Q 130 120 130 160 L 130 200 Z" fill={color} stroke={HC.ink} strokeWidth="3" />
      {/* palm */}
      <path d="M 50 130 Q 40 80 60 60 Q 76 48 86 60 L 90 90 L 96 60 Q 104 50 112 60 L 112 92 L 118 70 Q 126 64 130 74 L 128 110 Q 128 132 110 134 L 60 134 Z"
        fill={color} stroke={HC.ink} strokeWidth="3" strokeLinejoin="round" />
      {/* thumb */}
      <path d="M 50 110 Q 36 100 38 84 Q 42 74 52 80 L 60 100 Z" fill={color} stroke={HC.ink} strokeWidth="3" />
    </svg>
  );
}

/* ============================================================
   ProductPattern — repeating cannabis-accessory line-art tile
   echo of 420 + NEW DISCOUNTS flyer backdrop.
   Pure SVG drawn inline so it scales + tints to brand color.
   ============================================================ */
function ProductPattern({ color = HC.cream, opacity = 0.16, blend = 'screen', strokeWidth = 1.6 }) {
  const stroke = encodeURIComponent(color);
  /* Tileable 200x200 SVG: lighter, papers booklet, jar, pipe, joint, sun rays.
     Each item placed to break the tile seams. */
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' width='200' height='200'><g fill='none' stroke='${stroke}' stroke-width='${strokeWidth}' stroke-linejoin='round' stroke-linecap='round'><g transform='translate(18 22) rotate(-12)'><rect x='0' y='10' width='22' height='34' rx='2'/><rect x='2' y='4' width='18' height='8' rx='1'/><line x1='11' y1='0' x2='11' y2='4'/></g><g transform='translate(140 16) rotate(8)'><rect x='0' y='0' width='40' height='26' rx='2'/><line x1='0' y1='8' x2='40' y2='8'/><text x='20' y='20' font-family='ui-monospace' font-size='8' text-anchor='middle' fill='${stroke}' stroke='none'>RAW</text></g><g transform='translate(86 70)'><rect x='0' y='8' width='28' height='34' rx='2'/><rect x='2' y='4' width='24' height='6' rx='1'/><line x1='6' y1='20' x2='22' y2='20'/></g><g transform='translate(14 130) rotate(-6)'><circle cx='12' cy='10' r='10'/><path d='M 22 12 L 56 16 L 60 22 L 56 22 L 22 18 Z'/></g><g transform='translate(120 150) rotate(22)'><rect x='0' y='4' width='52' height='6' rx='1'/><rect x='52' y='3' width='6' height='8' rx='1' fill='${stroke}' fill-opacity='0.35'/><path d='M 60 4 q 4 -4 2 -8 M 64 6 q 6 -2 4 -8 M 60 10 q 6 4 4 10'/></g><g transform='translate(60 160)' stroke-width='${strokeWidth * 0.9}'><circle cx='0' cy='0' r='3'/><line x1='-7' y1='0' x2='-12' y2='0'/><line x1='7' y1='0' x2='12' y2='0'/><line x1='0' y1='-7' x2='0' y2='-12'/><line x1='0' y1='7' x2='0' y2='12'/></g><g transform='translate(180 96)' stroke-width='${strokeWidth * 0.9}'><circle cx='0' cy='0' r='3'/><line x1='-7' y1='0' x2='-12' y2='0'/><line x1='7' y1='0' x2='12' y2='0'/><line x1='0' y1='-7' x2='0' y2='-12'/><line x1='0' y1='7' x2='0' y2='12'/></g></g></svg>`;
  const url = `data:image/svg+xml;utf8,${svg.replace(/#/g, '%23')}`;
  return (
    <div aria-hidden style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      backgroundImage: `url("${url}")`,
      backgroundSize: '200px 200px',
      opacity, mixBlendMode: blend,
    }} />
  );
}

/* ============================================================
   BrandBadge — pill containing "Headwaters Provisions & Glass"
   echo of NEW DISCOUNTS flyer corner badge.
   ============================================================ */
function BrandBadge({ size = 'md', color = HC.blueDeep, fg = HC.cream, rotate = -3, style = {} }) {
  const sizes = { sm: { fs: 11, fs2: 7,  padX: 14, padY: 8 },
                  md: { fs: 16, fs2: 9,  padX: 22, padY: 12 },
                  lg: { fs: 22, fs2: 11, padX: 28, padY: 16 } }[size];
  return (
    <div style={{
      display: 'inline-flex', flexDirection: 'column', alignItems: 'center',
      background: color, color: fg,
      padding: `${sizes.padY}px ${sizes.padX}px`,
      borderRadius: 8,
      border: `2px solid ${HC.ink}`,
      transform: `rotate(${rotate}deg)`,
      boxShadow: `3px 4px 0 ${HC.shadowSoft}, 0 8px 12px rgba(0,0,0,0.10)`,
      ...style,
    }}>
      <div style={{ ...HS.display, fontSize: sizes.fs, lineHeight: 1, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
        Headwaters
      </div>
      <div style={{ ...HS.mono, fontSize: sizes.fs2, marginTop: 4, opacity: 0.85 }}>
        Provisions & Glass
      </div>
    </div>
  );
}

/* ============================================================
   PillCallout — yellow-outlined yellow-fill pill
   echo of 420 flyer feature callouts ("FREE LIGHTER!", "20% OFF GLASS!").
   ============================================================ */
function PillCallout({ children, sub, color = HC.yellow, fg = HC.blueDeep, rotate = -2, style = {} }) {
  return (
    <div style={{
      display: 'inline-flex', flexDirection: 'column', alignItems: 'center',
      background: color, color: fg,
      padding: '14px 24px',
      border: `3px solid ${HC.ink}`,
      borderRadius: 60,
      transform: `rotate(${rotate}deg)`,
      boxShadow: `4px 5px 0 ${HC.shadowSoft}, 0 10px 14px rgba(0,0,0,0.10)`,
      ...style,
    }}>
      <div style={{ ...HS.display, fontSize: 22, lineHeight: 1, textTransform: 'uppercase' }}>{children}</div>
      {sub && <div style={{ ...HS.mono, fontSize: 9, marginTop: 4, color: HC.ink, opacity: 0.75 }}>{sub}</div>}
    </div>
  );
}

/* ============================================================
   WordCards — words from the B4G1 flyer treatment.
   Each word on its own white card, chunky outlined Holtzman,
   each card rotated different angles.
   ============================================================ */
function WordCards({ words = ['BUY', 'FOUR', 'GET', 'ONE'], rotates = [-4, 3, -2, 4], fontSize = 56, gap = 10, style = {} }) {
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap, ...style }}>
      {words.map((w, i) => (
        <div key={i} style={{
          background: HC.creamSoft,
          padding: '10px 24px',
          border: `3px solid ${HC.ink}`,
          transform: `rotate(${rotates[i % rotates.length]}deg)`,
          boxShadow: `4px 5px 0 ${HC.shadowSoft}, 0 8px 12px rgba(0,0,0,0.10)`,
          ...HS.display, fontSize, lineHeight: 1, textTransform: 'uppercase',
          color: HC.ink, letterSpacing: '0.01em',
          alignSelf: i % 2 === 0 ? 'flex-start' : 'center',
        }}>
          <PaperTexture variant="linen" opacity={0.06} blend="multiply" />
          <span style={{ position: 'relative' }}>{w}</span>
        </div>
      ))}
    </div>
  );
}

/* ============================================================
   FreeCircle — bold "FREE!" circle, B4G1 flyer signature
   ============================================================ */
function FreeCircle({ children = 'FREE!', size = 200, color = HC.creamSoft, fg = HC.ink, rotate = -8, style = {} }) {
  return (
    <div style={{
      position: 'relative',
      width: size, height: size,
      borderRadius: '50%',
      background: color,
      border: `3px solid ${HC.ink}`,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      transform: `rotate(${rotate}deg)`,
      boxShadow: `5px 6px 0 ${HC.shadowSoft}, 0 12px 18px rgba(0,0,0,0.12)`,
      overflow: 'hidden',
      ...style,
    }}>
      <PaperTexture variant="linen" opacity={0.08} blend="multiply" />
      <div style={{
        position: 'relative',
        ...HS.display, fontSize: size * 0.34, lineHeight: 0.9,
        color: fg, textTransform: 'uppercase',
        textDecoration: 'underline', textDecorationThickness: 4, textUnderlineOffset: 4,
      }}>
        {children}
      </div>
    </div>
  );
}

/* ============================================================
   StackedDisplay — Holtzman text with the 420-flyer treatment:
   filled glyph + chunky offset shadow color underneath.
   variant: 'cream-on-blue' | 'yellow-on-blue' | 'cream-on-ink' | 'yellow-on-ink'
   ============================================================ */
function StackedDisplay({ children, fontSize = 96, variant = 'cream-on-blue', italic = false, lineHeight = 0.92, letterSpacing = '0.005em', style = {} }) {
  const variants = {
    'cream-on-blue':   { fg: HC.cream,  shadow: HC.blueDark, stroke: HC.ink },
    'yellow-on-blue':  { fg: HC.yellow, shadow: HC.blueDark, stroke: HC.ink },
    'cream-on-ink':    { fg: HC.cream,  shadow: HC.ink,      stroke: HC.ink },
    'yellow-on-ink':   { fg: HC.yellow, shadow: HC.ink,      stroke: HC.ink },
    'cream-on-cream':  { fg: HC.cream,  shadow: HC.creamWarm, stroke: HC.ink },
  }[variant];
  /* Build a layered text-shadow that draws the "shadow color" word
     stepped 6px down/right, then a subtle soft drop on top of that. */
  const shadow = [
    `2px 2px 0 ${variants.stroke}`,
    `4px 4px 0 ${variants.stroke}`,
    `6px 6px 0 ${variants.shadow}`,
    `8px 8px 0 ${variants.shadow}`,
    `10px 10px 0 ${variants.shadow}`,
    `12px 14px 18px rgba(0,0,0,0.18)`,
  ].join(', ');
  return (
    <div style={{
      ...(italic ? HS.serif : HS.display),
      fontStyle: italic ? 'italic' : 'normal',
      fontSize, lineHeight, letterSpacing,
      color: variants.fg,
      textTransform: italic ? 'none' : 'uppercase',
      textShadow: shadow,
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ============================================================
   WhereAtLockup — the 4x6 brand lockup:
   "Where's your | [logo] | head at?"
   ============================================================ */
function WhereAtLockup({ logoHeight = 120, fontSize = 96, color = HC.cream, accent = HC.yellow, style = {} }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      gap: 24, flexWrap: 'wrap', ...style,
    }}>
      <div style={{ ...HS.display, fontSize, lineHeight: 1, color, textTransform: 'uppercase', letterSpacing: '-0.005em' }}>
        Where's your
      </div>
      <Logo kind={color === HC.cream ? 'icon-white' : 'icon-blue'} height={logoHeight} style={{ filter: 'drop-shadow(3px 4px 0 rgba(0,0,0,0.18)) drop-shadow(0 10px 14px rgba(0,0,0,0.12))' }} />
      <div style={{ ...HS.display, fontSize, lineHeight: 1, color, textTransform: 'uppercase', letterSpacing: '-0.005em' }}>
        head at<span style={{ color: accent }}>?</span>
      </div>
    </div>
  );
}

/* ============================================================
   SunnyPeek — Sunny peeking from a corner of a section.
   corner: 'tl' | 'tr' | 'bl' | 'br'
   ============================================================ */
function SunnyPeek({ mood = 'face', size = 220, corner = 'tr', offset = -60, rotate, style = {} }) {
  const positions = {
    tl: { top: offset, left: offset,  defaultRot: -14 },
    tr: { top: offset, right: offset, defaultRot:  14 },
    bl: { bottom: offset, left: offset,  defaultRot:  14 },
    br: { bottom: offset, right: offset, defaultRot: -14 },
  }[corner];
  const rot = rotate ?? positions.defaultRot;
  return (
    <Sunny mood={mood} size={size} style={{
      position: 'absolute', zIndex: 1,
      transform: `rotate(${rot}deg)`,
      ...positions,
      ...style,
    }} />
  );
}

/* ============================================================
   SunnyPin — Sunny pinned with masking tape inside any container.
   ============================================================ */
function SunnyPin({ mood = 'sign', size = 200, rotate = -4, tapeColor = HC.tape, style = {} }) {
  return (
    <div style={{ position: 'relative', display: 'inline-block', transform: `rotate(${rotate}deg)`, ...style }}>
      <Sunny mood={mood} size={size} />
      <MaskingTape width={80} height={20} color={tapeColor} rotate={-12} top={4} left="-8%" />
    </div>
  );
}

/* ============================================================
   PaperPin — small push-pin SVG for pinning content visually.
   ============================================================ */
function PaperPin({ size = 22, color = '#C13E2E', style = {} }) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} style={{
      filter: 'drop-shadow(2px 3px 2px rgba(0,0,0,0.4))', display: 'inline-block', ...style,
    }} aria-hidden>
      <circle cx="16" cy="13" r="9" fill={color} stroke={HC.ink} strokeWidth="1.5" />
      <ellipse cx="13" cy="10" rx="3" ry="2" fill="rgba(255,255,255,0.5)" />
      <line x1="16" y1="22" x2="16" y2="30" stroke={HC.ink} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* ============================================================
   EXPORTS
   ============================================================ */
window.HC = HC; window.HS = HS;
window.paperShadow = paperShadow;
window.Logo = Logo; window.Sunny = Sunny;
window.Tape = Tape; window.Highlight = Highlight; window.Button = Button;
window.Nav = Nav; window.Footer = Footer; window.Marquee = Marquee; window.Kicker = Kicker;
window.PaperGrain = PaperGrain; window.PaperTexture = PaperTexture; window.PaperStack = PaperStack;
window.MaskingTape = MaskingTape;
window.TornCard = TornCard; window.TapedPhoto = TapedPhoto;
window.Sticker = Sticker; window.TornBand = TornBand;
/* Flyer-derived primitives */
window.SunSparkle = SunSparkle; window.SmokeBurst = SmokeBurst;
window.Megaphone = Megaphone; window.HandSign = HandSign;
window.ProductPattern = ProductPattern; window.BrandBadge = BrandBadge;
window.PillCallout = PillCallout; window.WordCards = WordCards;
window.FreeCircle = FreeCircle; window.StackedDisplay = StackedDisplay;
window.WhereAtLockup = WhereAtLockup;
window.SunnyPeek = SunnyPeek; window.SunnyPin = SunnyPin; window.PaperPin = PaperPin;

/* ============================================================
   CURVED TEXT — text wrapped along a circular path. Used in the
   spinning nav emblem and the StampButton.
   ============================================================ */
function CurvedText({ text, radius = 32, fontSize = 10, color = HC.ink, letterSpacing = 1.2 }) {
  const d = radius * 2 + 12;
  return (
    <svg viewBox={`0 0 ${d} ${d}`} width={d} height={d} style={{ display: 'block' }} aria-hidden>
      <defs>
        <path id={`cp-${text.replace(/[^a-z0-9]/gi, '').slice(0, 12)}-${radius}`}
              d={`M ${d/2}, ${d/2} m -${radius}, 0 a ${radius},${radius} 0 1,1 ${radius*2},0 a ${radius},${radius} 0 1,1 -${radius*2},0`} />
      </defs>
      <text fill={color} style={{
        ...HS.mono, fontSize, letterSpacing,
        textTransform: 'uppercase',
      }}>
        <textPath href={`#cp-${text.replace(/[^a-z0-9]/gi, '').slice(0, 12)}-${radius}`}>
          {text.repeat(3)}
        </textPath>
      </text>
    </svg>
  );
}

/* ============================================================
   HW MARK — minimal "headwaters" monogram circle, used in nav.
   ============================================================ */
function HWMark({ size = 44, ring = HC.ink, fill = 'transparent' }) {
  return (
    <svg viewBox="0 0 44 44" width={size} height={size} style={{ display: 'block' }} aria-hidden>
      <circle cx="22" cy="22" r="20" fill={fill} stroke={ring} strokeWidth="2.4" />
      <path d="M 12 30 L 12 14 M 12 22 L 22 22 M 22 30 L 22 14" fill="none" stroke={ring} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M 28 14 L 32 30 L 36 14" fill="none" stroke={ring} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ============================================================
   STAMP BUTTON — circular postage-stamp CTA with rotating label
   around a center glyph. Hover triggers a small wobble + slow spin.
   ============================================================ */
function StampButton({ label = "OPEN · 9 TO 8 · ", center = "✦", color = HC.yellow, fg = HC.ink, size = 96, rotate = -6 }) {
  const ringRef = React.useRef(null);
  const [hover, setHover] = React.useState(false);
  React.useEffect(() => {
    if (!ringRef.current) return;
    let raf, t = 0;
    const tick = () => {
      t += hover ? 1.2 : 0.4;
      if (ringRef.current) ringRef.current.style.transform = `rotate(${t}deg)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [hover]);
  const ringSize = size;
  const innerSize = size * 0.55;
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative', width: size, height: size,
        transform: `rotate(${rotate}deg)`,
        filter: `drop-shadow(3px 4px 0 ${HC.shadowSoft}) drop-shadow(0 8px 14px rgba(0,0,0,0.18))`,
      }}>
      {/* zig-zag postage edge */}
      <svg viewBox="0 0 100 100" width={size} height={size} style={{ position: 'absolute', inset: 0 }} aria-hidden>
        <defs>
          <radialGradient id="stamp-grad" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.05)" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="46" fill={color} stroke={HC.ink} strokeWidth="1.5"
                strokeDasharray="2.6 2.4" />
        <circle cx="50" cy="50" r="42" fill="url(#stamp-grad)" />
      </svg>
      {/* rotating curved label */}
      <div ref={ringRef} style={{
        position: 'absolute',
        top: (ringSize - ringSize * 0.86) / 2,
        left: (ringSize - ringSize * 0.86) / 2,
        width: ringSize * 0.86, height: ringSize * 0.86,
        transformOrigin: '50% 50%',
      }}>
        <CurvedText text={label} radius={ringSize * 0.35} fontSize={ringSize * 0.085} color={fg} letterSpacing={0.6} />
      </div>
      {/* center glyph */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: `translate(-50%, -50%) ${hover ? 'scale(1.15)' : 'scale(1)'}`,
        ...HS.display, fontSize: innerSize * 0.7, color: fg, lineHeight: 1,
        transition: 'transform .25s cubic-bezier(.34,1.56,.64,1)',
      }}>{center}</div>
    </div>
  );
}

/* ============================================================
   SQUIGGLE — handwritten underline beneath hero copy.
   ============================================================ */
function Squiggle({ width = 320, color = HC.amber, height = 14 }) {
  return (
    <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height} style={{ display: 'block', marginTop: 8 }} aria-hidden>
      <path
        d={`M 4 ${height/2} ${Array.from({length: Math.floor(width/40)}, (_,i) =>
          `Q ${i*40 + 20} ${i % 2 === 0 ? 2 : height - 2}, ${i*40 + 40} ${height/2}`).join(' ')}`}
        fill="none" stroke={color} strokeWidth="3" strokeLinecap="round"
      />
    </svg>
  );
}

/* ============================================================
   DECORATIVE PRIMITIVES — real implementations of the chrome
   that decorates hero panels, callouts, marquees.
   ============================================================ */

/* Concentric rings — used as radiating background ornament */
function Rings({ size = 320, color = HC.cream, opacity = 0.3, count = 6, strokeWidth = 2 }) {
  const r = size / 2;
  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} aria-hidden style={{ display: 'block', opacity }}>
      {[...Array(count)].map((_, i) => (
        <circle key={i}
          cx={r} cy={r}
          r={r * (1 - i / (count + 1))}
          fill="none" stroke={color} strokeWidth={strokeWidth} />
      ))}
    </svg>
  );
}

/* Radial burst — sun rays from a center, cartoon "BAM" backdrop */
function Burst({ size = 320, color = HC.amber, count = 32, opacity = 1 }) {
  const r = size / 2;
  const points = [];
  for (let i = 0; i < count * 2; i++) {
    const a = (i / (count * 2)) * Math.PI * 2 - Math.PI / 2;
    const rad = i % 2 === 0 ? r : r * 0.62;
    points.push(`${r + Math.cos(a) * rad},${r + Math.sin(a) * rad}`);
  }
  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} aria-hidden style={{ display: 'block', opacity }}>
      <polygon points={points.join(' ')} fill={color} />
    </svg>
  );
}

/* Halftone — repeating dot pattern, layered on hero/callout panels */
function Halftone({ color = HC.ink, opacity = 0.1, dot = 2.5, gap = 9, blend = 'multiply' }) {
  const c = encodeURIComponent(color);
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${gap*2}' height='${gap*2}'><circle cx='${gap/2}' cy='${gap/2}' r='${dot}' fill='${c}'/><circle cx='${gap*1.5}' cy='${gap*1.5}' r='${dot}' fill='${c}'/></svg>`;
  return (
    <div aria-hidden style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      backgroundImage: `url("data:image/svg+xml;utf8,${svg.replace(/#/g, '%23')}")`,
      backgroundSize: `${gap*2}px ${gap*2}px`,
      opacity, mixBlendMode: blend,
    }} />
  );
}

/* Mushroom — chunky cartoon mushroom illustration */
function Mushroom({ size = 100, cap = HC.rose, stem = HC.cream, dots = HC.cream, stroke = HC.ink }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden style={{ display: 'block' }}>
      {/* stem */}
      <path d="M 36 60 Q 32 90, 50 92 Q 68 90, 64 60 Z" fill={stem} stroke={stroke} strokeWidth="3" strokeLinejoin="round" />
      {/* cap base */}
      <path d="M 12 50 Q 12 18, 50 18 Q 88 18, 88 50 Q 88 60, 78 60 L 22 60 Q 12 60, 12 50 Z" fill={cap} stroke={stroke} strokeWidth="3" strokeLinejoin="round" />
      {/* spots */}
      <ellipse cx="32" cy="36" rx="6" ry="4" fill={dots} />
      <ellipse cx="58" cy="30" rx="8" ry="5" fill={dots} />
      <ellipse cx="74" cy="44" rx="5" ry="4" fill={dots} />
      <ellipse cx="44" cy="48" rx="4" ry="3" fill={dots} />
      {/* gill line under the cap */}
      <path d="M 22 60 L 78 60" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/* Eye — third-eye / all-seeing-eye motif */
function Eye({ size = 100, iris = HC.amber, lash = HC.ink, white = HC.cream }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden style={{ display: 'block' }}>
      <path d="M 6 50 Q 50 14, 94 50 Q 50 86, 6 50 Z" fill={white} stroke={lash} strokeWidth="3" strokeLinejoin="round" />
      <circle cx="50" cy="50" r="18" fill={iris} stroke={lash} strokeWidth="2.5" />
      <circle cx="50" cy="50" r="8" fill={lash} />
      <circle cx="46" cy="46" r="3" fill={white} />
      {/* lashes */}
      {[-40, -25, -10, 10, 25, 40].map((d, i) => {
        const a = (d + 90) * Math.PI / 180;
        const x1 = 50 + Math.cos(a) * 38;
        const y1 = 50 - Math.sin(a) * 38 - 14;
        const x2 = 50 + Math.cos(a) * 50;
        const y2 = 50 - Math.sin(a) * 50 - 16;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={lash} strokeWidth="3" strokeLinecap="round" />;
      })}
    </svg>
  );
}

/* Smoke — three rising smoke wisps */
function Smoke({ size = 140, color = HC.cream, opacity = 0.6, strokeWidth = 3 }) {
  return (
    <svg viewBox="0 0 100 140" width={size * 0.71} height={size} aria-hidden style={{ display: 'block', opacity }}>
      <path d="M 30 130 Q 38 110, 30 92 Q 22 78, 36 62 Q 48 48, 38 30 Q 32 18, 42 6"
        fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M 56 130 Q 64 114, 56 98 Q 48 84, 62 70 Q 72 56, 64 40 Q 58 28, 68 14"
        fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" opacity="0.7" />
      <path d="M 80 130 Q 86 116, 78 102 Q 70 88, 82 76"
        fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

/* Sun rising over mountain — used in intro panel */
function SunRise({ size = 320, sun = HC.amber, mountain = HC.blueDeep, sky = HC.cream }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} aria-hidden style={{ display: 'block' }}>
      <rect width="200" height="200" fill={sky} />
      {/* rays */}
      {[0, 30, 60, 90, 120, 150, 180].map((d, i) => {
        const a = ((d - 180) * Math.PI) / 180;
        return (
          <line key={i}
            x1={100 + Math.cos(a) * 30}
            y1={140 + Math.sin(a) * 30}
            x2={100 + Math.cos(a) * 80}
            y2={140 + Math.sin(a) * 80}
            stroke={sun} strokeWidth="4" strokeLinecap="round" />
        );
      })}
      {/* sun */}
      <circle cx="100" cy="140" r="38" fill={sun} stroke={HC.ink} strokeWidth="3" />
      {/* mountains */}
      <path d="M 0 200 L 0 150 L 30 110 L 60 150 L 90 90 L 130 140 L 160 100 L 200 150 L 200 200 Z"
        fill={mountain} stroke={HC.ink} strokeWidth="3" strokeLinejoin="round" />
      {/* peak snow */}
      <path d="M 86 96 L 90 90 L 96 100 L 92 102 Z" fill={sky} />
      <path d="M 156 106 L 160 100 L 166 110 L 162 112 Z" fill={sky} />
    </svg>
  );
}

/* Lightning bolt */
function Lightning({ size = 48, color = HC.amber, stroke = HC.ink, strokeWidth = 3 }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden style={{ display: 'block' }}>
      <path d="M 36 4 L 14 32 L 26 32 L 18 60 L 50 26 L 36 26 L 44 4 Z"
        fill={color} stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" />
    </svg>
  );
}

/* Glyph dispatcher — by kind name. The glyph SVGs themselves live in
   ht-glyphs.jsx (loaded later) so we look them up off window.GLYPHS
   at render time. */
function Glyph({ kind = 'mushroom', size = 18, color = HC.ink }) {
  const entry = window.GLYPHS && window.GLYPHS.find(g => g.name === kind);
  if (!entry) return null;
  const Cmp = entry.Cmp;
  return <Cmp s={size} c={color} />;
}

/* Hand — fingerpoint silhouette, used inline */
function Hand({ size = 48, color = HC.ink }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden style={{ display: 'block' }}>
      <path d="M 18 60 L 16 32 Q 16 28, 20 28 L 22 28 L 22 10 Q 22 6, 26 6 Q 30 6, 30 10 L 30 26 L 32 26 L 32 6 Q 32 2, 36 2 Q 40 2, 40 6 L 40 26 L 42 26 L 42 10 Q 42 6, 46 6 Q 50 6, 50 10 L 50 32 Q 50 60, 34 60 Z"
        fill={color} stroke={HC.ink} strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

window.Rings = Rings;
window.Burst = Burst;
window.Halftone = Halftone;
window.Mushroom = Mushroom;
window.Eye = Eye;
window.Smoke = Smoke;
window.SunRise = SunRise;
window.Lightning = Lightning;
window.Hand = Hand;
window.Glyph = Glyph;
window.Grain = PaperTexture; /* alias */
window.CurvedText = CurvedText;
window.HWMark = HWMark;
window.StampButton = StampButton;
window.Squiggle = Squiggle;
window.TicketButton = ({ children, ...p }) => <Button {...p}>{children}</Button>;
window.BlobButton   = ({ children, ...p }) => <Button color={HC.cream} {...p}>{children}</Button>;
