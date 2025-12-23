/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/ar',
        permanent: false,
      },
    ];
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;