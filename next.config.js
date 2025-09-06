/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure basePath for subpath deployment
  basePath: '/NorthPalmBeach',
  
  // Ensure trailing slash for consistent routing
  trailingSlash: false,
  
  // Configure asset prefix for static assets
  assetPrefix: process.env.NODE_ENV === 'production' ? '/NorthPalmBeach' : '',

  // App Router is now stable in Next.js 14, no experimental flag needed
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig