import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/demi-deti-stomatologiya",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // turbopack root для корректной сборки
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
