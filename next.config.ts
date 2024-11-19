import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'galery-doghouser.s3-us-west-2.amazonaws.com',
      },
    ],
  },
  env: {
    PUBLIC_ASSETS_URL: process.env.PUBLIC_ASSETS_URL,
  },
};

export default nextConfig;
