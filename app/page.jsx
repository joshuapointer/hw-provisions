'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { useMobile } from '../hooks/useMobile';
import { HC, HS } from '../components/design/tokens';
import { Rings, Burst, Squiggle, Halftone, Mushroom, Eye, Smoke, SunRise, Lightning, Sticker, Glyph, TicketButton, BlobButton, ProductPattern, Sunny } from '../components/design/base';
import { FolioRule, DropCap, spawnGlyphConfetti } from '../components/design/interactions';
import { Nav, MobileNav } from '../components/nav';
import { Footer } from '../components/footer';
import { Marquee } from '../components/marquee';
import { Events } from '../components/sections/events';
import { Roster } from '../components/sections/roster';
import { BehindCounter } from '../components/sections/behind-counter';
import { StickerSheet } from '../components/sections/sticker-sheet';

export default function Home() {
  const mobile = useMobile();
  const heroRef = useRef(null);
  const [orbit, setOrbit] = useState({ x: 50, y: 50 });

  return (
    <div style={{ ...HS.page, background: HC.cream }}>
      {mobile ? <MobileNav tone="dark" /> : <Nav tone="dark" />}

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
              <span style={{ display: 'block' }}>
                <span className="h-word h-word-1">where&apos;s</span>{' '}
                <span className="h-word h-word-2">your</span>
              </span>
              <span style={{
                display: 'block', fontStyle: 'italic',
                color: HC.amber, textShadow: 'none',
                WebkitTextStroke: `${mobile ? 2 : 3}px ${HC.ink}`, paintOrder: 'stroke fill',
                marginLeft: mobile ? 12 : 40,
              }}>
                <span className="h-word h-word-3">head at?</span>
              </span>
            </h1>
            <Squiggle width={mobile ? 220 : 520} color={HC.amber} />
            <p style={{
              marginTop: 16, fontSize: mobile ? 17 : 26, maxWidth: 540, lineHeight: 1.35,
              ...HS.serif, fontStyle: 'italic', fontWeight: 400, color: 'rgba(245,236,217,0.95)',
            }}>
              floor-curated gear. one-of-one drops.<br />
              <span style={{ ...HS.hand, fontStyle: 'normal', fontSize: mobile ? 28 : 38, color: HC.amber, display: 'inline-block', marginTop: 8, lineHeight: 1 }}>
                tucked into the source · rogers ar.
              </span>
            </p>
            <div style={{ display: 'flex', gap: mobile ? 10 : 18, marginTop: mobile ? 24 : 36, alignItems: 'center', flexWrap: 'wrap' }}>
              <Link href="/showcase" data-confetti style={{ textDecoration: 'none' }} onClick={(e) => spawnGlyphConfetti(e.clientX, e.clientY)}>
                <TicketButton color={HC.lime} fg={HC.ink} icon="→" size={mobile ? 'sm' : 'lg'}>see what we stock</TicketButton>
              </Link>
              <Link href="/visit" data-confetti style={{ textDecoration: 'none' }} onClick={(e) => spawnGlyphConfetti(e.clientX, e.clientY)}>
                <BlobButton color={HC.cream} fg={HC.ink} rotate={2}>plan a visit</BlobButton>
              </Link>
            </div>
          </div>
          {!mobile && (
            <div style={{ position: 'relative', paddingTop: 30 }}>
              <div style={{ transform: 'rotate(3deg)' }}>
                <Sticker color={HC.cream} rotate={0} padding={10} shadow={true}>
                  <div style={{
                    width: 320, aspectRatio: '4/5', overflow: 'hidden',
                    background: 'url(/assets/photo-3.avif) center/cover',
                    border: `1px solid ${HC.ink}`,
                  }} />
                  <div style={{ ...HS.hand, fontSize: 30, color: HC.ink, textAlign: 'center', marginTop: 8, lineHeight: 1 }}>
                    one of one ✦
                  </div>
                </Sticker>
              </div>
              {/* Sunny peace */}
              <Sunny pose="peace" size={200} rotate={-4}
                style={{
                  position: 'absolute', right: -90, top: 220, zIndex: 3,
                  filter: 'drop-shadow(4px 6px 0 rgba(0,0,0,0.28)) drop-shadow(0 14px 22px rgba(0,0,0,0.24))',
                  pointerEvents: 'none',
                  animation: 'h-bob-rot 4.2s ease-in-out infinite',
                }} />
              <div style={{ position: 'absolute', top: -16, left: -28, zIndex: 2 }}>
                <Sticker color={HC.rose} rotate={-8} padding={10} shadow={false} peel={false}>
                  <div style={{ ...HS.alt, fontSize: 14, color: HC.cream }}>HEADY<br />DROPS</div>
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

      <Marquee bg={HC.ink} fg={HC.amber} />

      {/* INTRO */}
      <section style={{ padding: mobile ? '40px 16px' : '80px 40px', background: HC.cream, position: 'relative', overflow: 'hidden' }}>
        <Halftone color={HC.ink} opacity={0.06} dot={2} gap={11} />
        <ProductPattern color={HC.blue} opacity={0.08} blend="multiply" />
        <img src="/assets/mopbp8c2-Headwaters_Banner.png" alt="" aria-hidden
          style={{
            position: 'absolute', left: '-5%', bottom: -40, width: '50%',
            opacity: 0.18, mixBlendMode: 'multiply', pointerEvents: 'none',
            filter: 'saturate(0.6)',
          }} />
        <div style={{ position: 'relative', display: mobile ? 'block' : 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'center' }}>
          {!mobile && (
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'relative', width: 380, height: 380, transform: 'rotate(-3deg)', filter: `drop-shadow(6px 6px 0 ${HC.ink})` }}>
                <div style={{ position: 'absolute', inset: 0, border: `3px solid ${HC.ink}`, overflow: 'hidden' }}>
                  <SunRise size={380} sun={HC.amber} mountain={HC.blueDeep} sky={HC.cream} />
                </div>
              </div>
              {/* Sunny thumbsup endorsing the gear */}
              <Sunny pose="thumbsup" size={140} rotate={6}
                style={{
                  position: 'absolute', right: -50, top: 80, zIndex: 3,
                  filter: 'drop-shadow(4px 5px 0 rgba(0,0,0,0.25)) drop-shadow(0 10px 14px rgba(0,0,0,0.18))',
                  pointerEvents: 'none',
                  animation: 'h-bob-rot 4.6s ease-in-out infinite',
                }} />
              <div style={{
                position: 'absolute', top: 24, left: -28,
                ...HS.hand, fontSize: 60, color: HC.rose,
                transform: 'rotate(-8deg)', lineHeight: 0.9, textShadow: `3px 3px 0 ${HC.ink}`,
              }}>good<br />gear</div>
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
              small shop.<br />
              <span style={{ fontStyle: 'italic', color: HC.blue, WebkitTextStroke: `2px ${HC.ink}`, paintOrder: 'stroke fill' }}>floor-curated.</span><br />
              fridays at five.
            </h2>
            <div style={{ marginTop: 28, maxWidth: 560 }}>
              <DropCap glyphN="03" color={HC.amber}>
                <span style={{ ...HS.serif, fontSize: mobile ? 19 : 24, lineHeight: 1.45, fontStyle: 'italic' }}>
                  the floor is the catalog. cannabis accessories, apparel, gifts you can&apos;t find online — because we&apos;re not online. on purpose.
                </span>
              </DropCap>
            </div>
            <p style={{ ...HS.hand, fontSize: mobile ? 24 : 32, color: HC.rose, marginTop: 18, lineHeight: 1, transform: 'rotate(-1.5deg)', display: 'inline-block' }}>
              we keep what we&apos;d keep ourselves.
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
            <p style={{ marginTop: 18, ...HS.serif, fontStyle: 'italic', fontSize: mobile ? 18 : 24, lineHeight: 1.4, maxWidth: 480, color: 'rgba(242,230,201,0.92)' }}>
              local glassblowers drop pieces every friday at five.<br />
              we keep one. when it&apos;s gone — that&apos;s the whole story.
            </p>
            <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap' }}>
              <Link href="/visit" data-confetti style={{ textDecoration: 'none' }} onClick={(e) => spawnGlyphConfetti(e.clientX, e.clientY)}>
                <TicketButton color={HC.amber} fg={HC.ink} icon="→" size={mobile ? 'sm' : 'lg'}>this friday&apos;s piece</TicketButton>
              </Link>
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
                    background: 'url(/assets/photo-1.avif) center/cover',
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
              {/* Sunny woo, scaled */}
              <Sunny pose="woo" size={130} rotate={-8}
                style={{
                  position: 'absolute', left: -120, bottom: -40, zIndex: 3,
                  filter: 'drop-shadow(4px 6px 0 rgba(0,0,0,0.28)) drop-shadow(0 14px 22px rgba(0,0,0,0.24))',
                  pointerEvents: 'none',
                  animation: 'h-bob-rot 4s ease-in-out infinite',
                }} />
            </div>
          )}
          {mobile && (
            <div style={{
              aspectRatio: '1/1', overflow: 'hidden',
              border: `2px solid ${HC.ink}`,
              background: 'url(/assets/photo-1.avif) center/cover',
              boxShadow: `8px 8px 0 ${HC.amber}`,
              marginTop: 24,
            }} />
          )}
        </div>
      </section>

      <Marquee bg={HC.amber} fg={HC.ink} text="no card needed" />

      <BehindCounter mobile={mobile} />
      <Roster mobile={mobile} />
      <Events tone="light" mobile={mobile} />
      <StickerSheet mobile={mobile} />
      <Footer mobile={mobile} />
    </div>
  );
}
