'use client';
import { useState } from 'react';
import { HC, HS } from '../design/tokens';
import { Halftone } from '../design/base';
import { GLYPHS } from '../design/glyphs';
import { FolioRule, Reveal } from '../design/interactions';

const FOLKS = [
  { id: 'jeremy', n: '01', name: 'jeremy', last: 'pointer',   role: 'shopkeep',       town: 'Rogers AR',         bio: 'opened the doors. picks every piece. answers when the phone rings.',              img: '/assets/photo-jeremy.avif', tape: HC.amber, rot: -2.5 },
  { id: 'sage',   n: '02', name: 'sage',   last: 'mcclellan', role: 'glassblower',    town: 'Fayetteville AR',   bio: "spoons, sherlocks. won't make matching pairs. drops every other friday.",            img: '/assets/photo-1.avif',      tape: HC.rose,  rot: 1.5  },
  { id: 'maple',  n: '03', name: 'maple',  last: 'bend',      role: 'glass collective', town: 'Bentonville AR',  bio: 'three blowers, one studio. heady fume work, marbles, pendants.',                   img: '/assets/photo-3.avif',      tape: HC.haze,  rot: -1   },
  { id: 'adam',   n: '04', name: 'adam',   last: 'driver',    role: 'wood goods',     town: 'Eureka Springs AR', bio: 'walnut trays. spoon-cut by hand. one a week, on average.',                        img: '/assets/photo-2.avif',      tape: HC.fern,  rot: 2    },
];

export function Roster({ mobile = false }) {
  return (
    <section style={{ background: HC.cream, padding: mobile ? '60px 16px' : '120px 40px 100px', position: 'relative', overflow: 'hidden' }}>
      <Halftone color={HC.ink} opacity={0.05} dot={2} gap={11} />
      <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, marginBottom: 48 }}>
          <div>
            <FolioRule n={2} of={6} label="hands at work" />
            <h2 style={{ ...HS.display, fontSize: mobile ? 64 : 132, lineHeight: 0.85, margin: '12px 0 0', letterSpacing: '-0.02em' }}>
              the people<br />
              <span style={{ fontStyle: 'italic', color: HC.rose, WebkitTextStroke: `2px ${HC.ink}`, paintOrder: 'stroke fill' }}>
                behind it.
              </span>
            </h2>
          </div>
          <p style={{ ...HS.serif, fontStyle: 'italic', fontSize: mobile ? 16 : 20, maxWidth: 360, lineHeight: 1.45, margin: 0 }}>
            small shop, small circle. every piece on the floor is made or chosen by one of these four.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(4, 1fr)', gap: mobile ? 28 : 22 }}>
          {FOLKS.map((f, i) => (
            <Reveal key={f.id} rotate={f.rot} delay={i * 90}>
              <RosterCard f={f} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function RosterCard({ f }) {
  const [hov, setHov] = useState(false);
  const G = GLYPHS.find(g => g.n === f.n) || GLYPHS[0];
  const Cmp = G.Cmp;
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        position: 'relative',
        transform: hov ? `rotate(${(f.rot || 0) * 0.3}deg) translateY(-6px)` : 'rotate(0deg)',
        transition: 'transform .4s cubic-bezier(.2,.8,.2,1)',
      }}>
      <div style={{
        position: 'absolute', top: -10, left: '50%', transform: `translateX(-50%) rotate(${(f.rot || 0) * -2}deg)`,
        width: 80, height: 22, background: f.tape, opacity: 0.8,
        border: `1px solid rgba(0,0,0,0.2)`, zIndex: 3,
      }} />
      <div style={{
        background: HC.paper, border: `2px solid ${HC.ink}`,
        padding: 10, paddingBottom: 14,
        boxShadow: hov ? `9px 13px 0 ${HC.ink}` : `5px 7px 0 ${HC.ink}`,
        transition: 'box-shadow .35s',
      }}>
        <div style={{
          aspectRatio: '4/5', overflow: 'hidden',
          background: `url(${f.img}) center/cover, ${HC.smoke}`,
          border: `1px solid ${HC.ink}`, position: 'relative',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(180deg, ${f.tape}55, ${HC.blueDeep}55)`,
            mixBlendMode: 'multiply',
          }} />
          <div style={{
            position: 'absolute', top: 8, right: 8,
            width: 36, height: 36, borderRadius: '50%',
            background: HC.cream, color: HC.ink, border: `2px solid ${HC.ink}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            ...HS.mono, fontSize: 10, fontWeight: 600,
          }}>№{f.n}</div>
        </div>
        <div style={{ marginTop: 10, paddingLeft: 4 }}>
          <div style={{ ...HS.hand, fontSize: 32, color: HC.ink, lineHeight: 0.9 }}>
            {f.name}<br /><span style={{ color: f.tape }}>{f.last}</span>
          </div>
          <div style={{ ...HS.mono, fontSize: 9, color: HC.smoke, marginTop: 8, letterSpacing: '0.14em' }}>
            <Cmp s={11} c={HC.ink} /> · {f.role.toUpperCase()} · {f.town}
          </div>
          <div style={{ ...HS.serif, fontStyle: 'italic', fontSize: 13, color: HC.ink, lineHeight: 1.4, marginTop: 8 }}>
            {f.bio}
          </div>
        </div>
      </div>
    </div>
  );
}
