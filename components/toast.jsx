'use client';
import { createContext, useContext, useState, useCallback, useRef } from 'react';
import { HC, HS } from './design/tokens';

const ToastCtx = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const seq = useRef(0);
  const push = useCallback((msg, color) => {
    const id = ++seq.current;
    setToasts(t => [...t, { id, msg, color }]);
    setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), 3200);
  }, []);
  return (
    <ToastCtx.Provider value={push}>
      {children}
      <div style={{
        position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)',
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
      <style>{`@keyframes h-toast-in { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: none } }`}</style>
    </ToastCtx.Provider>
  );
}

export function useToast() { return useContext(ToastCtx); }
