import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Adsinstyle.',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
          
          <div className="prose-content">
            <p>
              We'd love to hear from you. Please reach out using the information below.
            </p>
            
            <h2>Get in Touch</h2>
            <p>
              For inquiries, suggestions, or feedback, please contact us through our official channels.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

