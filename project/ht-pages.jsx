/* ============================================================
   HEADY TRIP — Visit / Journal / About
   - Stacked flyer-style display type via StackedDisplay
   - Sunny peeks from many corners + pinned in cards
   - Product line-art runs faintly in section backgrounds
   - WhereAtLockup closes the About page (the 4x6 brand lockup)
   - Sonoran italic does pull-quotes; Holtzman runs HUGE for hero
   ============================================================ */

/* ---------- VISIT — drop in. ---------- */
function HTVisitPage() {
  return (
    <div style={{ ...HS.page, background: HC.blueDark }} data-screen-label="03 Visit">
      <Nav active="visit" tone="dark" />

      {/* HERO */}
      <section style={{ padding: '72px 40px 56px', position: 'relative', overflow: 'hidden' }}>
        <PaperGrain opacity={0.06} color={HC.cream} blend="screen" />
        <ProductPattern color={HC.cream} opacity={0.10} blend="screen" strokeWidth={1.4} />
        <MaskingTape width={170} height={24} color={HC.tape}      rotate={-18} top={28} left={-30} />
        <MaskingTape width={150} height={22} color={HC.tapeWhite} rotate={14}  top={50} right={-20} />

        {/* Spiky burst behind Sunny in the rain */}
        <SmokeBurst size={520} fill={HC.blue} stroke={HC.cream} strokeWidth={2}
          style={{ position: 'absolute', top: 80, right: 80, opacity: 0.5, transform: 'rotate(-10deg)', zIndex: 0 }} />

        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 56, alignItems: 'center', zIndex: 2 }}>
          <div>
            <Tape rotate={-3} fontSize={12}>Stop in any time:</Tape>
            <h1 style={{ margin: '28px 0 0' }}>
              <StackedDisplay fontSize={224} variant="cream-on-blue" lineHeight={0.86}>
                Drop<br/><span style={{ color: HC.yellow }}>in</span>
              </StackedDisplay>
              <span style={{ ...HS.serif, fontStyle: 'italic', fontSize: 200, letterSpacing: '-0.02em', color: HC.cream, lineHeight: 0.86, textShadow: `4px 6px 0 ${HC.blueDark}` }}>.</span>
            </h1>
            <p style={{
              marginTop: 28, fontSize: 19, lineHeight: 1.5, maxWidth: 480,
              color: 'rgba(245,236,217,0.92)',
            }}>
              Tucked just inside the front doors of The Source. No card,
              no appointment.
            </p>
            <div style={{ marginTop: 22, display: 'flex', alignItems: 'center', gap: 12 }}>
              <PillCallout sub="open every day" rotate={-3} color={HC.yellow} fg={HC.ink}>9–8 weekdays</PillCallout>
              <SunSparkle size={22} color={HC.yellow} />
            </div>
          </div>
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
            <Sunny mood="rain" size={520} style={{ filter: 'drop-shadow(8px 8px 0 rgba(0,0,0,0.22)) drop-shadow(0 16px 24px rgba(0,0,0,0.18))' }} />
            {/* Tiny Sunny umbrella-buddy */}
            <Sunny mood="hat" size={120} style={{ position: 'absolute', bottom: -20, left: 20, transform: 'rotate(-8deg)' }} />
          </div>
        </div>
      </section>

      {/* ADDRESS / HOURS / HOLLER — three torn cards + Sunny pinned */}
      <section style={{ padding: '0 40px 80px', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 28 }}>
          <TornCard bg={HC.cream} edges="all" rotate={-0.8} padding="40px 36px">
            <Kicker color={HC.blue}>Address</Kicker>
            <div style={{ ...HS.display, fontSize: 36, marginTop: 12, lineHeight: 1.05, textTransform: 'uppercase' }}>
              4505 W Poplar<br/>Rogers, AR
            </div>
            <p style={{ ...HS.serif, fontStyle: 'italic', fontSize: 14, marginTop: 12, lineHeight: 1.5, color: 'rgba(26,18,7,0.78)' }}>
              Inside The Source. Front doors, immediately on your right.
            </p>
            <div style={{ marginTop: 18, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <Button as="a" href="#" color={HC.blue} fg={HC.cream} size="sm">Directions →</Button>
              <Button as="a" href="#" color={HC.yellow} fg={HC.ink} size="sm">Open in Maps</Button>
            </div>
          </TornCard>

          <TornCard bg={HC.yellow} edges="all" rotate={1.2} padding="40px 36px"
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'visible' }}>
            <Kicker color={HC.ink}>Hours</Kicker>
            <div style={{ marginTop: 12, ...HS.display, fontSize: 22, lineHeight: 1.5, textTransform: 'uppercase' }}>
              Mon–Fri · 9–8<br/>Sat · 9–7<br/>Sun · 10–6
            </div>
            <Sticker color={HC.cream} rotate={-4} style={{ marginTop: 14, alignSelf: 'flex-start' }}>open every day</Sticker>
            {/* Sunny peeks from card corner */}
            <Sunny mood="thumbs" size={120} style={{ position: 'absolute', top: -38, right: -22, transform: 'rotate(16deg)', zIndex: 3 }} />
          </TornCard>

          <TornCard bg={HC.creamSoft} edges="all" rotate={-0.6} padding="40px 36px">
            <Kicker color={HC.blue}>Holler</Kicker>
            <div style={{ ...HS.display, fontSize: 28, marginTop: 12, lineHeight: 1.1 }}>(479) 251-8581</div>
            <div style={{ ...HS.serif, fontStyle: 'italic', fontSize: 14, marginTop: 10, lineHeight: 1.55, wordBreak: 'break-word' }}>
              info@headwatersprovisions.com
            </div>
            <div style={{ ...HS.mono, fontSize: 11, color: HC.blue, marginTop: 12 }}>
              @headwaters_provisions
            </div>
          </TornCard>
        </div>
      </section>

      {/* MAP + WHAT TO EXPECT */}
      <section style={{ padding: '0 40px 88px', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 28, alignItems: 'stretch' }}>
          <TornCard bg={HC.cream} edges="bottom" padding="28px 30px">
            <Kicker color={HC.blue}>The lay of the land</Kicker>
            <svg width="100%" height="320" style={{ marginTop: 14, display: 'block' }}>
              <rect width="100%" height="100%" fill={HC.creamSoft} />
              {[...Array(14)].map((_, i) => (<line key={`h${i}`} x1="0" x2="100%" y1={i*24} y2={i*24} stroke={HC.blue} strokeOpacity="0.18" />))}
              {[...Array(20)].map((_, i) => (<line key={`v${i}`} y1="0" y2="320" x1={`${i*5.5}%`} x2={`${i*5.5}%`} stroke={HC.blue} strokeOpacity="0.18" />))}
              <path d="M 0 180 Q 220 150, 460 188 T 900 168" stroke={HC.blue} strokeWidth="3" fill="none" />
              <text x="60" y="170" fill={HC.blue} fontFamily="ui-monospace, Menlo, monospace" fontSize="11" letterSpacing="2">W POPLAR ST →</text>
              <path d="M 720 0 L 720 320" stroke={HC.ink} strokeWidth="2" strokeOpacity="0.4" strokeDasharray="6 4" />
              <text x="730" y="32" fill={HC.ink} fillOpacity="0.5" fontFamily="ui-monospace, Menlo, monospace" fontSize="10" letterSpacing="2">I-49</text>
              <circle cx="380" cy="184" r="14" fill={HC.yellow} stroke={HC.ink} strokeWidth="2" />
              <circle cx="380" cy="184" r="4" fill={HC.ink} />
              <text x="400" y="178" fill={HC.ink} fontFamily="ui-monospace, Menlo, monospace" fontSize="11" letterSpacing="1.5">HEADWATERS</text>
              <text x="400" y="194" fill={HC.ink} fillOpacity="0.7" fontFamily="ui-monospace, Menlo, monospace" fontSize="9">inside The Source</text>
            </svg>
            <div style={{ marginTop: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ ...HS.mono, fontSize: 10, color: 'rgba(26,18,7,0.7)' }}>
                ✦ Free parking · Wheelchair accessible · 21+
              </div>
              <a href="#" style={{ ...HS.mono, fontSize: 11, color: HC.blue, textDecoration: 'none', borderBottom: `1px solid currentColor`, paddingBottom: 2 }}>
                bigger map →
              </a>
            </div>
          </TornCard>

          <TornCard bg={HC.creamSoft} edges="all" padding="32px 34px"
            style={{ display: 'flex', flexDirection: 'column', gap: 18, position: 'relative', overflow: 'visible' }}>
            <Kicker color={HC.blue}>What to expect</Kicker>
            {[
              { n: '01', h: 'Walk right in', t: 'No card needed. Front lobby — skip dispensary check-in.' },
              { n: '02', h: 'Talk to a human', t: 'No upsell scripts. Just gear talk.' },
              { n: '03', h: 'Browse the floor', t: '16 brands, refreshed weekly. New heady glass every Friday at 5.' },
              { n: '04', h: 'Pay & go', t: 'Cash or card. Wax-paper sleeve on every purchase.' },
            ].map(s => (
              <div key={s.n} style={{ display: 'grid', gridTemplateColumns: '46px 1fr', gap: 14, alignItems: 'flex-start' }}>
                <div style={{ ...HS.display, fontSize: 30, color: HC.blue, lineHeight: 1 }}>{s.n}</div>
                <div>
                  <div style={{ ...HS.display, fontSize: 18, lineHeight: 1.15, textTransform: 'uppercase' }}>{s.h}</div>
                  <p style={{ ...HS.serif, fontStyle: 'italic', fontSize: 13.5, lineHeight: 1.5, marginTop: 4, color: 'rgba(26,18,7,0.78)' }}>{s.t}</p>
                </div>
              </div>
            ))}
            {/* Sunny peace pinned to bottom */}
            <Sunny mood="peace" size={110} style={{ position: 'absolute', bottom: -34, right: -18, transform: 'rotate(12deg)' }} />
          </TornCard>
        </div>
      </section>

      {/* SOCIAL */}
      <HTSocialFeed tone="dark" />

      <Footer />
    </div>
  );
}

/* ---------- JOURNAL — editorial scrapbook ---------- */
function HTJournalPage() {
  const featured = {
    tag: 'FEATURED', date: 'APR 28, 2026', read: '12 min',
    blurb: "How the Friday 5pm drop works, who makes it, and why we keep it small.",
    img: 'assets/photo-3.avif',
  };

  const posts = [
    { tag: 'Field Notes',     title: "A beginner's guide to heady glass",       img: 'assets/photo-1.avif',      date: 'Apr 24', read: '6 min' },
    { tag: 'Drops',            title: 'Dope Drive returns this May',              img: 'assets/photo-jeremy.avif', date: 'Apr 18', read: '4 min' },
    { tag: 'Local Spotlight', title: 'Meet the glassblowers behind №7',          img: 'assets/photo-5.avif',      date: 'Apr 02', read: '8 min' },
    { tag: 'How-To',          title: 'How to actually clean your bubbler',        img: 'assets/photo-2.avif',      date: 'Mar 22', read: '5 min' },
    { tag: 'Field Notes',     title: 'Why we stock who we stock',                img: 'assets/photo-6.avif',      date: 'Mar 10', read: '7 min' },
    { tag: 'Local Spotlight', title: 'A weekend in Rogers, our way',             img: 'assets/photo-4.avif',      date: 'Feb 28', read: '10 min' },
  ];

  return (
    <div style={{ ...HS.page }} data-screen-label="04 Journal">
      <Nav active="journal" />

      {/* HERO — yellow band, Sunny thumbs up + burst */}
      <section style={{ padding: '64px 40px 56px', background: HC.yellow, borderBottom: `2px solid ${HC.ink}`, position: 'relative', overflow: 'hidden' }}>
        <PaperGrain opacity={0.08} color={HC.ink} blend="multiply" />
        <ProductPattern color={HC.ink} opacity={0.07} blend="multiply" strokeWidth={1.4} />
        <MaskingTape width={170} height={22} color={HC.tapeBlue}  rotate={-14} top={32} left={-30} />
        <MaskingTape width={150} height={22} color={HC.tapeWhite} rotate={12}  top={56} right={-20} />

        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 40, alignItems: 'center', zIndex: 2 }}>
          <div>
            <Tape rotate={-3} fontSize={12}>Dispatches from the counter:</Tape>
            <h1 style={{ margin: '20px 0 0' }}>
              <StackedDisplay fontSize={208} variant="cream-on-cream" lineHeight={0.88}
                style={{ color: HC.ink, textShadow: `2px 2px 0 ${HC.ink}, 4px 4px 0 ${HC.ink}, 6px 6px 0 ${HC.creamWarm}, 8px 8px 0 ${HC.creamWarm}, 10px 10px 0 ${HC.creamWarm}, 12px 14px 18px rgba(0,0,0,0.18)` }}>
                The
              </StackedDisplay>
              <span style={{ ...HS.serif, fontStyle: 'italic', color: HC.blue, fontSize: 200, letterSpacing: '-0.02em', textShadow: `4px 6px 0 ${HC.blueDark}` }}>journal.</span>
            </h1>
            <p style={{ ...HS.serif, fontStyle: 'italic', fontSize: 22, lineHeight: 1.45, marginTop: 22, maxWidth: 580, color: HC.ink }}>
              Field notes and the occasional long-read from behind the counter.
            </p>
          </div>
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <SmokeBurst size={400} fill={HC.cream} stroke={HC.ink} strokeWidth={3}
              style={{ position: 'absolute', top: '50%', left: '50%', marginTop: -200, marginLeft: -200, opacity: 0.95, transform: 'rotate(8deg)' }} />
            <Sunny mood="thumbs" size={320} style={{ position: 'relative' }} />
          </div>
        </div>
      </section>

      {/* FEATURED — taped composition with Sunny peeking */}
      <section style={{ padding: '72px 40px 32px', background: HC.cream, position: 'relative', overflow: 'hidden' }}>
        <PaperGrain opacity={0.06} color={HC.ink} blend="multiply" />
        <ProductPattern color={HC.blue} opacity={0.05} blend="multiply" strokeWidth={1.2} />
        <SunnyPeek mood="love" size={220} corner="tr" offset={-50} rotate={14} />
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <TapedPhoto src={featured.img} size={460} aspect="4/3" rotate={-3} tapeColor={HC.tape} />
          </div>
          <div style={{ position: 'relative' }}>
            <Sticker color={HC.blue} fg={HC.cream} rotate={-5} style={{ marginBottom: 14 }}>{featured.tag} · {featured.date}</Sticker>
            <h2 style={{ margin: '6px 0 16px' }}>
              <StackedDisplay fontSize={64} variant="cream-on-cream" lineHeight={0.95}
                style={{ color: HC.ink, textShadow: `2px 2px 0 ${HC.ink}, 4px 4px 0 ${HC.ink}, 6px 6px 0 ${HC.yellow}, 8px 8px 0 ${HC.yellow}, 0 14px 18px rgba(0,0,0,0.10)` }}>
                The Friday 5pm<br/>drop, explained.
              </StackedDisplay>
            </h2>
            <p style={{ ...HS.serif, fontStyle: 'italic', fontSize: 18, lineHeight: 1.5, color: HC.ink }}>
              {featured.blurb}
            </p>
            <div style={{ marginTop: 22, display: 'flex', gap: 14, alignItems: 'center' }}>
              <Button as="a" href="#" color={HC.blue} fg={HC.cream} size="md">Read it →</Button>
              <span style={{ ...HS.mono, fontSize: 11, color: HC.ink, opacity: 0.65 }}>{featured.read}</span>
              <SunSparkle size={18} color={HC.blue} />
            </div>
          </div>
        </div>
      </section>

      {/* GRID — taped photos in a loose 3-up */}
      <section style={{ padding: '32px 40px 96px', background: HC.cream, position: 'relative' }}>
        <div style={{ position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 28 }}>
            <Kicker color={HC.blue}>Recent dispatches</Kicker>
            <div style={{ display: 'flex', gap: 18, ...HS.mono, fontSize: 11 }}>
              {['All', 'Field', 'Drops', 'How-To', 'Local'].map((f, i) => (
                <a key={f} href="#" style={{
                  color: i === 0 ? HC.ink : 'rgba(26,18,7,0.5)',
                  textDecoration: 'none',
                  borderBottom: i === 0 ? `2px solid ${HC.blue}` : '2px solid transparent',
                  paddingBottom: 4,
                }}>{f}</a>
              ))}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, rowGap: 56 }}>
            {posts.map((p, i) => {
              const rotates = [-2, 1, -1, 1.5, -1.5, 2];
              const tapes = [HC.tape, HC.tapeBlue, HC.tapeWhite, HC.tape, HC.tapeBlue, HC.tapeWhite];
              return (
                <a key={p.title} href="#" style={{
                  textDecoration: 'none', color: HC.ink,
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16,
                }}>
                  <TapedPhoto
                    src={p.img}
                    size={340}
                    aspect="4/3"
                    rotate={rotates[i]}
                    tapeColor={tapes[i]}
                  />
                  <div style={{ width: 340, textAlign: 'left' }}>
                    <div style={{ ...HS.mono, fontSize: 10, color: HC.blue }}>✦ {p.tag.toUpperCase()}</div>
                    <div style={{ ...HS.display, fontSize: 22, marginTop: 6, lineHeight: 1.15, textTransform: 'uppercase' }}>{p.title}</div>
                    <div style={{ ...HS.mono, fontSize: 10, color: 'rgba(26,18,7,0.55)', marginTop: 8, display: 'flex', justifyContent: 'space-between' }}>
                      <span>{p.date}</span><span>{p.read}</span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ---------- ABOUT — manifesto + Sunny peace + WhereAtLockup closer ---------- */
function HTAboutPage() {
  return (
    <div style={{ ...HS.page }} data-screen-label="05 About">
      <Nav active="about" />

      {/* HERO */}
      <section style={{ padding: '72px 40px 48px', background: HC.cream, borderBottom: `2px solid ${HC.ink}`, position: 'relative', overflow: 'hidden' }}>
        <PaperGrain opacity={0.06} color={HC.ink} blend="multiply" />
        <ProductPattern color={HC.blue} opacity={0.05} blend="multiply" strokeWidth={1.2} />
        <MaskingTape width={170} height={22} color={HC.tape}      rotate={-14} top={32} left={-30} />
        <MaskingTape width={150} height={22} color={HC.tapeBlue}  rotate={12}  top={56} right={-20} />

        <SunnyPeek mood="hat" size={200} corner="tr" offset={-30} rotate={16} />

        <div style={{ position: 'relative', zIndex: 2 }}>
          <Tape rotate={-3} fontSize={12}>A small heady shop in NWA:</Tape>
          <h1 style={{ margin: '24px 0 0' }}>
            <StackedDisplay fontSize={208} variant="cream-on-cream" lineHeight={0.86}
              style={{ color: HC.ink, textShadow: `2px 2px 0 ${HC.ink}, 4px 4px 0 ${HC.ink}, 6px 6px 0 ${HC.creamWarm}, 8px 8px 0 ${HC.creamWarm}, 10px 10px 0 ${HC.creamWarm}, 12px 14px 18px rgba(0,0,0,0.18)` }}>
              Where a<br/><span style={{ color: HC.blue }}>river</span>
            </StackedDisplay>
            <span style={{ ...HS.serif, fontStyle: 'italic', color: HC.blue, fontSize: 184, letterSpacing: '-0.02em', textShadow: `4px 6px 0 ${HC.blueDark}` }}>begins.</span>
          </h1>
        </div>
      </section>

      {/* MANIFESTO — Sunny taped to the page */}
      <section style={{ padding: '88px 40px', background: HC.cream, position: 'relative', overflow: 'hidden' }}>
        <PaperGrain opacity={0.05} color={HC.ink} blend="multiply" />
        <ProductPattern color={HC.ink} opacity={0.04} blend="multiply" strokeWidth={1.2} />
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '0.95fr 1.05fr', gap: 56, alignItems: 'flex-start' }}>
          <div style={{ position: 'sticky', top: 32, display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative' }}>
              {/* Burst halo behind Sunny */}
              <SmokeBurst size={520} fill={HC.yellow} stroke={HC.ink} strokeWidth={3}
                style={{ position: 'absolute', top: -30, left: -30, opacity: 0.9, transform: 'rotate(10deg)', zIndex: 0 }} />
              <Sunny mood="peace" size={460} style={{ position: 'relative', zIndex: 1 }} />
              <Sticker color={HC.blue} fg={HC.cream} rotate={-8} style={{ position: 'absolute', bottom: 10, right: -20, zIndex: 2 }}>since 2024</Sticker>
            </div>
          </div>
          <div>
            <Kicker color={HC.blue}>Manifesto</Kicker>
            <p style={{ ...HS.serif, fontStyle: 'italic', fontSize: 28, lineHeight: 1.4, marginTop: 18, color: HC.ink }}>
              A small accessories, apparel, and gift shop tucked just inside
              The Source in Rogers, AR.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.65, marginTop: 20, maxWidth: 560, color: HC.ink, opacity: 0.88 }}>
              Big-name brands and local NWA artisans alike — heady glass,
              smell-proof carry, the perfect cream-on-cream tee. Refreshed
              weekly. Open to anyone, no card needed.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.65, marginTop: 14, maxWidth: 560, color: HC.ink, opacity: 0.88 }}>
              Named <em style={{ ...HS.serif, color: HC.blue, fontStyle: 'italic' }}>Headwaters</em>{' '}
              for the place a river begins — clear, cold, undisturbed.
              A place to start something. Stop in.
            </p>

            <div style={{ marginTop: 36, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
              {[
                { n: '16',  l: 'brands stocked',     r: -1.5 },
                { n: '228', l: 'items on the floor', r:  1   },
                { n: '1',   l: 'heady drop / week',  r: -0.6 },
              ].map(s => (
                <TornCard key={s.l} bg={HC.creamSoft} edges="all" rotate={s.r} padding="22px 24px">
                  <div style={{ ...HS.display, fontSize: 56, color: HC.blue, lineHeight: 1 }}>{s.n}</div>
                  <div style={{ ...HS.mono, fontSize: 10, color: HC.ink, marginTop: 8 }}>{s.l}</div>
                </TornCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM — taped photos, Sunny "love" peek */}
      <section style={{ background: HC.blueDark, color: HC.cream, padding: '88px 40px', position: 'relative', overflow: 'hidden' }}>
        <PaperGrain opacity={0.05} color={HC.cream} blend="screen" />
        <ProductPattern color={HC.cream} opacity={0.06} blend="screen" strokeWidth={1.2} />
        <SunnyPeek mood="love" size={200} corner="tr" offset={-30} rotate={14} />
        <div style={{ position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 36 }}>
            <div>
              <Kicker color={HC.yellow}>Behind the counter</Kicker>
              <h2 style={{ margin: '14px 0 0' }}>
                <StackedDisplay fontSize={84} variant="cream-on-ink" lineHeight={0.95}>
                  People, not <span style={{ color: HC.yellow }}>profiles</span>.
                </StackedDisplay>
              </h2>
            </div>
            <BrandBadge size="sm" rotate={4} color={HC.yellow} fg={HC.ink} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, rowGap: 56 }}>
            {[
              { name: 'Jeremy',         role: 'Owner · buyer',      q: '"A shop I\'d actually want to walk into."',           img: 'assets/photo-jeremy.avif', r: -2 },
              { name: 'The floor team', role: 'Counter · curators', q: '"No upsell scripts. Just gear talk."',                 img: 'assets/photo-2.avif',      r:  1.5 },
              { name: 'The artisans',   role: 'Local glass + goods', q: '"Friday at 5. One per week. Gone is gone."',          img: 'assets/photo-5.avif',      r: -1 },
            ].map(p => (
              <div key={p.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
                <TapedPhoto src={p.img} size={340} aspect="4/3" rotate={p.r} tapeColor={HC.tape} />
                <div style={{ width: 340 }}>
                  <div style={{ ...HS.mono, fontSize: 10, color: HC.yellow }}>✦ {p.role.toUpperCase()}</div>
                  <div style={{ ...HS.display, fontSize: 28, marginTop: 6, lineHeight: 1, textTransform: 'uppercase' }}>{p.name}</div>
                  <p style={{ ...HS.serif, fontStyle: 'italic', fontSize: 15, lineHeight: 1.5, marginTop: 10, color: 'rgba(245,236,217,0.88)' }}>
                    {p.q}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSER — WhereAtLockup on a blue field */}
      <section style={{ padding: '96px 40px 88px', background: HC.blue, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <PaperGrain opacity={0.06} color={HC.cream} blend="screen" />
        <ProductPattern color={HC.cream} opacity={0.10} blend="screen" strokeWidth={1.4} />

        {/* Two bursts */}
        <SmokeBurst size={300} fill={HC.yellow} stroke={HC.ink} strokeWidth={2}
          style={{ position: 'absolute', top: 30, left: -40, opacity: 0.9, transform: 'rotate(-12deg)' }} />
        <SmokeBurst size={260} fill={HC.cream} stroke={HC.ink} strokeWidth={2}
          style={{ position: 'absolute', bottom: 30, right: -30, opacity: 0.9, transform: 'rotate(18deg)' }} />

        <div style={{ position: 'relative' }}>
          <Tape rotate={-3} fontSize={12} color={HC.tapeWhite}>A small shop in Rogers:</Tape>
          <div style={{ marginTop: 36 }}>
            <WhereAtLockup logoHeight={140} fontSize={84} color={HC.cream} accent={HC.yellow} />
          </div>
          <p style={{ ...HS.serif, fontStyle: 'italic', fontSize: 20, lineHeight: 1.5, marginTop: 28, color: 'rgba(245,236,217,0.92)', maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            4505 W Poplar, Rogers AR — inside The Source. Open every day.
          </p>
          <div style={{ marginTop: 30, display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
            <Button as="a" href="#" color={HC.yellow} fg={HC.ink}>Get directions →</Button>
            <Button as="a" href="#" color={HC.cream}  fg={HC.ink}>This Friday's drop</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

window.HTVisitPage = HTVisitPage;
window.HTJournalPage = HTJournalPage;
window.HTAboutPage = HTAboutPage;
