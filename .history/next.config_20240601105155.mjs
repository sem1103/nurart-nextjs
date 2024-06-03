/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { unoptimized: true },
    i18n: {
        locales: ['az', 'ru'], // добавьте свои локали здесь
        defaultLocale: 'az', // задайте локаль по умолчанию
    },
};

export default nextConfig;
