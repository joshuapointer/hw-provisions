/* ============================================================
   DIRECTION 1 — RIVER SOURCE
   Earthy, premium boutique. The headwaters metaphor.
   Palette: deep river green, stone, paper cream, ink
   Type: Fraunces (display) + Inter (UI) + DM Mono (caption)
   ============================================================ */

const RS_C = {
  ink: '#16201C',
  paper: '#F2EEE5',
  cream: '#E8E1D2',
  river: '#1F3A36',     // deep river
  moss: '#5C6B4A',
  stone: '#9A958A',
  silt: '#C8BFA8',
  rust: '#B5532A',      // accent
  glow: '#D9B25E',      // soft gold
};

const rsStyles = {
  page: {
    fontFamily: 'Inter, sans-serif',
    color: RS_C.ink,
    background: RS_C.paper,
    width: 1440,
  },
  display: {
    fontFamily: '"Fraunces", serif',
    fontWeight: 400,
    letterSpacing: '-0.02em',
    fontVariationSettings: '"opsz" 144, "SOFT" 50',
  },
  mono: {
    fontFamily: '"DM Mono", monospace',
    letterSpacing: '0.02em',
    textTransform: 'uppercase',
    fontSize: 11,
  },
};

// ----- Nav -----
function RSNav({ active = 'home', dark = false }) {
  const links = ['shop', 'brands', 'visit', 'journal', 'about'];
  const fg = dark ? RS_C.paper : RS_C.ink;
  const subtle = dark ? 'rgba(242,238,229,0.7)' : 'rgba(22,32,28,0.6)';
  return (
    <nav style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '24px 56px', borderBottom: `1px solid ${dark ? 'rgba(242,238,229,0.15)' : 'rgba(22,32,28,0.1)'}`,
      color: fg,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <RSEmblem size={36} dark={dark} />
        <div>
          <div style={{ ...rsStyles.display, fontSize: 22, lineHeight: 1, fontStyle: 'italic' }}>headwaters</div>
          <div style={{ ...rsStyles.mono, color: subtle, marginTop: 2 }}>provisions · est. 2024</div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 32, ...rsStyles.mono, fontSize: 12 }}>
        {links.map(l => (
          <a key={l} href="#" style={{
            color: active === l ? fg : subtle,
            textDecoration: 'none',
            borderBottom: active === l ? `1px solid ${fg}` : 'none',
            paddingBottom: 2,
          }}>{l}</a>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, ...rsStyles.mono, fontSize: 12 }}>
        <span style={{ color: subtle }}>Rogers, AR</span>
        <span style={{
          padding: '8px 16px', border: `1px solid ${fg}`, borderRadius: 999,
        }}>Open · 9–8</span>
      </div>
    </nav>
  );
}

function RSEmblem({ size = 40, dark = false }) {
  const fg = dark ? RS_C.paper : RS_C.river;
  const bg = dark ? RS_C.river : RS_C.paper;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="49" fill={bg} stroke={fg} strokeWidth="1" />
      {/* radiating sun rays + flowing river forms abstracted */}
      <g fill={fg}>
        <path d="M50 10 L52 38 L48 38 Z" />
        <path d="M50 90 L52 62 L48 62 Z" />
        <path d="M10 50 L38 52 L38 48 Z" />
        <path d="M90 50 L62 52 L62 48 Z" />
        <path d="M22 22 L42 42 L40 44 Z" />
        <path d="M78 22 L58 42 L60 44 Z" />
        <path d="M22 78 L42 58 L40 56 Z" />
        <path d="M78 78 L58 58 L60 56 Z" />
        <circle cx="50" cy="50" r="6" />
      </g>
    </svg>
  );
}

// ----- Page 1: HOME -----
function RSHome() {
  return (
    <div style={{ ...rsStyles.page }}>
      <RSNav active="home" dark />
      {/* Hero */}
      <section style={{
        background: RS_C.river, color: RS_C.paper, padding: '80px 56px 100px',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* topographic bg */}
        <svg style={{ position: 'absolute', inset: 0, opacity: 0.08 }} width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1440 700">
          {[...Array(18)].map((_, i) => (
            <path key={i} d={`M0 ${50 + i*38} C 240 ${20+i*38}, 480 ${80+i*38}, 720 ${50+i*38} S 1200 ${30+i*38}, 1440 ${60+i*38}`}
              fill="none" stroke={RS_C.paper} strokeWidth="1" />
          ))}
        </svg>
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 64, alignItems: 'end' }}>
          <div>
            <div style={{ ...rsStyles.mono, color: RS_C.glow, marginBottom: 32 }}>
              ◇ A cannabis & vape provisioner · Northwest Arkansas
            </div>
            <h1 style={{ ...rsStyles.display, fontSize: 132, lineHeight: 0.92, margin: 0, fontWeight: 300 }}>
              Where's<br/>
              <span style={{ fontStyle: 'italic', color: RS_C.glow }}>your head</span><br/>
              at?
            </h1>
            <p style={{ marginTop: 40, fontSize: 18, lineHeight: 1.5, maxWidth: 480, color: 'rgba(242,238,229,0.85)' }}>
              Rooted at the source. A small, considered shop for accessories,
              apparel, and gifts — tucked just inside The Source Craft Cannabis
              in Rogers, Arkansas.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 40 }}>
              <button style={{
                padding: '16px 28px', background: RS_C.glow, color: RS_C.river,
                border: 'none', borderRadius: 999, ...rsStyles.mono, fontSize: 12, cursor: 'pointer',
              }}>Browse the shop →</button>
              <button style={{
                padding: '16px 28px', background: 'transparent', color: RS_C.paper,
                border: `1px solid rgba(242,238,229,0.4)`, borderRadius: 999, ...rsStyles.mono, fontSize: 12, cursor: 'pointer',
              }}>Plan your visit</button>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{
              aspectRatio: '4/5', borderRadius: 4, overflow: 'hidden',
              background: `url(assets/photo-1.avif) center/cover, ${RS_C.moss}`,
            }} />
            <div style={{
              position: 'absolute', bottom: 24, left: 24, right: 24,
              padding: '14px 18px', background: 'rgba(22,32,28,0.55)',
              backdropFilter: 'blur(8px)', borderRadius: 4,
              ...rsStyles.mono, fontSize: 11, color: RS_C.paper,
              display: 'flex', justifyContent: 'space-between',
            }}>
              <span>Featured · Smell-Proof carry</span>
              <span>↗</span>
            </div>
          </div>
        </div>
        {/* ticker */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 56px',
          borderTop: `1px solid rgba(242,238,229,0.15)`, ...rsStyles.mono, fontSize: 11,
          color: 'rgba(242,238,229,0.7)', display: 'flex', justifyContent: 'space-between',
        }}>
          <span>◇ No medical card required</span>
          <span>◇ 4505 W Poplar St · Rogers, AR</span>
          <span>◇ (479) 251-8581</span>
          <span>◇ Open daily</span>
        </div>
      </section>

      {/* Brand grid */}
      <section style={{ padding: '80px 56px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 48 }}>
          <h2 style={{ ...rsStyles.display, fontSize: 56, margin: 0, fontWeight: 400 }}>
            Stocked at <span style={{ fontStyle: 'italic' }}>the source</span>.
          </h2>
          <a href="#" style={{ ...rsStyles.mono, fontSize: 12, color: RS_C.ink, textDecoration: 'none', borderBottom: `1px solid ${RS_C.ink}` }}>
            View all 24 brands →
          </a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', borderTop: `1px solid ${RS_C.ink}`, borderLeft: `1px solid ${RS_C.ink}` }}>
          {['Puffco','RAW','Blazy Susans','Hippie Hounds','Adam Driver','Revelry','Storz & Bickel','Grav','Marley','Pax','RYOT','Higher Standards'].map((b, i) => (
            <div key={b} style={{
              padding: '36px 20px', borderRight: `1px solid ${RS_C.ink}`, borderBottom: `1px solid ${RS_C.ink}`,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              minHeight: 140, textAlign: 'center',
              background: i % 7 === 0 ? RS_C.cream : 'transparent',
            }}>
              <div style={{ ...rsStyles.display, fontSize: 22, fontWeight: 500 }}>{b}</div>
              <div style={{ ...rsStyles.mono, fontSize: 10, color: RS_C.stone, marginTop: 6 }}>№ {String(i+1).padStart(2,'0')}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial featured products */}
      <section style={{ padding: '20px 56px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32 }}>
          {[
            { tag: '01 · Carry', title: 'Smell-proof, water-resistant', sub: 'Revelry Supply', img: 'assets/photo-1.avif' },
            { tag: '02 · Glass', title: 'Heady artisan pieces', sub: 'Local NWA glassblowers', img: 'assets/photo-3.avif' },
            { tag: '03 · Apparel', title: 'Cotton tees, hats, & hoodies', sub: 'Headwaters house line', img: 'assets/photo-5.avif' },
          ].map(p => (
            <div key={p.tag}>
              <div style={{
                aspectRatio: '4/5', borderRadius: 4, overflow: 'hidden',
                background: `url(${p.img}) center/cover, ${RS_C.silt}`,
              }} />
              <div style={{ ...rsStyles.mono, fontSize: 11, color: RS_C.stone, marginTop: 16 }}>{p.tag}</div>
              <div style={{ ...rsStyles.display, fontSize: 24, marginTop: 6, fontWeight: 500 }}>{p.title}</div>
              <div style={{ fontSize: 14, color: RS_C.moss, marginTop: 4 }}>{p.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Manifesto strip */}
      <section style={{ background: RS_C.cream, padding: '100px 56px', borderTop: `1px solid rgba(22,32,28,0.1)` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.4fr 1fr', gap: 80, alignItems: 'start' }}>
          <div style={{ ...rsStyles.mono, fontSize: 11, color: RS_C.moss }}>
            ◇ ORIGINS<br/>№ 001
          </div>
          <div>
            <p style={{ ...rsStyles.display, fontSize: 36, lineHeight: 1.3, margin: 0, fontWeight: 400 }}>
              Headwaters is the place a river begins — clear, cold, undisturbed.
              We named the shop for the same idea: a small, careful counter
              where good gear, local glass, and big-name brands all meet
              before they head out into the world.
            </p>
            <div style={{ marginTop: 40, ...rsStyles.mono, fontSize: 11, color: RS_C.moss }}>
              — Headwaters Provisions, Rogers AR
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: RS_C.ink, color: RS_C.paper, padding: '56px 56px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
          <div>
            <RSEmblem size={48} dark />
            <div style={{ ...rsStyles.display, fontSize: 32, marginTop: 16, fontStyle: 'italic' }}>headwaters</div>
            <div style={{ ...rsStyles.mono, fontSize: 11, color: 'rgba(242,238,229,0.6)', marginTop: 4 }}>provisions · NWA</div>
          </div>
          {[
            { h: 'Visit', items: ['4505 W Poplar St','Rogers, AR 72756','Inside The Source'] },
            { h: 'Hours', items: ['Mon–Fri · 9–8','Sat · 9–7','Sun · 10–6'] },
            { h: 'Contact', items: ['info@headwatersprovisions.com','(479) 251-8581','@headwaters_provisions'] },
          ].map(c => (
            <div key={c.h}>
              <div style={{ ...rsStyles.mono, fontSize: 11, color: RS_C.glow, marginBottom: 12 }}>{c.h}</div>
              {c.items.map(i => <div key={i} style={{ fontSize: 13, lineHeight: 1.7, color: 'rgba(242,238,229,0.85)' }}>{i}</div>)}
            </div>
          ))}
        </div>
        <div style={{ borderTop: `1px solid rgba(242,238,229,0.15)`, paddingTop: 24, display: 'flex', justifyContent: 'space-between', ...rsStyles.mono, fontSize: 10, color: 'rgba(242,238,229,0.5)' }}>
          <span>© 2026 Headwaters Provisions LLC</span>
          <span>Where's your head at?</span>
        </div>
      </footer>
    </div>
  );
}

// ----- Page 2: SHOP / BRANDS -----
function RSShop() {
  const cats = [
    { n: 'Glass', count: 84 },
    { n: 'Vaporizers', count: 36 },
    { n: 'Carry', count: 22 },
    { n: 'Apparel', count: 41 },
    { n: 'Papers', count: 28 },
    { n: 'Gifts', count: 17 },
  ];
  const products = [
    { name: 'Pursuit Pouch', brand: 'Revelry Supply', price: '$54', img: 'assets/photo-1.avif' },
    { name: 'Heady Bubbler №7', brand: 'Local · Maple Bend Glass', price: '$220', img: 'assets/photo-3.avif' },
    { name: 'Roll Tray, Walnut', brand: 'Adam Driver', price: '$48', img: 'assets/photo-2.avif' },
    { name: 'Classic Pre-Roll Bundle', brand: 'RAW', price: '$14', img: 'assets/photo-4.avif' },
    { name: 'Plus Vaporizer', brand: 'Puffco', price: '$420', img: 'assets/photo-5.avif' },
    { name: 'Headwaters Tee, Cream', brand: 'House Line', price: '$32', img: 'assets/photo-6.avif' },
  ];
  return (
    <div style={{ ...rsStyles.page }}>
      <RSNav active="shop" />
      <section style={{ padding: '64px 56px 24px' }}>
        <div style={{ ...rsStyles.mono, fontSize: 11, color: RS_C.stone, marginBottom: 16 }}>
          № 002 · The Shop
        </div>
        <h1 style={{ ...rsStyles.display, fontSize: 96, margin: 0, fontWeight: 300, lineHeight: 0.95 }}>
          Browse the <span style={{ fontStyle: 'italic' }}>provisions</span>.
        </h1>
        <p style={{ fontSize: 16, color: RS_C.moss, marginTop: 20, maxWidth: 540 }}>
          228 items across glass, gear, and goods — refreshed weekly.
          Visit in person to see the full selection.
        </p>
      </section>

      {/* Filters */}
      <section style={{ padding: '32px 56px', borderTop: `1px solid rgba(22,32,28,0.1)`, borderBottom: `1px solid rgba(22,32,28,0.1)`, display: 'flex', gap: 12, alignItems: 'center', overflow: 'hidden' }}>
        <span style={{ ...rsStyles.mono, fontSize: 10, color: RS_C.stone, marginRight: 16 }}>Filter ◇</span>
        {cats.map((c, i) => (
          <button key={c.n} style={{
            padding: '10px 18px', borderRadius: 999, border: `1px solid ${RS_C.ink}`,
            background: i === 0 ? RS_C.ink : 'transparent', color: i === 0 ? RS_C.paper : RS_C.ink,
            ...rsStyles.mono, fontSize: 11, cursor: 'pointer',
          }}>
            {c.n} <span style={{ opacity: 0.6, marginLeft: 6 }}>{c.count}</span>
          </button>
        ))}
        <div style={{ flex: 1 }} />
        <span style={{ ...rsStyles.mono, fontSize: 10, color: RS_C.stone }}>Sort: New →</span>
      </section>

      {/* Product grid */}
      <section style={{ padding: '40px 56px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40, rowGap: 64 }}>
          {products.map((p, i) => (
            <div key={p.name}>
              <div style={{ position: 'relative' }}>
                <div style={{
                  aspectRatio: '4/5', borderRadius: 4, overflow: 'hidden',
                  background: `url(${p.img}) center/cover, ${RS_C.silt}`,
                }} />
                <div style={{
                  position: 'absolute', top: 16, left: 16,
                  ...rsStyles.mono, fontSize: 10, color: RS_C.paper,
                  background: 'rgba(22,32,28,0.6)', padding: '6px 10px', borderRadius: 999,
                }}>№ {String(i+1).padStart(3,'0')}</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 16 }}>
                <div>
                  <div style={{ ...rsStyles.mono, fontSize: 10, color: RS_C.stone }}>{p.brand}</div>
                  <div style={{ ...rsStyles.display, fontSize: 22, marginTop: 4, fontWeight: 500 }}>{p.name}</div>
                </div>
                <div style={{ ...rsStyles.display, fontSize: 22, fontStyle: 'italic' }}>{p.price}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ----- Page 3: VISIT -----
function RSVisit() {
  return (
    <div style={{ ...rsStyles.page }}>
      <RSNav active="visit" />
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 700 }}>
        <div style={{ padding: '80px 56px', background: RS_C.cream }}>
          <div style={{ ...rsStyles.mono, fontSize: 11, color: RS_C.stone, marginBottom: 16 }}>
            № 003 · Visit
          </div>
          <h1 style={{ ...rsStyles.display, fontSize: 88, margin: 0, fontWeight: 300, lineHeight: 0.95 }}>
            Find the <span style={{ fontStyle: 'italic' }}>source</span>.
          </h1>
          <div style={{ marginTop: 48, display: 'grid', gap: 32 }}>
            <div>
              <div style={{ ...rsStyles.mono, fontSize: 11, color: RS_C.moss }}>Address</div>
              <div style={{ ...rsStyles.display, fontSize: 28, marginTop: 6, fontWeight: 500 }}>
                4505 W Poplar Street<br/>Rogers, AR 72756
              </div>
              <div style={{ fontSize: 14, color: RS_C.moss, marginTop: 8 }}>
                Inside The Source Craft Cannabis dispensary — front doors, immediately on your right.
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
              <div>
                <div style={{ ...rsStyles.mono, fontSize: 11, color: RS_C.moss }}>Hours</div>
                <div style={{ marginTop: 8, fontSize: 15, lineHeight: 1.7 }}>
                  Mon–Fri · 9–8<br/>Saturday · 9–7<br/>Sunday · 10–6
                </div>
              </div>
              <div>
                <div style={{ ...rsStyles.mono, fontSize: 11, color: RS_C.moss }}>Reach us</div>
                <div style={{ marginTop: 8, fontSize: 15, lineHeight: 1.7 }}>
                  (479) 251-8581<br/>info@headwatersprovisions.com<br/>@headwaters_provisions
                </div>
              </div>
            </div>
            <div style={{ marginTop: 16, padding: '20px 24px', border: `1px solid ${RS_C.ink}`, borderRadius: 4, background: RS_C.paper }}>
              <div style={{ ...rsStyles.mono, fontSize: 10, color: RS_C.rust }}>◇ Worth knowing</div>
              <div style={{ marginTop: 8, fontSize: 14 }}>
                No medical marijuana card required to enter Headwaters. Walk
                right in — we're the shop in front of the dispensary.
              </div>
            </div>
          </div>
        </div>
        <div style={{
          background: `url(assets/photo-jeremy.avif) center/cover, ${RS_C.river}`,
          position: 'relative',
        }}>
          {/* map overlay */}
          <div style={{
            position: 'absolute', bottom: 32, left: 32, right: 32,
            background: RS_C.paper, borderRadius: 4, padding: 24, boxShadow: '0 24px 48px rgba(0,0,0,0.18)',
          }}>
            <div style={{ ...rsStyles.mono, fontSize: 10, color: RS_C.stone }}>Map · 36.30°N 94.16°W</div>
            <svg width="100%" height="180" style={{ marginTop: 12, borderRadius: 2 }}>
              <rect width="100%" height="100%" fill={RS_C.silt} />
              {[...Array(8)].map((_, i) => (
                <line key={i} x1="0" x2="100%" y1={i*24} y2={i*24} stroke={RS_C.stone} strokeOpacity="0.3" />
              ))}
              {[...Array(10)].map((_, i) => (
                <line key={i} y1="0" y2="180" x1={`${i*10}%`} x2={`${i*10}%`} stroke={RS_C.stone} strokeOpacity="0.3" />
              ))}
              <path d="M 0 90 Q 200 60, 380 110 T 700 80" stroke={RS_C.river} strokeWidth="3" fill="none" />
              <circle cx="450" cy="95" r="10" fill={RS_C.rust} />
              <circle cx="450" cy="95" r="20" fill="none" stroke={RS_C.rust} strokeOpacity="0.4" />
            </svg>
            <div style={{ marginTop: 12, display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ fontSize: 13, ...rsStyles.display, fontStyle: 'italic' }}>Headwaters · 4505 W Poplar</div>
              <a href="#" style={{ ...rsStyles.mono, fontSize: 10, color: RS_C.river }}>Directions →</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

window.RSHome = RSHome;
window.RSShop = RSShop;
window.RSVisit = RSVisit;
