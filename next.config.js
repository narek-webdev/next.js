const withPWA = require('next-pwa')

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  reactStrictMode: true,
  env: {
    API_URL: "https://jsonplaceholder.typicode.com"
  },
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
  }
});

module.exports = nextConfig