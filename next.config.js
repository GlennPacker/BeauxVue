/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['default', 'en', 'fr'],
    defaultLocale: 'default',
    // remove for prod when .env vars are avalable.
    localeDetection: false,
  },
}

module.exports = nextConfig
