import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",          // Static HTML export for GitHub Pages
  basePath: "/BenTelega",    // GitHub Pages project site path
  images: { unoptimized: true }, // GitHub Pages doesn't support Next.js image optimization
  trailingSlash: true,       // Better compatibility with static hosting
};

export default nextConfig;
