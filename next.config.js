/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    REACT_APP_SERVICE_BASE_URL:
      'https://feed.jobylon.com/feeds/7d7e6fd12c614aa5af3624b06f7a74b8/?format=json',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'feed.jobylon.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media-eu.jobylon.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
