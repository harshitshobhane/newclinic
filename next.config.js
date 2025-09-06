/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use basePath for production deployment at ourtopclinic.com/NorthPalmBeach
  // Comment out this line when testing on Vercel directly
  basePath: process.env.NODE_ENV === 'production' ? '/NorthPalmBeach' : '',

  // App Router is now stable in Next.js 14, no experimental flag needed
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig
