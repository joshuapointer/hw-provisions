'use client';
import { useState } from 'react';
import { HC, HS } from '../design/tokens';
import { Rings } from '../design/base';

const POSTS = [
  { net: 'ig', img: '/assets/photo-1.avif', caption: 'Friday at 5. №43 lands tonight, courtesy of Maple Bend.', full: "Friday at 5. №43 lands tonight, courtesy of Maple Bend Glass. Three colors of fume work, recycler perc, the whole deal. One of one — when it's gone, it's gone. ✦ link in bio for the full drop story.", likes: 412, c: HC.magenta, when: '2h' },
  { net: 'ig', img: '/assets/photo-3.avif', caption: 'Cream-on-cream restocked. Last drop sold out in 11 days.', full: 'Cream-on-cream restocked. Last drop sold out in 11 days. Heavyweight, garment-dyed, embroidered chest mark. S–XXL on the floor now.', likes: 287, c: HC.lime, when: '6h' },
  { net: 'fb', img: '/assets/photo-jeremy.avif', caption: 'Behind the counter today. Come say hey 👋', full: "Behind the counter today. Come say hey 👋 Jeremy is in until 6 — he's got opinions on every glass piece in the case and is happy to walk you through them.", likes: 91, c: HC.tangerine, when: '1d' },
  { net: 'ig', img: '/assets/photo-5.avif', caption: 'New from Adam Driver — walnut + brass, hand-turned.', full: "New from Adam Driver — walnut + brass, hand-turned. Each one's slightly different. Limited run of 12, six left.", likes: 356, c: HC.blue, when: '2d' },
  { net: 'ig', img: '/assets/photo-2.avif', caption: "Saturday's vibe.", full: "Saturday's vibe. Sun out, door open, fresh papers in.", likes: 198, c: HC.lime, when: '3d' },
  { net: 'fb', img: '/assets/photo-6.avif', caption: 'DOPE DRIVE coming up May 17. Spread the word.', full: 'DOPE DRIVE coming up May 17. NWA Patient Drive returns — bring donations, leave with stories. 10am–4pm in The Source parking lot. RSVP at the link in bio.', likes: 142, c: HC.magenta, when: '4d' },
];

export function SocialFeed({ mobile = false }) {
  const [active, setActive] = useState(null);
  const visible = mobile ? POSTS.slice(0, 4) : POSTS;

  return (
    <section style={{ padding: mobile ? '40px 16px' : '90px 40px', background: HC.creamWarm, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 30, right: 30, opacity: 0.3, pointerEvents: 'none' }}>
        <Rings size={mobile ? 160 : 260} color={HC.blue} />
      </div>
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32, flexWrap: 'wrap', gap: 12 }}>
        <div>
          <div style={{ ...HS.mono, fontSize: mobile ? 9 : 11, color: HC.magenta }}>✦ THE FEED ✦ LIVE FROM THE COUNTER</div>
          <h2 style={{ ...HS.display, fontSize: mobile ? 48 : 96, margin: '8px 0 0', lineHeight: 0.95 }}>
            on the <span style={{ color: HC.blue, fontStyle: 'italic' }}>'gram</span>.
          </h2>
        </div>
        {!mobile && (
          <div style={{ display: 'flex', gap: 10 }}>
            <a href="https://www.instagram.com/headwaters_provisions" target="_blank" rel="noopener noreferrer" style={{
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
        )}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: mobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', gap: mobile ? 12 : 20, position: 'relative' }}>
        {visible.map((p, i) => (
          <PostCard key={i} p={p} i={i} mobile={mobile} onClick={() => setActive(p)} />
        ))}
      </div>
      {active && (
        <div onClick={() => setActive(null)} style={{
          position: 'fixed', inset: 0, zIndex: 9990, background: 'rgba(14,26,47,0.75)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
          animation: 'h-fade .2s',
        }}>
          <div onClick={(e) => e.stopPropagation()} style={{
            width: 'min(560px, 100%)', background: HC.cream, color: HC.ink,
            border: `2px solid ${HC.ink}`, borderRadius: 22, overflow: 'hidden',
            boxShadow: `12px 12px 0 ${active.c}`,
          }}>
            <div style={{ position: 'relative', aspectRatio: '1/1', background: `url(${active.img}) center/cover` }}>
              <button onClick={() => setActive(null)} style={{
                position: 'absolute', top: 14, right: 14,
                background: HC.cream, color: HC.ink, border: `2px solid ${HC.ink}`,
                width: 38, height: 38, borderRadius: '50%', cursor: 'pointer',
                ...HS.alt, fontSize: 16,
              }}>✕</button>
            </div>
            <div style={{ padding: '20px 24px 24px' }}>
              <div style={{ ...HS.mono, fontSize: 10, color: active.net === 'ig' ? HC.magenta : HC.blue }}>
                ✦ @headwaters_provisions · {active.when} ago
              </div>
              <p style={{ ...HS.serif, fontStyle: 'italic', fontSize: 18, lineHeight: 1.45, marginTop: 12 }}>
                {active.full}
              </p>
              <div style={{ marginTop: 16, ...HS.mono, fontSize: 10, color: 'rgba(14,26,47,0.6)' }}>
                ♡ {active.likes} likes
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function PostCard({ p, i, mobile, onClick }) {
  const [hov, setHov] = useState(false);
  const rotations = [-1, 0.5, -0.5, 0.5, -1, 0.5];
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display: 'block', textDecoration: 'none', color: HC.ink, cursor: 'pointer',
        background: HC.paper, border: `2px solid ${HC.ink}`, borderRadius: 18,
        overflow: 'hidden', boxShadow: `5px 5px 0 ${p.c}`,
        transform: hov ? 'rotate(0deg) translateY(-4px)' : `rotate(${rotations[i % rotations.length]}deg)`,
        transition: 'transform .2s',
        textAlign: 'left',
      }}>
      <div style={{ position: 'relative', aspectRatio: '1/1', background: `url(${p.img}) center/cover` }}>
        <div style={{
          position: 'absolute', top: 12, left: 12, padding: '6px 10px',
          background: p.net === 'ig' ? HC.magenta : HC.blue,
          color: p.net === 'ig' ? HC.ink : HC.cream,
          border: `2px solid ${HC.ink}`, borderRadius: 999,
          ...HS.mono, fontSize: 9,
        }}>
          {p.net === 'ig' ? '✦ IG' : '✦ FB'}
        </div>
      </div>
      <div style={{ padding: mobile ? '10px 12px 12px' : '14px 18px 18px' }}>
        <div style={{ fontSize: mobile ? 11 : 13, lineHeight: 1.45, color: HC.ink }}>{p.caption}</div>
        <div style={{ ...HS.mono, fontSize: 9, color: 'rgba(14,26,47,0.6)', marginTop: 8, display: 'flex', justifyContent: 'space-between' }}>
          <span>♡ {p.likes}</span><span>{p.when} ago</span>
        </div>
      </div>
    </button>
  );
}
