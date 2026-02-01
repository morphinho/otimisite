import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function BlogLoading() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 space-y-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-lg p-6 border border-gray-200 animate-pulse"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-200 rounded-lg" />
                    <div className="flex-1 space-y-4">
                      <div className="h-4 bg-gray-200 rounded w-32" />
                      <div className="h-8 bg-gray-200 rounded w-3/4" />
                      <div className="h-4 bg-gray-200 rounded w-1/2" />
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-200 rounded" />
                        <div className="h-4 bg-gray-200 rounded w-5/6" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:w-80">
              <div className="bg-gray-100 p-6 space-y-8 animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-24" />
                <div className="h-10 bg-gray-200 rounded" />
                <div className="h-6 bg-gray-200 rounded w-32" />
                <div className="space-y-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="h-4 bg-gray-200 rounded" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

