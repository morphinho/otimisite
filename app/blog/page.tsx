import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import AdSense from '@/components/AdSense'

/**
 * Blog Listing Page - Server Component
 * Two-column layout: posts (left) + sidebar (right)
 * Content generated using agent system
 */

// Blog posts - Generated using agent system: SEO → Content Architect → Writer
const blogPosts = [
  {
    id: 'personal-cash-flow-optimization',
    title: 'Personal Cash Flow Optimization: Advanced Strategies for Financial Leverage',
    excerpt: 'Introduction: The Critical Relevance of Personal Cash Flow Optimization Today Personal cash flow optimization is essential in today\'s rapidly changing financial climate. Managing inflows and outflows efficiently builds wealth, protects against economic uncertainty, and creates opportunities for strategic financial leverage.',
    date: '2026-01-27',
    author: 'Finkerr',
    category: 'Advanced Personal Finance',
    image: '/images/personal-cash-flow.jpg',
  },
  {
    id: 'digital-security-financial-platforms',
    title: 'Digital Security in Modern Financial Platforms: Fundamentals, Strategies and Emerging Trends',
    excerpt: 'Introduction: The Growing Importance of Digital Security in Finance Digital security financial platforms have become a cornerstone of innovation and risk management in the modern financial landscape. As banks, fintechs, and investment platforms digitize operations, understanding security fundamentals becomes essential for both consumers and professionals.',
    date: '2026-01-26',
    author: 'Finkerr',
    category: 'FinTech and Financial Innovation',
    image: '/images/digital-security.jpg',
  },
  {
    id: 'advanced-budgeting-techniques',
    title: 'Step-by-Step Guide to Advanced Budgeting Techniques 2025',
    excerpt: 'Advanced budgeting goes beyond tracking expenses. It\'s about creating systems that align spending with values, optimize cash flow, and build wealth automatically. These techniques work for any income level.',
    date: '2026-01-25',
    author: 'Finkerr',
    category: 'Financial Planning and Retirement',
    image: '/images/advanced-budgeting.jpg',
  },
  {
    id: 'building-financial-literacy',
    title: 'Guide to Building Financial Literacy Skills 2025',
    excerpt: 'Financial literacy isn\'t about memorizing formulas or reading balance sheets. It\'s about understanding how money works in your life and making informed decisions. This guide covers practical skills anyone can develop.',
    date: '2026-01-24',
    author: 'Finkerr',
    category: 'Financial Education',
    image: '/images/financial-literacy.jpg',
  },
  {
    id: 'reducing-financial-stress',
    title: 'Understanding Strategies for Reducing Personal Financial Stress',
    excerpt: 'Financial stress affects mental health, relationships, and decision-making. Understanding its sources and developing coping strategies improves both financial outcomes and quality of life.',
    date: '2026-01-23',
    author: 'Finkerr',
    category: 'Financial Wellness',
    image: '/images/financial-stress.jpg',
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
              {/* AdSense Banner - Top of content */}
              <div className="w-full">
                <AdSense
                  adSlot="1111111111"
                  adFormat="horizontal"
                  containerClassName="ad-container-wide"
                />
              </div>

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

              {/* AdSense Rectangle - After posts */}
              <div className="flex justify-center my-8">
                <AdSense
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
