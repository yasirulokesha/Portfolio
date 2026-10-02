import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blocks.astratic.com',
        port: '',
        pathname: '/**',
      },
    ],
  }
};

export default nextConfig;
