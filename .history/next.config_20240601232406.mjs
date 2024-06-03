import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();


/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
    i18n: {
        locales: ['az', 'ru'],
        defaultLocale: 'az'
      }
};
 
export default withNextIntl(nextConfig);