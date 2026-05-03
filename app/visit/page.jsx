'use client';
import { useState } from 'react';
import { useMobile } from '../../hooks/useMobile';
import { HC, HS } from '../../components/design/tokens';
import { Rings, Mushroom, Halftone, Sunny } from '../../components/design/base';
import { FolioRule } from '../../components/design/interactions';
import { Nav, MobileNav } from '../../components/nav';
import { Footer } from '../../components/footer';
import { Events } from '../../components/sections/events';
import { useToast } from '../../components/toast';

function Input({ label, value, onChange, multiline, type = 'text' }) {
  const [focus, setFocus] = useState(false);
  const Cmp = multiline ? 'textarea' : 'input';
  return (
    <label style={{ display: 'block', position: 'relative' }}>
      <div style={{ ...HS.mono, fontSize: 9, color: focus ? HC.magenta : HC.blue, marginBottom: 4 }}>
        ✦ {label}
      </div>
      <Cmp
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

export default function Visit() {
  const mobile = useMobile();
  const toast = useToast();
  const [form, setForm] = useState({ name: '', email: '', msg: '' });
  const [submitted, setSubmitted] = useState(false);

  const now = new Date();
  const hour = now.getHours() + now.getMinutes() / 60;
  const dow = now.getDay();
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
    <div style={{ ...HS.page, background: HC.blueDark }}>
      {mobile ? <MobileNav tone="dark" /> : <Nav tone="dark" />}

      <section style={{ padding: mobile ? '32px 16px' : '60px 40px', position: 'relative', overflow: 'hidden' }}>
        <Halftone color={HC.cream} opacity={0.06} dot={2} gap={9} />
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          <Rings size={mobile ? 700 : 1100} color={HC.amber} opacity={0.16} />
        </div>
        {!mobile && (
          <>
            <div style={{ position: 'absolute', top: 80, right: 80, transform: 'rotate(-8deg)', filter: `drop-shadow(4px 4px 0 ${HC.ink})` }}>
              <Mushroom size={140} cap={HC.rose} stem={HC.cream} dots={HC.cream} />
            </div>
            {/* Sunny in the rain — outside, waving you in */}
            <Sunny pose="rain" size={180} rotate={-6}
              style={{
                position: 'absolute', top: 200, right: 240, zIndex: 2,
                filter: 'drop-shadow(4px 5px 0 rgba(0,0,0,0.3)) drop-shadow(0 12px 18px rgba(0,0,0,0.25))',
                pointerEvents: 'none',
                animation: 'h-bob-rot 4.4s ease-in-out infinite',
              }} />
            <svg style={{ position: 'absolute', top: 60, right: 200, width: 200, height: 280, pointerEvents: 'none', opacity: 0.65 }} viewBox="0 0 200 280">
              {[...Array(7)].map((_, i) => (
                <ellipse key={i} cx={20 + i * 28} cy={20 + (i % 3) * 24} rx="2" ry="6"
                  fill={HC.cream}
                  style={{
                    transformOrigin: `${20 + i * 28}px 20px`,
                    animation: `h-rain ${2 + i * 0.3}s linear ${i * 0.2}s infinite`,
                  }} />
              ))}
            </svg>
          </>
        )}
        <div style={{ position: 'relative', display: mobile ? 'block' : 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>

          {/* LEFT: info */}
          <div style={{ color: HC.cream }}>
            <FolioRule n={1} of={3} label="find us · come in" />
            <h1 style={{
              ...HS.display, fontSize: mobile ? 80 : 168, margin: '14px 0 0', lineHeight: 0.84,
              color: HC.cream, textShadow: `5px 5px 0 ${HC.ink}`, letterSpacing: '-0.025em',
            }}>
              <span className="h-word h-word-1">come</span>{' '}
              <span className="h-word h-word-2" style={{ color: HC.amber, fontStyle: 'italic', WebkitTextStroke: `2px ${HC.ink}`, paintOrder: 'stroke fill', textShadow: 'none', display: 'inline-block' }}>find</span>{' '}
              <span className="h-word h-word-3">us.</span>
            </h1>
            <p style={{ ...HS.serif, fontStyle: 'italic', fontSize: mobile ? 18 : 26, marginTop: 14, lineHeight: 1.35, maxWidth: 460, color: 'rgba(242,230,201,0.92)' }}>
              tucked into the source.<br />
              door&apos;s open till eight.
            </p>

            <div style={{
              marginTop: 20, display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '8px 14px', background: isOpen ? HC.lime : HC.tangerine, color: HC.ink,
              border: `2px solid ${HC.ink}`, borderRadius: 999, ...HS.mono, fontSize: mobile ? 10 : 11,
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: '50%', background: HC.ink,
                animation: isOpen ? 'h-pulse 1.6s infinite' : 'none',
                display: 'inline-block',
              }} />
              {isOpen ? `OPEN NOW · until ${todayHours[1]}:00` : `CLOSED · opens ${todayHours[0]}:00`}
            </div>

            <div style={{ marginTop: 24, display: 'grid', gap: 14 }}>
              <div style={{ background: HC.cream, color: HC.ink, padding: mobile ? 18 : 24, borderRadius: 22, border: `2px solid ${HC.ink}`, boxShadow: `6px 6px 0 ${HC.lime}` }}>
                <div style={{ ...HS.mono, fontSize: 10, color: HC.magenta }}>address</div>
                <div style={{ ...HS.alt, fontSize: mobile ? 22 : 28, marginTop: 6, lineHeight: 1.1 }}>
                  4505 W Poplar Street<br />Rogers, AR 72756
                </div>
                <div style={{ fontSize: mobile ? 12 : 13, marginTop: 10, lineHeight: 1.5 }}>
                  Inside The Source — front doors, immediate right.
                </div>
                <a href="https://maps.google.com/?q=4505+W+Poplar+St+Rogers+AR" target="_blank" rel="noopener" style={{
                  marginTop: 12, display: 'inline-flex', alignItems: 'center', gap: 6,
                  ...HS.mono, fontSize: 10, color: HC.blue, textDecoration: 'none',
                }}>OPEN IN GOOGLE MAPS ↗</a>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <div style={{ background: HC.lime, color: HC.ink, padding: mobile ? 16 : 22, borderRadius: 18, border: `2px solid ${HC.ink}`, boxShadow: `3px 3px 0 ${HC.ink}` }}>
                  <div style={{ ...HS.mono, fontSize: 10 }}>HOURS</div>
                  <div style={{ marginTop: 8, ...HS.display, fontSize: mobile ? 18 : 22, lineHeight: 1.45, letterSpacing: '-0.005em', textTransform: 'lowercase' }}>
                    <div style={{ opacity: dow >= 1 && dow <= 5 ? 1 : 0.55 }}>mon–fri · 9–8</div>
                    <div style={{ opacity: dow === 6 ? 1 : 0.55 }}>sat · 9–7</div>
                    <div style={{ opacity: dow === 0 ? 1 : 0.55 }}>sun · 10–6</div>
                  </div>
                </div>
                <a href="tel:4792518581" style={{
                  background: HC.magenta, color: HC.ink, padding: mobile ? 16 : 22,
                  borderRadius: 18, border: `2px solid ${HC.ink}`, textDecoration: 'none', boxShadow: `3px 3px 0 ${HC.ink}`,
                  display: 'block', transition: 'transform .15s, box-shadow .15s',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translate(-1px,-2px)'; e.currentTarget.style.boxShadow = `5px 5px 0 ${HC.ink}`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = `3px 3px 0 ${HC.ink}`; }}>
                  <div style={{ ...HS.mono, fontSize: 10 }}>HOLLER</div>
                  <div style={{ marginTop: 8, ...HS.display, fontSize: mobile ? 18 : 22, lineHeight: 1.2, letterSpacing: '-0.005em' }}>(479) 251-8581</div>
                  <div style={{ marginTop: 4, fontSize: mobile ? 11 : 12, lineHeight: 1.3 }}>info@headwatersprovisions.com</div>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: map + form */}
          <div style={{ marginTop: mobile ? 24 : 0, position: 'relative' }}>
            {!mobile && (
              <Sunny pose="love" size={130} rotate={6}
                style={{
                  position: 'absolute', right: -34, top: 130, zIndex: 4,
                  filter: 'drop-shadow(3px 4px 0 rgba(0,0,0,0.28)) drop-shadow(0 8px 14px rgba(0,0,0,0.18))',
                  pointerEvents: 'none',
                  animation: 'h-bob-rot 3.2s ease-in-out infinite',
                }} />
            )}
            <div style={{
              position: 'relative',
              background: HC.cream, color: HC.ink,
              border: `2px solid ${HC.ink}`, borderRadius: 22, overflow: 'hidden',
              boxShadow: `10px 10px 0 ${HC.magenta}`,
            }}>
              <svg viewBox="0 0 600 280" style={{ width: '100%', display: 'block', background: HC.creamWarm }}>
                <defs>
                  <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke={HC.blue} strokeOpacity="0.18" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="600" height="280" fill="url(#grid)" />
                <path d="M 0 80 Q 150 40, 280 100 T 600 80" fill="none" stroke={HC.blue} strokeWidth="3" />
                <path d="M 0 200 Q 200 240, 380 180 T 600 220" fill="none" stroke={HC.blue} strokeWidth="2" strokeOpacity="0.5" />
                <line x1="0" y1="160" x2="600" y2="160" stroke={HC.ink} strokeWidth="6" />
                <line x1="0" y1="160" x2="600" y2="160" stroke={HC.cream} strokeWidth="1" strokeDasharray="8 8" />
                <text x="20" y="155" fontFamily={'"IBM Plex Mono", monospace'} fontSize="10" fill={HC.ink}>W POPLAR ST</text>
                <g transform="translate(360 140)" style={{ animation: 'h-bob 2.4s ease-in-out infinite' }}>
                  <circle r="22" fill={HC.magenta} stroke={HC.ink} strokeWidth="2" />
                  <text textAnchor="middle" dy="6" fontFamily={'"Holtzman Rounded", "Bowlby One SC", serif'} fontSize="22" fill={HC.cream}>✦</text>
                  <line x1="0" y1="22" x2="0" y2="40" stroke={HC.ink} strokeWidth="2" />
                </g>
                <g transform="translate(360 200)">
                  <rect x="-58" y="-12" width="116" height="20" rx="4" fill={HC.lime} stroke={HC.ink} strokeWidth="2" />
                  <text textAnchor="middle" dy="3" fontFamily={'"Bricolage Grotesque", sans-serif'} fontSize="11" fill={HC.ink}>Headwaters · 4505 W Poplar</text>
                </g>
              </svg>
            </div>

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
                  <Input label="your name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                  <Input label="email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                  <Input label="what's up?" multiline value={form.msg} onChange={(v) => setForm({ ...form, msg: v })} />
                  <button data-confetti type="submit" style={{
                    marginTop: 8, padding: '18px 28px', background: HC.ink, color: HC.lime,
                    border: `2.5px solid ${HC.ink}`, borderRadius: 999,
                    ...HS.display, fontSize: 28, lineHeight: 1, letterSpacing: '-0.005em', textTransform: 'lowercase',
                    boxShadow: `5px 6px 0 ${HC.magenta}`, cursor: 'pointer',
                    transition: 'transform .15s cubic-bezier(.34,1.56,.64,1), box-shadow .15s',
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translate(-2px,-3px) rotate(-0.6deg)'; e.currentTarget.style.boxShadow = `8px 9px 0 ${HC.magenta}`; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = `5px 6px 0 ${HC.magenta}`; }}
                  >send it →</button>
                </form>
              ) : (
                <div style={{ padding: 20, textAlign: 'center', position: 'relative' }}>
                  {/* Sunny celebration */}
                  <Sunny pose="jump" size={160}
                    style={{
                      margin: '0 auto',
                      animation: 'h-jump 1.6s cubic-bezier(.34,1.56,.64,1) infinite',
                      filter: 'drop-shadow(4px 6px 0 rgba(0,0,0,0.25))',
                      transformOrigin: 'center bottom',
                    }} />
                  <div style={{ ...HS.alt, fontSize: 32, marginTop: 10 }}>got it, {form.name.split(' ')[0]}.</div>
                  <p style={{ ...HS.serif, fontStyle: 'italic', fontSize: 18, marginTop: 8, lineHeight: 1.4 }}>
                    we&apos;ll holler back within a day. in the meantime — come visit.
                  </p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', msg: '' }); }} style={{
                    marginTop: 14, padding: '8px 16px', background: HC.cream, color: HC.ink,
                    border: `2px solid ${HC.ink}`, borderRadius: 999, ...HS.mono, fontSize: 10, cursor: 'pointer',
                  }}>send another</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Events tone="dark" mobile={mobile} />
      <Footer mobile={mobile} />
    </div>
  );
}
