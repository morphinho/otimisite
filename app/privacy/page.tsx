import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Adsinstyle.',
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose-content">
            <p>
              Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information.
            </p>
            
            <h2>Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, as well as information automatically collected when you visit our website.
            </p>
            
            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, and to communicate with you.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

