/* ============================================================
   DIRECTION 3 — SMOKE SHOP '74
   Retro 70s revival. Brown/orange/cream/avocado. Chunky type.
   Type: Bowlby One SC / Fraunces / VT323
   ============================================================ */

const SS_C = {
  cream: '#F1E3C2',
  burnt: '#C44A1A',     // burnt orange
  rust: '#8C3214',
  mustard: '#D89B2A',
  avocado: '#6E7B2E',
  brown: '#3E2A14',
  ink: '#221408',
  pink: '#E8A78F',
};

const ssStyles = {
  page: {
    fontFamily: '"Fraunces", serif',
    color: SS_C.ink,
    background: SS_C.cream,
    width: 1440,
  },
  display: {
    fontFamily: '"Bowlby One SC", sans-serif',
    letterSpacing: '0.01em',
    lineHeight: 0.95,
  },
  serif: {
    fontFamily: '"Fraunces", serif',
    fontVariationSettings: '"opsz" 144, "SOFT" 100',
  },
  mono: {
    fontFamily: '"VT323", monospace',
    fontSize: 16,
    letterSpacing: '0.04em',
  },
};

function SSStripeBg({ colors = [SS_C.burnt, SS_C.mustard, SS_C.avocado, SS_C.pink], height = 12 }) {
  return (
    <div style={{ display: 'flex', height }}>
      {colors.map((c, i) => <div key={i} style={{ flex: 1, background: c }} />)}
    </div>
  );
}

function SSNav({ active = 'home' }) {
  const links = ['shop', 'brands', 'visit', 'journal', 'about'];
  return (
    <>
      <SSStripeBg />
      <nav style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '20px 40px', background: SS_C.brown, color: SS_C.cream,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{
            width: 56, height: 56, borderRadius: '50%',
            background: SS_C.burnt, border: `3px solid ${SS_C.cream}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            ...ssStyles.display, fontSize: 30, color: SS_C.cream,
          }}>H</div>
          <div>
            <div style={{ ...ssStyles.display, fontSize: 24, color: SS_C.cream }}>HEADWATERS</div>
            <div style={{ ...ssStyles.mono, fontSize: 14, color: SS_C.mustard, letterSpacing: '0.2em' }}>·· PROVISIONS ··</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 28 }}>
          {links.map(l => (
            <a key={l} href="#" style={{
              ...ssStyles.display, fontSize: 14, color: active === l ? SS_C.mustard : SS_C.cream,
              textDecoration: 'none', textTransform: 'uppercase',
            }}>{l}</a>
          ))}
        </div>
        <div style={{ ...ssStyles.mono, fontSize: 16, color: SS_C.mustard }}>
          ☎ (479) 251-8581
        </div>
      </nav>
    </>
  );
}

function SSHome() {
  return (
    <div style={{ ...ssStyles.page }}>
      <SSNav active="home" />
      {/* Hero */}
      <section style={{
        background: SS_C.burnt, color: SS_C.cream, padding: '60px 40px 80px',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* sun rays */}
        <svg style={{ position: 'absolute', top: -200, right: -200, opacity: 0.18 }} width="900" height="900" viewBox="0 0 200 200">
          <g fill={SS_C.cream}>
            {[...Array(24)].map((_, i) => (
              <rect key={i} x="98" y="0" width="4" height="200" transform={`rotate(${i*15} 100 100)`} />
            ))}
          </g>
        </svg>
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 48, alignItems: 'center' }}>
          <div>
            <div style={{
              display: 'inline-block', padding: '6px 14px', background: SS_C.mustard, color: SS_C.brown,
              ...ssStyles.display, fontSize: 14, borderRadius: 4, marginBottom: 24,
            }}>EST. 2024 · NWA · USA</div>
            <h1 style={{ ...ssStyles.display, fontSize: 168, margin: 0, color: SS_C.cream }}>
              WHERE'S<br/>YOUR
            </h1>
            <h1 style={{
              ...ssStyles.display, fontSize: 220, margin: '0 0 0 -6px',
              color: SS_C.mustard,
              WebkitTextStroke: `4px ${SS_C.cream}`,
              fontStyle: 'italic',
            }}>
              HEAD AT?
            </h1>
            <p style={{ ...ssStyles.serif, fontSize: 22, lineHeight: 1.45, marginTop: 20, maxWidth: 540, color: SS_C.cream, fontStyle: 'italic' }}>
              The smoke shop & gift counter you wish your hometown had.
              Cannabis accessories, apparel, and a whole mess of good gear —
              tucked inside The Source in Rogers, Arkansas.
            </p>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{
              border: `8px solid ${SS_C.cream}`,
              transform: 'rotate(3deg)',
              background: `url(assets/photo-3.avif) center/cover`,
              aspectRatio: '4/5',
              boxShadow: `12px 12px 0 ${SS_C.brown}`,
            }} />
            <div style={{
              position: 'absolute', bottom: -16, left: -16,
              background: SS_C.mustard, color: SS_C.brown,
              padding: '12px 20px', transform: 'rotate(-4deg)',
              ...ssStyles.display, fontSize: 16,
            }}>FRESH GOODS WEEKLY</div>
          </div>
        </div>
      </section>
      <SSStripeBg colors={[SS_C.brown, SS_C.burnt, SS_C.mustard, SS_C.avocado]} height={20} />

      {/* Brand grid - retro pegboard */}
      <section style={{ padding: '80px 40px', background: SS_C.cream }}>
        <h2 style={{ ...ssStyles.display, fontSize: 72, margin: '0 0 12px', color: SS_C.brown, textAlign: 'center' }}>
          THE BRANDS WE STOCK
        </h2>
        <p style={{ ...ssStyles.serif, fontSize: 18, fontStyle: 'italic', textAlign: 'center', marginBottom: 48, color: SS_C.rust }}>
          big names · local glass · everything in between
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, border: `4px solid ${SS_C.brown}` }}>
          {[
            { n: 'Puffco', c: SS_C.burnt },
            { n: 'RAW', c: SS_C.mustard },
            { n: 'Blazy Susans', c: SS_C.avocado },
            { n: 'Hippie Hounds', c: SS_C.pink },
            { n: 'Adam Driver', c: SS_C.mustard },
            { n: 'Revelry', c: SS_C.burnt },
            { n: 'Grav', c: SS_C.pink },
            { n: 'Storz & Bickel', c: SS_C.avocado },
          ].map((b, i) => (
            <div key={b.n} style={{
              background: b.c, padding: '40px 20px', textAlign: 'center',
              borderRight: i % 4 !== 3 ? `4px solid ${SS_C.brown}` : 'none',
              borderBottom: i < 4 ? `4px solid ${SS_C.brown}` : 'none',
            }}>
              <div style={{ ...ssStyles.display, fontSize: 24, color: SS_C.brown }}>{b.n}</div>
              <div style={{ ...ssStyles.mono, fontSize: 16, color: SS_C.brown, marginTop: 4 }}>★ ★ ★</div>
            </div>
          ))}
        </div>
      </section>

      {/* Manifesto */}
      <section style={{ background: SS_C.avocado, color: SS_C.cream, padding: '80px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, alignItems: 'center' }}>
          <div style={{
            aspectRatio: '1/1', borderRadius: '50%', background: SS_C.cream,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: `8px solid ${SS_C.mustard}`,
            position: 'relative',
          }}>
            <div style={{ ...ssStyles.display, fontSize: 36, color: SS_C.brown, textAlign: 'center', lineHeight: 1 }}>
              GOOD<br/>GEAR<br/>ONLY
            </div>
          </div>
          <div>
            <h2 style={{ ...ssStyles.display, fontSize: 72, margin: 0, color: SS_C.cream }}>
              SINCE WHEN<br/>DID A SMOKE SHOP<br/>HAVE TO LOOK<br/>
              <span style={{ color: SS_C.mustard }}>DEPRESSING?</span>
            </h2>
            <p style={{ ...ssStyles.serif, fontSize: 20, fontStyle: 'italic', marginTop: 24, maxWidth: 600, lineHeight: 1.5 }}>
              We grew up with the corner shop your mom told you not to walk into.
              Headwaters is the opposite. Bright counters, friendly faces, and
              the heady-est gear in Northwest Arkansas — all under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: SS_C.brown, color: SS_C.cream, padding: '48px 40px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48 }}>
          <div>
            <div style={{ ...ssStyles.display, fontSize: 56, color: SS_C.mustard }}>HEADWATERS</div>
            <div style={{ ...ssStyles.mono, fontSize: 16, color: SS_C.cream, letterSpacing: '0.2em' }}>·· PROVISIONS · NWA ··</div>
            <div style={{ ...ssStyles.serif, fontStyle: 'italic', marginTop: 12, color: SS_C.pink }}>"Where's your head at?"</div>
          </div>
          {[
            { h: 'VISIT', items: ['4505 W Poplar St','Rogers, AR 72756','Inside The Source'] },
            { h: 'HOURS', items: ['Mon–Fri 9–8','Sat 9–7','Sun 10–6'] },
            { h: 'CONTACT', items: ['(479) 251-8581','info@headwatersprovisions.com','@headwaters_provisions'] },
          ].map(c => (
            <div key={c.h}>
              <div style={{ ...ssStyles.display, fontSize: 16, color: SS_C.mustard, marginBottom: 12 }}>{c.h}</div>
              {c.items.map(i => <div key={i} style={{ ...ssStyles.mono, fontSize: 16, color: SS_C.cream, lineHeight: 1.5 }}>{i}</div>)}
            </div>
          ))}
        </div>
      </footer>
      <SSStripeBg />
    </div>
  );
}

function SSShop() {
  const products = [
    { name: 'PURSUIT POUCH', brand: 'Revelry', price: '$54', img: 'assets/photo-1.avif', c: SS_C.mustard },
    { name: 'BUBBLER №7', brand: 'Local Glass', price: '$220', img: 'assets/photo-3.avif', c: SS_C.avocado },
    { name: 'ROLL TRAY', brand: 'Adam Driver', price: '$48', img: 'assets/photo-2.avif', c: SS_C.burnt },
    { name: 'CLASSICS', brand: 'RAW', price: '$14', img: 'assets/photo-4.avif', c: SS_C.pink },
    { name: 'PLUS VAPE', brand: 'Puffco', price: '$420', img: 'assets/photo-5.avif', c: SS_C.avocado },
    { name: 'HOUSE TEE', brand: 'Headwaters', price: '$32', img: 'assets/photo-6.avif', c: SS_C.mustard },
  ];
  return (
    <div style={{ ...ssStyles.page }}>
      <SSNav active="shop" />
      <section style={{ padding: '60px 40px', background: SS_C.mustard, position: 'relative' }}>
        <h1 style={{ ...ssStyles.display, fontSize: 152, margin: 0, color: SS_C.brown, textAlign: 'center', lineHeight: 0.9 }}>
          THE SHOP
        </h1>
        <div style={{ ...ssStyles.serif, fontStyle: 'italic', fontSize: 22, textAlign: 'center', color: SS_C.brown, marginTop: 8 }}>
          ·· 228 items, refreshed weekly ··
        </div>
      </section>
      <SSStripeBg colors={[SS_C.brown, SS_C.burnt, SS_C.mustard, SS_C.avocado]} height={16} />
      <section style={{ padding: '32px 40px', background: SS_C.cream, display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', borderBottom: `4px solid ${SS_C.brown}` }}>
        {['ALL','GLASS','VAPES','CARRY','APPAREL','PAPERS','GIFTS'].map((c, i) => (
          <button key={c} style={{
            padding: '10px 20px', border: `3px solid ${SS_C.brown}`,
            background: i === 0 ? SS_C.brown : SS_C.cream,
            color: i === 0 ? SS_C.cream : SS_C.brown,
            ...ssStyles.display, fontSize: 14, cursor: 'pointer',
          }}>{c}</button>
        ))}
      </section>
      <section style={{ padding: '40px', background: SS_C.cream }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {products.map(p => (
            <div key={p.name} style={{ background: SS_C.cream, border: `4px solid ${SS_C.brown}` }}>
              <div style={{
                aspectRatio: '1/1', background: `${p.c} url(${p.img}) center/cover`,
                borderBottom: `4px solid ${SS_C.brown}`,
              }} />
              <div style={{ padding: '20px 20px 16px' }}>
                <div style={{ ...ssStyles.mono, fontSize: 16, color: SS_C.rust }}>{p.brand}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 6 }}>
                  <div style={{ ...ssStyles.display, fontSize: 22, color: SS_C.brown }}>{p.name}</div>
                  <div style={{ ...ssStyles.display, fontSize: 22, color: SS_C.burnt }}>{p.price}</div>
                </div>
              </div>
              <SSStripeBg colors={[SS_C.burnt, SS_C.mustard, SS_C.avocado]} height={8} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function SSVisit() {
  return (
    <div style={{ ...ssStyles.page }}>
      <SSNav active="visit" />
      <section style={{ padding: '64px 40px', background: SS_C.pink, position: 'relative' }}>
        <h1 style={{ ...ssStyles.display, fontSize: 144, margin: 0, color: SS_C.brown, textAlign: 'center', lineHeight: 0.9 }}>
          DROP IN.
        </h1>
        <div style={{ ...ssStyles.serif, fontStyle: 'italic', fontSize: 22, textAlign: 'center', color: SS_C.brown, marginTop: 8 }}>
          4505 W Poplar Street · Rogers, AR
        </div>
      </section>
      <SSStripeBg colors={[SS_C.brown, SS_C.burnt, SS_C.mustard, SS_C.avocado]} height={16} />
      <section style={{ padding: '64px 40px', background: SS_C.cream, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
        <div>
          <div style={{
            border: `8px solid ${SS_C.brown}`, padding: 32, background: SS_C.cream,
            position: 'relative',
          }}>
            <div style={{ ...ssStyles.display, fontSize: 36, color: SS_C.burnt, marginBottom: 20 }}>HOURS</div>
            <div style={{ ...ssStyles.mono, fontSize: 22, lineHeight: 1.8, color: SS_C.brown }}>
              MON — FRI · 9–8<br/>
              SATURDAY · 9–7<br/>
              SUNDAY · · 10–6
            </div>
            <div style={{ marginTop: 24, padding: '12px 16px', background: SS_C.avocado, color: SS_C.cream, ...ssStyles.display, fontSize: 14 }}>
              ★ NO MED CARD NEEDED ★
            </div>
          </div>
          <div style={{ marginTop: 32 }}>
            <div style={{ ...ssStyles.display, fontSize: 28, color: SS_C.brown, marginBottom: 12 }}>HOLLER AT US</div>
            <div style={{ ...ssStyles.mono, fontSize: 20, color: SS_C.brown, lineHeight: 1.6 }}>
              ☎ (479) 251-8581<br/>
              ✉ info@headwatersprovisions.com<br/>
              @ headwaters_provisions
            </div>
          </div>
        </div>
        <div>
          <div style={{
            border: `8px solid ${SS_C.brown}`,
            background: `url(assets/photo-jeremy.avif) center/cover`,
            aspectRatio: '4/5',
          }} />
          <div style={{ marginTop: 16, padding: 16, background: SS_C.mustard, ...ssStyles.serif, fontStyle: 'italic', fontSize: 18, color: SS_C.brown, textAlign: 'center' }}>
            ·· Inside The Source — front doors, immediate right ··
          </div>
        </div>
      </section>
    </div>
  );
}

window.SSHome = SSHome;
window.SSShop = SSShop;
window.SSVisit = SSVisit;
