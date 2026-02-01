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
  
  // Headers for resource hints and cache control
  async headers() {
    return [
      {
        // Cache static assets aggressively (images)
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache Next.js static files
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache HTML pages and add resource hints
        source: '/:path*',
        headers: [
          {
            key: 'Link',
            value: '<https://pagead2.googlesyndication.com>; rel=preconnect; crossorigin, <https://pagead2.googlesyndication.com>; rel=dns-prefetch',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ]
  },
  
  // Modern JavaScript only (no legacy polyfills)
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig

