/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
    i18n: {
        defaultLocale: 'az',
        locales: ['az', 'ru'],
      }
};

export default nextConfig;
