/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router is now stable in Next.js 14, no experimental flag needed
  webpack: (config) => {
    // Allow importing JSON files
    config.module.rules.push({
      test: /\.json$/,
      type: 'json'
    })
    return config
  }
}

module.exports = nextConfig
