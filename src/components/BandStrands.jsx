import { useEffect, useRef, useState } from 'react'
import Strands from './Strands.jsx'

/**
 * Renders the Strands effect as a viewport-fixed background that stays locked
 * in the middle of the screen while you scroll through its parent band.
 *
 * It is only shown while the parent band crosses the vertical center of the
 * viewport (via an IntersectionObserver with a center-line root margin), so the
 * glow never bleeds onto the sections above or below the band.
 *
 * Must be placed as a direct child of the band element it should track.
 */
export default function BandStrands(props) {
  const anchorRef = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const band = anchorRef.current?.parentElement
    if (!band) return

    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      // 0-height root line at the vertical center of the viewport: active only
      // while the band is the thing occupying the middle of the screen.
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    )
    io.observe(band)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={anchorRef} aria-hidden="true">
      <div
        className={`pointer-events-none fixed inset-0 z-0 transition-opacity duration-500 ${
          active ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Strands {...props} />
      </div>
    </div>
  )
}
