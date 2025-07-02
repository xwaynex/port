import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "steamuserimages-a.akamaihd.net",
        pathname: "**",
      },
    ], // Add the domain hosting your image
  },
};

export default nextConfig;
