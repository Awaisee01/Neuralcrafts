import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: {
    emotion: true, // Enables Emotion CSS-in-JS support
  },
};

export default nextConfig;
