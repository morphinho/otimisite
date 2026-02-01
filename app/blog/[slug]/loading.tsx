import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'

export default function BlogPostLoading() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <article className="flex-1 animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-48 mb-6" />
              <div className="h-4 bg-gray-200 rounded w-32 mb-4" />
              <div className="h-10 bg-gray-200 rounded w-3/4 mb-6" />
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-8" />
              <div className="w-full aspect-video bg-gray-200 rounded-lg mb-8" />
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded" />
                    <div className="h-4 bg-gray-200 rounded w-5/6" />
                  </div>
                ))}
              </div>
            </article>
            <Sidebar />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

