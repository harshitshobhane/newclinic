/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force basePath for testing
  basePath: '/NorthPalmBeach',

  // App Router is now stable in Next.js 14, no experimental flag needed
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig