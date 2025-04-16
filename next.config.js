/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/post',
          destination: '/blog',
          permanent: true, // set to false if it's temporary
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  