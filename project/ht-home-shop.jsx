/* ============================================================
   HEADY TRIP — Home + Showcase (combined Shop/Brands)
   ============================================================ */

/* ---------- Reusable: Events / Calendar block ---------- */
function HTEventsBlock({ tone = 'light', heading = true }) {
  const events = [
    { d: 'MAY', n: '17', day: 'SAT', title: 'Dope Drive · NWA Patient Drive', time: '10am – 4pm', tag: 'Community', loc: 'Outside The Source', c: HC.magenta },
    { d: 'MAY', n: '23', day: 'FRI', title: 'Heady Drop №43 · Maple Bend', time: '5pm sharp', tag: 'Glass Drop', loc: 'In-store', c: HC.lime },
    { d: 'JUN', n: '07', day: 'SAT', title: 'Vendor Day · Hippie Hounds', time: '12 – 6pm', tag: 'Pop-up', loc: 'In-store', c: HC.tangerine },
    { d: 'JUN', n: '20', day: 'FRI', title: 'After-hours: Glassblowers panel', time: '8 – 10pm', tag: 'Talk', loc: 'In-store', c: HC.blue },
  ];
  const dark = tone === 'dark';
  const fg = dark ? HC.cream : HC.ink;
  const bg = dark ? HC.blueDark : HC.cream;

  return (
    <section style={{
      background: bg, color: fg, padding: '80px 40px', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', left: -120, bottom: -120, opacity: dark ? 0.18 : 0.5 }}>
        <Burst size={420} color={dark ? HC.lime : HC.tangerine} count={28} />
      </div>
      {heading && (
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 36 }}>
          <div>
            <div style={{ ...HS.mono, fontSize: 11, color: dark ? HC.lime : HC.blue }}>✦ MARK YOUR CALENDAR</div>
            <h2 style={{ ...HS.display, fontSize: 96, margin: '8px 0 0', lineHeight: 0.95, color: fg }}>
              what's <span style={{ color: dark ? HC.lime : HC.magenta, fontStyle: 'italic' }}>going down</span>.
            </h2>
          </div>
          <a href="#" style={{ ...HS.mono, fontSize: 11, color: dark ? HC.lime : HC.blue, textDecoration: 'underline' }}>
            full calendar →
          </a>
        </div>
      )}
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
        {events.map(e => (
          <a key={e.title} href="#" style={{
            display: 'grid', gridTemplateColumns: '120px 1fr auto', gap: 24, alignItems: 'center',
            padding: '20px 24px', background: dark ? 'rgba(245,236,217,0.06)' : HC.paper,
            border: `2px solid ${dark ? HC.cream : HC.ink}`, borderRadius: 18,
            textDecoration: 'none', color: fg,
            boxShadow: dark ? `5px 5px 0 ${e.c}` : `5px 5px 0 ${e.c}`,
          }}>
            <div style={{
              background: e.c, color: HC.ink, border: `2px solid ${HC.ink}`, borderRadius: 12,
              padding: '10px 8px', textAlign: 'center',
            }}>
              <div style={{ ...HS.mono, fontSize: 10 }}>{e.d}</div>
              <div style={{ ...HS.display, fontSize: 40, lineHeight: 0.95 }}>{e.n}</div>
              <div style={{ ...HS.mono, fontSize: 9 }}>{e.day}</div>
            </div>
            <div>
              <div style={{ ...HS.mono, fontSize: 10, color: dark ? HC.lime : HC.blue }}>✦ {e.tag.toUpperCase()}</div>
              <div style={{ ...HS.alt, fontSize: 22, lineHeight: 1.15, marginTop: 4 }}>{e.title}</div>
              <div style={{ ...HS.mono, fontSize: 10, opacity: 0.7, marginTop: 8 }}>
                {e.time} · {e.loc}
              </div>
            </div>
            <div style={{ ...HS.display, fontSize: 32, color: dark ? HC.lime : HC.blue }}>→</div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ---------- Reusable: Social feed (IG + FB) ---------- */
function HTSocialFeed() {
  const posts = [
    { net: 'ig', img: 'assets/photo-1.avif', caption: 'Friday at 5. №43 lands tonight, courtesy of Maple Bend.', likes: 412, c: HC.magenta },
    { net: 'ig', img: 'assets/photo-3.avif', caption: 'Cream-on-cream restocked. Last drop sold out in 11 days.', likes: 287, c: HC.lime },
    { net: 'fb', img: 'assets/photo-jeremy.avif', caption: 'Behind the counter today. Come say hey 👋', likes: 91, c: HC.tangerine },
    { net: 'ig', img: 'assets/photo-5.avif', caption: 'New from Adam Driver — walnut + brass, hand-turned.', likes: 356, c: HC.blue },
    { net: 'ig', img: 'assets/photo-2.avif', caption: 'Saturday\'s vibe.', likes: 198, c: HC.lime },
    { net: 'fb', img: 'assets/photo-6.avif', caption: 'DOPE DRIVE coming up May 17. Spread the word.', likes: 142, c: HC.magenta },
  ];
  return (
    <section style={{ padding: '90px 40px', background: HC.creamWarm, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 30, right: 30, opacity: 0.3 }}>
        <Rings size={260} color={HC.blue} />
      </div>
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32 }}>
        <div>
          <div style={{ ...HS.mono, fontSize: 11, color: HC.magenta }}>✦ THE FEED ✦ LIVE FROM THE COUNTER</div>
          <h2 style={{ ...HS.display, fontSize: 96, margin: '8px 0 0', lineHeight: 0.95 }}>
            on the <span style={{ color: HC.blue, fontStyle: 'italic' }}>'gram</span>.
          </h2>
          <div style={{ marginTop: 10, fontSize: 14, color: 'rgba(14,26,47,0.7)' }}>
            <span style={{ ...HS.mono, fontSize: 11, color: HC.ink }}>@headwaters_provisions</span>
            <span style={{ margin: '0 12px', color: HC.blue }}>·</span>
            <span style={{ ...HS.mono, fontSize: 11, color: HC.ink }}>fb / headwatersprovisions</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <a href="#" style={{
            padding: '12px 20px', background: HC.ink, color: HC.cream,
            border: `2px solid ${HC.ink}`, borderRadius: 999, ...HS.mono, fontSize: 11,
            textDecoration: 'none', boxShadow: `4px 4px 0 ${HC.magenta}`,
          }}>follow on IG ↗</a>
          <a href="#" style={{
            padding: '12px 20px', background: HC.cream, color: HC.ink,
            border: `2px solid ${HC.ink}`, borderRadius: 999, ...HS.mono, fontSize: 11,
            textDecoration: 'none', boxShadow: `4px 4px 0 ${HC.blue}`,
          }}>follow on FB ↗</a>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, position: 'relative' }}>
        {posts.map((p, i) => (
          <a key={i} href="#" style={{
            display: 'block', textDecoration: 'none', color: HC.ink,
            background: HC.paper, border: `2px solid ${HC.ink}`, borderRadius: 18,
            overflow: 'hidden', boxShadow: `5px 5px 0 ${p.c}`,
            transform: `rotate(${[-1, 0.5, -0.5, 0.5, -1, 0.5][i]}deg)`,
          }}>
            <div style={{ position: 'relative', aspectRatio: '1/1', background: `url(${p.img}) center/cover` }}>
              <div style={{
                position: 'absolute', top: 12, left: 12, padding: '6px 10px',
                background: p.net === 'ig' ? HC.magenta : HC.blue,
                color: p.net === 'ig' ? HC.ink : HC.cream,
                border: `2px solid ${HC.ink}`, borderRadius: 999,
                ...HS.mono, fontSize: 10,
              }}>
                {p.net === 'ig' ? '✦ INSTAGRAM' : '✦ FACEBOOK'}
              </div>
            </div>
            <div style={{ padding: '14px 18px 18px' }}>
              <div style={{ fontSize: 13, lineHeight: 1.45, color: HC.ink }}>{p.caption}</div>
              <div style={{ ...HS.mono, fontSize: 10, color: 'rgba(14,26,47,0.6)', marginTop: 10, display: 'flex', justifyContent: 'space-between' }}>
                <span>♡ {p.likes}</span>
                <span>{['2h', '6h', '1d', '2d', '3d', '4d'][i]} ago</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ---------- Home Page ---------- */
function HTHomePage() {
  return (
    <div style={{ ...HS.page }} data-screen-label="01 Home">
      <Nav active="home" tone="dark" />

      {/* HERO */}
      <section style={{
        background: HC.blue, color: HC.cream,
        padding: '60px 40px 100px', position: 'relative', overflow: 'hidden', minHeight: 760,
      }}>
        <div style={{ position: 'absolute', top: -180, right: -180 }}>
          <Rings size={640} color={HC.cream} opacity={0.25} />
        </div>
        <div style={{ position: 'absolute', bottom: -100, left: -100 }}>
          <Burst size={420} color={HC.lime} count={36} />
        </div>
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.3fr 0.7fr', gap: 56, alignItems: 'end' }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '8px 16px', border: `2px solid ${HC.ink}`, borderRadius: 999,
              background: HC.lime, color: HC.ink, ...HS.mono, fontSize: 11,
            }}>
              ✦ Northwest Arkansas · est. 2024 ✦
            </div>
            <h1 style={{
              ...HS.display, fontSize: 220, lineHeight: 0.86, margin: '32px 0 0', color: HC.cream,
            }}>
              <span style={{ display: 'block' }}>where's your</span>
              <span style={{
                display: 'block', fontStyle: 'italic',
                background: `linear-gradient(90deg, ${HC.magenta}, ${HC.tangerine}, ${HC.lime})`,
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>head at?</span>
            </h1>
            <Squiggle width={520} color={HC.lime} />
            <p style={{
              marginTop: 24, fontSize: 20, maxWidth: 580, lineHeight: 1.5,
              ...HS.alt, fontWeight: 500, color: 'rgba(245,236,217,0.95)',
            }}>
              The heady-est shop in NWA. Cannabis accessories, apparel, and gifts —
              tucked just inside The Source in Rogers, Arkansas.
            </p>
            <div style={{ display: 'flex', gap: 18, marginTop: 36, alignItems: 'center' }}>
              <TicketButton color={HC.lime} fg={HC.ink} icon="→">see what we stock</TicketButton>
              <BlobButton color={HC.cream} fg={HC.ink} rotate={2}>plan a visit</BlobButton>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{
              aspectRatio: '4/5', borderRadius: 24, overflow: 'hidden',
              border: `2px solid ${HC.ink}`,
              background: `url(assets/photo-3.avif) center/cover`,
              boxShadow: `12px 12px 0 ${HC.lime}`,
            }} />
            <div style={{
              position: 'absolute', top: -16, left: -16,
              background: HC.magenta, color: HC.ink,
              padding: '10px 16px', transform: 'rotate(-4deg)',
              ...HS.alt, fontSize: 14,
              border: `2px solid ${HC.ink}`,
              boxShadow: `3px 3px 0 ${HC.ink}`,
            }}>✦ heady drops weekly</div>
          </div>
        </div>
      </section>

      <Marquee bg={HC.ink} fg={HC.lime} />

      {/* INTRO */}
      <section style={{ padding: '80px 40px', background: HC.cream, position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <Burst size={320} color={HC.blue} count={28} />
            <div style={{
              position: 'absolute', inset: 0, display: 'flex',
              alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{
                ...HS.display, fontSize: 48, color: HC.cream, textAlign: 'center', lineHeight: 1,
              }}>good gear<br/>only.</div>
            </div>
          </div>
          <div>
            <div style={{ ...HS.mono, fontSize: 11, color: HC.blue }}>✦ ABOUT THE SHOP</div>
            <h2 style={{ ...HS.display, fontSize: 84, margin: '12px 0 0', lineHeight: 0.95, color: HC.ink }}>
              a small, <span style={{ color: HC.blue }}>heady</span><br/>shop in NWA.
            </h2>
            <p style={{ ...HS.serif, fontSize: 22, lineHeight: 1.45, marginTop: 24, fontStyle: 'italic', maxWidth: 560 }}>
              Headwaters Provisions is a cannabis accessories, apparel, and gift
              shop located just inside the front doors of The Source Craft
              Cannabis Dispensary in Rogers, Arkansas.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.6, marginTop: 16, maxWidth: 560 }}>
              We don't sell online — everything's curated for the floor and
              refreshed weekly. Come see what we've got.
            </p>
          </div>
        </div>
      </section>

      {/* SHOWCASE TEASER */}
      <section style={{ padding: '80px 40px', background: HC.paper }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 32 }}>
          <h2 style={{ ...HS.alt, fontSize: 56, margin: 0 }}>the line-up.</h2>
          <a href="#" style={{ ...HS.mono, fontSize: 12, color: HC.blue, textDecoration: 'underline' }}>see the full showcase →</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {[
            'Puffco','RAW','Blazy Susans','Hippie Hounds',
            'Adam Driver','Revelry','Storz & Bickel','Grav Labs',
          ].map((b, i) => {
            const c = [HC.magenta, HC.lime, HC.tangerine, HC.blue][i%4];
            return (
              <div key={b} style={{
                padding: '40px 24px', background: c, border: `2px solid ${HC.ink}`,
                borderRadius: 24, position: 'relative', overflow: 'hidden',
                boxShadow: `4px 4px 0 ${HC.ink}`,
                color: c === HC.blue ? HC.cream : HC.ink,
              }}>
                <div style={{ ...HS.display, fontSize: 28 }}>{b}</div>
                <div style={{ ...HS.mono, fontSize: 10, marginTop: 4, opacity: 0.75 }}>✦ on the floor</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* HEADY OF THE WEEK */}
      <section style={{ background: HC.blue, color: HC.cream, padding: '100px 40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 40, right: 40 }}>
          <Rings size={300} color={HC.lime} opacity={0.4} />
        </div>
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <div style={{ ...HS.mono, fontSize: 11, color: HC.lime }}>✦ HEADY OF THE WEEK</div>
            <h2 style={{ ...HS.display, fontSize: 112, lineHeight: 0.92, margin: '12px 0 0' }}>
              one of <span style={{ color: HC.lime, fontStyle: 'italic' }}>one</span>.
            </h2>
            <p style={{ marginTop: 24, fontSize: 18, lineHeight: 1.5, maxWidth: 480, color: 'rgba(245,236,217,0.9)' }}>
              Local NWA glassblowers drop new heady pieces every Friday at 5pm.
              We keep one. When it's gone, it's gone — and you'll have to come
              by to see it.
            </p>
            <div style={{ marginTop: 32 }}>
              <TicketButton color={HC.lime} fg={HC.ink} icon="✦">this Friday's piece</TicketButton>
            </div>
          </div>
          <div style={{
            aspectRatio: '1/1', borderRadius: 24, overflow: 'hidden',
            border: `2px solid ${HC.ink}`,
            background: `url(assets/photo-1.avif) center/cover`,
            boxShadow: `12px 12px 0 ${HC.lime}`,
          }} />
        </div>
      </section>

      <Marquee bg={HC.lime} fg={HC.ink} text="✦ no card needed" />

      {/* EVENTS */}
      <HTEventsBlock tone="light" />

      {/* SOCIAL FEED */}
      <HTSocialFeed />

      {/* JOURNAL TEASER */}
      <section style={{ padding: '80px 40px', background: HC.cream }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 40 }}>
          <h2 style={{ ...HS.display, fontSize: 72, margin: 0, color: HC.ink }}>from the journal</h2>
          <a href="#" style={{ ...HS.mono, fontSize: 12, color: HC.blue, textDecoration: 'underline' }}>read all →</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
          {[
            { tag: 'Field Notes', title: 'A beginner\'s guide to heady glass', img: 'assets/photo-3.avif', date: 'Apr 24, 2026' },
            { tag: 'Events', title: 'Dope Drive · NWA Patient Drive returns', img: 'assets/photo-jeremy.avif', date: 'Apr 18, 2026' },
            { tag: 'Local Spotlight', title: 'Meet the glassblowers behind №7', img: 'assets/photo-5.avif', date: 'Apr 02, 2026' },
          ].map((p, i) => (
            <a key={p.title} href="#" style={{
              background: HC.paper, border: `2px solid ${HC.ink}`, borderRadius: 24,
              overflow: 'hidden', textDecoration: 'none', color: HC.ink,
              boxShadow: `5px 5px 0 ${[HC.magenta, HC.lime, HC.tangerine][i]}`,
              display: 'block',
            }}>
              <div style={{
                aspectRatio: '4/3', background: `url(${p.img}) center/cover`,
                borderBottom: `2px solid ${HC.ink}`,
              }} />
              <div style={{ padding: '20px 24px 24px' }}>
                <div style={{ ...HS.mono, fontSize: 10, color: HC.blue }}>✦ {p.tag.toUpperCase()}</div>
                <div style={{ ...HS.alt, fontSize: 24, marginTop: 8, lineHeight: 1.15 }}>{p.title}</div>
                <div style={{ ...HS.mono, fontSize: 10, color: 'rgba(14,26,47,0.6)', marginTop: 12 }}>{p.date}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ---------- Showcase Page (combines old Shop + Brands) ---------- */
function HTShowcasePage() {
  const categories = [
    { name: 'Heady Glass', desc: 'One-of-one pieces from local NWA blowers and beyond.', img: 'assets/photo-1.avif', c: HC.magenta, count: 38 },
    { name: 'Vapes & Tech', desc: 'Puffco, Storz & Bickel, PAX — tested behind the counter.', img: 'assets/photo-5.avif', c: HC.lime, count: 24 },
    { name: 'Papers & Wraps', desc: 'RAW, OCB, Blazy Susans. The classics, the weird ones, the artisan ones.', img: 'assets/photo-4.avif', c: HC.tangerine, count: 41 },
    { name: 'Carry & Stash', desc: 'Smell-proof bags, cases, and pouches by Revelry & RYOT.', img: 'assets/photo-2.avif', c: HC.blue, count: 29 },
    { name: 'Apparel', desc: 'House tees, Hippie Hounds, Marley Natural — cream-on-cream and beyond.', img: 'assets/photo-6.avif', c: HC.magenta, count: 34 },
    { name: 'Wood Goods & Trays', desc: 'Adam Driver walnut, Ozark Smith Co., one-off rolling boards.', img: 'assets/photo-3.avif', c: HC.lime, count: 22 },
  ];

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
    { n: 'OCB', tag: 'Papers', c: HC.blue },
    { n: 'Headwaters House', tag: 'In-house apparel', c: HC.tangerine },
  ];

  return (
    <div style={{ ...HS.page }} data-screen-label="02 Showcase">
      <Nav active="showcase" />

      {/* HERO */}
      <section style={{ padding: '60px 40px 32px', background: HC.lime, borderBottom: `2px solid ${HC.ink}`, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -60, top: -60 }}>
          <Rings size={360} color={HC.blue} opacity={0.6} />
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ ...HS.mono, fontSize: 11 }}>✦ THE SHOWCASE ✦ NOT A STORE — A FLOOR</div>
          <h1 style={{ ...HS.display, fontSize: 168, margin: '12px 0 0', lineHeight: 0.9 }}>
            stock the <span style={{ color: HC.blue }}>vibe.</span>
          </h1>
          <p style={{ ...HS.serif, fontStyle: 'italic', fontSize: 22, lineHeight: 1.4, marginTop: 24, maxWidth: 720 }}>
            We don't sell online. This is a window into what's on the floor —
            the brands we stock, the categories we curate, and the kind of gear
            you'll find when you stop by.
          </p>
          <div style={{ marginTop: 22, display: 'flex', gap: 18, alignItems: 'center' }}>
            <TicketButton color={HC.cream} fg={HC.ink} icon="→">come see it</TicketButton>
            <span style={{ ...HS.mono, fontSize: 11, color: HC.ink }}>
              ✦ refreshed weekly · 16 brands · 228 items
            </span>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section style={{ padding: '80px 40px', background: HC.cream }}>
        <div style={{ ...HS.mono, fontSize: 11, color: HC.blue }}>✦ ON THE FLOOR</div>
        <h2 style={{ ...HS.display, fontSize: 80, margin: '8px 0 36px', lineHeight: 0.95 }}>
          what we <span style={{ color: HC.magenta, fontStyle: 'italic' }}>stock</span>.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
          {categories.map((c, i) => (
            <div key={c.name} style={{
              background: HC.paper, border: `2px solid ${HC.ink}`, borderRadius: 24,
              overflow: 'hidden', boxShadow: `6px 6px 0 ${c.c}`,
            }}>
              <div style={{ position: 'relative', aspectRatio: '4/3', background: `${c.c} url(${c.img}) center/cover`, borderBottom: `2px solid ${HC.ink}` }}>
                <div style={{
                  position: 'absolute', top: 12, right: 12,
                  background: HC.cream, color: HC.ink, padding: '6px 12px',
                  border: `2px solid ${HC.ink}`, borderRadius: 999,
                  ...HS.mono, fontSize: 10,
                }}>
                  ~{c.count} pieces
                </div>
              </div>
              <div style={{ padding: '22px 26px 26px' }}>
                <div style={{ ...HS.alt, fontSize: 28, lineHeight: 1.1 }}>{c.name}</div>
                <p style={{ fontSize: 14, lineHeight: 1.5, marginTop: 8, color: 'rgba(14,26,47,0.78)' }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* "NO ONLINE STORE" CALLOUT */}
      <section style={{ background: HC.ink, color: HC.cream, padding: '64px 40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -120, top: -120, opacity: 0.3 }}>
          <Burst size={420} color={HC.lime} count={28} />
        </div>
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <div style={{ ...HS.mono, fontSize: 11, color: HC.lime }}>✦ A QUICK NOTE</div>
            <h2 style={{ ...HS.display, fontSize: 88, lineHeight: 0.95, margin: '8px 0 0', color: HC.cream }}>
              we don't <span style={{ color: HC.magenta, fontStyle: 'italic' }}>do online</span>.
            </h2>
            <p style={{ ...HS.serif, fontStyle: 'italic', fontSize: 22, lineHeight: 1.45, marginTop: 22, maxWidth: 620, color: 'rgba(245,236,217,0.92)' }}>
              No carts, no shipping, no scrolling endless product grids. The
              floor is the catalog. Call us, DM us, or just come in — we'll
              walk you through what's in stock.
            </p>
          </div>
          <div style={{ display: 'grid', gap: 14 }}>
            <div style={{ background: HC.lime, color: HC.ink, padding: '18px 22px', border: `2px solid ${HC.ink}`, borderRadius: 16, ...HS.alt, fontSize: 18 }}>
              ✦ call · (479) 251-8581
            </div>
            <div style={{ background: HC.magenta, color: HC.ink, padding: '18px 22px', border: `2px solid ${HC.ink}`, borderRadius: 16, ...HS.alt, fontSize: 18 }}>
              ✦ dm @headwaters_provisions
            </div>
            <div style={{ background: HC.cream, color: HC.ink, padding: '18px 22px', border: `2px solid ${HC.ink}`, borderRadius: 16, ...HS.alt, fontSize: 18 }}>
              ✦ visit · 4505 W Poplar, Rogers
            </div>
          </div>
        </div>
      </section>

      {/* BRANDS WALL */}
      <section style={{ padding: '80px 40px', background: HC.paper }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 28 }}>
          <div>
            <div style={{ ...HS.mono, fontSize: 11, color: HC.blue }}>✦ THE LINE-UP</div>
            <h2 style={{ ...HS.display, fontSize: 80, margin: '8px 0 0', lineHeight: 0.95 }}>
              every brand on the <span style={{ color: HC.blue, fontStyle: 'italic' }}>floor</span>.
            </h2>
          </div>
          <span style={{ ...HS.mono, fontSize: 11, color: HC.magenta }}>✦ 16 brands · big names + local</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {brands.map((b, i) => (
            <div key={b.n} style={{
              padding: '28px 24px', background: b.c, color: b.c === HC.blue ? HC.cream : HC.ink,
              border: `2px solid ${HC.ink}`, borderRadius: 20, position: 'relative',
              boxShadow: `4px 4px 0 ${HC.ink}`,
            }}>
              <div style={{ ...HS.mono, fontSize: 10, opacity: 0.7 }}>№ {String(i+1).padStart(2,'0')}</div>
              <div style={{ ...HS.display, fontSize: 28, marginTop: 6, lineHeight: 1 }}>{b.n}</div>
              <div style={{ ...HS.alt, fontSize: 12, marginTop: 6 }}>{b.tag}</div>
            </div>
          ))}
        </div>
      </section>

      <Marquee bg={HC.blue} fg={HC.cream} text="✦ no online store · come on in" />
      <Footer />
    </div>
  );
}

window.HTHomePage = HTHomePage;
window.HTShowcasePage = HTShowcasePage;
window.HTEventsBlock = HTEventsBlock;
window.HTSocialFeed = HTSocialFeed;
