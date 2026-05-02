/* ============================================================
   HEADY TRIP — Pages: Visit, Journal, About
   ============================================================ */

function HTBrandsPage_DEPRECATED() {
  const brands = [
    { n: 'Puffco', tag: 'Vapes', c: HC.magenta },
    { n: 'RAW', tag: 'Papers', c: HC.lime },
    { n: 'Blazy Susans', tag: 'Trays & gear', c: HC.tangerine },
    { n: 'Hippie Hounds', tag: 'Apparel', c: HC.blue },
    { n: 'Adam Driver', tag: 'Wood goods', c: HC.lime },
    { n: 'Revelry Supply', tag: 'Smell-proof carry', c: HC.magenta },
    { n: 'Storz & Bickel', tag: 'Vapes', c: HC.blue },
    { n: 'Grav Labs', tag: 'Glass', c: HC.tangerine },
    { n: 'Marley Natural', tag: 'Apparel & gear', c: HC.lime },
    { n: 'PAX', tag: 'Vapes', c: HC.magenta },
    { n: 'RYOT', tag: 'Carry', c: HC.blue },
    { n: 'Higher Standards', tag: 'Cleaning', c: HC.tangerine },
    { n: 'Maple Bend Glass', tag: 'Local heady glass', c: HC.lime },
    { n: 'Ozark Smith Co.', tag: 'Local artisan', c: HC.magenta },
  ];
  return (
    <div style={{ ...HS.page }}>
      <Nav active="brands" />
      <section style={{ padding: '60px 40px 32px', background: HC.magenta, borderBottom: `2px solid ${HC.ink}`, position: 'relative', overflow: 'hidden', color: HC.ink }}>
        <div style={{ position: 'absolute', left: -100, top: -100 }}><Burst size={420} color={HC.lime} count={32} /></div>
        <div style={{ position: 'relative' }}>
          <div style={{ ...HS.mono, fontSize: 11 }}>✦ THE LINE-UP ✦ BIG NAMES & LOCAL ARTISANS</div>
          <h1 style={{ ...HS.display, fontSize: 168, margin: '12px 0 0', lineHeight: 0.9 }}>
            the <span style={{ color: HC.cream, fontStyle: 'italic' }}>brands.</span>
          </h1>
        </div>
      </section>
      <section style={{ padding: '64px 40px', background: HC.cream }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {brands.map((b, i) => (
            <div key={b.n} style={{
              padding: '32px 28px', background: b.c, color: b.c === HC.blue ? HC.cream : HC.ink,
              border: `2px solid ${HC.ink}`, borderRadius: 24, position: 'relative',
              boxShadow: `5px 5px 0 ${HC.ink}`,
            }}>
              <div style={{ ...HS.mono, fontSize: 10, opacity: 0.7 }}>№ {String(i+1).padStart(2,'0')}</div>
              <div style={{ ...HS.display, fontSize: 36, marginTop: 8, lineHeight: 1 }}>{b.n}</div>
              <div style={{ ...HS.alt, fontSize: 14, marginTop: 8 }}>{b.tag}</div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

function HTVisitPage() {
  return (
    <div style={{ ...HS.page, background: HC.blueDark }}>
      <Nav active="visit" tone="dark" />
      <section style={{ padding: '80px 40px', position: 'relative', overflow: 'hidden', minHeight: 760 }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <Rings size={1100} color={HC.lime} opacity={0.18} />
        </div>
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          <div style={{ color: HC.cream }}>
            <div style={{ ...HS.mono, fontSize: 11, color: HC.lime }}>✦ FIND US</div>
            <h1 style={{ ...HS.display, fontSize: 132, margin: '12px 0 0', lineHeight: 0.9, color: HC.cream }}>
              drop <span style={{ color: HC.magenta }}>in</span>.
            </h1>
            <div style={{ marginTop: 40, display: 'grid', gap: 20 }}>
              <div style={{ background: HC.cream, color: HC.ink, padding: 28, borderRadius: 24, border: `2px solid ${HC.ink}`, boxShadow: `6px 6px 0 ${HC.lime}` }}>
                <div style={{ ...HS.mono, fontSize: 11, color: HC.magenta }}>address</div>
                <div style={{ ...HS.alt, fontSize: 30, marginTop: 6, lineHeight: 1.1 }}>4505 W Poplar Street<br/>Rogers, AR 72756</div>
                <div style={{ fontSize: 14, marginTop: 12, lineHeight: 1.5 }}>Inside The Source Craft Cannabis. Walk through the front doors — we're immediately on your right.</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div style={{ background: HC.lime, color: HC.ink, padding: 22, borderRadius: 24, border: `2px solid ${HC.ink}` }}>
                  <div style={{ ...HS.mono, fontSize: 10 }}>HOURS</div>
                  <div style={{ marginTop: 8, fontSize: 14, lineHeight: 1.7, ...HS.alt }}>Mon–Fri · 9–8<br/>Sat · 9–7<br/>Sun · 10–6</div>
                </div>
                <div style={{ background: HC.magenta, color: HC.ink, padding: 22, borderRadius: 24, border: `2px solid ${HC.ink}` }}>
                  <div style={{ ...HS.mono, fontSize: 10 }}>HOLLER</div>
                  <div style={{ marginTop: 8, fontSize: 14, lineHeight: 1.7, ...HS.alt }}>(479) 251-8581<br/>info@<br/>headwatersprovisions.com</div>
                </div>
              </div>
              <div style={{ background: HC.tangerine, color: HC.ink, padding: 22, borderRadius: 24, border: `2px solid ${HC.ink}`, ...HS.alt, fontSize: 16, textAlign: 'center' }}>
                ✦ no medical card needed — walk right in
              </div>
            </div>
          </div>
          <div>
            <div style={{
              aspectRatio: '4/5', borderRadius: 24, overflow: 'hidden',
              border: `2px solid ${HC.ink}`,
              background: `url(assets/photo-jeremy.avif) center/cover`,
              boxShadow: `12px 12px 0 ${HC.lime}`,
            }} />
            <div style={{
              marginTop: 24, padding: 22, background: HC.cream, color: HC.ink,
              border: `2px solid ${HC.ink}`, borderRadius: 24, boxShadow: `6px 6px 0 ${HC.magenta}`,
            }}>
              <div style={{ ...HS.mono, fontSize: 10, color: HC.blue }}>✦ MAP</div>
              <svg width="100%" height="180" style={{ marginTop: 10, borderRadius: 8 }}>
                <rect width="100%" height="100%" fill={HC.creamWarm} />
                {[...Array(8)].map((_, i) => (<line key={i} x1="0" x2="100%" y1={i*24} y2={i*24} stroke={HC.blue} strokeOpacity="0.25" />))}
                {[...Array(12)].map((_, i) => (<line key={i} y1="0" y2="180" x1={`${i*9}%`} x2={`${i*9}%`} stroke={HC.blue} strokeOpacity="0.25" />))}
                <path d="M 0 90 Q 200 60, 380 110 T 700 80" stroke={HC.blue} strokeWidth="3" fill="none" />
                <circle cx="450" cy="95" r="12" fill={HC.magenta} stroke={HC.ink} strokeWidth="2" />
              </svg>
              <div style={{ marginTop: 10, ...HS.alt, fontSize: 16 }}>Headwaters · 4505 W Poplar</div>
            </div>
          </div>
        </div>
      </section>
      <HTEventsBlock tone="dark" />
      <Footer />
    </div>
  );
}

function HTJournalPage() {
  const posts = [
    { tag: 'Field Notes', title: 'A beginner\'s guide to heady glass', img: 'assets/photo-3.avif', date: 'Apr 24, 2026', read: '6 min', c: HC.lime },
    { tag: 'Events', title: 'Dope Drive · NWA Patient Drive returns this May', img: 'assets/photo-jeremy.avif', date: 'Apr 18, 2026', read: '4 min', c: HC.magenta },
    { tag: 'Local Spotlight', title: 'Meet the glassblowers behind №7', img: 'assets/photo-5.avif', date: 'Apr 02, 2026', read: '8 min', c: HC.tangerine },
    { tag: 'How-To', title: 'How to actually clean your bubbler', img: 'assets/photo-1.avif', date: 'Mar 22, 2026', read: '5 min', c: HC.lime },
    { tag: 'Field Notes', title: 'Why we stock who we stock', img: 'assets/photo-6.avif', date: 'Mar 10, 2026', read: '7 min', c: HC.blue },
    { tag: 'Local Spotlight', title: 'A weekend in Rogers, our way', img: 'assets/photo-2.avif', date: 'Feb 28, 2026', read: '10 min', c: HC.magenta },
  ];
  return (
    <div style={{ ...HS.page }}>
      <Nav active="journal" />
      <section style={{ padding: '60px 40px 32px', background: HC.tangerine, borderBottom: `2px solid ${HC.ink}`, color: HC.ink, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -80, top: -80 }}><Rings size={420} color={HC.ink} opacity={0.15} /></div>
        <div style={{ position: 'relative' }}>
          <div style={{ ...HS.mono, fontSize: 11 }}>✦ THE JOURNAL ✦ DISPATCHES FROM THE COUNTER</div>
          <h1 style={{ ...HS.display, fontSize: 168, margin: '12px 0 0', lineHeight: 0.9 }}>
            the <span style={{ color: HC.blue, fontStyle: 'italic' }}>journal.</span>
          </h1>
        </div>
      </section>
      {/* Featured post */}
      <section style={{ padding: '64px 40px 32px', background: HC.cream }}>
        <a href="#" style={{
          display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 40, alignItems: 'center',
          textDecoration: 'none', color: HC.ink,
          background: HC.paper, border: `2px solid ${HC.ink}`, borderRadius: 24, overflow: 'hidden',
          boxShadow: `8px 8px 0 ${HC.lime}`,
        }}>
          <div style={{ aspectRatio: '4/3', background: `url(assets/photo-3.avif) center/cover`, borderRight: `2px solid ${HC.ink}` }} />
          <div style={{ padding: '32px 36px' }}>
            <div style={{ ...HS.mono, fontSize: 11, color: HC.magenta }}>✦ FEATURED · APR 28, 2026</div>
            <h2 style={{ ...HS.display, fontSize: 56, lineHeight: 0.95, margin: '12px 0 16px' }}>
              The Friday <span style={{ color: HC.blue }}>5pm</span> drop, explained.
            </h2>
            <p style={{ ...HS.serif, fontStyle: 'italic', fontSize: 18, lineHeight: 1.5, color: HC.ink }}>
              Every Friday at 5pm, a fresh round of one-of-one heady glass lands
              on the counter. Here's how it works, who makes it, and why we
              keep it small.
            </p>
            <div style={{ marginTop: 20, ...HS.mono, fontSize: 11, color: HC.blue }}>read · 12 min →</div>
          </div>
        </a>
      </section>
      <section style={{ padding: '24px 40px 80px', background: HC.cream }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
          {posts.map(p => (
            <a key={p.title} href="#" style={{
              background: HC.paper, border: `2px solid ${HC.ink}`, borderRadius: 24,
              overflow: 'hidden', textDecoration: 'none', color: HC.ink,
              boxShadow: `5px 5px 0 ${p.c}`, display: 'block',
            }}>
              <div style={{ aspectRatio: '4/3', background: `url(${p.img}) center/cover`, borderBottom: `2px solid ${HC.ink}` }} />
              <div style={{ padding: '20px 24px 24px' }}>
                <div style={{ ...HS.mono, fontSize: 10, color: HC.blue }}>✦ {p.tag.toUpperCase()}</div>
                <div style={{ ...HS.alt, fontSize: 22, marginTop: 8, lineHeight: 1.15 }}>{p.title}</div>
                <div style={{ ...HS.mono, fontSize: 10, color: 'rgba(14,26,47,0.6)', marginTop: 14, display: 'flex', justifyContent: 'space-between' }}>
                  <span>{p.date}</span><span>{p.read}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

function HTAboutPage() {
  return (
    <div style={{ ...HS.page }}>
      <Nav active="about" />
      <section style={{ padding: '60px 40px 32px', background: HC.lime, borderBottom: `2px solid ${HC.ink}`, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -100, bottom: -100 }}><Burst size={460} color={HC.blue} count={36} /></div>
        <div style={{ position: 'relative' }}>
          <div style={{ ...HS.mono, fontSize: 11 }}>✦ ABOUT ✦ A SMALL HEADY SHOP IN NWA</div>
          <h1 style={{ ...HS.display, fontSize: 168, margin: '12px 0 0', lineHeight: 0.9 }}>
            the <span style={{ color: HC.magenta }}>shop.</span>
          </h1>
        </div>
      </section>
      <section style={{ padding: '80px 40px', background: HC.cream, display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 56, alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 32 }}>
          <div style={{
            aspectRatio: '4/5', borderRadius: 24, overflow: 'hidden',
            border: `2px solid ${HC.ink}`,
            background: `url(assets/photo-jeremy.avif) center/cover`,
            boxShadow: `12px 12px 0 ${HC.magenta}`,
          }} />
        </div>
        <div>
          <div style={{ ...HS.mono, fontSize: 11, color: HC.blue }}>✦ MANIFESTO</div>
          <h2 style={{ ...HS.display, fontSize: 80, lineHeight: 0.95, margin: '12px 0 0' }}>
            named for <span style={{ color: HC.blue }}>where</span><br/>a river begins.
          </h2>
          <p style={{ ...HS.serif, fontStyle: 'italic', fontSize: 22, lineHeight: 1.45, marginTop: 32, color: HC.ink }}>
            Headwaters Provisions is a cannabis accessories, apparel, and gift
            shop located just inside the front doors of The Source Craft
            Cannabis Dispensary in Rogers, Arkansas.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.7, marginTop: 20, maxWidth: 580 }}>
            We curate big-name cannabis brands and local NWA artisans alike,
            from one-of-one heady glass to smell-proof carry to the perfect
            cream-on-cream tee. The shelves get refreshed weekly, the people
            behind the counter actually like talking gear, and the door is
            open to anyone — no medical marijuana card needed.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.7, marginTop: 16, maxWidth: 580 }}>
            We named the shop "Headwaters" for the place a river begins —
            clear, cold, undisturbed. It's a place to start something. Stop in.
          </p>
          <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              { n: '24', l: 'brands stocked' },
              { n: '228', l: 'items on the floor' },
              { n: '1', l: 'heady drop / week' },
            ].map(s => (
              <div key={s.l} style={{ padding: '20px 22px', background: HC.paper, border: `2px solid ${HC.ink}`, borderRadius: 16 }}>
                <div style={{ ...HS.display, fontSize: 56, color: HC.blue, lineHeight: 1 }}>{s.n}</div>
                <div style={{ ...HS.mono, fontSize: 10, color: HC.ink, marginTop: 6 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Marquee bg={HC.blue} fg={HC.cream} text="✦ where's your head at?" />
      <Footer />
    </div>
  );
}

window.HTVisitPage = HTVisitPage;
window.HTJournalPage = HTJournalPage;
window.HTAboutPage = HTAboutPage;
