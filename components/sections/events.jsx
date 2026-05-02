'use client';
import { useState } from 'react';
import { HC, HS } from '../design/tokens';
import { Burst } from '../design/base';
import { useToast } from '../toast';

export function Events({ tone = 'light', heading = true, mobile = false }) {
  const toast = useToast();
  const [rsvped, setRsvped] = useState({});
  const events = [
    { id: 'dope',        d: 'MAY', n: '17', day: 'SAT', title: 'Dope Drive · NWA Patient Drive',    time: '10am – 4pm',  tag: 'Community', loc: 'Outside The Source', c: HC.magenta },
    { id: 'drop43',      d: 'MAY', n: '23', day: 'FRI', title: 'Heady Drop №43 · Maple Bend',       time: '5pm sharp',   tag: 'Glass Drop', loc: 'In-store',           c: HC.lime     },
    { id: 'hippie',      d: 'JUN', n: '07', day: 'SAT', title: 'Vendor Day · Hippie Hounds',        time: '12 – 6pm',    tag: 'Pop-up',    loc: 'In-store',           c: HC.tangerine },
    { id: 'glassblowers',d: 'JUN', n: '20', day: 'FRI', title: 'After-hours: Glassblowers panel',  time: '8 – 10pm',    tag: 'Talk',      loc: 'In-store',           c: HC.blue     },
  ];
  const dark = tone === 'dark';
  const fg = dark ? HC.cream : HC.ink;
  const bg = dark ? HC.blueDark : HC.cream;

  const toggle = (e) => {
    setRsvped(r => ({ ...r, [e.id]: !r[e.id] }));
    if (toast) toast(rsvped[e.id] ? `Removed: ${e.title}` : `✦ You're in for ${e.title}`, e.c);
  };

  return (
    <section style={{ background: bg, color: fg, padding: mobile ? '40px 16px' : '80px 40px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: -120, bottom: -120, opacity: dark ? 0.18 : 0.5, pointerEvents: 'none' }}>
        <Burst size={mobile ? 240 : 420} color={dark ? HC.lime : HC.tangerine} count={28} />
      </div>
      {heading && (
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: mobile ? 20 : 36, gap: 12 }}>
          <div>
            <div style={{ ...HS.mono, fontSize: mobile ? 9 : 11, color: dark ? HC.lime : HC.blue }}>✦ MARK YOUR CALENDAR</div>
            <h2 style={{ ...HS.display, fontSize: mobile ? 44 : 96, margin: '8px 0 0', lineHeight: 0.95, color: fg }}>
              what's <span style={{ color: dark ? HC.lime : HC.magenta, fontStyle: 'italic' }}>going down</span>.
            </h2>
          </div>
        </div>
      )}
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(2, 1fr)', gap: mobile ? 12 : 20 }}>
        {events.map(e => {
          const isIn = rsvped[e.id];
          return (
            <div key={e.id} style={{
              display: 'grid', gridTemplateColumns: mobile ? '70px 1fr' : '120px 1fr auto', gap: mobile ? 14 : 24, alignItems: 'center',
              padding: mobile ? '14px 16px' : '20px 24px', background: dark ? 'rgba(245,236,217,0.06)' : HC.paper,
              border: `2px solid ${dark ? HC.cream : HC.ink}`, borderRadius: 18,
              color: fg, boxShadow: `5px 5px 0 ${e.c}`,
            }}>
              <div style={{
                background: e.c, color: HC.ink, border: `2px solid ${HC.ink}`, borderRadius: 12,
                padding: mobile ? '6px 4px' : '10px 8px', textAlign: 'center',
              }}>
                <div style={{ ...HS.mono, fontSize: mobile ? 8 : 10 }}>{e.d}</div>
                <div style={{ ...HS.display, fontSize: mobile ? 26 : 40, lineHeight: 0.95 }}>{e.n}</div>
                <div style={{ ...HS.mono, fontSize: mobile ? 7 : 9 }}>{e.day}</div>
              </div>
              <div>
                <div style={{ ...HS.mono, fontSize: mobile ? 8 : 10, color: dark ? HC.lime : HC.blue }}>✦ {e.tag.toUpperCase()}</div>
                <div style={{ ...HS.alt, fontSize: mobile ? 16 : 22, lineHeight: 1.15, marginTop: 4 }}>{e.title}</div>
                <div style={{ ...HS.mono, fontSize: mobile ? 9 : 10, opacity: 0.7, marginTop: 6 }}>
                  {e.time} · {e.loc}
                </div>
                <button onClick={() => toggle(e)} style={{
                  marginTop: 10, padding: mobile ? '6px 14px' : '8px 18px',
                  background: isIn ? HC.ink : 'transparent',
                  color: isIn ? e.c : (dark ? HC.cream : HC.ink),
                  border: `2px solid ${isIn ? HC.ink : (dark ? HC.cream : HC.ink)}`,
                  borderRadius: 999, ...HS.mono, fontSize: mobile ? 9 : 10, cursor: 'pointer',
                  transition: 'all .2s',
                }}>{isIn ? "✓ YOU'RE IN" : '+ I\'M IN'}</button>
              </div>
              {!mobile && <div style={{ ...HS.display, fontSize: 32, color: dark ? HC.lime : HC.blue, opacity: 0.5 }}>→</div>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
