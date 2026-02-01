'use client'

import { useEffect, useState, useRef } from 'react'

/**
 * AdSense Component - Client Component ONLY because AdSense requires client-side script injection
 * 
 * Performance optimizations:
 * - Script loads AFTER main content (deferred)
 * - Isolated component prevents re-renders of parent
 * - Aspect ratio container prevents CLS
 * - Script loads asynchronously
 * - Only loads when component is visible (below fold)
 */
interface AdSenseProps {
  adSlot: string
  adFormat?: 'auto' | 'rectangle' | 'vertical' | 'horizontal'
  style?: 'display' | 'in-article' | 'in-feed'
  className?: string
  containerClassName?: string
}

export default function AdSense({
  adSlot,
  adFormat = 'auto',
  style = 'display',
  className = '',
  containerClassName = 'ad-container',
}: AdSenseProps) {
  const [showPlaceholder, setShowPlaceholder] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined' || !containerRef.current) return

    // Use Intersection Observer to load ads only when visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Load AdSense script only when ad container is visible
            const loadAdSense = () => {
              if (!window.adsbygoogle) {
                const script = document.createElement('script')
                script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX'
                script.async = true
                script.crossOrigin = 'anonymous'
                document.head.appendChild(script)
              }
            }

            // Delay loading to ensure main content renders first
            setTimeout(loadAdSense, 2000)
            observer.disconnect()
          }
        })
      },
      { rootMargin: '50px' } // Start loading 50px before visible
    )

    observer.observe(containerRef.current)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return

    // Initialize ad after component mounts and script loads
    // This happens after main content is visible
    const initAd = () => {
      try {
        if (window.adsbygoogle) {
          (window.adsbygoogle = window.adsbygoogle || []).push({})
          // Hide placeholder after ad initialization
          setTimeout(() => setShowPlaceholder(false), 2000)
        }
      } catch (err) {
        // Silently fail - ad blocking or network issues
        console.error('AdSense initialization error:', err)
      }
    }

    // Delay initialization to ensure main content loads first
    const timer = setTimeout(initAd, 500)

    return () => clearTimeout(timer)
  }, [])

  // Determine ad size label based on format
  const getAdSizeLabel = () => {
    if (adFormat === 'horizontal') return '728×90'
    if (adFormat === 'rectangle') return '300×250'
    if (adFormat === 'vertical') return '160×600'
    return 'Auto'
  }

  return (
    <div ref={containerRef} className={`${containerClassName} ${className} relative`}>
      {/* Placeholder prevents CLS - exact dimensions match ad unit */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
        data-loading="lazy"
      />
      
      {/* Visual Placeholder Overlay - Shows until ad loads */}
      {showPlaceholder && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 pointer-events-none z-10">
          <div className="text-center p-4">
            <div className="text-gray-500 font-bold text-sm mb-1 uppercase tracking-wide">Advertisement</div>
            <div className="text-gray-400 text-xs">{getAdSizeLabel()}</div>
            <div className="text-gray-300 text-xs mt-1 opacity-75">Slot: {adSlot}</div>
          </div>
        </div>
      )}
    </div>
  )
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    adsbygoogle?: unknown[]
  }
}
