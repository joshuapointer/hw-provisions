import './globals.css';
import { ToastProvider } from '../components/toast';

export const metadata = {
  title: 'Headwaters Provisions',
  description: 'Cannabis accessories, apparel, and the kind of gifts you can\'t find online. Inside The Source · Rogers, AR. Where\'s your head at?',
  keywords: 'headwaters provisions, cannabis accessories, glass, NWA, Rogers Arkansas, head shop',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
