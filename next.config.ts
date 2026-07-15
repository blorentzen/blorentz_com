import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  redirects: async () => [
    {
      source: "/ai-build-audit",
      destination: "/website-marketing-audit",
      statusCode: 301,
    },
    {
      source: "/rates",
      destination: "/custom-work",
      statusCode: 301,
    },
  ],
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "X-XSS-Protection", value: "1; mode=block" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        {
          key: "Content-Security-Policy",
          value: [
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' https://plausible.io https://www.googletagmanager.com https://challenges.cloudflare.com",
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
            "font-src 'self' https://fonts.gstatic.com",
            "img-src 'self' data: https://cdn.empac.co https://www.googletagmanager.com",
            "media-src 'self' https://cdn.empac.co",
            "frame-src https://www.youtube.com https://hearthis.at https://challenges.cloudflare.com https://*.cloudflarestream.com",
            "connect-src 'self' https://plausible.io https://www.google-analytics.com https://challenges.cloudflare.com",
            "object-src 'none'",
            "base-uri 'self'",
            "form-action 'self'",
          ].join("; "),
        },
      ],
    },
    {
      source: "/api/:path*",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Cache-Control", value: "no-store" },
      ],
    },
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.empac.co",
        pathname: "/portfolio/**",
      },
      {
        protocol: "https",
        hostname: "cdn.empac.co",
        pathname: "/main/**",
      },
    ],
  },
};

export default nextConfig;
