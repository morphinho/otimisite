import Link from 'next/link'
import dynamic from 'next/dynamic'

// Lazy load AdSense to prevent blocking header render
const AdSense = dynamic(() => import('./AdSense'), {
  ssr: false,
})

/**
 * Header - Server Component
 * Compact single-bar design with integrated navigation
 */
export default function Header() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const mainNavLinks = [
    { href: '/', label: 'HOME' },
    { href: '/blog', label: 'BLOG' },
    { href: '/about', label: 'ABOUT' },
    { href: '/contact', label: 'CONTACT' },
  ]

  const footerLinks = [
    { href: '/privacy', label: 'Privacy' },
    { href: '/terms', label: 'Terms' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-blue-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header Row */}
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-5 h-5 text-blue-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                />
              </svg>
            </div>
            <span className="text-xl font-bold">finkerr.com</span>
          </Link>

          {/* Navigation & Actions */}
          <div className="flex items-center gap-4">
            {/* Main Navigation */}
            <nav className="hidden md:flex items-center gap-4">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs font-medium hover:underline transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Date & Footer Links */}
            <div className="hidden lg:flex items-center gap-3 text-xs text-blue-200 border-l border-blue-700 pl-4">
              <span>{currentDate}</span>
              <div className="flex gap-2">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Search Button */}
            <button
              type="button"
              className="p-1.5 hover:bg-blue-800 rounded transition-colors"
              aria-label="Search"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex items-center gap-3 pb-2 border-t border-blue-800 pt-2">
          {mainNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* AdSense Banner - Below header */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <AdSense
            adSlot="5555555555"
            adFormat="horizontal"
            containerClassName="ad-container-wide"
          />
        </div>
      </div>
    </header>
  )
}
