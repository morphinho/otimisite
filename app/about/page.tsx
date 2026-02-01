import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About Us',
  description: 'Learn more about finkerr.com and our mission to deliver high-performance content.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
          
          <div className="prose-content">
            <p>
              finkerr.com is committed to delivering high-quality editorial content optimized for performance, 
              SEO, and user experience. Our blog focuses on providing valuable information while 
              maintaining lightning-fast load times and excellent Core Web Vitals scores.
            </p>
            
            <h2>Our Mission</h2>
            <p>
              To create content that is not only informative and engaging but also technically 
              excellent. We believe that great content should be accessible quickly and efficiently 
              to all users, regardless of their device or connection speed.
            </p>
            
            <h2>Performance First</h2>
            <p>
              Every decision we make prioritizes performance. From using Server Components to 
              minimizing JavaScript execution, we ensure our website loads instantly and provides 
              an exceptional user experience.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

