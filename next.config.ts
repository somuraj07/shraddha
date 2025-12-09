import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      // webstack domains
      "cdn.jsdelivr.net",
      "avatars.githubusercontent.com",
      "images.unsplash.com",

      // appStack domains
      "upload.wikimedia.org",
    ],
  },
};

export default nextConfig;
