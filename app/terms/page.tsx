import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Terms and Conditions',
  description: 'Terms and Conditions for Adsinstyle.',
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
          
          <div className="prose-content">
            <p>
              Please read these Terms and Conditions carefully before using our website.
            </p>
            
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            
            <h2>Use License</h2>
            <p>
              Permission is granted to temporarily access the materials on our website for personal, non-commercial transitory viewing only.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

