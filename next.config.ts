import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable image optimization for development speed
  images: {
    unoptimized: true
  },
  // Ensure CSS modules work correctly
  webpack: (config) => {
    return config;
  }
   eslint: {
    ignoreDuringBuilds: true,
  },
};


module.exports = nextConfig;

export default nextConfig;
