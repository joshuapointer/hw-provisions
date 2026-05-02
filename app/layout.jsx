import './globals.css';
import { ToastProvider } from '../components/toast';

const SITE_DESCRIPTION = "Cannabis accessories, apparel, and the kind of gifts you can't find online. Inside The Source · Rogers, AR. Where's your head at?";

// CSP delivered via <meta http-equiv> (defense-in-depth — the host should ALSO
// send this and frame-ancestors / X-Frame-Options as real headers).
// React inline-styles + the inline keyframes block in toast.jsx require
// 'unsafe-inline' for style-src; scripts stay strictly self-only.
const CSP = [
  "default-src 'self'",
  "img-src 'self' data:",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "script-src 'self'",
  "connect-src 'self'",
  "form-action 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join('; ');

export const metadata = {
  title: 'Headwaters Provisions',
  description: SITE_DESCRIPTION,
  keywords: 'headwaters provisions, cannabis accessories, glass, NWA, Rogers Arkansas, head shop',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Headwaters Provisions',
    description: SITE_DESCRIPTION,
    siteName: 'Headwaters Provisions',
    type: 'website',
    locale: 'en_US',
  },
  referrer: 'strict-origin-when-cross-origin',
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0E1A2F',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Security-Policy" content={CSP} />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Shrikhand&family=Bricolage+Grotesque:wght@400;600;700;800&family=Space+Grotesk:wght@400;500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,400&family=IBM+Plex+Mono:wght@400;500;600&family=Caveat:wght@400;700&family=Bowlby+One+SC&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
