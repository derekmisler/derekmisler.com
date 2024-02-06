/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/post/:id*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/image/:id*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/page/:id*',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
