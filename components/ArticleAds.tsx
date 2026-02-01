'use client'

import AdSenseWrapper from './AdSenseWrapper'

/**
 * Article Ads - Client Component
 * Separated to avoid Server/Client component mixing issues
 */
export default function ArticleAds() {
  return (
    <>
      {/* AdSense - In-article ad, mid-content */}
      <div className="my-12">
        <AdSenseWrapper
          adSlot="1111111111"
          adFormat="rectangle"
          style="in-article"
          containerClassName="ad-container"
        />
      </div>

      {/* AdSense Banner - Bottom of article */}
      <div className="my-12 w-full">
        <AdSenseWrapper
          adSlot="3333333333"
          adFormat="horizontal"
          containerClassName="ad-container-wide"
        />
      </div>
    </>
  )
}

