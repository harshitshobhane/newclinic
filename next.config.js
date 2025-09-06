/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tell Next.js that this app is served from /NorthPalmBeach
  basePath: '/NorthPalmBeach',

  // App Router is now stable in Next.js 14, no experimental flag needed
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig
