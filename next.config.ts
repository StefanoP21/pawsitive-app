import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    PUBLIC_ASSETS_URL: process.env.PUBLIC_ASSETS_URL,
  },
};

export default nextConfig;
