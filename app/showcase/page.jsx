'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useMobile } from '../../hooks/useMobile';
import { HC, HS } from '../../components/design/tokens';
import { Rings, Burst, Eye, Mushroom, Halftone, ProductPattern, Sunny } from '../../components/design/base';
import { FolioRule, spawnGlyphConfetti } from '../../components/design/interactions';
import { Nav, MobileNav } from '../../components/nav';
import { Footer } from '../../components/footer';
import { Marquee } from '../../components/marquee';

const categories = [
  { id: 'glass',   name: 'Heady Glass',        desc: 'One-of-one pieces from local NWA blowers and beyond.',                              img: '/assets/photo-1.avif', c: HC.magenta,   count: 38 },
  { id: 'vapes',   name: 'Vapes & Tech',        desc: 'Puffco, Storz & Bickel, PAX — tested behind the counter.',                         img: '/assets/photo-5.avif', c: HC.lime,      count: 24 },
  { id: 'papers',  name: 'Papers & Wraps',      desc: 'RAW, OCB, Blazy Susans. The classics, the weird ones, the artisan ones.',          img: '/assets/photo-4.avif', c: HC.tangerine, count: 41 },
  { id: 'carry',   name: 'Carry & Stash',       desc: 'Smell-proof bags, cases, and pouches by Revelry & RYOT.',                         img: '/assets/photo-2.avif', c: HC.blue,      count: 29 },
  { id: 'apparel', name: 'Apparel',             desc: 'House tees, Hippie Hounds, Marley Natural — cream-on-cream and beyond.',           img: '/assets/photo-6.avif', c: HC.magenta,   count: 34 },
  { id: 'wood',    name: 'Wood Goods & Trays',  desc: 'Adam Driver walnut, Ozark Smith Co., one-off rolling boards.',                    img: '/assets/photo-3.avif', c: HC.lime,      count: 22 },
];

const brands = [
  { n: 'Puffco',           tag: 'vapes',             cat: 'vapes',   c: HC.magenta   },
  { n: 'RAW',              tag: 'papers',            cat: 'papers',  c: HC.lime      },
  { n: 'Blazy Susans',     tag: 'trays & gear',      cat: 'wood',    c: HC.tangerine },
  { n: 'Hippie Hounds',    tag: 'apparel',           cat: 'apparel', c: HC.blue      },
  { n: 'Adam Driver',      tag: 'wood goods',        cat: 'wood',    c: HC.lime      },
  { n: 'Revelry Supply',   tag: 'smell-proof carry', cat: 'carry',   c: HC.magenta   },
  { n: 'Storz & Bickel',   tag: 'vapes',             cat: 'vapes',   c: HC.blue      },
  { n: 'Grav Labs',        tag: 'glass',             cat: 'glass',   c: HC.tangerine },
  { n: 'Marley Natural',   tag: 'apparel & gear',    cat: 'apparel', c: HC.lime      },
  { n: 'PAX',              tag: 'vapes',             cat: 'vapes',   c: HC.magenta   },
  { n: 'RYOT',             tag: 'carry',             cat: 'carry',   c: HC.blue      },
  { n: 'Higher Standards', tag: 'cleaning',          cat: 'glass',   c: HC.tangerine },
  { n: 'Maple Bend Glass', tag: 'local heady glass', cat: 'glass',   c: HC.lime      },
  { n: 'Ozark Smith Co.',  tag: 'local artisan',     cat: 'wood',    c: HC.magenta   },
  { n: 'OCB',              tag: 'papers',            cat: 'papers',  c: HC.blue      },
  { n: 'Headwaters House', tag: 'in-house apparel',  cat: 'apparel', c: HC.tangerine },
];

export default function Showcase() {
  const mobile = useMobile();
  const [filter, setFilter] = useState('all');
  const [hovered, setHovered] = useState(null);
  const [walkKey, setWalkKey] = useState(0);
  const [showWalker, setShowWalker] = useState(false);

  useEffect(() => {
    setWalkKey(k => k + 1);
    setShowWalker(true);
    const t = setTimeout(() => setShowWalker(false), 2200);
    return () => clearTimeout(t);
  }, [filter]);

  const visibleBrands = filter === 'all' ? brands : brands.filter(b => b.cat === filter);
  const visibleCats   = filter === 'all' ? categories : categories.filter(c => c.id === filter);

  return (
    <div style={{ ...HS.page, background: HC.cream }}>
      {mobile ? <MobileNav /> : <Nav />}

      {/* HERO */}
      <section style={{ padding: mobile ? '32px 16px' : '60px 40px 32px', background: HC.amber, borderBottom: `3px solid ${HC.ink}`, position: 'relative', overflow: 'hidden' }}>
        <Halftone color={HC.ink} opacity={0.12} dot={2.5} gap={10} />
        <ProductPattern color={HC.ink} opacity={0.1} blend="multiply" />
        <div style={{ position: 'absolute', right: -60, top: -60, pointerEvents: 'none' }}>
          <Rings size={mobile ? 200 : 360} color={HC.rose} opacity={0.5} />
        </div>
        {!mobile && (
          <>
            <div style={{ position: 'absolute', right: 320, bottom: 60, transform: 'rotate(-6deg)', filter: `drop-shadow(4px 4px 0 ${HC.ink})` }}>
              <Eye size={120} iris={HC.haze} lash={HC.ink} />
            </div>
            {/* Sunny holding sign at the brand wall */}
            <Sunny pose="holding" size={260} rotate={4}
              style={{
                position: 'absolute', right: 40, bottom: -20, zIndex: 2,
                filter: 'drop-shadow(4px 6px 0 rgba(0,0,0,0.28)) drop-shadow(0 14px 22px rgba(0,0,0,0.24))',
                pointerEvents: 'none',
                animation: 'h-bob-rot 3.6s ease-in-out infinite',
              }} />
            <div style={{ position: 'absolute', left: 80, bottom: 40, transform: 'rotate(8deg)', filter: `drop-shadow(3px 3px 0 ${HC.ink})` }}>
              <Mushroom size={70} cap={HC.rose} stem={HC.cream} dots={HC.cream} />
            </div>
          </>
        )}
        <div style={{ position: 'relative' }}>
          <FolioRule n={1} of={3} label="the showcase · floor only" />
          <h1 style={{ ...HS.display, fontSize: mobile ? 76 : 192, margin: '14px 0 0', lineHeight: 0.84, letterSpacing: '-0.025em' }}>
            <span className="h-word h-word-1">stock</span>{' '}
            <span className="h-word h-word-2">the</span>{' '}
            <span className="h-word h-word-3" style={{ color: HC.cream, fontStyle: 'italic', WebkitTextStroke: `${mobile ? 2 : 3}px ${HC.ink}`, paintOrder: 'stroke fill', display: 'inline-block' }}>vibe.</span>
          </h1>
          <p style={{ ...HS.serif, fontStyle: 'italic', fontSize: mobile ? 18 : 26, lineHeight: 1.35, marginTop: 18, maxWidth: 680 }}>
            floor-curated gear. one-of-one drops.<br />
            the floor is the catalog — call. dm. drop in.
          </p>
        </div>
      </section>

      {/* WALKING SUNNY */}
      {showWalker && !mobile && (
        <div key={walkKey} style={{
          position: 'relative', height: 0, zIndex: 25, pointerEvents: 'none',
        }}>
          <img src="/assets/mopbq0bk-Sunny_Walk.png" alt="" aria-hidden
            style={{
              position: 'absolute', top: -100, left: '-15%',
              height: 180, width: 'auto',
              animation: 'h-walk 2.2s cubic-bezier(.4,.1,.6,.9) forwards, h-walk-bob 0.4s ease-in-out infinite',
              filter: 'drop-shadow(3px 4px 0 rgba(0,0,0,0.25))',
            }} />
        </div>
      )}

      {/* FILTER PILLS */}
      <section style={{ padding: mobile ? '20px 16px' : '32px 40px', background: HC.cream, borderBottom: `2px solid ${HC.ink}`, position: 'sticky', top: 0, zIndex: 20 }}>
        <div style={{ ...HS.mono, fontSize: mobile ? 8 : 10, color: HC.blue, marginBottom: 10 }}>✦ FILTER BY CATEGORY</div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {[{ id: 'all', label: 'all' }, ...categories.map(c => ({ id: c.id, label: c.name.toLowerCase(), c: c.c }))].map(opt => {
            const isActive = filter === opt.id;
            return (
              <button key={opt.id} onClick={() => setFilter(opt.id)} style={{
                padding: mobile ? '10px 18px' : '12px 22px',
                background: isActive ? HC.ink : (opt.c || HC.cream),
                color: isActive ? HC.lime : HC.ink,
                border: `2px solid ${HC.ink}`, borderRadius: 999,
                ...HS.display, fontSize: mobile ? 18 : 22, lineHeight: 1, letterSpacing: '-0.005em', textTransform: 'lowercase',
                cursor: 'pointer',
                boxShadow: isActive ? `4px 4px 0 ${HC.lime}` : `2px 2px 0 ${HC.ink}`,
                transition: 'all .2s cubic-bezier(.34,1.56,.64,1)',
                transform: isActive ? 'translate(-2px,-2px)' : 'none',
              }}
                onMouseEnter={(e) => { if (!isActive) { e.currentTarget.style.transform = 'translate(-1px,-1px) rotate(-1deg)'; e.currentTarget.style.boxShadow = `4px 4px 0 ${HC.ink}`; } }}
                onMouseLeave={(e) => { if (!isActive) { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = `2px 2px 0 ${HC.ink}`; } }}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* CATEGORIES */}
      <section style={{ padding: mobile ? '32px 16px' : '60px 40px', background: HC.cream, position: 'relative', overflow: 'hidden' }}>
        <Halftone color={HC.ink} opacity={0.05} dot={2} gap={11} />
        <ProductPattern color={HC.blue} opacity={0.06} blend="multiply" />
        <div style={{ position: 'relative', ...HS.mono, fontSize: mobile ? 9 : 11, color: HC.blue, marginBottom: 8 }}>
          ✦ ON THE FLOOR · {visibleCats.length} {visibleCats.length === 1 ? 'category' : 'categories'}
        </div>
        <h2 style={{ ...HS.display, fontSize: mobile ? 40 : 72, margin: '4px 0 24px', lineHeight: 0.95 }}>
          what we <span style={{ color: HC.magenta, fontStyle: 'italic' }}>stock</span>.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: mobile ? 16 : 24 }}>
          {visibleCats.map((c) => (
            <div key={c.id}
              onMouseEnter={() => setHovered(c.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setFilter(c.id)}
              style={{
                background: HC.paper, border: `2px solid ${HC.ink}`, borderRadius: 22,
                overflow: 'hidden',
                boxShadow: hovered === c.id ? `10px 10px 0 ${c.c}` : `5px 5px 0 ${c.c}`,
                transform: hovered === c.id ? 'translate(-3px,-3px)' : 'none',
                transition: 'transform .15s, box-shadow .15s', cursor: 'pointer',
              }}>
              <div style={{
                position: 'relative', aspectRatio: '4/3',
                background: `${c.c} url(${c.img}) center/cover`,
                borderBottom: `2px solid ${HC.ink}`,
              }}>
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

      {/* BRANDS */}
      <section style={{ padding: mobile ? '40px 16px' : '70px 40px', background: HC.paper, position: 'relative', overflow: 'hidden' }}>
        <ProductPattern color={HC.ink} opacity={0.05} blend="multiply" />
        <Halftone color={HC.ink} opacity={0.04} dot={2} gap={10} />
        {!mobile && (
          <Sunny pose="hat" size={160} rotate={4}
            style={{
              position: 'absolute', right: 20, top: 60, zIndex: 1,
              opacity: 0.92,
              filter: 'drop-shadow(3px 4px 0 rgba(0,0,0,0.2))',
              pointerEvents: 'none',
              animation: 'h-bob-rot 5s ease-in-out infinite',
            }} />
        )}
        <div style={{ position: 'relative' }}>
          <div style={{ ...HS.mono, fontSize: mobile ? 9 : 11, color: HC.blue }}>✦ THE LINE-UP · {visibleBrands.length} brands</div>
          <h2 style={{ ...HS.display, fontSize: mobile ? 40 : 72, margin: '4px 0 24px', lineHeight: 0.95 }}>
            on the <span style={{ color: HC.blue, fontStyle: 'italic' }}>floor</span>.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: mobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: mobile ? 12 : 18 }}>
            {visibleBrands.map((b, i) => (
              <div key={b.n} style={{
                padding: mobile ? '20px 16px' : '24px 22px',
                background: b.c,
                color: b.c === HC.blue ? HC.cream : HC.ink,
                border: `2px solid ${HC.ink}`, borderRadius: 18, position: 'relative',
                boxShadow: `4px 4px 0 ${HC.ink}`,
                animation: 'h-card-in .3s ease-out',
                cursor: 'pointer',
              }}>
                <div style={{ ...HS.mono, fontSize: 9, opacity: 0.7 }}>№ {String(i + 1).padStart(2, '0')}</div>
                <div style={{ ...HS.display, fontSize: mobile ? 22 : 26, marginTop: 4, lineHeight: 1 }}>{b.n}</div>
                <div style={{ ...HS.alt, fontSize: 11, marginTop: 6 }}>{b.tag}</div>
              </div>
            ))}
          </div>
          {visibleBrands.length === 0 && (
            <div style={{ padding: 60, textAlign: 'center', ...HS.serif, fontStyle: 'italic', fontSize: 20 }}>
              no brands match — yet.{' '}
              <button onClick={() => setFilter('all')} style={{ background: 'none', border: 'none', color: HC.blue, cursor: 'pointer', ...HS.serif, fontStyle: 'italic', fontSize: 20, textDecoration: 'underline', padding: 0 }}>
                show all
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CALLOUT */}
      <section style={{ background: HC.ink, color: HC.cream, padding: mobile ? '40px 16px' : '80px 40px', position: 'relative', overflow: 'hidden' }}>
        <Halftone color={HC.cream} opacity={0.06} dot={2} gap={9} />
        <div style={{ position: 'absolute', right: -120, top: -120, opacity: 0.35, pointerEvents: 'none' }}>
          <Burst size={mobile ? 240 : 460} color={HC.lime} count={32} />
        </div>
        <div style={{ position: 'absolute', left: -80, bottom: -80, opacity: 0.18, pointerEvents: 'none' }}>
          <Rings size={mobile ? 220 : 380} color={HC.amber} />
        </div>
        {!mobile && (
          <Sunny pose="woo" size={240} rotate={-4}
            style={{
              position: 'absolute', right: 60, bottom: 30, zIndex: 1,
              filter: 'drop-shadow(4px 6px 0 rgba(0,0,0,0.36)) drop-shadow(0 14px 22px rgba(0,0,0,0.30))',
              pointerEvents: 'none',
              animation: 'h-bob-rot 3.4s ease-in-out infinite',
            }} />
        )}
        <div style={{ position: 'relative', display: mobile ? 'block' : 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <div style={{ ...HS.mono, fontSize: mobile ? 9 : 11, color: HC.lime }}>✦ A QUICK NOTE</div>
            <h2 style={{ ...HS.display, fontSize: mobile ? 44 : 80, lineHeight: 0.95, margin: '8px 0 0', color: HC.cream }}>
              we don&apos;t <span style={{ color: HC.magenta, fontStyle: 'italic' }}>do online</span>.
            </h2>
            <p style={{ ...HS.serif, fontStyle: 'italic', fontSize: mobile ? 18 : 26, lineHeight: 1.35, marginTop: 16, maxWidth: 620, color: 'rgba(245,236,217,0.92)' }}>
              the floor is the catalog. call. dm. drop in.<br />
              we&apos;ll walk you through what&apos;s in stock.
            </p>
          </div>
          <div style={{ display: 'grid', gap: 14, marginTop: mobile ? 22 : 0 }}>
            {[
              { href: 'tel:4792518581', bg: HC.lime,    label: 'call · (479) 251-8581', external: false },
              { href: 'https://instagram.com/headwaters_provisions', bg: HC.magenta, label: 'dm @headwaters_provisions', external: true },
              { href: '/visit', bg: HC.cream, label: 'visit · 4505 W Poplar', internal: true },
            ].map((cta, i) => {
              const accent = [HC.magenta, HC.lime, HC.tangerine][i];
              const baseProps = {
                'data-confetti': true,
                style: {
                  background: cta.bg, color: HC.ink,
                  padding: mobile ? '16px 20px' : '20px 26px',
                  border: `2.5px solid ${HC.ink}`, borderRadius: 16,
                  ...HS.display, fontSize: mobile ? 22 : 30, lineHeight: 1, letterSpacing: '-0.005em', textTransform: 'lowercase',
                  textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 14,
                  boxShadow: `4px 5px 0 ${HC.ink}`,
                  transition: 'transform .15s cubic-bezier(.34,1.56,.64,1), box-shadow .15s',
                },
                onMouseEnter: (e) => { e.currentTarget.style.transform = 'translate(-2px,-3px) rotate(-0.5deg)'; e.currentTarget.style.boxShadow = `7px 8px 0 ${HC.ink}`; },
                onMouseLeave: (e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = `4px 5px 0 ${HC.ink}`; },
              };
              const inner = (
                <>
                  <span style={{ fontSize: mobile ? 26 : 36, color: accent }}>✦</span>
                  <span>{cta.label}</span>
                </>
              );
              if (cta.internal) {
                return <Link key={i} href={cta.href} {...baseProps} onClick={(e) => spawnGlyphConfetti(e.clientX, e.clientY)}>{inner}</Link>;
              }
              return <a key={i} href={cta.href} target={cta.external ? '_blank' : undefined} rel={cta.external ? 'noopener' : undefined} {...baseProps}>{inner}</a>;
            })}
          </div>
        </div>
      </section>

      <Marquee bg={HC.blue} fg={HC.cream} text="✦ no online store · come on in" />
      <Footer mobile={mobile} />
    </div>
  );
}
