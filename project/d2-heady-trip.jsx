/* ============================================================
   DIRECTION 2 — HEADY TRIP
   Psychedelic, swirling, counterculture. Big bold type.
   Palette: deep violet, electric lime, hot magenta, cream
   Type: Shrikhand / Bricolage / Space Grotesk
   ============================================================ */

const HT_C = {
  ink: '#1A0F2E',
  cream: '#F5E9D7',
  violet: '#3B1A6B',
  lime: '#C9F25C',
  magenta: '#FF4E9E',
  tangerine: '#FF8B3D',
  sky: '#76B5FF',
};

const htStyles = {
  page: {
    fontFamily: '"Space Grotesk", sans-serif',
    color: HT_C.ink,
    background: HT_C.cream,
    width: 1440,
  },
  display: {
    fontFamily: '"Shrikhand", serif',
    letterSpacing: '-0.01em',
  },
  alt: {
    fontFamily: '"Bricolage Grotesque", sans-serif',
    fontWeight: 800,
    letterSpacing: '-0.03em',
  },
  mono: {
    fontFamily: '"IBM Plex Mono", monospace',
    fontSize: 11,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
  },
};

function HTNav({ active = 'home' }) {
  const links = ['shop', 'brands', 'visit', 'journal', 'about'];
  return (
    <nav style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '20px 40px', background: HT_C.violet, color: HT_C.cream,
      borderBottom: `2px solid ${HT_C.ink}`,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{
          width: 44, height: 44, borderRadius: '50%', background: HT_C.lime,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: HT_C.violet, ...htStyles.display, fontSize: 24,
        }}>h</div>
        <div style={{ ...htStyles.display, fontSize: 26, color: HT_C.cream }}>headwaters</div>
      </div>
      <div style={{ display: 'flex', gap: 4, background: HT_C.ink, padding: 4, borderRadius: 999 }}>
        {links.map(l => (
          <a key={l} href="#" style={{
            padding: '8px 16px', borderRadius: 999,
            background: active === l ? HT_C.lime : 'transparent',
            color: active === l ? HT_C.ink : HT_C.cream,
            ...htStyles.mono, fontSize: 11, textDecoration: 'none',
          }}>{l}</a>
        ))}
      </div>
      <button style={{
        padding: '12px 22px', background: HT_C.magenta, color: HT_C.ink,
        border: `2px solid ${HT_C.ink}`, borderRadius: 999, ...htStyles.mono,
        boxShadow: `4px 4px 0 ${HT_C.ink}`, cursor: 'pointer',
      }}>Visit ✦ Open</button>
    </nav>
  );
}

function Spiral({ size = 200, color = HT_C.ink }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200">
      <g fill="none" stroke={color} strokeWidth="2">
        {[...Array(28)].map((_, i) => (
          <circle key={i} cx="100" cy="100" r={4 + i*3.4} strokeDasharray={`${20+i*2} ${10+i}`} />
        ))}
      </g>
    </svg>
  );
}

function HTHome() {
  return (
    <div style={{ ...htStyles.page }}>
      <HTNav active="home" />
      {/* Hero */}
      <section style={{
        background: HT_C.cream, position: 'relative', overflow: 'hidden',
        padding: '60px 40px 80px', minHeight: 720,
      }}>
        {/* swirly bg */}
        <div style={{ position: 'absolute', top: -120, right: -120, opacity: 0.5 }}>
          <Spiral size={520} color={HT_C.magenta} />
        </div>
        <div style={{ position: 'absolute', bottom: -80, left: -80, opacity: 0.35 }}>
          <Spiral size={360} color={HT_C.violet} />
        </div>
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', paddingTop: 40 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '8px 16px', border: `2px solid ${HT_C.ink}`, borderRadius: 999,
            background: HT_C.lime, ...htStyles.mono, fontSize: 11,
          }}>
            ✦ Northwest Arkansas · est. 2024 ✦
          </div>
          <h1 style={{
            ...htStyles.display, fontSize: 220, lineHeight: 0.85, margin: '32px 0 0',
            color: HT_C.ink,
          }}>
            <span style={{ display: 'block' }}>where's your</span>
            <span style={{
              display: 'block',
              background: `linear-gradient(90deg, ${HT_C.magenta}, ${HT_C.tangerine}, ${HT_C.lime})`,
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              fontStyle: 'italic',
            }}>
              head at?
            </span>
          </h1>
          <p style={{
            marginTop: 28, fontSize: 20, maxWidth: 620, lineHeight: 1.5,
            ...htStyles.alt, fontWeight: 500,
          }}>
            The heady-est shop in NWA. Cannabis accessories, apparel & gifts —
            tucked inside The Source in Rogers, Arkansas.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 36 }}>
            <button style={{
              padding: '18px 32px', background: HT_C.ink, color: HT_C.lime,
              border: `2px solid ${HT_C.ink}`, borderRadius: 999, ...htStyles.alt, fontSize: 16,
              boxShadow: `6px 6px 0 ${HT_C.magenta}`, cursor: 'pointer',
            }}>Browse the trip →</button>
            <button style={{
              padding: '18px 32px', background: HT_C.cream, color: HT_C.ink,
              border: `2px solid ${HT_C.ink}`, borderRadius: 999, ...htStyles.alt, fontSize: 16,
              boxShadow: `6px 6px 0 ${HT_C.lime}`, cursor: 'pointer',
            }}>Plan your visit</button>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section style={{
        background: HT_C.ink, color: HT_C.lime, padding: '20px 0',
        borderTop: `2px solid ${HT_C.ink}`, borderBottom: `2px solid ${HT_C.ink}`,
        overflow: 'hidden', whiteSpace: 'nowrap',
      }}>
        <div style={{ ...htStyles.display, fontSize: 32, display: 'flex', gap: 40 }}>
          {[...Array(8)].map((_, i) => (
            <span key={i}>where's your head at? ✦ headwaters provisions ✦</span>
          ))}
        </div>
      </section>

      {/* Brands */}
      <section style={{ padding: '80px 40px', background: HT_C.cream }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 40 }}>
          <h2 style={{ ...htStyles.alt, fontSize: 56, margin: 0 }}>The line-up.</h2>
          <span style={{ ...htStyles.mono, fontSize: 12 }}>24 brands · all in</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {[
            { n: 'Puffco', c: HT_C.magenta },
            { n: 'RAW', c: HT_C.lime },
            { n: 'Blazy Susans', c: HT_C.tangerine },
            { n: 'Hippie Hounds', c: HT_C.sky },
            { n: 'Adam Driver', c: HT_C.lime },
            { n: 'Revelry', c: HT_C.magenta },
            { n: 'Storz & Bickel', c: HT_C.sky },
            { n: 'Grav Labs', c: HT_C.tangerine },
          ].map((b, i) => (
            <div key={b.n} style={{
              padding: '40px 24px', background: b.c, border: `2px solid ${HT_C.ink}`,
              borderRadius: 24, position: 'relative', overflow: 'hidden',
              boxShadow: `4px 4px 0 ${HT_C.ink}`,
            }}>
              <div style={{ ...htStyles.display, fontSize: 28, color: HT_C.ink }}>{b.n}</div>
              <div style={{ ...htStyles.mono, fontSize: 10, color: HT_C.ink, marginTop: 4, opacity: 0.7 }}>
                ✦ stocked daily
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured / story strip */}
      <section style={{ background: HT_C.violet, color: HT_C.cream, padding: '80px 40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 40, right: 40 }}><Spiral size={240} color={HT_C.magenta} /></div>
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <div style={{ ...htStyles.mono, fontSize: 11, color: HT_C.lime, marginBottom: 20 }}>✦ HEADY OF THE WEEK</div>
            <h2 style={{ ...htStyles.display, fontSize: 96, lineHeight: 0.95, margin: 0, color: HT_C.cream }}>
              one-of-one <span style={{ color: HT_C.lime }}>glass</span>
            </h2>
            <p style={{ marginTop: 20, fontSize: 18, lineHeight: 1.5, maxWidth: 480, color: 'rgba(245,233,215,0.85)' }}>
              Local NWA blowers drop new heady pieces every Friday. We keep
              one of one — when it's gone, it's gone.
            </p>
            <button style={{
              marginTop: 28, padding: '16px 28px', background: HT_C.lime, color: HT_C.ink,
              border: `2px solid ${HT_C.ink}`, borderRadius: 999, ...htStyles.alt, fontSize: 14,
              cursor: 'pointer',
            }}>See this week's drop →</button>
          </div>
          <div style={{
            aspectRatio: '1/1', borderRadius: 24, overflow: 'hidden',
            border: `2px solid ${HT_C.ink}`,
            background: `url(assets/photo-3.avif) center/cover`,
            boxShadow: `12px 12px 0 ${HT_C.lime}`,
          }} />
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: HT_C.cream, color: HT_C.ink, padding: '48px 40px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 48 }}>
          <div style={{ flex: 1 }}>
            <div style={{ ...htStyles.display, fontSize: 64 }}>headwaters</div>
            <div style={{ ...htStyles.mono, fontSize: 11, marginTop: 8 }}>provisions · NWA</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: 48 }}>
            <div>
              <div style={{ ...htStyles.mono, fontSize: 11, marginBottom: 8, color: HT_C.magenta }}>visit</div>
              <div style={{ fontSize: 13, lineHeight: 1.7 }}>
                4505 W Poplar St<br/>Rogers, AR 72756
              </div>
            </div>
            <div>
              <div style={{ ...htStyles.mono, fontSize: 11, marginBottom: 8, color: HT_C.magenta }}>hours</div>
              <div style={{ fontSize: 13, lineHeight: 1.7 }}>
                Mon–Fri 9–8<br/>Sat 9–7 · Sun 10–6
              </div>
            </div>
            <div>
              <div style={{ ...htStyles.mono, fontSize: 11, marginBottom: 8, color: HT_C.magenta }}>holler</div>
              <div style={{ fontSize: 13, lineHeight: 1.7 }}>
                (479) 251-8581<br/>@headwaters_provisions
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 32, paddingTop: 16, borderTop: `2px solid ${HT_C.ink}`, ...htStyles.mono, fontSize: 10, display: 'flex', justifyContent: 'space-between' }}>
          <span>© 2026 Headwaters Provisions ✦ stay heady</span>
          <span>where's your head at?</span>
        </div>
      </footer>
    </div>
  );
}

function HTShop() {
  const products = [
    { name: 'Plus Vape', brand: 'Puffco', price: '$420', img: 'assets/photo-5.avif', c: HT_C.magenta },
    { name: 'Heady Bubbler', brand: 'Local Glass', price: '$220', img: 'assets/photo-3.avif', c: HT_C.lime },
    { name: 'Pursuit Pouch', brand: 'Revelry', price: '$54', img: 'assets/photo-1.avif', c: HT_C.tangerine },
    { name: 'Roll Tray', brand: 'Adam Driver', price: '$48', img: 'assets/photo-2.avif', c: HT_C.sky },
    { name: 'Classic Papers', brand: 'RAW', price: '$14', img: 'assets/photo-4.avif', c: HT_C.lime },
    { name: 'Headwaters Tee', brand: 'House', price: '$32', img: 'assets/photo-6.avif', c: HT_C.magenta },
  ];
  return (
    <div style={{ ...htStyles.page }}>
      <HTNav active="shop" />
      <section style={{ padding: '60px 40px 32px', background: HT_C.lime, borderBottom: `2px solid ${HT_C.ink}`, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -60, top: -60, opacity: 0.5 }}><Spiral size={360} color={HT_C.violet} /></div>
        <div style={{ position: 'relative' }}>
          <div style={{ ...htStyles.mono, fontSize: 11 }}>✦ THE SHOP ✦ 228 ITEMS ✦ REFRESHED WEEKLY</div>
          <h1 style={{ ...htStyles.display, fontSize: 152, margin: '12px 0 0', lineHeight: 0.9 }}>
            stock the <span style={{ color: HT_C.magenta }}>vibe.</span>
          </h1>
        </div>
      </section>
      {/* Filter pills */}
      <section style={{ padding: '24px 40px', background: HT_C.cream, borderBottom: `2px solid ${HT_C.ink}`, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        {['All', 'Glass', 'Vapes', 'Carry', 'Apparel', 'Papers', 'Gifts'].map((c, i) => (
          <button key={c} style={{
            padding: '10px 20px', borderRadius: 999, border: `2px solid ${HT_C.ink}`,
            background: i === 0 ? HT_C.ink : HT_C.cream, color: i === 0 ? HT_C.lime : HT_C.ink,
            ...htStyles.mono, fontSize: 11, cursor: 'pointer',
          }}>{c}</button>
        ))}
      </section>
      <section style={{ padding: '40px', background: HT_C.cream }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {products.map((p, i) => (
            <div key={p.name} style={{
              background: HT_C.cream, border: `2px solid ${HT_C.ink}`, borderRadius: 24,
              overflow: 'hidden', boxShadow: `6px 6px 0 ${p.c}`,
            }}>
              <div style={{
                aspectRatio: '4/3', background: `${p.c} url(${p.img}) center/cover`,
                borderBottom: `2px solid ${HT_C.ink}`,
              }} />
              <div style={{ padding: '20px 24px' }}>
                <div style={{ ...htStyles.mono, fontSize: 10 }}>{p.brand}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 6 }}>
                  <div style={{ ...htStyles.alt, fontSize: 22 }}>{p.name}</div>
                  <div style={{ ...htStyles.display, fontSize: 22 }}>{p.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function HTVisit() {
  return (
    <div style={{ ...htStyles.page, background: HT_C.violet }}>
      <HTNav active="visit" />
      <section style={{ padding: '80px 40px', position: 'relative', overflow: 'hidden', minHeight: 720 }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.2 }}>
          <Spiral size={900} color={HT_C.lime} />
        </div>
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          <div style={{ color: HT_C.cream }}>
            <div style={{ ...htStyles.mono, fontSize: 11, color: HT_C.lime }}>✦ FIND US</div>
            <h1 style={{ ...htStyles.display, fontSize: 120, margin: '12px 0 0', lineHeight: 0.9, color: HT_C.cream }}>
              Drop <span style={{ color: HT_C.magenta }}>in</span>.
            </h1>
            <div style={{ marginTop: 40, display: 'grid', gap: 24 }}>
              <div style={{ background: HT_C.cream, color: HT_C.ink, padding: 24, borderRadius: 24, border: `2px solid ${HT_C.ink}`, boxShadow: `6px 6px 0 ${HT_C.lime}` }}>
                <div style={{ ...htStyles.mono, fontSize: 11, color: HT_C.magenta }}>address</div>
                <div style={{ ...htStyles.alt, fontSize: 28, marginTop: 6 }}>4505 W Poplar Street<br/>Rogers, AR 72756</div>
                <div style={{ fontSize: 14, marginTop: 8 }}>Inside The Source — front doors, immediate right.</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div style={{ background: HT_C.lime, color: HT_C.ink, padding: 20, borderRadius: 24, border: `2px solid ${HT_C.ink}` }}>
                  <div style={{ ...htStyles.mono, fontSize: 10 }}>HOURS</div>
                  <div style={{ marginTop: 8, fontSize: 13, lineHeight: 1.6, ...htStyles.alt }}>
                    Mon–Fri 9–8<br/>Sat 9–7<br/>Sun 10–6
                  </div>
                </div>
                <div style={{ background: HT_C.magenta, color: HT_C.ink, padding: 20, borderRadius: 24, border: `2px solid ${HT_C.ink}` }}>
                  <div style={{ ...htStyles.mono, fontSize: 10 }}>HOLLER</div>
                  <div style={{ marginTop: 8, fontSize: 13, lineHeight: 1.6, ...htStyles.alt }}>
                    (479) 251-8581<br/>@headwaters_provisions
                  </div>
                </div>
              </div>
              <div style={{ background: HT_C.tangerine, color: HT_C.ink, padding: 20, borderRadius: 24, border: `2px solid ${HT_C.ink}`, ...htStyles.alt, fontSize: 16 }}>
                ✦ no medical card needed — walk right in.
              </div>
            </div>
          </div>
          <div style={{
            aspectRatio: '4/5', borderRadius: 24, overflow: 'hidden',
            border: `2px solid ${HT_C.ink}`,
            background: `url(assets/photo-jeremy.avif) center/cover`,
            boxShadow: `12px 12px 0 ${HT_C.lime}`,
            alignSelf: 'start',
          }} />
        </div>
      </section>
    </div>
  );
}

window.HTHome = HTHome;
window.HTShop = HTShop;
window.HTVisit = HTVisit;
