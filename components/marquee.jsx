'use client';
import { HC, HS } from './design/tokens';

export function Marquee({ bg = HC.ink, fg = HC.amber, text = "where's your head at?" }) {
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
