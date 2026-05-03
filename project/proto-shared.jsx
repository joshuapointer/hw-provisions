/* ============================================================
   HEADWATERS PROTOTYPE — Pages: Home, Showcase, Visit
   Wired up with router state + interactions
   ============================================================ */

/* -------- Animated marquee (uses CSS animation) -------- */
function ProtoMarquee({ bg = HC.ink, fg = HC.amber, text = "where's your head at?" }) {
  const glyphs = ['🍄', '👁', '☀', '⚡', '☮', '✺'];
  return (
    <section style={{
      background: bg, color: fg, padding: '18px 0',
      borderTop: `2px solid ${HC.ink}`, borderBottom: `2px solid ${HC.ink}`,
      overflow: 'hidden', whiteSpace: 'nowrap', position: 'relative',
    }}>
      <div style={{ ...HS.display, fontSize: 32, display: 'inline-flex', gap: 40, animation: 'h-mq 28s linear infinite' }}>
        {[...Array(12)].map((_, i) => (
          <span key={i} style={{ display: 'inline-flex', gap: 22, alignItems: 'center' }}>
            <span>{text}</span>
            <span style={{ color: HC.rose }}>{glyphs[i % glyphs.length]}</span>
            <span style={{ fontStyle: 'italic' }}>headwaters provisions</span>
            <span style={{ color: HC.haze }}>{glyphs[(i + 2) % glyphs.length]}</span>
          </span>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   EVENTS BLOCK — with RSVP toast
   ============================================================ */
function ProtoEvents({ tone = 'light', heading = true, mobile = false }) {
  const toast = useToast();
  const [rsvped, setRsvped] = React.useState({});
  const events = [
    { id: 'dope', d: 'MAY', n: '17', day: 'SAT', title: 'Dope Drive · NWA Patient Drive', time: '10am – 4pm', tag: 'Community', loc: 'Outside The Source', c: HC.magenta },
    { id: 'drop43', d: 'MAY', n: '23', day: 'FRI', title: 'Heady Drop №43 · Maple Bend', time: '5pm sharp', tag: 'Glass Drop', loc: 'In-store', c: HC.lime },
    { id: 'hippie', d: 'JUN', n: '07', day: 'SAT', title: 'Vendor Day · Hippie Hounds', time: '12 – 6pm', tag: 'Pop-up', loc: 'In-store', c: HC.tangerine },
    { id: 'glassblowers', d: 'JUN', n: '20', day: 'FRI', title: 'After-hours: Glassblowers panel', time: '8 – 10pm', tag: 'Talk', loc: 'In-store', c: HC.blue },
  ];
  const dark = tone === 'dark';
  const fg = dark ? HC.cream : HC.ink;
  const bg = dark ? HC.blueDark : HC.cream;

  const toggle = (e) => {
    setRsvped(r => ({ ...r, [e.id]: !r[e.id] }));
    toast(rsvped[e.id] ? `Removed: ${e.title}` : `✦ You're in for ${e.title}`, e.c);
  };

  return (
    <section style={{
      background: bg, color: fg, padding: mobile ? '40px 16px' : '80px 40px', position: 'relative', overflow: 'hidden',
    }}>
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
                <button data-inter onClick={() => toggle(e)} style={{
                  marginTop: 10, padding: mobile ? '6px 14px' : '8px 18px',
                  background: isIn ? HC.ink : 'transparent',
                  color: isIn ? e.c : (dark ? HC.cream : HC.ink),
                  border: `2px solid ${isIn ? HC.ink : (dark ? HC.cream : HC.ink)}`,
                  borderRadius: 999, ...HS.mono, fontSize: mobile ? 9 : 10, cursor: 'pointer',
                  transition: 'all .2s',
                }}>{isIn ? '✓ YOU\'RE IN' : '+ I\'M IN'}</button>
              </div>
              {!mobile && <div style={{ ...HS.display, fontSize: 32, color: dark ? HC.lime : HC.blue, opacity: 0.5 }}>→</div>}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ============================================================
   SOCIAL FEED — with click-to-modal
   ============================================================ */
function ProtoSocialFeed({ mobile = false }) {
  const [active, setActive] = React.useState(null);
  const posts = [
    { net: 'ig', img: 'assets/photo-1.avif', caption: 'Friday at 5. №43 lands tonight, courtesy of Maple Bend.', full: 'Friday at 5. №43 lands tonight, courtesy of Maple Bend Glass. Three colors of fume work, recycler perc, the whole deal. One of one — when it\'s gone, it\'s gone. ✦ link in bio for the full drop story.', likes: 412, c: HC.magenta, when: '2h' },
    { net: 'ig', img: 'assets/photo-3.avif', caption: 'Cream-on-cream restocked. Last drop sold out in 11 days.', full: 'Cream-on-cream restocked. Last drop sold out in 11 days. Heavyweight, garment-dyed, embroidered chest mark. S–XXL on the floor now. 🏔️', likes: 287, c: HC.lime, when: '6h' },
    { net: 'fb', img: 'assets/photo-jeremy.avif', caption: 'Behind the counter today. Come say hey 👋', full: 'Behind the counter today. Come say hey 👋 Jeremy is in until 6 — he\'s got opinions on every glass piece in the case and is happy to walk you through them.', likes: 91, c: HC.tangerine, when: '1d' },
    { net: 'ig', img: 'assets/photo-5.avif', caption: 'New from Adam Driver — walnut + brass, hand-turned.', full: 'New from Adam Driver — walnut + brass, hand-turned. Each one\'s slightly different. Limited run of 12, six left.', likes: 356, c: HC.blue, when: '2d' },
    { net: 'ig', img: 'assets/photo-2.avif', caption: 'Saturday\'s vibe.', full: 'Saturday\'s vibe. Sun out, door open, fresh papers in.', likes: 198, c: HC.lime, when: '3d' },
    { net: 'fb', img: 'assets/photo-6.avif', caption: 'DOPE DRIVE coming up May 17. Spread the word.', full: 'DOPE DRIVE coming up May 17. NWA Patient Drive returns — bring donations, leave with stories. 10am–4pm in The Source parking lot. RSVP at the link in bio.', likes: 142, c: HC.magenta, when: '4d' },
  ];

  const visible = mobile ? posts.slice(0, 4) : posts;

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
            <a data-inter href="#" style={{
              padding: '12px 20px', background: HC.ink, color: HC.cream,
              border: `2px solid ${HC.ink}`, borderRadius: 999, ...HS.mono, fontSize: 11,
              textDecoration: 'none', boxShadow: `4px 4px 0 ${HC.magenta}`,
            }}>follow on IG ↗</a>
            <a data-inter href="#" style={{
              padding: '12px 20px', background: HC.cream, color: HC.ink,
              border: `2px solid ${HC.ink}`, borderRadius: 999, ...HS.mono, fontSize: 11,
              textDecoration: 'none', boxShadow: `4px 4px 0 ${HC.blue}`,
            }}>follow on FB ↗</a>
          </div>
        )}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: mobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', gap: mobile ? 12 : 20, position: 'relative' }}>
        {visible.map((p, i) => (
          <a data-inter key={i} href="#" onClick={(e) => { e.preventDefault(); setActive(p); }} style={{
            display: 'block', textDecoration: 'none', color: HC.ink,
            background: HC.paper, border: `2px solid ${HC.ink}`, borderRadius: 18,
            overflow: 'hidden', boxShadow: `5px 5px 0 ${p.c}`,
            transform: `rotate(${[-1, 0.5, -0.5, 0.5, -1, 0.5][i]}deg)`,
            transition: 'transform .2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0deg) translateY(-4px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = `rotate(${[-1, 0.5, -0.5, 0.5, -1, 0.5][i]}deg)`}
          >
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
          </a>
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
              <button data-inter onClick={() => setActive(null)} style={{
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

/* ============================================================
   SUNNY CURSOR — a small Sunny that follows the pointer with lag,
   swaps poses on hover/click, hides on touch devices.
   ============================================================ */
function SunnyCursor({ scope }) {
  const wrapRef = React.useRef(null);
  const sunnyRef = React.useRef(null);
  const [pose, setPose] = React.useState('peace');
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = scope?.current || document.body;
    if (!el) return;
    let raf, x = 0, y = 0, tx = 0, ty = 0;
    const tick = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      if (sunnyRef.current) sunnyRef.current.style.transform =
        `translate3d(${x - 36}px, ${y - 30}px, 0) rotate(${(tx - x) * 0.4}deg)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onOver = (e) => {
      if (e.target.closest('[data-inter], a, button')) {
        setPose('thumbs');
      } else {
        setPose('peace');
      }
    };
    const onDown = () => setPose('jump');
    const onUp   = () => setPose('peace');

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    el.addEventListener('mouseover', onOver);
    el.addEventListener('mousedown', onDown);
    el.addEventListener('mouseup', onUp);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      el.removeEventListener('mouseover', onOver);
      el.removeEventListener('mousedown', onDown);
      el.removeEventListener('mouseup', onUp);
    };
  }, [scope]);

  const src = pose === 'thumbs' ? 'mopbq0be-Sunny_Thumbs_Up.png'
            : pose === 'jump'   ? 'mopbq0ae-Sunny_jump.png'
            : 'mopbq0av-Sunny_peace.png';

  return (
    <div ref={wrapRef} style={{
      position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 100,
      opacity: visible ? 1 : 0, transition: 'opacity .25s',
    }}>
      <img ref={sunnyRef} src={src} alt=""
        style={{
          position: 'absolute', top: 0, left: 0,
          width: 72, height: 72, objectFit: 'contain',
          willChange: 'transform',
          filter: 'drop-shadow(2px 3px 0 rgba(0,0,0,0.25))',
          transition: 'filter .15s',
        }} />
    </div>
  );
}

window.ProtoMarquee = ProtoMarquee;
window.ProtoEvents = ProtoEvents;
window.ProtoSocialFeed = ProtoSocialFeed;
window.SunnyCursor = SunnyCursor;
