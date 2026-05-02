/** @type {import('next').NextConfig} */
// `output: 'export'` produces a static bundle, so a `headers()` block here
// would NOT run. Security headers (CSP, Strict-Transport-Security,
// X-Frame-Options / frame-ancestors, X-Content-Type-Options, Referrer-Policy,
// Permissions-Policy) must be configured at the host (Cloudflare, Netlify,
// S3+CloudFront, nginx, etc.). A meta-tag CSP is applied in app/layout.jsx as
// defense-in-depth.
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
