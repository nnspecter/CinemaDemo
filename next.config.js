/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.com",
      },
    ],
    unoptimized: true, // для GitHub Pages
  },
  output: 'export', // экспорт статического билда
  basePath: isProd ? '/CinemaDemo' : '', // ⚡ замени repo-name на имя репозитория
  assetPrefix: isProd ? '/CinemaDemo/' : '', // чтобы пути к ассетам были правильные
}

module.exports = nextConfig
