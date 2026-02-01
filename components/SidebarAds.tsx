'use client'

import AdSenseWrapper from './AdSenseWrapper'

/**
 * Sidebar Ads - Client Component
 * Separated from Sidebar to avoid Server/Client component mixing issues
 */
export default function SidebarAds() {
  return (
    <>
      {/* AdSense - 300x250 rectangle */}
      <div className="pt-4">
        <AdSenseWrapper
          adSlot="1234567890"
          adFormat="rectangle"
          containerClassName="ad-container"
        />
      </div>

      {/* AdSense - Second ad unit */}
      <div className="pt-6">
        <AdSenseWrapper
          adSlot="4444444444"
          adFormat="rectangle"
          containerClassName="ad-container"
        />
      </div>
    </>
  )
}

