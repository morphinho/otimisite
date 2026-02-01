/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static Site Generation by default (SSG)
  // Pages are pre-rendered at build time for optimal performance
  
  // Image optimization configuration
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  
  // Compress output
  compress: true,
  
  // Optimize production builds with SWC
  swcMinify: true,
  
  // Disable unnecessary features for content site
  poweredByHeader: false,
  
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['@/components'],
  },
  
  // Headers for resource hints (preconnect/dns-prefetch)
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Link',
            value: '<https://pagead2.googlesyndication.com>; rel=preconnect; crossorigin, <https://pagead2.googlesyndication.com>; rel=dns-prefetch',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig

