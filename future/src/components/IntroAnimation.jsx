"use client"

import { useEffect } from "react"

function IntroAnimation({ onAnimationComplete }) {
  useEffect(() => {
    // Complete animation after 6 seconds
    const timer = setTimeout(() => {
      onAnimationComplete()
    }, 6000)

    return () => clearTimeout(timer)
  }, [onAnimationComplete])

  return (
    <div className="intro-animation">
      <div className="animation-container">
        <div className="logo-container">
          <div className="logo-circle">
            <div className="logo-inner">
              <span className="logo-text">OnlyBrands</span>
            </div>
          </div>
        </div>

        <div className="grid-container">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="grid-item" style={{ animationDelay: `${1 + i * 0.05}s` }}></div>
          ))}
        </div>

        <div className="tagline">THE FUTURE OF FASHION</div>

        <div className="loading-bar-container">
          <div className="loading-bar"></div>
        </div>
      </div>

      <div className="animation-background">
        <div className="animation-gradient"></div>
        <div className="animation-grid"></div>

        {/* Add some floating particles */}
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
    </div>
  )
}

export default IntroAnimation

