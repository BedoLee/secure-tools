import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  generateBuildId: () => "lastactivity-viewer",
  env: {
    NEXT_PUBLIC_APP_NAME: "LastActivity Viewer",
    NEXT_PUBLIC_APP_DESCRIPTION: "Sistem Aktivite İzleme Aracı"
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        pathname: '/**',
      },
    ],
  }
};

export default nextConfig;
