import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
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
