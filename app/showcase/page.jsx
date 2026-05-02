'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useMobile } from '../../hooks/useMobile';
import { HC, HS } from '../../components/design/tokens';
import { Rings, Burst, Eye, Halftone } from '../../components/design/base';
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

  const visibleBrands = filter === 'all' ? brands : brands.filter(b => b.cat === filter);
  const visibleCats   = filter === 'all' ? categories : categories.filter(c => c.id === filter);

  return (
    <div style={{ ...HS.page, background: HC.cream }}>
      {mobile ? <MobileNav /> : <Nav />}

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
            stock the{' '}
            <span style={{ color: HC.cream, fontStyle: 'italic', WebkitTextStroke: `${mobile ? 2 : 3}px ${HC.ink}`, paintOrder: 'stroke fill' }}>vibe.</span>
          </h1>
          <p style={{ ...HS.serif, fontStyle: 'italic', fontSize: mobile ? 16 : 22, lineHeight: 1.4, marginTop: 18, maxWidth: 680 }}>
            no online cart. no shipping.<br />
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
              <button key={opt.id} onClick={() => setFilter(opt.id)} style={{
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

      {/* CATEGORIES */}
      <section style={{ padding: mobile ? '32px 16px' : '60px 40px', background: HC.cream }}>
        <div style={{ ...HS.mono, fontSize: mobile ? 9 : 11, color: HC.blue, marginBottom: 8 }}>
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
      <section style={{ padding: mobile ? '40px 16px' : '70px 40px', background: HC.paper }}>
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
            <a href="tel:4792518581" style={{
              background: HC.lime, color: HC.ink, padding: '14px 18px',
              border: `2px solid ${HC.ink}`, borderRadius: 14,
              ...HS.alt, fontSize: mobile ? 14 : 18, textDecoration: 'none', display: 'block',
            }}>✦ call · (479) 251-8581</a>
            <a href="https://instagram.com/headwaters_provisions" target="_blank" rel="noopener" style={{
              background: HC.magenta, color: HC.ink, padding: '14px 18px',
              border: `2px solid ${HC.ink}`, borderRadius: 14,
              ...HS.alt, fontSize: mobile ? 14 : 18, textDecoration: 'none', display: 'block',
            }}>✦ dm @headwaters_provisions</a>
            <Link href="/visit" onClick={(e) => spawnGlyphConfetti(e.clientX, e.clientY)} style={{
              background: HC.cream, color: HC.ink, padding: '14px 18px',
              border: `2px solid ${HC.ink}`, borderRadius: 14,
              ...HS.alt, fontSize: mobile ? 14 : 18, textDecoration: 'none', display: 'block',
            }}>✦ visit · 4505 W Poplar</Link>
          </div>
        </div>
      </section>

      <Marquee bg={HC.blue} fg={HC.cream} text="✦ no online store · come on in" />
      <Footer mobile={mobile} />
    </div>
  );
}
