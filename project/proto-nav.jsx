/* ============================================================
   HEADWATERS PROTOTYPE — All pages, interactive
   Built on top of HC/HS/Nav primitives from ht-base.jsx
   But with router-aware nav, real interactions.
   ============================================================ */

/* Tweakable defaults — host rewrites this block */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "heady",
  "displayFont": "Shrikhand",
  "bodyFont": "Space Grotesk",
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
          </a>
          <ProtoArcLinks links={links} active={active} fg={fg} />
          <a data-inter href="#" onClick={(e) => { e.preventDefault(); r.navigate('visit'); }} style={{ textDecoration: 'none' }}>
            <StampButton label="OPEN · 9 TO 8 · " center="✦" color={HC.lime} fg={HC.ink} size={92} rotate={-6} />
          </a>
        </div>
      </nav>
    </>
  );
}

function ProtoArcLinks({ links, active, fg }) {
  const r = useRouter();
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 28, position: 'relative' }}>
      {links.map((l, i) => {
        const offset = [-2, 6, -4][i % 3];
        const rotate = [-2, 1, -1][i % 3];
        const isActive = active === l.k;
        const accents = [HC.magenta, HC.lime, HC.tangerine];
        return (
          <a data-inter key={l.k} href="#" onClick={(e) => { e.preventDefault(); r.navigate(l.k); }} style={{
            position: 'relative',
            transform: `translateY(${offset}px) rotate(${rotate}deg)`,
            ...HS.alt, fontSize: 18,
            color: isActive ? HC.ink : fg,
            textDecoration: 'none',
            padding: isActive ? '6px 10px' : '6px 4px',
            background: isActive ? accents[i] : 'transparent',
            border: isActive ? `2px solid ${HC.ink}` : 'none',
            boxShadow: isActive ? `3px 3px 0 ${HC.ink}` : 'none',
            transition: 'transform .2s',
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
        padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        borderBottom: `1px solid ${dark ? 'rgba(245,236,217,0.15)' : 'rgba(14,26,47,0.12)'}`,
      }}>
        <a data-inter onClick={(e) => { e.preventDefault(); r.navigate('home'); }} href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: 'inherit' }}>
          <HWMark size={32} ring={dark ? HC.cream : HC.ink} />
          <div style={{ ...HS.display, fontSize: 22, lineHeight: 1 }}>headwaters</div>
        </a>
        <button data-inter onClick={() => setOpen(true)} style={{
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
              <button data-inter onClick={() => setOpen(false)} style={{
                background: HC.ink, color: HC.cream, border: 'none', borderRadius: '50%',
                width: 36, height: 36, ...HS.alt, fontSize: 16, cursor: 'pointer',
              }}>✕</button>
            </div>
            <div style={{ display: 'grid', gap: 12 }}>
              {links.map((l, i) => {
                const c = [HC.magenta, HC.lime, HC.tangerine][i];
                const isActive = l.k === active;
                return (
                  <a data-inter key={l.k} href="#" onClick={(e) => { e.preventDefault(); r.navigate(l.k); setOpen(false); }} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '20px 24px', background: isActive ? c : HC.paper,
                    border: `2px solid ${HC.ink}`, borderRadius: 18,
                    textDecoration: 'none', color: HC.ink,
                    boxShadow: isActive ? `4px 4px 0 ${HC.ink}` : 'none',
                    ...HS.alt, fontSize: 24,
                  }}>
                    <span>{l.l}</span>
                    <span style={{ ...HS.display, fontSize: 28, color: HC.blue }}>{l.i}</span>
                  </a>
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

window.ProtoNav = ProtoNav;
window.ProtoMobileNav = ProtoMobileNav;
window.applyTweaks = applyTweaks;
window.PALETTES = PALETTES;
window.TWEAK_DEFAULTS = TWEAK_DEFAULTS;
