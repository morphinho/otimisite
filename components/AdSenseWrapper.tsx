'use client'

import dynamic from 'next/dynamic'

// Wrapper component to ensure proper client-side loading
const AdSenseComponent = dynamic(() => import('./AdSense'), {
  ssr: false,
  loading: () => (
    <div className="ad-container bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
      <div className="text-gray-400 text-xs">Loading ad...</div>
    </div>
  ),
})

interface AdSenseWrapperProps {
  adSlot: string
  adFormat?: 'auto' | 'rectangle' | 'vertical' | 'horizontal'
  style?: 'display' | 'in-article' | 'in-feed'
  className?: string
  containerClassName?: string
}

export default function AdSenseWrapper(props: AdSenseWrapperProps) {
  return <AdSenseComponent {...props} />
}

