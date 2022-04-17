const withPWA = require('next-pwa')

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  distDir: 'build', //You can specify a name to use for a custom build directory to use instead of .next
  reactStrictMode: true,
  env: {
    API_URL: "https://backend.mrfast.io/api"
  },
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
  }
});

module.exports = nextConfig