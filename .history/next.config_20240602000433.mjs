import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['api.nurart.az'],
      },
      output: export,
      trailingSlash: true,
};
 
export default withNextIntl(nextConfig);