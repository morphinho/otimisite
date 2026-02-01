import type { Metadata } from 'next'
import './globals.css'

// Using system fonts - no external font loading, no blocking
// Performance: font-display: swap ensures text is visible immediately
export const metadata: Metadata = {
  title: {
    default: 'finkerr.com',
    template: '%s | finkerr.com',
  },
  description: 'High-performance editorial content optimized for speed and SEO',
  metadataBase: new URL('https://finkerr.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://finkerr.com',
    siteName: 'finkerr.com',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}

