'use client';
import { useEffect, useRef, useState } from 'react';
import { SUNNY_POSES } from './design/base';

const BURST_POSES = ['peace', 'thumbsup', 'jump', 'woo', 'face'].map(k => SUNNY_POSES[k]);

export function SunnyCursor() {
  const sunnyRef = useRef(null);
  const [pose, setPose] = useState('peace');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(max-width: 768px)').matches) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let raf, x = 0, y = 0, tx = 0, ty = 0;
    const tick = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      if (sunnyRef.current) {
        sunnyRef.current.style.transform =
          `translate3d(${x - 36}px, ${y - 30}px, 0) rotate(${(tx - x) * 0.4}deg)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onOver = (e) => {
      if (e.target.closest('a, button, [data-inter], [data-confetti], [data-stamp], [data-ticket]')) {
        setPose('thumbsup');
      } else {
        setPose('peace');
      }
    };
    const onDown = () => setPose('jump');
    const onUp = () => setPose('peace');

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('mouseover', onOver);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
    };
  }, []);

  const src = SUNNY_POSES[pose] ?? SUNNY_POSES.peace;

  return (
    <img
      ref={sunnyRef}
      src={src}
      alt=""
      aria-hidden
      className="sunny-cursor"
      style={{
        position: 'fixed', top: 0, left: 0,
        width: 72, height: 72, objectFit: 'contain',
        pointerEvents: 'none', zIndex: 9999,
        opacity: visible ? 0.9 : 0,
        transition: 'opacity .25s',
        willChange: 'transform',
        filter: 'drop-shadow(2px 3px 0 rgba(0,0,0,0.25))',
      }}
    />
  );
}

export function spawnSunnyBurst(x, y) {
  if (typeof document === 'undefined') return;
  const src = BURST_POSES[Math.floor(Math.random() * BURST_POSES.length)];
  const img = document.createElement('img');
  img.src = src;
  img.alt = '';
  const angle = (Math.random() - 0.5) * 1.6;
  const dx = (Math.random() - 0.5) * 220;
  const dy = -160 - Math.random() * 80;
  img.style.cssText = [
    'position:fixed',
    `left:${x - 30}px`,
    `top:${y - 30}px`,
    'width:60px;height:60px;object-fit:contain',
    'pointer-events:none;z-index:99999',
    'filter:drop-shadow(2px 3px 0 rgba(0,0,0,0.3))',
    'transition:transform 1.1s cubic-bezier(.2,.8,.2,1), opacity .9s ease-out .25s',
    `transform:rotate(${angle * 30}deg)`,
    'opacity:1',
  ].join(';');
  document.body.appendChild(img);
  requestAnimationFrame(() => {
    img.style.transform = `translate(${dx}px,${dy}px) rotate(${angle * 360}deg)`;
    img.style.opacity = '0';
  });
  setTimeout(() => img.remove(), 1300);
}

export function ClickSpawner() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onClick = (e) => {
      const target = e.target.closest('[data-confetti], [data-stamp], [data-ticket], .h-confetti-on-click');
      if (target) spawnSunnyBurst(e.clientX, e.clientY);
    };
    window.addEventListener('click', onClick, true);
    return () => window.removeEventListener('click', onClick, true);
  }, []);
  return null;
}
