/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: isProd ? '/CinemaDemo' : '',
  assetPrefix: isProd ? '/CinemaDemo/' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
