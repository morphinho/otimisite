import Link from 'next/link'
import AdSenseWrapper from './AdSenseWrapper'

/**
 * Sidebar - Server Component
 * Search section + Recent posts list
 * Matches adsinstyle design
 */
export default function Sidebar() {
  // Recent posts - Generated using agent system
  const recentPosts = [
    { slug: 'personal-cash-flow-optimization', title: 'Personal Cash Flow Optimization: Advanced Strategies for Financial Leverage' },
    { slug: 'digital-security-financial-platforms', title: 'Digital Security in Modern Financial Platforms: Fundamentals, Strategies and Emerging Trends' },
    { slug: 'advanced-budgeting-techniques', title: 'Step-by-Step Guide to Advanced Budgeting Techniques 2025' },
    { slug: 'building-financial-literacy', title: 'Guide to Building Financial Literacy Skills 2025' },
    { slug: 'reducing-financial-stress', title: 'Understanding Strategies for Reducing Personal Financial Stress' },
  ]

  return (
    <aside className="lg:w-80 flex-shrink-0">
      <div className="bg-gray-100 p-6 space-y-8">
        {/* Search Section */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">
            SEARCH
          </h3>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
            />
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2 px-4 rounded font-semibold"
            >
              Search
            </button>
          </form>
        </div>

        {/* Recent Posts Section */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">
            RECENTS
          </h3>
          <ul className="space-y-2">
            {recentPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-gray-700 hover:text-blue-900 text-sm block py-1 hover:underline"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories Section (placeholder) */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">
            CATEGORIES
          </h3>
          <p className="text-gray-500 text-sm">Coming soon...</p>
        </div>

        {/* AdSense - 300x250 rectangle */}
        <div className="pt-4">
          <AdSenseWrapper
            adSlot="1234567890"
            adFormat="rectangle"
            containerClassName="ad-container"
          />
        </div>

        {/* AdSense - Second ad unit */}
        <div className="pt-6">
          <AdSenseWrapper
            adSlot="4444444444"
            adFormat="rectangle"
            containerClassName="ad-container"
          />
        </div>
      </div>
    </aside>
  )
}
