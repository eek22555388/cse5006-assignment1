import type { NextConfig } from "next";



const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.geeksforgeeks.org",
      },
    ],
  },

  allowedDevOrigins: ["192.168.56.1"],

};

export default nextConfig;

