import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import AdSenseWrapper from '@/components/AdSenseWrapper'

/**
 * Home Page - Server Component
 * Shows featured posts with sidebar
 * Content generated using agent system
 */
export default function Home() {
  const featuredPosts = [
    {
      id: 'personal-cash-flow-optimization',
      title: 'Personal Cash Flow Optimization: Advanced Strategies for Financial Leverage',
      excerpt: 'Introduction: The Critical Relevance of Personal Cash Flow Optimization Today Personal cash flow optimization is essential in today\'s rapidly changing financial climate. Managing inflows and outflows efficiently builds wealth, protects against economic uncertainty, and creates opportunities for strategic financial leverage.',
      date: '2026-01-27',
      category: 'Advanced Personal Finance',
      image: '/images/personal-cash-flow.jpg',
    },
    {
      id: 'digital-security-financial-platforms',
      title: 'Digital Security in Modern Financial Platforms: Fundamentals, Strategies and Emerging Trends',
      excerpt: 'Introduction: The Growing Importance of Digital Security in Finance Digital security financial platforms have become a cornerstone of innovation and risk management in the modern financial landscape.',
      date: '2026-01-26',
      category: 'FinTech and Financial Innovation',
      image: '/images/digital-security.jpg',
    },
    {
      id: 'advanced-budgeting-techniques',
      title: 'Step-by-Step Guide to Advanced Budgeting Techniques 2025',
      excerpt: 'Advanced budgeting goes beyond tracking expenses. It\'s about creating systems that align spending with values, optimize cash flow, and build wealth automatically.',
      date: '2026-01-25',
      category: 'Financial Planning and Retirement',
      image: '/images/advanced-budgeting.jpg',
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content - Featured Posts */}
            <div className="flex-1 space-y-6">
              {featuredPosts.map((post, index) => {
                const publishedDate = new Date(post.date)
                return (
                  <article key={post.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <Link href={`/blog/${post.id}`} className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="relative w-48 h-48 md:w-64 md:h-64 aspect-square rounded-lg overflow-hidden bg-gray-200">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 192px, 256px"
                            priority={index === 0}
                            loading={index === 0 ? 'eager' : 'lazy'}
                            fetchPriority={index === 0 ? 'high' : 'auto'}
                            quality={index === 0 ? 90 : 75}
                          />
                        </div>
                      </div>
                      <div className="flex-1">
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
                          <span className="font-semibold">Finkerr</span>
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
              <div className="flex justify-center" style={{ minHeight: '250px' }}>
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
