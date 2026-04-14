/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.medium.com" },
      { protocol: "https", hostname: "**.weighttraining.guide" },
      { protocol: "https", hostname: "**.mysqltutorial.org" },
      { protocol: "https", hostname: "**.geeksforgeeks.org" },
      { protocol: "https", hostname: "**.imgur.com" },
      { protocol: "https", hostname: "**.githubusercontent.com" },
    ],
  },
};

export default nextConfig;
