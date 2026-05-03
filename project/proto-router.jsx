/* ============================================================
   HEADWATERS PROTOTYPE — Router + state hooks
   ============================================================ */

const HRouterCtx = React.createContext(null);

/* Routes are ordered so we can pick a slide direction (next index > current = forward).
   When direction is "forward" the new page slides in from the right; "back" from the left. */
const ROUTE_ORDER = ['home', 'showcase', 'visit'];

function HRouter({ initial = 'home', storageKey, children }) {
  const [route, setRoute] = React.useState(() => {
    if (storageKey && typeof localStorage !== 'undefined') {
      try { const v = localStorage.getItem(storageKey); if (v) return v; } catch {}
    }
    return initial;
  });
  React.useEffect(() => {
    if (storageKey && typeof localStorage !== 'undefined') {
      try { localStorage.setItem(storageKey, route); } catch {}
    }
  }, [route, storageKey]);
  const [transitioning, setTransitioning] = React.useState(false);
  const [direction, setDirection] = React.useState('forward');
  const [wipeColor, setWipeColor] = React.useState(null);
  const [scrollMap] = React.useState(() => new Map());

  const navigate = React.useCallback((next, scrollEl) => {
    if (next === route) return;
    const fromIdx = ROUTE_ORDER.indexOf(route);
    const toIdx   = ROUTE_ORDER.indexOf(next);
    setDirection(toIdx >= fromIdx ? 'forward' : 'back');
    /* Each route gets its own wipe color — recognizable signature per page */
    const colors = { home: '#387CCC', showcase: '#E6A933', visit: '#C44A6A' };
    setWipeColor(colors[next] || '#387CCC');
    setTransitioning(true);
    setTimeout(() => {
      if (scrollEl) scrollMap.set(route, scrollEl.scrollTop);
      setRoute(next);
      setTimeout(() => {
        setTransitioning(false);
        if (scrollEl) scrollEl.scrollTop = 0;
        setTimeout(() => setWipeColor(null), 480);
      }, 30);
    }, 360);
  }, [route, scrollMap]);

  return (
    <HRouterCtx.Provider value={{ route, navigate, transitioning, direction, wipeColor }}>
      {children}
      {/* Curtain wipe overlay — sweeps across the artboard during route changes */}
      {wipeColor && (
        <div aria-hidden style={{
          position: 'absolute', inset: 0, zIndex: 9995, pointerEvents: 'none',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(${direction === 'forward' ? '90deg' : '270deg'},
              ${wipeColor} 0%, ${wipeColor} 48%, rgba(0,0,0,0) 50%)`,
            backgroundSize: '220% 100%',
            animation: `h-wipe-${direction} .76s cubic-bezier(.86,0,.07,1) forwards`,
          }} />
        </div>
      )}
      <style>{`
        @keyframes h-wipe-forward {
          0%   { background-position: 100% 0; }
          50%  { background-position: 50% 0; }
          100% { background-position: -100% 0; }
        }
        @keyframes h-wipe-back {
          0%   { background-position: -100% 0; }
          50%  { background-position: 50% 0; }
          100% { background-position: 100% 0; }
        }
      `}</style>
    </HRouterCtx.Provider>
  );
}

function useRouter() {
  return React.useContext(HRouterCtx);
}

/* Toast hook — for RSVPs + form notifications */
const HToastCtx = React.createContext(null);
function HToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  const push = React.useCallback((msg, color) => {
    const id = Math.random();
    setToasts(t => [...t, { id, msg, color }]);
    setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), 3200);
  }, []);
  return (
    <HToastCtx.Provider value={push}>
      {children}
      <div style={{
        position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)',
        zIndex: 9999, display: 'flex', flexDirection: 'column', gap: 8, pointerEvents: 'none',
      }}>
        {toasts.map(t => (
          <div key={t.id} style={{
            padding: '12px 22px', background: t.color || HC.lime, color: HC.ink,
            border: `2px solid ${HC.ink}`, borderRadius: 999,
            ...HS.alt, fontSize: 14, boxShadow: `4px 4px 0 ${HC.ink}`,
            animation: 'h-toast-in .25s ease-out',
          }}>{t.msg}</div>
        ))}
      </div>
      <style>{`
        @keyframes h-toast-in { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: none } }
      `}</style>
    </HToastCtx.Provider>
  );
}
function useToast() { return React.useContext(HToastCtx); }

/* Custom cursor — blue dot that gets bigger near interactive elements */
function HCursor({ scope }) {
  const ref = React.useRef(null);
  const [hover, setHover] = React.useState(false);
  React.useEffect(() => {
    const el = scope.current;
    if (!el) return;
    const move = (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      if (ref.current) {
        ref.current.style.transform = `translate(${x - 12}px, ${y - 12}px)`;
        ref.current.style.opacity = '1';
      }
      const target = e.target;
      const inter = target.closest && target.closest('[data-inter]');
      setHover(!!inter);
    };
    const leave = () => { if (ref.current) ref.current.style.opacity = '0'; };
    el.addEventListener('mousemove', move);
    el.addEventListener('mouseleave', leave);
    return () => { el.removeEventListener('mousemove', move); el.removeEventListener('mouseleave', leave); };
  }, [scope]);
  return (
    <div ref={ref} style={{
      position: 'absolute', top: 0, left: 0, width: 24, height: 24, borderRadius: '50%',
      background: hover ? HC.lime : HC.blue, mixBlendMode: 'difference',
      pointerEvents: 'none', zIndex: 9998, opacity: 0, transition: 'opacity .2s, width .15s, height .15s, background .15s',
      transform: 'translate(-100px,-100px)',
      ...(hover && { width: 48, height: 48, marginTop: -12, marginLeft: -12 }),
    }} />
  );
}

window.HRouter = HRouter; window.useRouter = useRouter;
window.HToastProvider = HToastProvider; window.useToast = useToast;
window.HCursor = HCursor;
