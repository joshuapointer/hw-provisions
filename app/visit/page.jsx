'use client';
import { useState } from 'react';
import { useMobile } from '../../hooks/useMobile';
import { HC, HS } from '../../components/design/tokens';
import { Rings, Mushroom, Halftone } from '../../components/design/base';
import { FolioRule } from '../../components/design/interactions';
import { Nav, MobileNav } from '../../components/nav';
import { Footer } from '../../components/footer';
import { Events } from '../../components/sections/events';
import { useToast } from '../../components/toast';

function Input({ label, value, onChange, multiline, type = 'text', name, autoComplete, maxLength, required, inputMode }) {
  const [focus, setFocus] = useState(false);
  const Cmp = multiline ? 'textarea' : 'input';
  return (
    <label style={{ display: 'block', position: 'relative' }}>
      <div style={{ ...HS.mono, fontSize: 9, color: focus ? HC.magenta : HC.blue, marginBottom: 4 }}>
        ✦ {label}
      </div>
      <Cmp
        type={multiline ? undefined : type}
        name={name}
        autoComplete={autoComplete}
        inputMode={inputMode}
        maxLength={maxLength}
        required={required}
        spellCheck={multiline ? true : false}
        value={value}
        onChange={(e) => onChange(e.target.value)}
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

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_MAX = 80;
const EMAIL_MAX = 254;
const MSG_MAX = 2000;

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
    const name = form.name.trim().slice(0, NAME_MAX);
    const email = form.email.trim().slice(0, EMAIL_MAX);
    const msg = form.msg.trim().slice(0, MSG_MAX);
    if (!name || !email || !msg) {
      toast('✦ fill out everything please', HC.tangerine);
      return;
    }
    if (!EMAIL_RE.test(email)) {
      toast('✦ that email looks off — try again', HC.tangerine);
      return;
    }
    setSubmitted(true);
    toast(`✦ got it, ${name.split(' ')[0]} — we'll holler back`, HC.lime);
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
          <div style={{ position: 'absolute', top: 80, right: 80, transform: 'rotate(-8deg)', filter: `drop-shadow(4px 4px 0 ${HC.ink})` }}>
            <Mushroom size={140} cap={HC.rose} stem={HC.cream} dots={HC.cream} />
          </div>
        )}
        <div style={{ position: 'relative', display: mobile ? 'block' : 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>

          {/* LEFT: info */}
          <div style={{ color: HC.cream }}>
            <FolioRule n={1} of={3} label="find us · come in" />
            <h1 style={{
              ...HS.display, fontSize: mobile ? 80 : 168, margin: '14px 0 0', lineHeight: 0.84,
              color: HC.cream, textShadow: `5px 5px 0 ${HC.ink}`, letterSpacing: '-0.025em',
            }}>
              come{' '}
              <span style={{ color: HC.amber, fontStyle: 'italic', WebkitTextStroke: `2px ${HC.ink}`, paintOrder: 'stroke fill', textShadow: 'none' }}>find</span>{' '}
              us.
            </h1>
            <p style={{ ...HS.serif, fontStyle: 'italic', fontSize: mobile ? 16 : 22, marginTop: 14, lineHeight: 1.4, maxWidth: 460, color: 'rgba(242,230,201,0.92)' }}>
              tucked into the source on west poplar.<br />
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
                  Inside The Source Craft Cannabis. Walk through the front doors — we're immediately on your right.
                </div>
                <a href="https://maps.google.com/?q=4505+W+Poplar+St+Rogers+AR" target="_blank" rel="noopener noreferrer" style={{
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
                <a href="tel:4792518581" style={{
                  background: HC.magenta, color: HC.ink, padding: mobile ? 14 : 18,
                  borderRadius: 18, border: `2px solid ${HC.ink}`, textDecoration: 'none', display: 'block',
                }}>
                  <div style={{ ...HS.mono, fontSize: 9 }}>HOLLER</div>
                  <div style={{ marginTop: 6, fontSize: mobile ? 12 : 13, lineHeight: 1.6, ...HS.alt }}>
                    (479) 251-8581<br />info@headwatersprovisions.com
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: map + form */}
          <div style={{ marginTop: mobile ? 24 : 0 }}>
            <div style={{
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
                  <text textAnchor="middle" dy="6" fontFamily={'"Bowlby One SC", serif'} fontSize="22" fill={HC.cream}>✦</text>
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
                <form onSubmit={submit} method="post" noValidate style={{ display: 'grid', gap: 10 }}>
                  <Input label="your name" name="name" autoComplete="name" maxLength={NAME_MAX} required value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                  <Input label="email" name="email" type="email" autoComplete="email" inputMode="email" maxLength={EMAIL_MAX} required value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                  <Input label="what's up?" name="message" autoComplete="off" maxLength={MSG_MAX} required multiline value={form.msg} onChange={(v) => setForm({ ...form, msg: v })} />
                  <button type="submit" style={{
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
