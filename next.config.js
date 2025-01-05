/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/galore',
        destination: '/galore/index.html'
      },
      {
        source: '/galore/:path*',
        destination: '/galore/:path*'
      }
    ];
  },
  async redirects() {
    return [
      {
        source: '/galore/index.html',
        destination: '/galore',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
