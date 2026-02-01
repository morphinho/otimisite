'use client'

import AdSenseWrapper from './AdSenseWrapper'

/**
 * Header Ads - Client Component
 * Separated from Header to avoid Server/Client component mixing issues
 */
export default function HeaderAds() {
  return (
    <div className="bg-gray-100 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <AdSenseWrapper
          adSlot="5555555555"
          adFormat="horizontal"
          containerClassName="ad-container-wide"
        />
      </div>
    </div>
  )
}

