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
      },
      {
        source: '/pisos',
        destination: '/pisos/index.html'
      },
      {
        source: '/pisos/:path*',
        destination: '/pisos/:path*'
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
      {
        source: '/pisos/index.html',
        destination: '/pisos',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
