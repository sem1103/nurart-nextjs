import nextIntl from 'next-intl/plugin';

const withNextIntl = nextIntl(nextIntlConfig);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['api.nurart.az'],
  },
  output: 'export',
};

export default withNextIntl(nextConfig);
