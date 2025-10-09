/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,

  // 📦 для GitHub Pages нужен статический экспорт
  output: 'export',

  // 🔗 добавляем слэши в конце, чтобы экспортированные пути были корректны
  trailingSlash: true,

  // 🖼️ отключаем оптимизацию картинок (требование для GitHub Pages)
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
