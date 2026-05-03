/* ============================================================
   HEADY TRIP — Home + Showcase
   - "This week" + Calendar sections retired in favor of live IG/FB feeds.
   - Sunny shows up many times: peeking from corners,
     pinned to cards, anchoring sections.
   - Holtzman runs huge with stacked drop-shadows; Sonoran italic
     does pull-quotes + captions; Gunnar carries body.
   ============================================================ */

/* ---------- (deprecated) Events block — replaced by HTSocialFeed.
   Stub returns null so any stray reference no-ops gracefully. ---------- */
function HTEventsBlock() { return null; }

/* ---------- HTFlyerBoard — retired. Stub for back-compat. ---------- */
function HTFlyerBoard() { return null; }

/* ============================================================
   Reusable: Social Feed — IG + FB wall
   Replaces both the "This Week" board and the events calendar.
   Accepts tone='light' (default) or tone='dark' for Visit page.
   ============================================================ */
function HTSocialFeed({ tone = 'light' }) {
  const dark = tone === 'dark';
  const fg   = dark ? HC.cream   : HC.ink;
  const bg   = dark ? HC.blueDark : HC.cream;

  /* 9 posts: 6 IG + 3 FB. 7 unique images → reuse photo-4 and photo-jeremy. */
  const posts = [
    {
      net: 'ig', img: 'assets/photo-1.avif',
      caption: 'Heady Drop №43 landed tonight — Maple Bend Glass. She\'s a one-of-one and she won\'t last the weekend.',
      eng: '♡ 412 · 28 comments · 2h',
    },
    {
      net: 'ig', img: 'assets/photo-3.avif',
      caption: 'Cream-on-cream tee restocked. Limited run — grab one before Friday.',
      eng: '♡ 287 · 14 comments · 6h',
    },
    {
      net: 'fb', img: 'assets/photo-jeremy.avif',
      caption: 'Dope Drive is back May 17 — patient drive right here at the shop. Come through, bring a friend, do some good.',
      eng: '👍 91 · 12 comments · 1d',
    },
    {
      net: 'ig', img: 'assets/photo-5.avif',
      caption: 'New Adam Driver walnut tray just hit the floor. Hand-turned, smells incredible, pairs with everything.',
      eng: '♡ 356 · 19 comments · 2d',
    },
    {
      net: 'ig', img: 'assets/photo-2.avif',
      caption: 'Saturday energy at 4505. No upsell scripts. Just gear talk and good people.',
      eng: '♡ 198 · 9 comments · 3d',
    },
    {
      net: 'fb', img: 'assets/photo-6.avif',
      caption: 'Vendor Day with Hippie Hounds is Jun 7 — mark it. Local brands, live demo, good vibes.',
      eng: '👍 142 · 17 comments · 4d',
    },
    {
      net: 'ig', img: 'assets/photo-4.avif',
      caption: 'Glassblowers panel Jun 20 — after hours, limited seats. DM us to hold a spot.',
      eng: '♡ 231 · 33 comments · 5d',
    },
    {
      net: 'ig', img: 'assets/photo-jeremy.avif',
      caption: 'Jeremy on the floor today. Ask him about the new Puffco drop. He\'ll talk your ear off (in the best way).',
      eng: '♡ 174 · 11 comments · 6d',
    },
    {
      net: 'fb', img: 'assets/photo-4.avif',
      caption: '420 Weekend Apr 17–20 was a vibe. 20% off all glass, free lighters with every hand pipe, and Sunny had a field day.',
      eng: '👍 308 · 41 comments · 2w',
    },
  ];

  const rotates = [-2, 1, -1.5, 2, -1, 1.5, -2.5, 0.8, -1.2];
  const tapes   = [
    HC.tape, HC.tapeBlue, HC.tapeWhite,
    HC.tape, HC.tapeBlue, HC.tapeWhite,
    HC.tape, HC.tapeBlue, HC.tapeWhite,
  ];

  /* Small inline network badge — IG orange or FB blue pill */
  function NetBadge({ net }) {
    const isIG = net === 'ig';
    return (
      <span style={{
        display: 'inline-block',
        background: isIG ? '#E1306C' : '#1877F2',
        color: '#fff',
        fontFamily: 'ui-monospace, Menlo, monospace',
        fontSize: 9,
        fontWeight: 700,
        letterSpacing: '0.08em',
        padding: '2px 6px',
        borderRadius: 3,
        verticalAlign: 'middle',
        marginRight: 6,
        border: `1px solid ${dark ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.12)'}`,
      }}>
        {isIG ? 'IG' : 'FB'}
      </span>
    );
  }

  return (
    <section style={{
      padding: '88px 40px 104px',
      background: bg,
      color: fg,
      position: 'relative',
      overflow: 'hidden',
    }}>
      <PaperGrain opacity={dark ? 0.05 : 0.06} color={dark ? HC.cream : HC.ink} blend={dark ? 'screen' : 'multiply'} />
      <ProductPattern color={dark ? HC.cream : HC.blue} opacity={dark ? 0.05 : 0.05} blend={dark ? 'screen' : 'multiply'} />

      {/* Sunny peeks from top-right */}
      <SunnyPeek mood="love" size={220} corner="tr" offset={-40} rotate={16} />

      <div style={{ position: 'relative' }}>

        {/* ── Header ── */}
        <div style={{ marginBottom: 36 }}>
          <Kicker color={dark ? HC.yellow : HC.blue}>Live from the counter</Kicker>
          <h2 style={{ ...HS.display, fontSize: 92, margin: '14px 0 0', lineHeight: 0.92, textTransform: 'uppercase', color: fg }}>
            Follow{' '}
            <Highlight color={HC.yellow}>along.</Highlight>
            <SunSparkle size={26} color={dark ? HC.yellow : HC.blue} style={{ marginLeft: 10 }} />
          </h2>
          {/* Dual-network handle line */}
          <div style={{ marginTop: 14, ...HS.mono, fontSize: 11, color: dark ? 'rgba(245,236,217,0.65)' : 'rgba(26,18,7,0.60)', letterSpacing: '0.04em' }}>
            @headwaters_provisions on Instagram&nbsp;&nbsp;·&nbsp;&nbsp;@headwatersprovisions on Facebook
          </div>
        </div>

        {/* ── 9-post taped photo grid ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, rowGap: 64 }}>
          {posts.map((p, i) => (
            <a key={i} href="#" style={{ textDecoration: 'none', color: fg, display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: 320 }}>
                <TapedPhoto
                  src={p.img}
                  size={320}
                  aspect="1/1"
                  rotate={rotates[i]}
                  tapeColor={tapes[i]}
                  caption=""
                  captionAlign="left"
                />
                {/* Network badge — stickered to top-left corner of the photo */}
                <div style={{
                  position: 'absolute',
                  top: 14,
                  left: 10,
                  zIndex: 10,
                  transform: `rotate(${rotates[i] * -0.6}deg)`,
                }}>
                  <Sticker
                    color={p.net === 'ig' ? '#E1306C' : '#1877F2'}
                    fg="#fff"
                    rotate={rotates[i] > 0 ? -4 : 4}
                    style={{ fontSize: 10, padding: '3px 8px' }}
                  >
                    {p.net === 'ig' ? 'IG' : 'FB'}
                  </Sticker>
                </div>
                {/* Caption + engagement below the photo */}
                <div style={{
                  marginTop: 12,
                  paddingLeft: 4,
                  transform: `rotate(${rotates[i] * 0.3}deg)`,
                }}>
                  <p style={{
                    ...HS.serif,
                    fontStyle: 'italic',
                    fontSize: 13,
                    lineHeight: 1.5,
                    color: dark ? 'rgba(245,236,217,0.85)' : 'rgba(26,18,7,0.78)',
                    margin: '0 0 6px',
                  }}>
                    {p.caption}
                  </p>
                  <div style={{ ...HS.mono, fontSize: 10, color: dark ? 'rgba(245,236,217,0.50)' : 'rgba(26,18,7,0.45)' }}>
                    <NetBadge net={p.net} />{p.eng}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* ── Dual CTA row ── */}
        <div style={{ marginTop: 64, display: 'flex', gap: 16, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button as="a" href="https://www.instagram.com/headwaters_provisions" color={HC.yellow} fg={HC.ink}>
            Follow on Instagram ↗
          </Button>
          <Button as="a" href="https://www.facebook.com/headwatersprovisions" color={HC.cream} fg={HC.ink}>
            Like on Facebook ↗
          </Button>
        </div>

      </div>
    </section>
  );
}

/* ---------- Home Page ---------- */
function HTHomePage() {
  return (
    <div style={{ ...HS.page }} data-screen-label="01 Home">
      <Nav active="home" tone="dark" />

      {/* HERO — Sunny + giant stacked display headline */}
      <section style={{
        background: HC.blue, color: HC.cream,
        padding: '72px 40px 104px', position: 'relative', overflow: 'hidden',
      }}>
        <PaperGrain opacity={0.06} color={HC.cream} blend="screen" />
        <ProductPattern color={HC.cream} opacity={0.10} blend="screen" strokeWidth={1.4} />

        {/* Decorative tape strips on the section corners */}
        <MaskingTape width={180} height={26} color={HC.tape}      rotate={-22} top={28}  left={-30} />
        <MaskingTape width={160} height={24} color={HC.tapeWhite} rotate={18}  top={50}  right={-20} />

        {/* Big spiky burst behind Sunny */}
        <SmokeBurst size={520} fill={HC.yellow} stroke={HC.ink} strokeWidth={3}
          style={{ position: 'absolute', top: 80, right: 60, opacity: 0.95, transform: 'rotate(8deg)', zIndex: 0 }} />

        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 48, alignItems: 'center', zIndex: 2 }}>
          <div>
            <Tape rotate={-3} fg={HC.ink} fontSize={12}>Headwaters Provisions presents:</Tape>
            <h1 style={{ margin: '28px 0 0' }}>
              <StackedDisplay fontSize={208} variant="cream-on-blue" lineHeight={0.86} letterSpacing="-0.01em">
                Where's<br/>your <span style={{ color: HC.yellow, WebkitTextStroke: `0` }}>head</span>
              </StackedDisplay>
              <div style={{ ...HS.serif, fontStyle: 'italic', fontSize: 184, letterSpacing: '-0.02em', color: HC.cream, lineHeight: 0.86, marginTop: 4, textShadow: `4px 6px 0 ${HC.blueDark}, 0 12px 22px rgba(0,0,0,0.18)` }}>
                at?
              </div>
            </h1>
            <p style={{
              marginTop: 28, fontSize: 19, lineHeight: 1.5, maxWidth: 520,
              color: 'rgba(245,236,217,0.92)',
            }}>
              A small, heady cannabis-accessories shop tucked just inside The
              Source in Rogers, AR. Big-name gear, local NWA artisans, one new
              heady piece every Friday at 5.
            </p>
            <div style={{ display: 'flex', gap: 14, marginTop: 32, alignItems: 'center', flexWrap: 'wrap' }}>
              <Button as="a" href="#" color={HC.yellow} fg={HC.ink}>See the showcase →</Button>
              <Button as="a" href="#" color={HC.cream}  fg={HC.ink}>Plan a visit</Button>
              <SunSparkle size={22} color={HC.yellow} />
            </div>
          </div>

          {/* Sunny + a taped photo behind */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 540 }}>
            <div style={{ position: 'absolute', top: 30, right: 40, zIndex: 2 }}>
              <TapedPhoto src="assets/photo-1.avif" size={240} aspect="4/5" rotate={6} tapeColor={HC.tape} />
            </div>
            <div style={{ position: 'absolute', top: 220, left: -10, zIndex: 2 }}>
              <TapedPhoto src="assets/photo-3.avif" size={200} aspect="1/1" rotate={-7} tapeColor={HC.tapeWhite} />
            </div>
            <Sunny mood="walk" size={520} style={{ position: 'relative', zIndex: 3, filter: 'drop-shadow(8px 8px 0 rgba(0,0,0,0.22)) drop-shadow(0 14px 22px rgba(0,0,0,0.18))' }} />
            {/* Small Sunny hat-headed buddy floating */}
            <Sunny mood="hat" size={120} style={{ position: 'absolute', bottom: 20, right: -10, zIndex: 4, transform: 'rotate(-12deg)' }} />
          </div>
        </div>
      </section>

      <Marquee bg={HC.ink} fg={HC.yellow} text="✦ where's your head at?" />

      {/* HEADY OF THE WEEK — single calm beat, with WordCards */}
      <section style={{ background: HC.blueDark, color: HC.cream, padding: '88px 40px', position: 'relative', overflow: 'hidden' }}>
        <PaperGrain opacity={0.05} color={HC.cream} blend="screen" />
        <ProductPattern color={HC.cream} opacity={0.06} blend="screen" />
        {/* Sunny "smoking" peeks from bottom left as a wink */}
        <SunnyPeek mood="smoking" size={220} corner="bl" offset={-50} rotate={-12} />
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
          <div>
            <Kicker color={HC.yellow}>Heady of the week</Kicker>
            <h2 style={{ margin: '14px 0 0' }}>
              <StackedDisplay fontSize={132} variant="cream-on-ink" lineHeight={0.9}>
                One of <span style={{ color: HC.yellow }}>one</span>
              </StackedDisplay>
              <span style={{ ...HS.serif, fontStyle: 'italic', fontSize: 108, color: HC.cream, lineHeight: 0.9, textShadow: `4px 5px 0 ${HC.ink}` }}>.</span>
            </h2>
            <p style={{ marginTop: 22, fontSize: 19, lineHeight: 1.5, maxWidth: 460, color: 'rgba(245,236,217,0.9)' }}>
              Local glassblowers drop one new piece every Friday at 5.
              We keep one. When it's gone, it's gone.
            </p>
            <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 14 }}>
              <Button as="a" href="#" color={HC.yellow} fg={HC.ink}>This Friday's piece →</Button>
              <SunSparkle size={20} color={HC.yellow} />
            </div>
          </div>
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            {/* Burst behind the photo */}
            <SmokeBurst size={520} fill={HC.blue} stroke={HC.cream} strokeWidth={2}
              style={{ position: 'absolute', top: '50%', left: '50%', marginTop: -260, marginLeft: -260, opacity: 0.4, transform: 'rotate(14deg)' }} />
            <TapedPhoto src="assets/photo-1.avif" size={460} aspect="1/1" rotate={3} tapeColor={HC.tape} caption="№43 · Maple Bend Glass · 5/23" captionAlign="center" />
          </div>
        </div>
      </section>

      {/* SOCIAL FEED — IG + FB */}
      <HTSocialFeed />

      <Footer />
    </div>
  );
}

/* ---------- Showcase Page ---------- */
function HTShowcasePage() {
  const categories = [
    { name: 'Heady Glass',       desc: 'One-of-one pieces from local NWA blowers.',          img: 'assets/photo-1.avif', count: 38 },
    { name: 'Vapes & Tech',      desc: 'Puffco, Storz & Bickel, PAX.',                       img: 'assets/photo-5.avif', count: 24 },
    { name: 'Papers & Wraps',    desc: 'RAW, OCB, Blazy Susans.',                            img: 'assets/photo-4.avif', count: 41 },
    { name: 'Carry & Stash',     desc: 'Smell-proof bags by Revelry & RYOT.',                img: 'assets/photo-2.avif', count: 29 },
    { name: 'Apparel',           desc: 'House tees, Hippie Hounds, Marley Natural.',         img: 'assets/photo-6.avif', count: 34 },
    { name: 'Wood Goods & Trays',desc: 'Adam Driver walnut, hand-turned.',                   img: 'assets/photo-3.avif', count: 22 },
  ];

  const brands = [
    'Puffco', 'RAW', 'Blazy Susans', 'Hippie Hounds',
    'Adam Driver', 'Revelry', 'Storz & Bickel', 'Grav Labs',
    'Marley Natural', 'PAX', 'Maple Bend', 'Headwaters House',
  ];

  return (
    <div style={{ ...HS.page }} data-screen-label="02 Showcase">
      <Nav active="showcase" />

      {/* HERO — yellow page, taped photo + Sunny woo */}
      <section style={{ padding: '64px 40px 64px', background: HC.yellow, borderBottom: `2px solid ${HC.ink}`, position: 'relative', overflow: 'hidden' }}>
        <PaperGrain opacity={0.08} color={HC.ink} blend="multiply" />
        <ProductPattern color={HC.ink} opacity={0.07} blend="multiply" strokeWidth={1.4} />
        <MaskingTape width={180} height={24} color={HC.tapeWhite} rotate={-14} top={32}  left={-30} />
        <MaskingTape width={160} height={22} color={HC.tapeBlue}  rotate={12}  top={56}  right={-20} />

        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 40, alignItems: 'center', zIndex: 2 }}>
          <div>
            <Tape rotate={-2} fontSize={12}>Headwaters Provisions presents:</Tape>
            <h1 style={{ margin: '20px 0 0' }}>
              <StackedDisplay fontSize={172} variant="cream-on-cream" lineHeight={0.9}
                style={{ color: HC.ink, textShadow: `2px 2px 0 ${HC.ink}, 4px 4px 0 ${HC.ink}, 6px 6px 0 ${HC.creamWarm}, 8px 8px 0 ${HC.creamWarm}, 10px 10px 0 ${HC.creamWarm}, 12px 14px 18px rgba(0,0,0,0.18)` }}>
                Stock the<br/><span style={{ color: HC.blue }}>vibe</span>.
              </StackedDisplay>
            </h1>
            <p style={{ ...HS.serif, fontStyle: 'italic', fontSize: 22, lineHeight: 1.45, marginTop: 22, maxWidth: 560, color: HC.ink }}>
              The brands we stock and the gear you'll find on the floor.
              Refreshed weekly.
            </p>
            <div style={{ marginTop: 26, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
              <Button as="a" href="#" color={HC.cream} fg={HC.ink}>Come see it →</Button>
              <PillCallout sub="updated weekly" rotate={4}>16 brands · 228 items</PillCallout>
            </div>
          </div>
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <SmokeBurst size={420} fill={HC.cream} stroke={HC.ink} strokeWidth={3}
              style={{ position: 'absolute', top: '50%', left: '50%', marginTop: -210, marginLeft: -210, opacity: 0.95, transform: 'rotate(8deg)' }} />
            <Sunny mood="woo" size={400} style={{ position: 'relative', filter: 'drop-shadow(6px 8px 0 rgba(0,0,0,0.22)) drop-shadow(0 14px 22px rgba(0,0,0,0.16))' }} />
          </div>
        </div>
      </section>

      {/* CATEGORIES — taped photo cards on a torn-paper grid */}
      <section style={{ padding: '88px 40px 96px', background: HC.cream, position: 'relative', overflow: 'hidden' }}>
        <PaperGrain opacity={0.06} color={HC.ink} blend="multiply" />
        <ProductPattern color={HC.blue} opacity={0.05} blend="multiply" strokeWidth={1.2} />
        <SunnyPeek mood="thumbs" size={200} corner="tr" offset={-40} rotate={14} />
        <div style={{ position: 'relative' }}>
          <Kicker color={HC.blue}>On the floor</Kicker>
          <h2 style={{ ...HS.display, fontSize: 88, margin: '14px 0 36px', lineHeight: 0.92, textTransform: 'uppercase' }}>
            What we <Highlight color={HC.yellow}>stock</Highlight>
            <SunSparkle size={26} color={HC.blue} style={{ marginLeft: 10 }} />
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, rowGap: 56 }}>
            {categories.map((c, i) => {
              const rotates = [-1.5, 0.8, -0.6, 1.2, -1, 0.5];
              return (
                <div key={c.name} style={{ display: 'flex', justifyContent: 'center' }}>
                  <div style={{
                    position: 'relative',
                    transform: `rotate(${rotates[i]}deg)`,
                    background: HC.creamSoft, padding: 14,
                    width: '100%', maxWidth: 420,
                    boxShadow: paperShadow(3),
                  }}>
                    <PaperTexture variant="linen" opacity={0.08} blend="multiply" />
                    <div style={{
                      position: 'relative',
                      aspectRatio: '4/3',
                      background: `${HC.blue} url(${c.img}) center/cover`,
                      boxShadow: `
                        inset 0 0 0 1px rgba(255,255,255,0.18),
                        inset 0 1px 2px rgba(255,255,255,0.30),
                        inset 0 0 18px rgba(0,0,0,0.18),
                        0 1px 2px rgba(0,0,0,0.10)
                      `,
                    }} />
                    <MaskingTape width={92} height={20} color={i % 2 === 0 ? HC.tape : HC.tapeBlue} rotate={-10} top={-10} left={-18} />
                    <Sticker color={HC.yellow} rotate={6} style={{ position: 'absolute', top: 12, right: 12 }}>
                      ~{c.count} pieces
                    </Sticker>
                    {/* Corner curl */}
                    <div aria-hidden style={{
                      position: 'absolute', bottom: -2, right: -2,
                      width: 36, height: 36, pointerEvents: 'none',
                      background: `linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.10) 50%, rgba(0,0,0,0.18) 70%, rgba(0,0,0,0) 80%)`,
                      clipPath: 'polygon(100% 0%, 100% 100%, 0% 100%)',
                      filter: 'blur(0.4px)',
                    }} />
                    <div style={{ position: 'relative', padding: '18px 10px 10px' }}>
                      <div style={{ ...HS.display, fontSize: 28, lineHeight: 1.05, textTransform: 'uppercase' }}>{c.name}</div>
                      <p style={{ ...HS.serif, fontStyle: 'italic', fontSize: 15, lineHeight: 1.45, marginTop: 8, color: 'rgba(26,18,7,0.78)' }}>{c.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BRANDS — paper-scrap labels in a loose grid + Sunny pinned */}
      <section style={{ padding: '88px 40px', background: HC.creamSoft, position: 'relative', overflow: 'hidden' }}>
        <PaperGrain opacity={0.06} color={HC.ink} blend="multiply" />
        <ProductPattern color={HC.ink} opacity={0.04} blend="multiply" strokeWidth={1.2} />
        <SunnyPeek mood="jump" size={220} corner="bl" offset={-50} rotate={-10} />
        <div style={{ position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32 }}>
            <div>
              <Kicker color={HC.blue}>The line-up</Kicker>
              <h2 style={{ ...HS.display, fontSize: 80, margin: '14px 0 0', lineHeight: 0.95, textTransform: 'uppercase' }}>
                Every brand on <Highlight color={HC.yellow}>the floor</Highlight>
              </h2>
            </div>
            <BrandBadge size="sm" rotate={5} />
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 18, alignItems: 'center', justifyContent: 'flex-start' }}>
            {brands.map((b, i) => {
              const rotates = [-2, 3, -1, 2, -3, 1, -2, 3, -1, 2, -3, 1];
              const colors = [HC.cream, HC.yellow, HC.cream, HC.creamSoft, HC.cream, HC.yellow, HC.cream, HC.creamSoft, HC.cream, HC.yellow, HC.cream, HC.creamSoft];
              return (
                <div key={b} style={{
                  position: 'relative',
                  background: `linear-gradient(180deg, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0) 30%, rgba(0,0,0,0.04) 100%), ${colors[i]}`,
                  border: `2px solid ${HC.ink}`,
                  padding: '22px 30px',
                  transform: `rotate(${rotates[i]}deg)`,
                  boxShadow: paperShadow(2),
                  borderRadius: 4,
                  overflow: 'hidden',
                }}>
                  <PaperTexture variant="linen" opacity={0.07} blend="multiply" />
                  <div style={{ position: 'relative', ...HS.mono, fontSize: 9, color: HC.blue }}>№ {String(i+1).padStart(2,'0')}</div>
                  <div style={{ position: 'relative', ...HS.display, fontSize: 28, lineHeight: 1, textTransform: 'uppercase', marginTop: 4 }}>{b}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

window.HTHomePage = HTHomePage;
window.HTShowcasePage = HTShowcasePage;
window.HTSocialFeed = HTSocialFeed;
