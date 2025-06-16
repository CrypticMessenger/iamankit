import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '/images/I/**',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        port: '',
        pathname: '/dms/image/v2/**',
      },
      {
        protocol: 'https',
        hostname: 'ecertificate.iitr.ac.in',
        port: '',
        pathname: '/verification/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.grok.com',
        port: '',
        pathname: '/users/**/generated/**/image.jpg',
      }
    ],
  },
};

export default nextConfig;
