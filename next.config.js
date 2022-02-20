/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  images: {
    domains: ["https://avatars.githubusercontent.com/u/49456203?v=4"],
  },
};

module.exports = nextConfig;
