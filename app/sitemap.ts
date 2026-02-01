import { MetadataRoute } from 'next'

/**
 * Sitemap - Generated at build time for optimal SEO
 * Static generation ensures fast crawling
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://finkerr.com'
  
  // Blog posts - Generated using agent system
  const blogPosts = [
    { slug: 'personal-cash-flow-optimization', lastModified: '2026-01-27' },
    { slug: 'digital-security-financial-platforms', lastModified: '2026-01-26' },
    { slug: 'advanced-budgeting-techniques', lastModified: '2026-01-25' },
    { slug: 'building-financial-literacy', lastModified: '2026-01-24' },
    { slug: 'reducing-financial-stress', lastModified: '2026-01-23' },
  ]

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.lastModified),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ]
}
