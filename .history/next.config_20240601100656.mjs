/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
    i18n: {
        defaultLocale: 'ru',
        locales: ['ru', 'az'],
      }
};

export default nextConfig;
