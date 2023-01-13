/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
// next.config.js
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        // hostname: 'images.unsplash.com',
        hostname: 'static.coinstats.app'
      },
    ],
  },
}
