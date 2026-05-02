/* ============================================================
   DIRECTION 4 — NWA LOCAL ZINE
   Playful, irreverent, Ozarks-zine. Cut-paper, hand-drawn vibe.
   Palette: lo-fi newsprint, red-bleed, true-blue, kraft brown.
   Type: Archivo Black + Caveat + Special Elite
   ============================================================ */

const NL_C = {
  paper: '#EFE9DA',
  ink: '#1A1410',
  red: '#D32E1F',
  blue: '#1F4FCC',
  yellow: '#F2C744',
  kraft: '#A36F3D',
  green: '#2E7D4F',
};

const nlStyles = {
  page: {
    fontFamily: '"Special Elite", monospace',
    color: NL_C.ink,
    background: NL_C.paper,
    width: 1440,
  },
  display: {
    fontFamily: '"Archivo Black", sans-serif',
    letterSpacing: '-0.01em',
    lineHeight: 0.92,
  },
  hand: {
    fontFamily: '"Caveat", cursive',
    fontWeight: 700,
    lineHeight: 1.1,
  },
  body: {
    fontFamily: '"Special Elite", monospace',
  },
};

function NLPaperBg() {
  return (
    <svg style={{ position: 'absolute', inset: 0, opacity: 0.08, pointerEvents: 'none' }} width="100%" height="100%">
      <filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.9" /></filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
  );
}

function NLNav({ active = 'home' }) {
  const links = ['shop', 'brands', 'visit', 'journal', 'about'];
  return (
    <nav style={{
      padding: '16px 32px', background: NL_C.ink, color: NL_C.paper,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      borderBottom: `4px solid ${NL_C.red}`,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 40, height: 40, background: NL_C.red, border: `2px solid ${NL_C.paper}`,
          transform: 'rotate(-4deg)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          ...nlStyles.display, fontSize: 22, color: NL_C.paper,
        }}>H</div>
        <div>
          <div style={{ ...nlStyles.display, fontSize: 22 }}>HEADWATERS</div>
          <div style={{ ...nlStyles.body, fontSize: 11, color: NL_C.yellow, letterSpacing: '0.18em' }}>
            ROGERS · NWA · SINCE '24
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 4 }}>
        {links.map(l => (
          <a key={l} href="#" style={{
            padding: '8px 14px', textDecoration: 'none',
            background: active === l ? NL_C.yellow : 'transparent',
            color: active === l ? NL_C.ink : NL_C.paper,
            ...nlStyles.display, fontSize: 12, textTransform: 'uppercase',
            border: active === l ? `2px solid ${NL_C.paper}` : '2px solid transparent',
          }}>{l}</a>
        ))}
      </div>
      <div style={{ ...nlStyles.body, fontSize: 12, color: NL_C.paper }}>
        ISSUE №007 · MAY '26
      </div>
    </nav>
  );
}

function NLHome() {
  return (
    <div style={{ ...nlStyles.page, position: 'relative' }}>
      <NLNav active="home" />
      {/* Newspaper masthead hero */}
      <section style={{ background: NL_C.paper, padding: '32px 40px 0', position: 'relative' }}>
        <NLPaperBg />
        <div style={{ position: 'relative', borderTop: `4px double ${NL_C.ink}`, borderBottom: `4px double ${NL_C.ink}`, padding: '12px 0', display: 'flex', justifyContent: 'space-between', ...nlStyles.body, fontSize: 12 }}>
          <span>VOL. III · ISSUE 7</span>
          <span>·· THE OFFICIAL HEADWATERS DISPATCH ··</span>
          <span>FREE · TAKE ONE</span>
        </div>
        <h1 style={{
          ...nlStyles.display, fontSize: 200, margin: '20px 0 0',
          textAlign: 'center', textTransform: 'uppercase', lineHeight: 0.85,
        }}>
          WHERE'S YOUR<br/>
          <span style={{ display: 'inline-block', position: 'relative' }}>
            <span style={{ position: 'relative', zIndex: 2 }}>HEAD AT?</span>
            <span style={{
              position: 'absolute', inset: 0, color: NL_C.red,
              transform: 'translate(8px, 6px)', zIndex: 1,
            }}>HEAD AT?</span>
          </span>
        </h1>
        <div style={{
          textAlign: 'center', marginTop: 16, ...nlStyles.hand, fontSize: 38,
          color: NL_C.blue, transform: 'rotate(-1.5deg)',
        }}>
          ~ a small heady shop in the heart of the Ozarks ~
        </div>
        {/* Hero photo + sticker collage */}
        <div style={{ position: 'relative', marginTop: 40, marginBottom: 40 }}>
          <div style={{
            width: '100%', aspectRatio: '16/7',
            background: `url(assets/photo-3.avif) center/cover`,
            border: `4px solid ${NL_C.ink}`,
            filter: 'contrast(1.05) saturate(0.9)',
          }} />
          {/* taped corner stickers */}
          <div style={{
            position: 'absolute', top: -16, left: 60,
            background: NL_C.yellow, color: NL_C.ink,
            padding: '8px 16px', transform: 'rotate(-3deg)',
            ...nlStyles.display, fontSize: 16,
            border: `2px solid ${NL_C.ink}`,
          }}>★ HEADY DROPS WEEKLY ★</div>
          <div style={{
            position: 'absolute', bottom: -16, right: 80,
            background: NL_C.red, color: NL_C.paper,
            padding: '10px 18px', transform: 'rotate(4deg)',
            ...nlStyles.display, fontSize: 18,
            border: `2px solid ${NL_C.ink}`,
          }}>NO CARD NEEDED!</div>
          <div style={{
            position: 'absolute', top: 24, right: 24,
            background: NL_C.blue, color: NL_C.paper,
            padding: '12px 16px', transform: 'rotate(2deg)',
            ...nlStyles.hand, fontSize: 24,
            border: `2px solid ${NL_C.paper}`,
          }}>open daily!</div>
        </div>
      </section>

      {/* 3-column lede */}
      <section style={{ padding: '0 40px 64px', background: NL_C.paper, position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32, borderTop: `2px solid ${NL_C.ink}`, paddingTop: 24 }}>
          <div>
            <div style={{ ...nlStyles.display, fontSize: 36, marginBottom: 12 }}>WHAT IS THIS PLACE?</div>
            <p style={{ ...nlStyles.body, fontSize: 14, lineHeight: 1.7 }}>
              <span style={{ ...nlStyles.display, fontSize: 48, float: 'left', lineHeight: 0.9, marginRight: 8, color: NL_C.red }}>H</span>
              eadwaters Provisions is a smoke shop and gift counter inside The
              Source Craft Cannabis in Rogers, Arkansas. Big-name brands, local
              glass, apparel, and a whole lot of "no way they sell that here."
            </p>
          </div>
          <div>
            <div style={{ ...nlStyles.display, fontSize: 36, marginBottom: 12, color: NL_C.blue }}>WHO RUNS IT?</div>
            <p style={{ ...nlStyles.body, fontSize: 14, lineHeight: 1.7 }}>
              <span style={{ ...nlStyles.display, fontSize: 48, float: 'left', lineHeight: 0.9, marginRight: 8 }}>L</span>
              ocals, born and raised in NWA. We curate the shelves like our
              older cousin used to curate the back of his '94 Bronco — with
              taste, conviction, and one weird find per visit.
            </p>
          </div>
          <div>
            <div style={{ ...nlStyles.display, fontSize: 36, marginBottom: 12, color: NL_C.green }}>WHY "HEADWATERS"?</div>
            <p style={{ ...nlStyles.body, fontSize: 14, lineHeight: 1.7 }}>
              <span style={{ ...nlStyles.display, fontSize: 48, float: 'left', lineHeight: 0.9, marginRight: 8, color: NL_C.kraft }}>T</span>
              he source of a river. Also the source of a good time. Also: the
              shop is literally inside The Source. Three for three. We don't
              make the rules — we just stocked the shelves.
            </p>
          </div>
        </div>
      </section>

      {/* Brand strip - "the lineup" */}
      <section style={{ background: NL_C.ink, color: NL_C.paper, padding: '40px' }}>
        <div style={{ ...nlStyles.display, fontSize: 32, color: NL_C.yellow, marginBottom: 20, textAlign: 'center' }}>
          ※ THE LINEUP · 24 BRANDS DEEP ※
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
          {['Puffco','RAW','Blazy Susans','Hippie Hounds','Adam Driver','Revelry','Storz & Bickel','Grav','Marley','PAX','RYOT','Higher Standards'].map((b, i) => (
            <div key={b} style={{
              padding: '10px 16px', background: [NL_C.red, NL_C.blue, NL_C.yellow, NL_C.green, NL_C.kraft][i%5],
              color: i % 5 === 2 ? NL_C.ink : NL_C.paper,
              ...nlStyles.display, fontSize: 14,
              transform: `rotate(${(i%2===0?-1:1)*(1+i%3)}deg)`,
              border: `2px solid ${NL_C.paper}`,
            }}>{b.toUpperCase()}</div>
          ))}
        </div>
      </section>

      {/* Classifieds-style picks */}
      <section style={{ padding: '64px 40px', background: NL_C.paper }}>
        <div style={{ ...nlStyles.display, fontSize: 56, marginBottom: 32, textAlign: 'center' }}>
          ── CLASSIFIEDS ──
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {[
            { hd: 'WANTED:', t: 'A SMELL-PROOF CARRY THAT DOESNT LOOK LIKE A GYM BAG', sub: 'Revelry · $54', img: 'assets/photo-1.avif', c: NL_C.yellow },
            { hd: 'FOR SALE:', t: 'HEADY GLASS BUBBLER №7. ONE OF ONE.', sub: 'Local NWA · $220', img: 'assets/photo-3.avif', c: NL_C.red },
            { hd: 'NEW:', t: 'HOUSE TEE — CREAM ON CREAM, NICE CRUNCHY HEM', sub: 'Headwaters · $32', img: 'assets/photo-6.avif', c: NL_C.blue },
          ].map((p, i) => (
            <div key={p.t} style={{
              border: `3px solid ${NL_C.ink}`, background: NL_C.paper,
              transform: `rotate(${(i-1)*0.6}deg)`,
            }}>
              <div style={{ background: p.c, color: i === 2 ? NL_C.paper : NL_C.ink, padding: '8px 12px', ...nlStyles.display, fontSize: 14, borderBottom: `3px solid ${NL_C.ink}` }}>
                {p.hd}
              </div>
              <div style={{
                aspectRatio: '4/3', background: `url(${p.img}) center/cover`,
                borderBottom: `3px solid ${NL_C.ink}`,
              }} />
              <div style={{ padding: 16 }}>
                <div style={{ ...nlStyles.display, fontSize: 20, lineHeight: 1.1 }}>{p.t}</div>
                <div style={{ ...nlStyles.body, fontSize: 13, marginTop: 8 }}>{p.sub}</div>
                <div style={{ marginTop: 12, ...nlStyles.hand, fontSize: 22, color: NL_C.red }}>
                  → come grab it ←
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: NL_C.ink, color: NL_C.paper, padding: '40px', borderTop: `4px solid ${NL_C.red}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40 }}>
          <div>
            <div style={{ ...nlStyles.display, fontSize: 48, color: NL_C.yellow }}>HEADWATERS</div>
            <div style={{ ...nlStyles.body, fontSize: 12, color: NL_C.paper, marginTop: 4 }}>
              "where's your head at?" · a NWA original
            </div>
            <div style={{ ...nlStyles.hand, fontSize: 28, color: NL_C.red, marginTop: 16, transform: 'rotate(-1deg)' }}>
              come hang out!
            </div>
          </div>
          {[
            { h: 'VISIT', items: ['4505 W Poplar St','Rogers, AR 72756','inside The Source'] },
            { h: 'HOURS', items: ['M–F · 9–8','Sat · 9–7','Sun · 10–6'] },
            { h: 'HOLLER', items: ['(479) 251-8581','info@headwatersprovisions.com','@headwaters_provisions'] },
          ].map(c => (
            <div key={c.h}>
              <div style={{ ...nlStyles.display, fontSize: 16, color: NL_C.yellow, marginBottom: 10 }}>{c.h}</div>
              {c.items.map(i => <div key={i} style={{ ...nlStyles.body, fontSize: 12, lineHeight: 1.7 }}>{i}</div>)}
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}

function NLShop() {
  const products = [
    { name: 'Pursuit Pouch', brand: 'Revelry', price: '$54', img: 'assets/photo-1.avif', tag: 'CARRY' },
    { name: 'Bubbler №7', brand: 'Local Glass', price: '$220', img: 'assets/photo-3.avif', tag: 'HEADY' },
    { name: 'Roll Tray', brand: 'Adam Driver', price: '$48', img: 'assets/photo-2.avif', tag: 'GEAR' },
    { name: 'Classics', brand: 'RAW', price: '$14', img: 'assets/photo-4.avif', tag: 'PAPERS' },
    { name: 'Plus Vape', brand: 'Puffco', price: '$420', img: 'assets/photo-5.avif', tag: 'TECH' },
    { name: 'House Tee', brand: 'Headwaters', price: '$32', img: 'assets/photo-6.avif', tag: 'WEARS' },
  ];
  return (
    <div style={{ ...nlStyles.page }}>
      <NLNav active="shop" />
      <section style={{ padding: '40px', background: NL_C.yellow, borderBottom: `4px solid ${NL_C.ink}`, position: 'relative' }}>
        <div style={{ ...nlStyles.body, fontSize: 14 }}>※ SECTION B · THE SHOP ※</div>
        <h1 style={{ ...nlStyles.display, fontSize: 144, margin: 0, lineHeight: 0.9 }}>
          GOODS, GEAR &<br/>OTHER GOOD<br/>STUFF.
        </h1>
        <div style={{ ...nlStyles.hand, fontSize: 32, color: NL_C.red, marginTop: 12, transform: 'rotate(-1deg)' }}>
          228 items! refreshed every Friday
        </div>
      </section>
      <section style={{ padding: '24px 40px', background: NL_C.paper, borderBottom: `2px dashed ${NL_C.ink}`, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {['ALL','HEADY','CARRY','GEAR','PAPERS','TECH','WEARS'].map((c, i) => (
          <button key={c} style={{
            padding: '8px 16px', border: `2px solid ${NL_C.ink}`,
            background: i === 0 ? NL_C.ink : NL_C.paper,
            color: i === 0 ? NL_C.paper : NL_C.ink,
            ...nlStyles.display, fontSize: 12, cursor: 'pointer',
          }}>{c}</button>
        ))}
      </section>
      <section style={{ padding: '40px', background: NL_C.paper }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
          {products.map((p, i) => (
            <div key={p.name} style={{
              border: `3px solid ${NL_C.ink}`, background: NL_C.paper,
              transform: `rotate(${[-0.5, 0.4, -0.3, 0.5, -0.2, 0.3][i]}deg)`,
              boxShadow: `6px 6px 0 ${NL_C.ink}`,
            }}>
              <div style={{
                aspectRatio: '4/3', background: `url(${p.img}) center/cover`,
                borderBottom: `3px solid ${NL_C.ink}`, position: 'relative',
              }}>
                <div style={{
                  position: 'absolute', top: 12, left: 12,
                  background: NL_C.red, color: NL_C.paper,
                  padding: '4px 10px', ...nlStyles.display, fontSize: 12,
                }}>{p.tag}</div>
              </div>
              <div style={{ padding: 16 }}>
                <div style={{ ...nlStyles.body, fontSize: 12 }}>{p.brand}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 4 }}>
                  <div style={{ ...nlStyles.display, fontSize: 22 }}>{p.name}</div>
                  <div style={{ ...nlStyles.hand, fontSize: 28, color: NL_C.red }}>{p.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function NLVisit() {
  return (
    <div style={{ ...nlStyles.page }}>
      <NLNav active="visit" />
      <section style={{ padding: '40px', background: NL_C.red, color: NL_C.paper, borderBottom: `4px solid ${NL_C.ink}` }}>
        <div style={{ ...nlStyles.body, fontSize: 14 }}>※ SECTION C · COME ON IN ※</div>
        <h1 style={{ ...nlStyles.display, fontSize: 168, margin: 0, lineHeight: 0.88 }}>
          THE PLACE.<br/>THE TIMES.
        </h1>
      </section>
      <section style={{ padding: '48px 40px', background: NL_C.paper, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
        <div>
          <div style={{
            border: `3px solid ${NL_C.ink}`, padding: 24, background: NL_C.paper,
            boxShadow: `8px 8px 0 ${NL_C.ink}`, transform: 'rotate(-0.6deg)',
          }}>
            <div style={{ ...nlStyles.display, fontSize: 36, color: NL_C.red, marginBottom: 12 }}>ADDRESS</div>
            <div style={{ ...nlStyles.display, fontSize: 28, lineHeight: 1.1 }}>
              4505 W POPLAR ST<br/>ROGERS, AR 72756
            </div>
            <div style={{ ...nlStyles.body, fontSize: 13, marginTop: 16 }}>
              Inside The Source Craft Cannabis. Walk through the front doors, look right. We're the ones with all the stickers.
            </div>
            <div style={{ ...nlStyles.hand, fontSize: 28, color: NL_C.blue, marginTop: 16, transform: 'rotate(-1deg)' }}>
              you can't miss us.
            </div>
          </div>
          <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div style={{ border: `3px solid ${NL_C.ink}`, padding: 16, background: NL_C.yellow, transform: 'rotate(0.8deg)' }}>
              <div style={{ ...nlStyles.display, fontSize: 18 }}>HOURS</div>
              <div style={{ ...nlStyles.body, fontSize: 13, lineHeight: 1.7, marginTop: 8 }}>
                M–F · 9 to 8<br/>Sat · 9 to 7<br/>Sun · 10 to 6
              </div>
            </div>
            <div style={{ border: `3px solid ${NL_C.ink}`, padding: 16, background: NL_C.green, color: NL_C.paper, transform: 'rotate(-0.8deg)' }}>
              <div style={{ ...nlStyles.display, fontSize: 18 }}>HOLLER</div>
              <div style={{ ...nlStyles.body, fontSize: 13, lineHeight: 1.7, marginTop: 8 }}>
                (479) 251-8581<br/>info@<br/>headwatersprovisions.com
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{
            border: `4px solid ${NL_C.ink}`,
            background: `url(assets/photo-jeremy.avif) center/cover`,
            aspectRatio: '4/5',
            transform: 'rotate(1.2deg)',
            boxShadow: `10px 10px 0 ${NL_C.red}`,
          }} />
          <div style={{
            position: 'absolute', bottom: -16, left: 16,
            background: NL_C.paper, border: `3px solid ${NL_C.ink}`,
            padding: '12px 16px', ...nlStyles.hand, fontSize: 28,
            transform: 'rotate(-3deg)',
          }}>
            ask for Jeremy ✶
          </div>
        </div>
      </section>
    </div>
  );
}

window.NLHome = NLHome;
window.NLShop = NLShop;
window.NLVisit = NLVisit;
