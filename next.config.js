/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  ...nextConfig,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'christy-images.s3.amazonaws.com',
        port: '',
        pathname: '**',
      },
    ],
  },
}
