'use client';
import { usePathname } from 'next/navigation';
import { useRef, useState, useEffect } from 'react';

const ORDER = ['/', '/showcase', '/visit'];

function indexOf(path) {
  if (!path) return 0;
  if (path === '/') return 0;
  if (path.startsWith('/showcase')) return 1;
  if (path.startsWith('/visit')) return 2;
  return 0;
}

export function PageTransition({ children }) {
  const pathname = usePathname();
  const prevPath = useRef(pathname);
  const [direction, setDirection] = useState('forward');
  const [key, setKey] = useState(pathname);

  useEffect(() => {
    if (prevPath.current === pathname) return;
    const prev = indexOf(prevPath.current);
    const next = indexOf(pathname);
    setDirection(next < prev ? 'back' : 'forward');
    setKey(pathname);
    prevPath.current = pathname;
  }, [pathname]);

  const cls = direction === 'back' ? 'h-page-enter-back' : 'h-page-enter-forward';
  return (
    <div key={key} className={cls}>
      {children}
    </div>
  );
}
