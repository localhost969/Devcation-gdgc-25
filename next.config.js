/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdnjs.cloudflare.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Override the default webpack configuration
  webpack: (config) => {
    // Return the modified config
    return config;
  },
  poweredByHeader: false
};

module.exports = nextConfig; 