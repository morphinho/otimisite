import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import AdSenseWrapper from '@/components/AdSenseWrapper'

/**
 * Blog Listing Page - Server Component
 * Two-column layout: posts (left) + sidebar (right)
 * Content generated using agent system
 */

// Blog posts - Generated using agent system: SEO → Content Architect → Writer
const blogPosts = [
  {
    id: 'retirement-planning-strategies-2025',
    title: 'Retirement planning strategies 2025: Complete Guide 2025',
    excerpt: 'Retirement planning strategies have evolved significantly. This comprehensive guide covers practical approaches, account types, and strategies for building a secure retirement regardless of your current age or income level.',
    date: '2026-01-27',
    author: 'Finkerr',
    category: 'Financial Planning and Retirement',
    image: '/images/retirement-planning-strategies-2025.jpg',
  },
  {
    id: 'investment-portfolio-diversification',
    title: 'Investment portfolio diversification: Complete Guide 2025',
    excerpt: 'Investment portfolio diversification reduces risk while maintaining growth potential. Learn how to build a diversified portfolio that aligns with your goals and risk tolerance, covering asset classes, geographic diversification, and practical implementation.',
    date: '2026-01-28',
    author: 'Finkerr',
    category: 'Investment Strategies',
    image: '/images/investment-portfolio-diversification.jpg',
  },
  {
    id: 'debt-consolidation-vs-debt-settlement',
    title: 'Debt consolidation vs debt settlement: Complete Guide 2025',
    excerpt: 'Debt consolidation and debt settlement offer different paths to debt relief. This comparison guide helps you understand when each strategy makes sense, what to expect, and how to avoid common mistakes.',
    date: '2026-01-29',
    author: 'Finkerr',
    category: 'Debt Management',
    image: '/images/debt-consolidation-vs-debt-settlement.jpg',
  },
  {
    id: 'emergency-fund-calculator-and-planning',
    title: 'Emergency fund calculator and planning: Complete Guide 2025',
    excerpt: 'Emergency fund planning protects you from unexpected expenses without derailing long-term goals. This guide covers calculation methods, account types, and strategies for building your fund efficiently.',
    date: '2026-01-30',
    author: 'Finkerr',
    category: 'Financial Security',
    image: '/images/emergency-fund-calculator-and-planning.jpg',
  },
  {
    id: 'tax-optimization-strategies-for-investors',
    title: 'Tax optimization strategies for investors: Complete Guide 2025',
    excerpt: 'Tax optimization strategies can significantly impact investment returns. Learn practical approaches for reducing tax burden through investment vehicles, timing strategies, and account types within current tax laws.',
    date: '2026-01-31',
    author: 'Finkerr',
    category: 'Tax Planning',
    image: '/images/tax-optimization-strategies-for-investors.jpg',
  },
  {
    id: 'real-estate-investment-for-beginners',
    title: 'Real estate investment for beginners: Complete Guide 2025',
    excerpt: 'Real estate investment offers unique advantages including appreciation, rental income, and tax benefits. This beginner\'s guide breaks down fundamentals, property types, financing basics, and common strategies for new investors.',
    date: '2026-02-01',
    author: 'Finkerr',
    category: 'Real Estate Investing',
    image: '/images/real-estate-investment-for-beginners.jpg',
  },
]

export const metadata = {
  title: 'Blog',
  description: 'Browse our collection of high-performance editorial content.',
  openGraph: {
    title: 'Blog | finkerr.com',
    description: 'Browse our collection of high-performance editorial content.',
  },
}

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content - Posts List */}
            <div className="flex-1 space-y-6">
              {blogPosts.map((post, index) => {
                const publishedDate = new Date(post.date)
                return (
                  <article
                    key={post.id}
                    className="bg-gray-50 rounded-lg p-6 border border-gray-200"
                  >
                    <Link href={`/blog/${post.id}`} className="flex flex-col md:flex-row gap-6">
                      {/* Square Image - Fixed aspect ratio prevents CLS */}
                      <div className="flex-shrink-0">
                        <div className="relative w-48 h-48 md:w-64 md:h-64 aspect-square rounded-lg overflow-hidden bg-gray-200">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 192px, 256px"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        {/* Category Tag */}
                        <div className="mb-3">
                          <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium">
                            {post.category}
                          </span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 hover:text-blue-900">
                          {post.title}
                        </h2>
                        <div className="flex items-center space-x-3 text-sm text-gray-600 mb-3">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                          <span className="font-semibold">{post.author}</span>
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          <time dateTime={post.date}>
                            {publishedDate.toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </time>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          {post.excerpt}
                        </p>
                        <button className="bg-blue-900 text-white px-6 py-2 rounded font-semibold">
                          Read More
                        </button>
                      </div>
                    </Link>
                  </article>
                )
              })}

              {/* AdSense Rectangle - Lazy loaded after content */}
              <div className="flex justify-center my-8" style={{ minHeight: '250px' }}>
                <AdSenseWrapper
                  adSlot="2222222222"
                  adFormat="rectangle"
                  containerClassName="ad-container"
                />
              </div>
            </div>

            {/* Sidebar */}
            <Sidebar />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
