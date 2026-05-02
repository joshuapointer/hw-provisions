/* ============================================================
   PROTOTYPE PAGES — Home, Showcase (filterable), Visit (form)
   `mobile` flag adjusts layouts.
   ============================================================ */

/* ============================================================
   HOME
   ============================================================ */
function ProtoHome({ mobile = false }) {
  const r = useRouter();
  const heroRef = React.useRef(null);
  const [orbit, setOrbit] = React.useState({ x: 50, y: 50 });

  return (
    <div style={{ ...HS.page, width: mobile ? '100%' : 1440 }}>
      {mobile ? <ProtoMobileNav active="home" tone="dark" /> : <ProtoNav active="home" tone="dark" />}

      {/* HERO */}
      <section
        ref={heroRef}
        onMouseMove={(e) => {
          if (!heroRef.current) return;
          const r = heroRef.current.getBoundingClientRect();
          setOrbit({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
        }}
        style={{
          background: HC.blue, color: HC.cream,
          padding: mobile ? '32px 16px 60px' : '60px 40px 100px', position: 'relative', overflow: 'hidden',
          minHeight: mobile ? 540 : 760,
        }}>
        <div style={{
          position: 'absolute', top: -180, right: -180,
          transform: `translate(${(orbit.x - 50) * -0.4}px, ${(orbit.y - 50) * -0.4}px)`,
          transition: 'transform .3s ease-out',
        }}>
          <Rings size={mobile ? 380 : 640} color={HC.cream} opacity={0.25} />
        </div>
        <Halftone color={HC.ink} opacity={0.12} dot={2.5} gap={9} />
        <div style={{
          position: 'absolute', bottom: -100, left: -100,
          transform: `translate(${(orbit.x - 50) * 0.3}px, ${(orbit.y - 50) * 0.3}px)`,
          transition: 'transform .3s ease-out',
        }}>
          <Burst size={mobile ? 280 : 420} color={HC.amber} count={36} />
        </div>
        {!mobile && (
          <>
            <div style={{ position: 'absolute', top: 80, right: 540, transform: 'rotate(-12deg)', filter: `drop-shadow(4px 4px 0 ${HC.ink})`, opacity: 0.95 }}>
              <Mushroom size={120} cap={HC.rose} stem={HC.cream} dots={HC.cream} />
            </div>
            <div style={{ position: 'absolute', top: 240, left: 60, transform: 'rotate(8deg)' }}>
              <Eye size={90} iris={HC.amber} lash={HC.ink} />
            </div>
            <div style={{ position: 'absolute', bottom: 140, right: 80, opacity: 0.6 }}>
              <Smoke size={140} color={HC.cream} opacity={0.55} />
            </div>
          </>
        )}
        <div style={{
          position: 'relative',
          display: mobile ? 'block' : 'grid', gridTemplateColumns: '1.3fr 0.7fr', gap: 56, alignItems: 'end',
        }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '8px 14px', border: `2px solid ${HC.ink}`, borderRadius: 999,
              background: HC.amber, color: HC.ink, ...HS.mono, fontSize: mobile ? 9 : 11,
            }}>
              <Glyph kind="mushroom" size={12} color={HC.ink} /> Northwest Arkansas · est. 2024 <Glyph kind="eye" size={12} color={HC.ink} />
            </div>
            <h1 style={{
              ...HS.display, fontSize: mobile ? 84 : 220, lineHeight: 0.84, margin: '20px 0 0', color: HC.cream,
              textShadow: mobile ? `4px 4px 0 ${HC.ink}` : `8px 8px 0 ${HC.ink}`,
              letterSpacing: '-0.03em',
            }}>
              <span style={{ display: 'block' }}>where's your</span>
              <span style={{
                display: 'block', fontStyle: 'italic',
                color: HC.amber,
                textShadow: `none`,
                WebkitTextStroke: `${mobile ? 2 : 3}px ${HC.ink}`,
                paintOrder: 'stroke fill',
                marginLeft: mobile ? 12 : 40,
              }}>head at?</span>
            </h1>
            <Squiggle width={mobile ? 220 : 520} color={HC.amber} />
            <p style={{
              marginTop: 16, fontSize: mobile ? 15 : 22, maxWidth: 540, lineHeight: 1.4,
              ...HS.serif, fontStyle: 'italic', fontWeight: 400, color: 'rgba(245,236,217,0.95)',
            }}>
              small shop, floor-curated. <br/>
              cannabis accessories, apparel, and the kind of gifts that fly under your mom's radar. <br/>
              <span style={{ ...HS.hand, fontStyle: 'normal', fontSize: mobile ? 22 : 30, color: HC.amber, display: 'inline-block', marginTop: 6 }}>
                tucked into the source · rogers ar.
              </span>
            </p>
            <div style={{ display: 'flex', gap: mobile ? 10 : 18, marginTop: mobile ? 24 : 36, alignItems: 'center', flexWrap: 'wrap' }}>
              <div data-inter data-confetti onClick={() => r.navigate('showcase')}>
                <TicketButton color={HC.lime} fg={HC.ink} icon="→" size={mobile ? 'sm' : 'lg'}>see what we stock</TicketButton>
              </div>
              <div data-inter data-confetti onClick={() => r.navigate('visit')}>
                <BlobButton color={HC.cream} fg={HC.ink} rotate={2}>plan a visit</BlobButton>
              </div>
            </div>
          </div>
          {!mobile && (
            <div style={{ position: 'relative', paddingTop: 30 }}>
              <div style={{ transform: 'rotate(3deg)' }}>
                <Sticker color={HC.cream} rotate={0} padding={10} shadow={true}>
                  <div style={{
                    width: 320, aspectRatio: '4/5', overflow: 'hidden',
                    background: `url(assets/photo-3.avif) center/cover`,
                    border: `1px solid ${HC.ink}`,
                  }} />
                  <div style={{ ...HS.hand, fontSize: 26, color: HC.ink, textAlign: 'center', marginTop: 8, lineHeight: 1 }}>
                    one of one ✦
                  </div>
                </Sticker>
              </div>
              <div style={{ position: 'absolute', top: -16, left: -28, zIndex: 2 }}>
                <Sticker color={HC.rose} rotate={-8} padding={10} shadow={false} peel={false}>
                  <div style={{ ...HS.alt, fontSize: 14, color: HC.cream }}>HEADY<br/>DROPS</div>
                  <div style={{ ...HS.mono, fontSize: 9, color: HC.cream, marginTop: 2 }}>FRI · 5PM</div>
                </Sticker>
              </div>
              <div style={{ position: 'absolute', bottom: -12, right: -24, transform: 'rotate(14deg)' }}>
                <Lightning size={56} color={HC.amber} />
              </div>
            </div>
          )}
        </div>
      </section>

      <ProtoMarquee bg={HC.ink} fg={HC.amber} />

      {/* INTRO */}
      <section style={{ padding: mobile ? '40px 16px' : '80px 40px', background: HC.cream, position: 'relative' }}>
        <Halftone color={HC.ink} opacity={0.06} dot={2} gap={11} />
        <div style={{
          display: mobile ? 'block' : 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'center',
        }}>
          {!mobile && (
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'relative', width: 380, height: 380, transform: 'rotate(-3deg)', filter: `drop-shadow(6px 6px 0 ${HC.ink})` }}>
                <div style={{ position: 'absolute', inset: 0, border: `3px solid ${HC.ink}`, overflow: 'hidden' }}>
                  <SunRise size={380} sun={HC.amber} mountain={HC.blueDeep} sky={HC.cream} />
                </div>
              </div>
              <div style={{
                position: 'absolute', top: 24, left: -28,
                ...HS.hand, fontSize: 60, color: HC.rose,
                transform: 'rotate(-8deg)', lineHeight: 0.9, textShadow: `3px 3px 0 ${HC.ink}`,
              }}>good<br/>gear</div>
              <div style={{ position: 'absolute', bottom: 30, right: -20, transform: 'rotate(6deg)' }}>
                <Sticker color={HC.amber} rotate={0} padding={10} peel={false}>
                  <div style={{ ...HS.alt, fontSize: 18, color: HC.ink }}>only.</div>
                </Sticker>
              </div>
            </div>
          )}
          <div>
            <FolioRule n={1} of={6} label="about the shop" />
            <h2 style={{ ...HS.display, fontSize: mobile ? 56 : 116, margin: '12px 0 0', lineHeight: 0.86, color: HC.ink, letterSpacing: '-0.025em' }}>
              small shop. <br/>
              <span style={{ fontStyle: 'italic', color: HC.blue, WebkitTextStroke: `2px ${HC.ink}`, paintOrder: 'stroke fill' }}>floor-curated.</span> <br/>
              fridays at five.
            </h2>
            <div style={{ marginTop: 28, maxWidth: 560 }}>
              <DropCap glyphN="03" color={HC.amber}>
                <span style={{ ...HS.serif, fontSize: mobile ? 17 : 21, lineHeight: 1.5, fontStyle: 'italic' }}>
                  headwaters provisions sits just inside the front doors of the source — rogers, arkansas. cannabis accessories, apparel, and the kind of gifts you can't find online. (because we're not online. on purpose.)
                </span>
              </DropCap>
            </div>
            <p style={{ ...HS.hand, fontSize: mobile ? 24 : 32, color: HC.rose, marginTop: 18, lineHeight: 1, transform: 'rotate(-1.5deg)', display: 'inline-block' }}>
              we keep what we'd keep ourselves.
            </p>
          </div>
        </div>
      </section>

      {/* HEADY OF THE WEEK */}
      <section style={{ background: HC.blueDeep, color: HC.cream, padding: mobile ? '50px 16px' : '100px 40px', position: 'relative', overflow: 'hidden' }}>
        <Halftone color={HC.cream} opacity={0.08} dot={2} gap={7} />
        <div style={{ position: 'absolute', top: 40, right: 40, pointerEvents: 'none' }}>
          <Rings size={mobile ? 160 : 300} color={HC.amber} opacity={0.4} />
        </div>
        {!mobile && (
          <div style={{ position: 'absolute', bottom: 60, left: 60, opacity: 0.5 }}>
            <Smoke size={120} color={HC.cream} opacity={0.6} />
          </div>
        )}
        <div style={{ position: 'relative', display: mobile ? 'block' : 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <FolioRule n={5} of={6} label="heady of the week" />
            <h2 style={{ ...HS.display, fontSize: mobile ? 64 : 132, lineHeight: 0.84, margin: '14px 0 0', color: HC.cream, letterSpacing: '-0.025em' }}>
              one of <span style={{ color: HC.amber, fontStyle: 'italic', WebkitTextStroke: `2px ${HC.ink}`, paintOrder: 'stroke fill' }}>one</span>.
            </h2>
            <p style={{ marginTop: 18, ...HS.serif, fontStyle: 'italic', fontSize: mobile ? 16 : 21, lineHeight: 1.45, maxWidth: 480, color: 'rgba(242,230,201,0.92)' }}>
              local glassblowers drop pieces every friday at five. <br/>
              we keep one. when it's gone — that's the whole story.
            </p>
            <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap' }}>
              <div data-inter onClick={(e) => { spawnGlyphConfetti(e.clientX, e.clientY); r.navigate('visit'); }}>
                <TicketButton color={HC.amber} fg={HC.ink} icon="→" size={mobile ? 'sm' : 'lg'}>this friday's piece</TicketButton>
              </div>
              <span style={{ ...HS.hand, fontSize: mobile ? 22 : 28, color: HC.rose, transform: 'rotate(-3deg)', display: 'inline-block' }}>
                ← come find us
              </span>
            </div>
          </div>
          {!mobile && (
            <div style={{ position: 'relative', justifySelf: 'end' }}>
              <div style={{ transform: 'rotate(-2deg)' }}>
                <Sticker color={HC.cream} rotate={0} padding={12} shadow={true}>
                  <div style={{
                    width: 380, aspectRatio: '1/1', overflow: 'hidden',
                    background: `url(assets/photo-1.avif) center/cover`,
                    border: `1px solid ${HC.ink}`,
                  }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 8 }}>
                    <div style={{ ...HS.hand, fontSize: 22, color: HC.ink }}>spoon · sage glass</div>
                    <div style={{ ...HS.mono, fontSize: 9, color: HC.smoke }}>NO. 47/47</div>
                  </div>
                </Sticker>
              </div>
              <div style={{ position: 'absolute', top: -22, right: -28, transform: 'rotate(12deg)', filter: `drop-shadow(3px 3px 0 ${HC.ink})` }}>
                <Mushroom size={90} cap={HC.amber} stem={HC.cream} dots={HC.cream} />
              </div>
            </div>
          )}
          {mobile && (
            <div style={{
              aspectRatio: '1/1', overflow: 'hidden',
              border: `2px solid ${HC.ink}`,
              background: `url(assets/photo-1.avif) center/cover`,
              boxShadow: `8px 8px 0 ${HC.amber}`,
              marginTop: 24,
            }} />
          )}
        </div>
      </section>

      <ProtoMarquee bg={HC.amber} fg={HC.ink} text="no card needed" />

      <ProtoBehindCounter mobile={mobile} />
      <ProtoRoster mobile={mobile} />
      <ProtoEvents tone="light" mobile={mobile} />
      <ProtoStickerSheet mobile={mobile} />

      <ProtoFooter mobile={mobile} />
    </div>
  );
}

/* ============================================================
   SHOWCASE — filterable categories + brand wall
   ============================================================ */
function ProtoShowcase({ mobile = false }) {
  const r = useRouter();
  const [filter, setFilter] = React.useState('all');
  const [hovered, setHovered] = React.useState(null);

  const categories = [
    { id: 'glass',  name: 'Heady Glass',         desc: 'One-of-one pieces from local NWA blowers and beyond.', img: 'assets/photo-1.avif', c: HC.magenta,   count: 38 },
    { id: 'vapes',  name: 'Vapes & Tech',        desc: 'Puffco, Storz & Bickel, PAX — tested behind the counter.', img: 'assets/photo-5.avif', c: HC.lime,      count: 24 },
    { id: 'papers', name: 'Papers & Wraps',      desc: 'RAW, OCB, Blazy Susans. The classics, the weird ones, the artisan ones.', img: 'assets/photo-4.avif', c: HC.tangerine, count: 41 },
    { id: 'carry',  name: 'Carry & Stash',       desc: 'Smell-proof bags, cases, and pouches by Revelry & RYOT.', img: 'assets/photo-2.avif', c: HC.blue,      count: 29 },
    { id: 'apparel',name: 'Apparel',             desc: 'House tees, Hippie Hounds, Marley Natural — cream-on-cream and beyond.', img: 'assets/photo-6.avif', c: HC.magenta,   count: 34 },
    { id: 'wood',   name: 'Wood Goods & Trays',  desc: 'Adam Driver walnut, Ozark Smith Co., one-off rolling boards.', img: 'assets/photo-3.avif', c: HC.lime,      count: 22 },
  ];

  const brands = [
    { n: 'Puffco',           tag: 'vapes',           cat: 'vapes',   c: HC.magenta  },
    { n: 'RAW',              tag: 'papers',          cat: 'papers',  c: HC.lime     },
    { n: 'Blazy Susans',     tag: 'trays & gear',    cat: 'wood',    c: HC.tangerine},
    { n: 'Hippie Hounds',    tag: 'apparel',         cat: 'apparel', c: HC.blue     },
    { n: 'Adam Driver',      tag: 'wood goods',      cat: 'wood',    c: HC.lime     },
    { n: 'Revelry Supply',   tag: 'smell-proof carry', cat: 'carry', c: HC.magenta  },
    { n: 'Storz & Bickel',   tag: 'vapes',           cat: 'vapes',   c: HC.blue     },
    { n: 'Grav Labs',        tag: 'glass',           cat: 'glass',   c: HC.tangerine},
    { n: 'Marley Natural',   tag: 'apparel & gear',  cat: 'apparel', c: HC.lime     },
    { n: 'PAX',              tag: 'vapes',           cat: 'vapes',   c: HC.magenta  },
    { n: 'RYOT',             tag: 'carry',           cat: 'carry',   c: HC.blue     },
    { n: 'Higher Standards', tag: 'cleaning',        cat: 'glass',   c: HC.tangerine},
    { n: 'Maple Bend Glass', tag: 'local heady glass', cat: 'glass', c: HC.lime     },
    { n: 'Ozark Smith Co.',  tag: 'local artisan',   cat: 'wood',    c: HC.magenta  },
    { n: 'OCB',              tag: 'papers',          cat: 'papers',  c: HC.blue     },
    { n: 'Headwaters House', tag: 'in-house apparel',cat: 'apparel', c: HC.tangerine},
  ];

  const visibleBrands = filter === 'all' ? brands : brands.filter(b => b.cat === filter);
  const visibleCats   = filter === 'all' ? categories : categories.filter(c => c.id === filter);

  return (
    <div style={{ ...HS.page, width: mobile ? '100%' : 1440 }}>
      {mobile ? <ProtoMobileNav active="showcase" /> : <ProtoNav active="showcase" />}

      {/* HERO */}
      <section style={{ padding: mobile ? '32px 16px' : '60px 40px 32px', background: HC.amber, borderBottom: `3px solid ${HC.ink}`, position: 'relative', overflow: 'hidden' }}>
        <Halftone color={HC.ink} opacity={0.1} dot={2.5} gap={10} />
        <div style={{ position: 'absolute', right: -60, top: -60, pointerEvents: 'none' }}>
          <Rings size={mobile ? 200 : 360} color={HC.rose} opacity={0.5} />
        </div>
        {!mobile && (
          <div style={{ position: 'absolute', right: 80, bottom: 40, transform: 'rotate(-6deg)', filter: `drop-shadow(4px 4px 0 ${HC.ink})` }}>
            <Eye size={120} iris={HC.haze} lash={HC.ink} />
          </div>
        )}
        <div style={{ position: 'relative' }}>
          <FolioRule n={1} of={3} label="the showcase · floor only" />
          <h1 style={{ ...HS.display, fontSize: mobile ? 76 : 192, margin: '14px 0 0', lineHeight: 0.84, letterSpacing: '-0.025em' }}>
            stock the <span style={{ color: HC.cream, fontStyle: 'italic', WebkitTextStroke: `${mobile ? 2 : 3}px ${HC.ink}`, paintOrder: 'stroke fill' }}>vibe.</span>
          </h1>
          <p style={{ ...HS.serif, fontStyle: 'italic', fontSize: mobile ? 16 : 22, lineHeight: 1.4, marginTop: 18, maxWidth: 680 }}>
            no online cart. no shipping. <br/>
            just a window into what's on the floor right now — brands, categories, the kind of gear you can hold before you decide.
          </p>
        </div>
      </section>

      {/* FILTER PILLS */}
      <section style={{ padding: mobile ? '20px 16px' : '32px 40px', background: HC.cream, borderBottom: `2px solid ${HC.ink}`, position: 'sticky', top: 0, zIndex: 20 }}>
        <div style={{ ...HS.mono, fontSize: mobile ? 8 : 10, color: HC.blue, marginBottom: 10 }}>✦ FILTER BY CATEGORY</div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {[{ id: 'all', label: 'all' }, ...categories.map(c => ({ id: c.id, label: c.name.toLowerCase(), c: c.c }))].map(opt => {
            const isActive = filter === opt.id;
            return (
              <button data-inter key={opt.id} onClick={() => setFilter(opt.id)} style={{
                padding: mobile ? '8px 14px' : '10px 18px',
                background: isActive ? HC.ink : (opt.c || HC.cream),
                color: isActive ? HC.lime : HC.ink,
                border: `2px solid ${HC.ink}`, borderRadius: 999,
                ...HS.mono, fontSize: mobile ? 9 : 11, cursor: 'pointer',
                boxShadow: isActive ? `3px 3px 0 ${HC.lime}` : 'none',
                transition: 'all .15s',
              }}>
                {opt.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* CATEGORIES (filterable) */}
      <section style={{ padding: mobile ? '32px 16px' : '60px 40px', background: HC.cream }}>
        <div style={{ ...HS.mono, fontSize: mobile ? 9 : 11, color: HC.blue, marginBottom: 8 }}>✦ ON THE FLOOR · {visibleCats.length} {visibleCats.length === 1 ? 'category' : 'categories'}</div>
        <h2 style={{ ...HS.display, fontSize: mobile ? 40 : 72, margin: '4px 0 24px', lineHeight: 0.95 }}>
          what we <span style={{ color: HC.magenta, fontStyle: 'italic' }}>stock</span>.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: mobile ? 16 : 24 }}>
          {visibleCats.map((c) => (
            <div data-inter key={c.id}
              onMouseEnter={() => setHovered(c.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setFilter(c.id)}
              style={{
                background: HC.paper, border: `2px solid ${HC.ink}`, borderRadius: 22,
                overflow: 'hidden', boxShadow: hovered === c.id ? `10px 10px 0 ${c.c}` : `5px 5px 0 ${c.c}`,
                transform: hovered === c.id ? 'translate(-3px,-3px)' : 'none',
                transition: 'transform .15s, box-shadow .15s', cursor: 'pointer',
              }}>
              <div style={{ position: 'relative', aspectRatio: '4/3', background: `${c.c} url(${c.img}) center/cover`, borderBottom: `2px solid ${HC.ink}` }}>
                <div style={{
                  position: 'absolute', top: 12, right: 12,
                  background: HC.cream, color: HC.ink, padding: '5px 10px',
                  border: `2px solid ${HC.ink}`, borderRadius: 999,
                  ...HS.mono, fontSize: 9,
                }}>
                  ~{c.count} pieces
                </div>
              </div>
              <div style={{ padding: mobile ? '16px 18px 18px' : '20px 24px 24px' }}>
                <div style={{ ...HS.alt, fontSize: mobile ? 22 : 26, lineHeight: 1.1 }}>{c.name}</div>
                <p style={{ fontSize: mobile ? 12 : 14, lineHeight: 1.5, marginTop: 6, color: 'rgba(14,26,47,0.78)' }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BRANDS — animated when filter changes */}
      <section style={{ padding: mobile ? '40px 16px' : '70px 40px', background: HC.paper }}>
        <div style={{ ...HS.mono, fontSize: mobile ? 9 : 11, color: HC.blue }}>✦ THE LINE-UP · {visibleBrands.length} brands</div>
        <h2 style={{ ...HS.display, fontSize: mobile ? 40 : 72, margin: '4px 0 24px', lineHeight: 0.95 }}>
          on the <span style={{ color: HC.blue, fontStyle: 'italic' }}>floor</span>.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: mobile ? 12 : 18 }}>
          {visibleBrands.map((b, i) => (
            <div data-inter key={b.n} style={{
              padding: mobile ? '20px 16px' : '24px 22px', background: b.c, color: b.c === HC.blue ? HC.cream : HC.ink,
              border: `2px solid ${HC.ink}`, borderRadius: 18, position: 'relative',
              boxShadow: `4px 4px 0 ${HC.ink}`,
              animation: 'h-card-in .3s ease-out',
              cursor: 'pointer',
            }}>
              <div style={{ ...HS.mono, fontSize: 9, opacity: 0.7 }}>№ {String(i+1).padStart(2,'0')}</div>
              <div style={{ ...HS.display, fontSize: mobile ? 22 : 26, marginTop: 4, lineHeight: 1 }}>{b.n}</div>
              <div style={{ ...HS.alt, fontSize: 11, marginTop: 6 }}>{b.tag}</div>
            </div>
          ))}
        </div>
        {visibleBrands.length === 0 && (
          <div style={{ padding: 60, textAlign: 'center', ...HS.serif, fontStyle: 'italic', fontSize: 20 }}>
            no brands match — yet. <a href="#" data-inter onClick={(e) => { e.preventDefault(); setFilter('all'); }} style={{ color: HC.blue }}>show all</a>
          </div>
        )}
      </section>

      {/* CALLOUT */}
      <section style={{ background: HC.ink, color: HC.cream, padding: mobile ? '40px 16px' : '64px 40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -120, top: -120, opacity: 0.3, pointerEvents: 'none' }}>
          <Burst size={mobile ? 240 : 420} color={HC.lime} count={28} />
        </div>
        <div style={{ position: 'relative', display: mobile ? 'block' : 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <div style={{ ...HS.mono, fontSize: mobile ? 9 : 11, color: HC.lime }}>✦ A QUICK NOTE</div>
            <h2 style={{ ...HS.display, fontSize: mobile ? 44 : 80, lineHeight: 0.95, margin: '8px 0 0', color: HC.cream }}>
              we don't <span style={{ color: HC.magenta, fontStyle: 'italic' }}>do online</span>.
            </h2>
            <p style={{ ...HS.serif, fontStyle: 'italic', fontSize: mobile ? 16 : 22, lineHeight: 1.45, marginTop: 16, maxWidth: 620, color: 'rgba(245,236,217,0.92)' }}>
              No carts, no shipping. The floor is the catalog. Call us, DM us,
              or come in — we'll walk you through what's in stock.
            </p>
          </div>
          <div style={{ display: 'grid', gap: 12, marginTop: mobile ? 22 : 0 }}>
            <a data-inter href="tel:4792518581" style={{ background: HC.lime, color: HC.ink, padding: '14px 18px', border: `2px solid ${HC.ink}`, borderRadius: 14, ...HS.alt, fontSize: mobile ? 14 : 18, textDecoration: 'none' }}>✦ call · (479) 251-8581</a>
            <a data-inter href="#" style={{ background: HC.magenta, color: HC.ink, padding: '14px 18px', border: `2px solid ${HC.ink}`, borderRadius: 14, ...HS.alt, fontSize: mobile ? 14 : 18, textDecoration: 'none' }}>✦ dm @headwaters_provisions</a>
            <a data-inter href="#" onClick={(e) => { e.preventDefault(); r.navigate('visit'); }} style={{ background: HC.cream, color: HC.ink, padding: '14px 18px', border: `2px solid ${HC.ink}`, borderRadius: 14, ...HS.alt, fontSize: mobile ? 14 : 18, textDecoration: 'none' }}>✦ visit · 4505 W Poplar</a>
          </div>
        </div>
      </section>

      <ProtoMarquee bg={HC.blue} fg={HC.cream} text="✦ no online store · come on in" />
      <ProtoFooter mobile={mobile} />
    </div>
  );
}

/* ============================================================
   VISIT — with form + live hours
   ============================================================ */
function ProtoVisit({ mobile = false }) {
  const toast = useToast();
  const [form, setForm] = React.useState({ name: '', email: '', msg: '' });
  const [submitted, setSubmitted] = React.useState(false);

  // Live "open / closed" status — based on current local time
  const now = new Date();
  const hour = now.getHours() + now.getMinutes() / 60;
  const dow = now.getDay(); // 0 sun, 6 sat
  const todayHours = dow === 0 ? [10, 18] : dow === 6 ? [9, 19] : [9, 20];
  const isOpen = hour >= todayHours[0] && hour < todayHours[1];

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.msg) {
      toast('✦ fill out everything please', HC.tangerine);
      return;
    }
    setSubmitted(true);
    toast(`✦ got it, ${form.name.split(' ')[0]} — we'll holler back`, HC.lime);
  };

  return (
    <div style={{ ...HS.page, width: mobile ? '100%' : 1440, background: HC.blueDark }}>
      {mobile ? <ProtoMobileNav active="visit" tone="dark" /> : <ProtoNav active="visit" tone="dark" />}

      <section style={{ padding: mobile ? '32px 16px' : '60px 40px', position: 'relative', overflow: 'hidden' }}>
        <Halftone color={HC.cream} opacity={0.06} dot={2} gap={9} />
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <Rings size={mobile ? 700 : 1100} color={HC.amber} opacity={0.16} />
        </div>
        {!mobile && (
          <div style={{ position: 'absolute', top: 80, right: 80, transform: 'rotate(-8deg)', filter: `drop-shadow(4px 4px 0 ${HC.ink})` }}>
            <Mushroom size={140} cap={HC.rose} stem={HC.cream} dots={HC.cream} />
          </div>
        )}
        <div style={{ position: 'relative', display: mobile ? 'block' : 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
          <div style={{ color: HC.cream }}>
            <FolioRule n={1} of={3} label="find us · come in" />
            <h1 style={{ ...HS.display, fontSize: mobile ? 80 : 168, margin: '14px 0 0', lineHeight: 0.84, color: HC.cream, textShadow: `5px 5px 0 ${HC.ink}`, letterSpacing: '-0.025em' }}>
              come <span style={{ color: HC.amber, fontStyle: 'italic', WebkitTextStroke: `2px ${HC.ink}`, paintOrder: 'stroke fill', textShadow: 'none' }}>find</span> us.
            </h1>
            <p style={{ ...HS.serif, fontStyle: 'italic', fontSize: mobile ? 16 : 22, marginTop: 14, lineHeight: 1.4, maxWidth: 460, color: 'rgba(242,230,201,0.92)' }}>
              tucked into the source on west poplar. <br/>
              just walk in — the door's open till eight.
            </p>
            <div style={{
              marginTop: 20, display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '8px 14px', background: isOpen ? HC.lime : HC.tangerine, color: HC.ink,
              border: `2px solid ${HC.ink}`, borderRadius: 999, ...HS.mono, fontSize: mobile ? 10 : 11,
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: '50%', background: HC.ink,
                animation: isOpen ? 'h-pulse 1.6s infinite' : 'none',
              }} />
              {isOpen ? `OPEN NOW · until ${todayHours[1]}:00` : `CLOSED · opens ${todayHours[0]}:00`}
            </div>

            <div style={{ marginTop: 24, display: 'grid', gap: 14 }}>
              <div style={{ background: HC.cream, color: HC.ink, padding: mobile ? 18 : 24, borderRadius: 22, border: `2px solid ${HC.ink}`, boxShadow: `6px 6px 0 ${HC.lime}` }}>
                <div style={{ ...HS.mono, fontSize: 10, color: HC.magenta }}>address</div>
                <div style={{ ...HS.alt, fontSize: mobile ? 22 : 28, marginTop: 6, lineHeight: 1.1 }}>4505 W Poplar Street<br/>Rogers, AR 72756</div>
                <div style={{ fontSize: mobile ? 12 : 13, marginTop: 10, lineHeight: 1.5 }}>Inside The Source Craft Cannabis. Walk through the front doors — we're immediately on your right.</div>
                <a data-inter href="https://maps.google.com/?q=4505+W+Poplar+St+Rogers+AR" target="_blank" rel="noopener" style={{
                  marginTop: 12, display: 'inline-flex', alignItems: 'center', gap: 6,
                  ...HS.mono, fontSize: 10, color: HC.blue, textDecoration: 'none',
                }}>OPEN IN GOOGLE MAPS ↗</a>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div style={{ background: HC.lime, color: HC.ink, padding: mobile ? 14 : 18, borderRadius: 18, border: `2px solid ${HC.ink}` }}>
                  <div style={{ ...HS.mono, fontSize: 9 }}>HOURS</div>
                  <div style={{ marginTop: 6, fontSize: mobile ? 12 : 13, lineHeight: 1.7, ...HS.alt }}>
                    <div style={{ fontWeight: dow >= 1 && dow <= 5 ? 800 : 400, opacity: dow >= 1 && dow <= 5 ? 1 : 0.7 }}>Mon–Fri · 9–8</div>
                    <div style={{ fontWeight: dow === 6 ? 800 : 400, opacity: dow === 6 ? 1 : 0.7 }}>Sat · 9–7</div>
                    <div style={{ fontWeight: dow === 0 ? 800 : 400, opacity: dow === 0 ? 1 : 0.7 }}>Sun · 10–6</div>
                  </div>
                </div>
                <a data-inter href="tel:4792518581" style={{ background: HC.magenta, color: HC.ink, padding: mobile ? 14 : 18, borderRadius: 18, border: `2px solid ${HC.ink}`, textDecoration: 'none' }}>
                  <div style={{ ...HS.mono, fontSize: 9 }}>HOLLER</div>
                  <div style={{ marginTop: 6, fontSize: mobile ? 12 : 13, lineHeight: 1.6, ...HS.alt }}>(479) 251-8581<br/>info@headwatersprovisions.com</div>
                </a>
              </div>
            </div>
          </div>

          {/* MAP + form */}
          <div style={{ marginTop: mobile ? 24 : 0 }}>
            <div style={{
              background: HC.cream, color: HC.ink,
              border: `2px solid ${HC.ink}`, borderRadius: 22, overflow: 'hidden',
              boxShadow: `10px 10px 0 ${HC.magenta}`,
            }}>
              <svg viewBox="0 0 600 280" style={{ width: '100%', display: 'block', background: HC.creamWarm }}>
                <defs>
                  <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke={HC.blue} strokeOpacity="0.18" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="600" height="280" fill="url(#grid)" />
                {/* river/stream curve */}
                <path d="M 0 80 Q 150 40, 280 100 T 600 80" fill="none" stroke={HC.blue} strokeWidth="3" />
                <path d="M 0 200 Q 200 240, 380 180 T 600 220" fill="none" stroke={HC.blue} strokeWidth="2" strokeOpacity="0.5" />
                {/* road */}
                <line x1="0" y1="160" x2="600" y2="160" stroke={HC.ink} strokeWidth="6" />
                <line x1="0" y1="160" x2="600" y2="160" stroke={HC.cream} strokeWidth="1" strokeDasharray="8 8" />
                {/* labels */}
                <text x="20" y="155" style={HS.mono} fontSize="10" fill={HC.ink}>W POPLAR ST</text>
                {/* shop pin */}
                <g transform="translate(360 140)" style={{ animation: 'h-bob 2.4s ease-in-out infinite' }}>
                  <circle r="22" fill={HC.magenta} stroke={HC.ink} strokeWidth="2" />
                  <text textAnchor="middle" dy="6" style={HS.display} fontSize="22" fill={HC.cream}>✦</text>
                  <line x1="0" y1="22" x2="0" y2="40" stroke={HC.ink} strokeWidth="2" />
                </g>
                <g transform="translate(360 200)">
                  <rect x="-58" y="-12" width="116" height="20" rx="4" fill={HC.lime} stroke={HC.ink} strokeWidth="2" />
                  <text textAnchor="middle" dy="3" style={HS.alt} fontSize="11" fill={HC.ink}>Headwaters · 4505 W Poplar</text>
                </g>
              </svg>
            </div>

            {/* CONTACT FORM */}
            <div style={{
              marginTop: 16, background: HC.cream, color: HC.ink,
              border: `2px solid ${HC.ink}`, borderRadius: 22, padding: mobile ? 20 : 26,
              boxShadow: `8px 8px 0 ${HC.lime}`,
            }}>
              <div style={{ ...HS.mono, fontSize: 10, color: HC.blue }}>✦ HOLLER AT US</div>
              <h3 style={{ ...HS.display, fontSize: mobile ? 32 : 44, margin: '4px 0 14px', lineHeight: 1 }}>
                got a <span style={{ color: HC.magenta }}>question?</span>
              </h3>

              {!submitted ? (
                <form onSubmit={submit} style={{ display: 'grid', gap: 10 }}>
                  <ProtoInput label="your name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                  <ProtoInput label="email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                  <ProtoInput label="what's up?" multiline value={form.msg} onChange={(v) => setForm({ ...form, msg: v })} />
                  <button data-inter type="submit" style={{
                    marginTop: 4, padding: '14px 22px', background: HC.ink, color: HC.lime,
                    border: `2px solid ${HC.ink}`, borderRadius: 999, ...HS.alt, fontSize: 16,
                    boxShadow: `4px 4px 0 ${HC.magenta}`, cursor: 'pointer',
                  }}>send it →</button>
                </form>
              ) : (
                <div style={{ padding: 20, textAlign: 'center' }}>
                  <div style={{ ...HS.display, fontSize: 56, color: HC.blue }}>✦</div>
                  <div style={{ ...HS.alt, fontSize: 22, marginTop: 6 }}>got it, {form.name.split(' ')[0]}.</div>
                  <p style={{ ...HS.serif, fontStyle: 'italic', fontSize: 16, marginTop: 8, lineHeight: 1.5 }}>
                    we usually holler back within a day. in the meantime, come visit.
                  </p>
                  <button data-inter onClick={() => { setSubmitted(false); setForm({ name: '', email: '', msg: '' }); }} style={{
                    marginTop: 14, padding: '8px 16px', background: HC.cream, color: HC.ink,
                    border: `2px solid ${HC.ink}`, borderRadius: 999, ...HS.mono, fontSize: 10, cursor: 'pointer',
                  }}>send another</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <ProtoEvents tone="dark" mobile={mobile} />
      <ProtoFooter mobile={mobile} />
    </div>
  );
}

function ProtoInput({ label, value, onChange, multiline, type = 'text' }) {
  const [focus, setFocus] = React.useState(false);
  const Cmp = multiline ? 'textarea' : 'input';
  return (
    <label style={{ display: 'block', position: 'relative' }}>
      <div style={{ ...HS.mono, fontSize: 9, color: focus ? HC.magenta : HC.blue, marginBottom: 4 }}>
        ✦ {label}
      </div>
      <Cmp data-inter
        type={type} value={value} onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        rows={multiline ? 3 : undefined}
        style={{
          width: '100%', padding: '12px 14px', background: HC.paper, color: HC.ink,
          border: `2px solid ${focus ? HC.magenta : HC.ink}`,
          borderRadius: 14, ...HS.alt, fontSize: 15, outline: 'none',
          fontFamily: 'inherit', resize: 'vertical',
          boxSizing: 'border-box',
          transition: 'border-color .15s',
        }}
      />
    </label>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */
function ProtoFooter({ mobile = false }) {
  const r = useRouter();
  return (
    <footer style={{ background: HC.blueDark, color: HC.cream, padding: mobile ? '40px 16px 20px' : '64px 40px 28px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: -120, bottom: -120, opacity: 0.18, pointerEvents: 'none' }}>
        <Rings size={520} color={HC.lime} />
      </div>
      <svg viewBox="0 0 1440 24" preserveAspectRatio="none" style={{
        position: 'absolute', top: -1, left: 0, width: '100%', height: 24, transform: 'scaleY(-1)',
      }}>
        <path d="M0 24 L0 8 Q 60 0, 120 8 T 240 8 T 360 8 T 480 8 T 600 8 T 720 8 T 840 8 T 960 8 T 1080 8 T 1200 8 T 1320 8 T 1440 8 L 1440 24 Z" fill={HC.blueDark} />
      </svg>
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: mobile ? '1fr' : '2fr 1fr 1fr 1fr', gap: mobile ? 24 : 40, marginBottom: 32 }}>
        <div>
          {!mobile && (
            <div style={{ position: 'relative', width: 140, height: 140 }}>
              <div style={{ position: 'absolute', inset: 0, animation: 'h-spin 28s linear infinite' }}>
                <CurvedText text="✦ stay heady · headwaters · " radius={58} fontSize={11} color={HC.lime} />
              </div>
              <div style={{ position: 'absolute', inset: 30 }}>
                <HWMark size={80} ring={HC.cream} />
              </div>
            </div>
          )}
          <div style={{ ...HS.display, fontSize: mobile ? 40 : 56, color: HC.cream, lineHeight: 0.9, marginTop: mobile ? 0 : 16 }}>headwaters</div>
          <div style={{ ...HS.serif, fontStyle: 'italic', fontSize: mobile ? 16 : 20, color: HC.lime, marginTop: 6 }}>
            "where's your head at?"
          </div>
        </div>
        {[
          { h: 'visit',  items: ['4505 W Poplar St', 'Rogers, AR 72756', 'inside The Source'] },
          { h: 'hours',  items: ['Mon–Fri · 9–8', 'Saturday · 9–7', 'Sunday · 10–6'] },
          { h: 'holler', items: ['(479) 251-8581', 'info@headwatersprovisions.com', '@headwaters_provisions'] },
        ].map(c => (
          <div key={c.h}>
            <div style={{ ...HS.mono, fontSize: 10, color: HC.magenta, marginBottom: 8 }}>✦ {c.h}</div>
            {c.items.map(i => <div key={i} style={{ fontSize: mobile ? 11 : 13, lineHeight: 1.7, color: 'rgba(245,236,217,0.9)' }}>{i}</div>)}
          </div>
        ))}
      </div>
      <div style={{
        position: 'relative', borderTop: `1px solid rgba(245,236,217,0.2)`, paddingTop: 16,
        ...HS.mono, fontSize: 9, color: 'rgba(245,236,217,0.6)',
        display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8,
      }}>
        <span>© 2026 Headwaters Provisions LLC ✦ stay heady</span>
        <span>21+ · no medical card needed</span>
      </div>
    </footer>
  );
}

window.ProtoHome = ProtoHome;
window.ProtoShowcase = ProtoShowcase;
window.ProtoVisit = ProtoVisit;
window.ProtoFooter = ProtoFooter;
