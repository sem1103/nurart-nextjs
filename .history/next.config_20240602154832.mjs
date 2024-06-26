import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'api.nurart.az',
            port: '',
            pathname: '/account123/**',
          },
        ],
      }
};
 
export default withNextIntl(nextConfig);