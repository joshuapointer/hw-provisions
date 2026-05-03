/* ============================================================
   HEADWATERS — Proprietary sections
   Roster, Behind-the-Counter, Sticker Sheet
   ============================================================ */

/* ============================================================
   ROSTER — "hands at work" — local glassblowers + artists
   ============================================================ */
function ProtoRoster({ mobile = false }) {
  const folks = [
    { id: 'jeremy', n: '01', name: 'jeremy', last: 'pointer', role: 'shopkeep', town: 'Rogers AR',  bio: 'opened the doors. picks every piece. answers when the phone rings.', img: 'assets/photo-jeremy.avif', tape: HC.amber, rot: -2.5 },
    { id: 'sage',   n: '02', name: 'sage',   last: 'mcclellan', role: 'glassblower', town: 'Fayetteville AR', bio: 'spoons, sherlocks. won\'t make matching pairs. drops every other friday.', img: 'assets/photo-1.avif', tape: HC.rose, rot: 1.5 },
    { id: 'maple',  n: '03', name: 'maple',  last: 'bend',     role: 'glass collective', town: 'Bentonville AR', bio: 'three blowers, one studio. heady fume work, marbles, pendants.', img: 'assets/photo-3.avif', tape: HC.haze, rot: -1 },
    { id: 'adam',   n: '04', name: 'adam',   last: 'driver',   role: 'wood goods', town: 'Eureka Springs AR', bio: 'walnut trays. spoon-cut by hand. one a week, on average.', img: 'assets/photo-2.avif', tape: HC.fern, rot: 2 },
  ];
  return (
    <section style={{ background: HC.cream, padding: mobile ? '60px 16px' : '120px 40px 100px', position: 'relative', overflow: 'hidden' }}>
      <Halftone color={HC.ink} opacity={0.05} dot={2} gap={11} />
      <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto' }}>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, marginBottom: 48 }}>
          <div>
            <FolioRule n={2} of={6} label="hands at work" />
            <h2 style={{ ...HS.display, fontSize: mobile ? 64 : 132, lineHeight: 0.85, margin: '12px 0 0', letterSpacing: '-0.02em' }}>
              the people<br/>
              <span style={{ fontStyle: 'italic', color: HC.rose, WebkitTextStroke: `2px ${HC.ink}`, paintOrder: 'stroke fill' }}>
                behind it.
              </span>
            </h2>
          </div>
          <p style={{ ...HS.serif, fontStyle: 'italic', fontSize: mobile ? 16 : 20, maxWidth: 360, lineHeight: 1.45, margin: 0 }}>
            small shop, small circle. every piece on the floor is made or chosen by one of these four.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(4, 1fr)', gap: mobile ? 28 : 22 }}>
          {folks.map((f, i) => (
            <Reveal key={f.id} rotate={f.rot} delay={i * 90}>
              <RosterCard f={f} mobile={mobile} />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function RosterCard({ f, mobile }) {
  const [hov, setHov] = React.useState(false);
  const G = GLYPHS.find(g => g.n === f.n) || GLYPHS[0];
  const Cmp = G.Cmp;
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        position: 'relative',
        transform: hov ? `rotate(${(f.rot || 0) * 0.3}deg) translateY(-6px)` : 'rotate(0deg)',
        transition: 'transform .4s cubic-bezier(.2,.8,.2,1)',
      }}>
      {/* Tape strip at top */}
      <div style={{
        position: 'absolute', top: -10, left: '50%', transform: `translateX(-50%) rotate(${(f.rot || 0) * -2}deg)`,
        width: 80, height: 22, background: f.tape, opacity: 0.8,
        border: `1px solid rgba(0,0,0,0.2)`, zIndex: 3,
      }} />
      {/* Polaroid */}
      <div style={{
        background: HC.paper, border: `2px solid ${HC.ink}`,
        padding: 10, paddingBottom: 14,
        boxShadow: hov ? `9px 13px 0 ${HC.ink}` : `5px 7px 0 ${HC.ink}`,
        transition: 'box-shadow .35s',
      }}>
        <div style={{
          aspectRatio: '4/5', overflow: 'hidden',
          background: `url(${f.img}) center/cover, ${HC.smoke}`,
          border: `1px solid ${HC.ink}`, position: 'relative',
        }}>
          {/* Halftone duotone overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(180deg, ${f.tape}55, ${HC.blueDeep}55)`,
            mixBlendMode: 'multiply',
          }} />
          {/* Number stamp on photo */}
          <div style={{
            position: 'absolute', top: 8, right: 8,
            width: 36, height: 36, borderRadius: '50%',
            background: HC.cream, color: HC.ink, border: `2px solid ${HC.ink}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            ...HS.mono, fontSize: 10, fontWeight: 600,
          }}>№{f.n}</div>
        </div>
        {/* Caption */}
        <div style={{ marginTop: 10, paddingLeft: 4 }}>
          <div style={{ ...HS.hand, fontSize: 32, color: HC.ink, lineHeight: 0.9 }}>
            {f.name}<br/><span style={{ color: f.tape }}>{f.last}</span>
          </div>
          <div style={{ ...HS.mono, fontSize: 9, color: HC.smoke, marginTop: 8, letterSpacing: '0.14em' }}>
            <Cmp s={11} c={HC.ink} /> · {f.role.toUpperCase()} · {f.town}
          </div>
          <div style={{ ...HS.serif, fontStyle: 'italic', fontSize: 13, color: HC.ink, lineHeight: 1.4, marginTop: 8 }}>
            {f.bio}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   BEHIND THE COUNTER — current shelf, 5–6 specific pieces
   ============================================================ */
function ProtoBehindCounter({ mobile = false }) {
  const items = [
    { sku: '047', n: '02', name: 'sage spoon · sherlock',         maker: 'sage mcclellan',  price: 240, oneOfOne: true,  img: 'assets/photo-1.avif', accent: HC.rose,  rot: -1.5 },
    { sku: '048', n: '04', name: 'walnut rolling tray',           maker: 'adam driver',     price: 88,  oneOfOne: false, img: 'assets/photo-2.avif', accent: HC.fern, rot: 1 },
    { sku: '049', n: '06', name: 'puffco peak pro · obsidian',    maker: 'puffco',          price: 420, oneOfOne: false, img: 'assets/photo-5.avif', accent: HC.haze, rot: -0.5 },
    { sku: '050', n: '10', name: 'organic hemp wraps · 24 pack',  maker: 'OCB',             price: 8,   oneOfOne: false, img: 'assets/photo-4.avif', accent: HC.amber, rot: 1.5 },
    { sku: '051', n: '03', name: 'fume marble pendant',           maker: 'maple bend',      price: 165, oneOfOne: true,  img: 'assets/photo-3.avif', accent: HC.ember, rot: -1 },
    { sku: '052', n: '11', name: 'house tee · cream-on-cream',    maker: 'headwaters',      price: 32,  oneOfOne: false, img: 'assets/photo-6.avif', accent: HC.blue,  rot: 0.5 },
  ];
  return (
    <section style={{ background: HC.blueDark, color: HC.cream, padding: mobile ? '60px 16px' : '120px 40px', position: 'relative', overflow: 'hidden' }}>
      <Halftone color={HC.cream} opacity={0.06} dot={2} gap={9} />
      <ProductPattern color={HC.cream} opacity={0.06} blend="screen" />
      <div style={{ position: 'absolute', top: 60, right: -40, opacity: 0.15, pointerEvents: 'none' }}>
        <NumGlyph n="11" size={300} color={HC.amber} />
      </div>
      {/* SUNNY smoking — chillin' behind the counter */}
      {!mobile && (
        <img src="mopbq0b8-Sunny_Smoking.PNG" alt=""
          style={{
            position: 'absolute', left: 30, top: 90,
            height: 240, width: 'auto', zIndex: 1,
            transform: 'rotate(-4deg)',
            filter: 'drop-shadow(4px 5px 0 rgba(0,0,0,0.35)) drop-shadow(0 12px 18px rgba(0,0,0,0.30))',
            pointerEvents: 'none',
            animation: 'h-bob 5.2s ease-in-out infinite',
          }} />
      )}
      {/* Smoke clouds rising from Sunny */}
      {!mobile && (
        <div style={{ position: 'absolute', left: 110, top: 30, opacity: 0.55, pointerEvents: 'none' }}>
          <Smoke size={140} color={HC.cream} opacity={0.5} />
        </div>
      )}

      <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, marginBottom: 56 }}>
          <div style={{ marginLeft: mobile ? 0 : 280 }}>
            <FolioRule n={3} of={6} label="behind the counter" />
            <h2 style={{ ...HS.display, fontSize: mobile ? 64 : 132, lineHeight: 0.85, margin: '12px 0 0', color: HC.cream }}>
              what's<br/>
              <span style={{ fontStyle: 'italic', color: HC.amber, WebkitTextStroke: `2px ${HC.ink}`, paintOrder: 'stroke fill' }}>
                on the shelf.
              </span>
            </h2>
          </div>
          <div style={{ ...HS.serif, fontStyle: 'italic', fontSize: mobile ? 15 : 18, maxWidth: 380, lineHeight: 1.45, color: 'rgba(242,230,201,0.85)' }}>
            <span style={{ ...HS.mono, fontStyle: 'normal', fontSize: 10, color: HC.amber, display: 'block', marginBottom: 8 }}>
              UPDATED THIS MORNING · MAY 02
            </span>
            no online orders. these six are here right now. when they're gone, they're gone.
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr 1fr' : 'repeat(3, 1fr)', gap: mobile ? 14 : 28 }}>
          {items.map((it, i) => (
            <Reveal key={it.sku} rotate={it.rot} delay={i * 70}>
              <ShelfCard it={it} mobile={mobile} />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function ShelfCard({ it, mobile }) {
  const [hov, setHov] = React.useState(false);
  const G = GLYPHS.find(g => g.n === it.n) || GLYPHS[0];
  const Cmp = G.Cmp;
  return (
    <div data-inter
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        position: 'relative',
        transform: hov ? 'translateY(-6px) rotate(0.5deg)' : 'translateY(0) rotate(0)',
        transition: 'transform .35s cubic-bezier(.2,.8,.2,1)',
        cursor: 'pointer',
      }}>
      {/* SKU number (the BIG element) */}
      <div style={{
        position: 'absolute', top: -22, left: -8, zIndex: 4,
        ...HS.display, fontSize: 88, lineHeight: 1, color: HC.amber,
        WebkitTextStroke: `2px ${HC.ink}`, paintOrder: 'stroke fill',
        textShadow: `4px 4px 0 ${HC.ink}`,
        transform: hov ? 'rotate(-4deg)' : 'rotate(-2deg)',
        transition: 'transform .35s',
        pointerEvents: 'none',
      }}>{it.sku}</div>

      <div style={{
        background: HC.cream, color: HC.ink,
        border: `2px solid ${HC.ink}`, padding: 12,
        boxShadow: hov ? `9px 11px 0 ${HC.ink}` : `5px 6px 0 ${HC.ink}`,
        transition: 'box-shadow .35s',
      }}>
        {/* Image */}
        <div style={{
          aspectRatio: '1/1', overflow: 'hidden', position: 'relative',
          background: `url(${it.img}) center/cover, ${HC.smoke}`,
          border: `1px solid ${HC.ink}`,
        }}>
          {/* one-of-one badge */}
          {it.oneOfOne && (
            <div style={{
              position: 'absolute', top: 8, left: 8,
              ...HS.mono, fontSize: 9, color: HC.ink,
              padding: '4px 8px', background: HC.amber,
              border: `1.5px solid ${HC.ink}`, letterSpacing: '0.16em',
              transform: 'rotate(-3deg)',
            }}>1 OF 1</div>
          )}
          {/* glyph mark in corner */}
          <div style={{
            position: 'absolute', bottom: 8, right: 8,
            opacity: hov ? 1 : 0.85, transition: 'opacity .25s',
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: '50%',
              background: HC.cream, border: `1.5px solid ${HC.ink}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Cmp s={20} c={HC.ink} />
            </div>
          </div>
        </div>

        {/* Caption */}
        <div style={{ marginTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
          <div style={{ flex: 1 }}>
            <div style={{ ...HS.alt, fontSize: 16, fontWeight: 800, lineHeight: 1.15 }}>
              {it.name}
            </div>
            <div style={{ ...HS.serif, fontStyle: 'italic', fontSize: 12, color: HC.smoke, marginTop: 4 }}>
              by {it.maker}
            </div>
          </div>
          <PriceStamp amount={it.price} rotate={it.rot * 4} color={it.accent} />
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   STICKER SHEET — peelable sticker sheet, free with $25+
   ============================================================ */
function ProtoStickerSheet({ mobile = false }) {
  const [peeled, setPeeled] = React.useState({});
  const peel = (id, e) => {
    setPeeled(p => ({ ...p, [id]: !p[id] }));
    if (e && !peeled[id]) spawnGlyphConfetti(e.clientX, e.clientY);
  };
  return (
    <section style={{ background: HC.cream, padding: mobile ? '60px 16px 80px' : '120px 40px', position: 'relative', overflow: 'hidden' }}>
      <Halftone color={HC.ink} opacity={0.06} dot={2} gap={11} />
      <ProductPattern color={HC.haze} opacity={0.07} blend="multiply" />
      {/* Floating Sunny face as the "cover" sticker — looks pasted on the sheet */}
      {!mobile && (
        <img src="mopbq09v-Headwaters_Face.png" alt=""
          style={{
            position: 'absolute', right: 110, top: 60,
            height: 180, width: 'auto', zIndex: 4,
            transform: 'rotate(8deg)',
            filter: 'drop-shadow(4px 5px 0 rgba(0,0,0,0.28)) drop-shadow(0 10px 14px rgba(0,0,0,0.18))',
            pointerEvents: 'none',
            animation: 'h-bob-rot 4.6s ease-in-out infinite',
          }} />
      )}
      <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto' }}>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, marginBottom: 48 }}>
          <div>
            <FolioRule n={4} of={6} label="house sticker sheet" />
            <h2 style={{ ...HS.display, fontSize: mobile ? 64 : 132, lineHeight: 0.85, margin: '12px 0 0' }}>
              free with<br/>
              <span style={{ fontStyle: 'italic', color: HC.haze, WebkitTextStroke: `2px ${HC.ink}`, paintOrder: 'stroke fill' }}>
                any $25+.
              </span>
            </h2>
          </div>
          <div style={{ ...HS.serif, fontStyle: 'italic', fontSize: mobile ? 15 : 19, maxWidth: 380, lineHeight: 1.45 }}>
            twelve marks. peel them off. stick them on your jar, your laptop, your truck. <br/>
            <span style={{ ...HS.hand, fontSize: 24, color: HC.rose }}>(go ahead, click one.)</span>
          </div>
        </div>

        {/* The sheet */}
        <div style={{
          background: HC.paper, border: `2px solid ${HC.ink}`,
          padding: mobile ? '32px 16px' : '40px 32px', position: 'relative',
          boxShadow: `8px 10px 0 ${HC.ink}`,
        }}>
          {/* Sheet header */}
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
                  {/* Stamp underneath (revealed when peeled) */}
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
                  {/* The sticker itself */}
                  <div style={{
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
                  }}
                  onMouseEnter={(e) => { if (!isPeeled) e.currentTarget.style.transform = `rotate(${rot + 2}deg) translateY(-4px) scale(1.04)`; }}
                  onMouseLeave={(e) => { if (!isPeeled) e.currentTarget.style.transform = `rotate(${rot}deg) scale(1)`; }}
                  >
                    <Cmp s={mobile ? 38 : 56} c={HC.ink} />
                    <div style={{ ...HS.mono, fontSize: 9, letterSpacing: '0.18em', marginTop: 8, color: HC.ink }}>
                      №{g.n} · {g.name}
                    </div>
                    {/* peel-corner hint */}
                    <svg style={{ position: 'absolute', bottom: -1, right: -1, width: 18, height: 18 }} viewBox="0 0 18 18">
                      <path d="M 18 0 L 18 18 L 0 18 Z" fill={HC.cream} stroke={HC.ink} strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sheet footer */}
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

window.ProtoRoster = ProtoRoster;
window.ProtoBehindCounter = ProtoBehindCounter;
window.ProtoStickerSheet = ProtoStickerSheet;
