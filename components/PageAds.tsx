'use client'

import AdSenseWrapper from './AdSenseWrapper'

/**
 * Page Ads - Client Component
 * For ads on listing pages
 */
export default function PageAds() {
  return (
    <div className="flex justify-center my-8" style={{ minHeight: '250px' }}>
      <AdSenseWrapper
        adSlot="2222222222"
        adFormat="rectangle"
        containerClassName="ad-container"
      />
    </div>
  )
}

