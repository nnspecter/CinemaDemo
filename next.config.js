/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ❌ Не используем "export", чтобы API роуты работали
  // output: "export",

  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig
