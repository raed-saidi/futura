"use client"

import { useState, useEffect, useCallback } from "react"
import { ArrowUp } from "lucide-react"

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  const toggleVisibility = useCallback(() => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [])

  // Set the top coordinate to 0
  // Make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [toggleVisibility])

  return (
    <div className={`scroll-to-top ${isVisible ? "visible" : ""}`}>
      <button onClick={scrollToTop} aria-label="Scroll to top" className="scroll-to-top-button">
        <ArrowUp className="icon" />
      </button>
    </div>
  )
}

export default ScrollToTop

