/* ============================================================
   HEADWATERS PROTOTYPE — All pages, interactive
   Built on top of HC/HS/Nav primitives from ht-base.jsx
   But with router-aware nav, real interactions.
   ============================================================ */

/* Tweakable defaults — host rewrites this block */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "heady",
  "displayFont": "Holtzman Rounded",
  "bodyFont": "Gunnar",
  "density": "regular",
  "novelInteractions": true
}/*EDITMODE-END*/;

const PALETTES = {
  heady:    { blue: '#387CCC', blueDeep: '#1F4A8A', blueDark: '#0B1F3D', cream: '#F2E6C9', creamWarm: '#E5D2A5', ink: '#1A1207', lime: '#E6A933', magenta: '#C44A6A', tangerine: '#D8541E', paper: '#EFE2BD', amber: '#E6A933', rose: '#C44A6A', haze: '#8B5FB0', fern: '#6B8E3D', ember: '#D8541E', smoke: '#6B6457' },
  sunset:   { blue: '#E85A2C', blueDeep: '#B83812', blueDark: '#3D1407', cream: '#FFF3D9', creamWarm: '#FBE0B0', ink: '#1F0A04', lime: '#FFD86B', magenta: '#FF7BC0', tangerine: '#9B59FF', paper: '#FFF6E0', amber: '#FFD86B', rose: '#FF7BC0', haze: '#9B59FF', fern: '#A8B850', ember: '#E85A2C', smoke: '#7A4030' },
  forest:   { blue: '#3A6B4A', blueDeep: '#1F4530', blueDark: '#0E2418', cream: '#F1EBD8', creamWarm: '#E0D6B6', ink: '#0F1B12', lime: '#E0E45B', magenta: '#D67D34', tangerine: '#7AB2B2', paper: '#F7F1DD', amber: '#E0E45B', rose: '#D67D34', haze: '#7AB2B2', fern: '#6B8E3D', ember: '#C8531E', smoke: '#5A5A48' },
  midnight: { blue: '#6E5BFF', blueDeep: '#3F2DD9', blueDark: '#0B0820', cream: '#1A152E', creamWarm: '#221A3A', ink: '#F0EBFF', lime: '#A6FF6E', magenta: '#FF6FB6', tangerine: '#FFC04A', paper: '#15112A', amber: '#FFC04A', rose: '#FF6FB6', haze: '#A6FF6E', fern: '#5BFFB6', ember: '#FF7B3F', smoke: '#A99CD4' },
};

/* These shadow the originals. Other components read window.HC at render time
   (we re-assign at the top of every render via wrapper). */
function applyTweaks(tw) {
  const p = PALETTES[tw.palette] || PALETTES.heady;
  Object.assign(window.HC, p);
  window.HS.display.fontFamily = `"${tw.displayFont}", serif`;
  window.HS.page.fontFamily = `"${tw.bodyFont}", sans-serif`;
}

/* ============================================================
   ROUTER-AWARE NAV
   ============================================================ */
function ProtoNav({ active, tone = 'light' }) {
  const r = useRouter();
  const emblemRef = React.useRef(null);
  React.useEffect(() => {
    if (!emblemRef.current) return;
    let last = window.scrollY, lastT = performance.now(), rot = 0, vel = 0, raf;
    const tick = () => {
      const now = performance.now();
      const dt = Math.max(1, now - lastT);
      const dy = window.scrollY - last;
      const newVel = (dy / dt) * 16; // px per ~frame
      vel = vel * 0.85 + newVel * 0.15;
      rot += 0.18 + vel * 0.08;
      if (emblemRef.current) emblemRef.current.style.transform = `rotate(${rot}deg)`;
      last = window.scrollY; lastT = now;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  const links = [
    { k: 'home',     l: 'home' },
    { k: 'showcase', l: 'showcase' },
    { k: 'visit',    l: 'visit' },
  ];
  const dark = tone === 'dark';
  const fg = dark ? HC.cream : HC.ink;
  const bg = dark ? HC.blueDark : HC.cream;

  return (
    <>
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
      <nav style={{ background: bg, color: fg, position: 'relative', padding: '20px 40px 36px' }}>
        <svg viewBox="0 0 1440 24" preserveAspectRatio="none" style={{
          position: 'absolute', bottom: -1, left: 0, width: '100%', height: 24, display: 'block',
        }}>
          <path d="M0 24 L0 8 Q 60 0, 120 8 T 240 8 T 360 8 T 480 8 T 600 8 T 720 8 T 840 8 T 960 8 T 1080 8 T 1200 8 T 1320 8 T 1440 8 L 1440 24 Z" fill={HC.ink} />
        </svg>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a data-inter href="#" onClick={(e) => { e.preventDefault(); r.navigate('home'); }} style={{ display: 'flex', alignItems: 'center', gap: 18, textDecoration: 'none', color: fg }}>
            <div style={{ position: 'relative', width: 96, height: 96, flexShrink: 0 }}>
              <div ref={emblemRef} style={{ position: 'absolute', inset: 0 }}>
                <CurvedText text="✦ where's your head at? · " radius={40} fontSize={10} color={fg} />
              </div>
              <img src={dark ? 'mopborf7-Icon-White.png' : 'mopborf6-Icon-Blue.png'}
                   alt=""
                   style={{
                     position: 'absolute', inset: 18, width: 60, height: 60,
                     objectFit: 'contain',
                     filter: dark ? 'none' : `drop-shadow(2px 2px 0 rgba(0,0,0,0.18))`,
                   }} />
            </div>
            <div>
              <img src={dark ? 'mopborf3-Horizontal-White.png' : 'mopborf1-Horizontal-Blue.png'}
                   alt="Headwaters Provisions"
                   style={{ height: 56, width: 'auto', display: 'block', filter: 'drop-shadow(2px 2px 0 rgba(0,0,0,0.12))' }} />
              <div style={{ ...HS.serif, fontStyle: 'italic', fontSize: 16, color: dark ? HC.lime : HC.blue, marginTop: 6, letterSpacing: '0.02em' }}>
                "where's your <span style={{ color: dark ? HC.amber : HC.magenta }}>head at?</span>"
              </div>
            </div>
          </a>
          <ProtoArcLinks links={links} active={active} fg={fg} />
          <a data-inter href="#" onClick={(e) => { e.preventDefault(); r.navigate('visit'); }} style={{ textDecoration: 'none', display: 'inline-block', transition: 'transform .25s cubic-bezier(.34,1.56,.64,1)' }}
             onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(8deg) scale(1.08)'}
             onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(0deg) scale(1)'}>
            <StampButton label="OPEN · 9 TO 8 · " center="✦" color={HC.lime} fg={HC.ink} size={116} rotate={-6} />
          </a>
        </div>
      </nav>
    </>
  );
}

function ProtoArcLinks({ links, active, fg }) {
  const r = useRouter();
  const [hover, setHover] = React.useState(null);
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 36, position: 'relative' }}>
      {links.map((l, i) => {
        const offset = [-2, 6, -4][i % 3];
        const rotate = [-2, 1, -1][i % 3];
        const isActive = active === l.k;
        const accents = [HC.magenta, HC.lime, HC.tangerine];
        const isHover = hover === l.k && !isActive;
        return (
          <a data-inter key={l.k} href="#"
            onMouseEnter={() => setHover(l.k)}
            onMouseLeave={() => setHover(null)}
            onClick={(e) => { e.preventDefault(); r.navigate(l.k); }} style={{
            position: 'relative',
            transform: `translateY(${offset + (isHover ? -3 : 0)}px) rotate(${rotate + (isHover ? -rotate : 0)}deg)`,
            ...HS.display, fontSize: 32, lineHeight: 1, textTransform: 'lowercase',
            color: isActive ? HC.ink : fg,
            textDecoration: 'none',
            padding: isActive ? '8px 16px' : '6px 8px',
            background: isActive ? accents[i] : 'transparent',
            border: isActive ? `2px solid ${HC.ink}` : 'none',
            boxShadow: isActive ? `4px 4px 0 ${HC.ink}` : 'none',
            transition: 'transform .25s cubic-bezier(.34,1.56,.64,1)',
          }}>
            {l.l}
            {!isActive && (
              <svg style={{
                position: 'absolute', bottom: -8, left: 0, width: '100%',
                transform: isHover ? 'scaleX(1.05)' : 'scaleX(1)',
                transformOrigin: 'left',
                transition: 'transform .25s',
              }} height="8" viewBox="0 0 60 8" preserveAspectRatio="none">
                <path d="M0 4 Q 15 0, 30 4 T 60 4" fill="none" stroke={accents[i]} strokeWidth={isHover ? 3 : 2.4} strokeLinecap="round" />
              </svg>
            )}
          </a>
        );
      })}
    </div>
  );
}

/* ============================================================
   MOBILE NAV — bottom-bar with sheet menu
   ============================================================ */
function ProtoMobileNav({ active, tone = 'light' }) {
  const r = useRouter();
  const [open, setOpen] = React.useState(false);
  const dark = tone === 'dark';
  const links = [
    { k: 'home', l: 'home', i: '⌂' },
    { k: 'showcase', l: 'showcase', i: '✦' },
    { k: 'visit', l: 'visit', i: '◉' },
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
        padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        borderBottom: `2px solid ${dark ? 'rgba(245,236,217,0.18)' : HC.ink}`,
      }}>
        <a data-inter onClick={(e) => { e.preventDefault(); r.navigate('home'); }} href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: 'inherit' }}>
          <img src={dark ? 'mopborf7-Icon-White.png' : 'mopborf6-Icon-Blue.png'}
               alt="" style={{ height: 44, width: 'auto', display: 'block' }} />
          <img src={dark ? 'mopborf3-Horizontal-White.png' : 'mopborf1-Horizontal-Blue.png'}
               alt="Headwaters" style={{ height: 32, width: 'auto', display: 'block' }} />
        </a>
        <button data-inter onClick={() => setOpen(true)} style={{
          background: HC.lime, color: HC.ink, border: `2px solid ${HC.ink}`,
          padding: '12px 22px', borderRadius: 999, ...HS.display, fontSize: 22,
          letterSpacing: '0.02em', cursor: 'pointer',
          boxShadow: `3px 3px 0 ${HC.ink}`,
          transition: 'transform .15s, box-shadow .15s',
        }}
          onTouchStart={(e) => { e.currentTarget.style.transform = 'translate(2px,2px)'; e.currentTarget.style.boxShadow = `1px 1px 0 ${HC.ink}`; }}
          onTouchEnd={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = `3px 3px 0 ${HC.ink}`; }}
        >
          menu ✦
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
              <div style={{ ...HS.display, fontSize: 44, lineHeight: 0.9, letterSpacing: '-0.01em' }}>menu</div>
              <button data-inter onClick={() => setOpen(false)} style={{
                background: HC.ink, color: HC.cream, border: 'none', borderRadius: '50%',
                width: 44, height: 44, ...HS.alt, fontSize: 20, cursor: 'pointer',
              }}>✕</button>
            </div>
            <div style={{ display: 'grid', gap: 14 }}>
              {links.map((l, i) => {
                const c = [HC.magenta, HC.lime, HC.tangerine][i];
                const isActive = l.k === active;
                return (
                  <a data-inter key={l.k} href="#" onClick={(e) => { e.preventDefault(); r.navigate(l.k); setOpen(false); }} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '24px 28px', background: isActive ? c : HC.paper,
                    border: `2px solid ${HC.ink}`, borderRadius: 18,
                    textDecoration: 'none', color: HC.ink,
                    boxShadow: isActive ? `5px 5px 0 ${HC.ink}` : `2px 2px 0 ${HC.ink}`,
                    ...HS.display, fontSize: 38, lineHeight: 1, letterSpacing: '-0.005em',
                    animation: `h-menu-in .3s ${i * 0.06}s both cubic-bezier(.34,1.56,.64,1)`,
                  }}>
                    <span>{l.l}</span>
                    <span style={{ ...HS.display, fontSize: 36, color: HC.blue }}>{l.i}</span>
                  </a>
                );
              })}
            </div>
            <div style={{ marginTop: 22, padding: '16px 20px', background: HC.lime, border: `2px solid ${HC.ink}`, borderRadius: 14, ...HS.display, fontSize: 22, textAlign: 'center', letterSpacing: '0.01em' }}>
              ✦ open today · 9 to 8
            </div>
            <style>{`@keyframes h-menu-in { from { opacity: 0; transform: translateX(-12px) } to { opacity: 1; transform: none } }`}</style>
          </div>
        </div>
      )}
    </>
  );
}

window.ProtoNav = ProtoNav;
window.ProtoMobileNav = ProtoMobileNav;
window.applyTweaks = applyTweaks;
window.PALETTES = PALETTES;
window.TWEAK_DEFAULTS = TWEAK_DEFAULTS;
