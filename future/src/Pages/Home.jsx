"use client"

import { useState, useEffect } from "react"
import Hero from "../Hero"
import Categories from "../Categories"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import SimpleIntroAnimation from "../components/SimpleIntroAnimation"
import  womenProducts  from "../data/womenProducts"
import menProducts  from "../data/menProducts"
import  newArrivalsProducts  from "../data/newArrivalsProducts"

// Combine products from each category for the home page showcase
const featuredProducts = [
  // Premium products from women's collection
  ...womenProducts.filter((p) => p.category === "premium").slice(0, 2),
  // Luxury products from women's collection
  ...womenProducts.filter((p) => p.category === "luxury").slice(0, 2),
  // Premium products from men's collection
  ...menProducts.filter((p) => p.category === "premium").slice(0, 2),
  // Premium products from new arrivals
  ...newArrivalsProducts.filter((p) => p.category === "premium").slice(0, 2),
]

function Home() {
  const [showAnimation, setShowAnimation] = useState(false)

  useEffect(() => {
    try {
      // Check if this is the first visit
      const hasVisited = localStorage.getItem("hasVisitedBefore")

      if (!hasVisited) {
        setShowAnimation(true)
        // Set flag in localStorage
        localStorage.setItem("hasVisitedBefore", "true")
      }

      // For testing - uncomment to always show animation
      setShowAnimation(true)
    } catch (error) {
      console.error("Error in animation setup:", error)
      setShowAnimation(false)
    }
  }, [])

  const handleAnimationComplete = () => {
    setShowAnimation(false)
  }

  return (
    <>
      {showAnimation && <SimpleIntroAnimation onAnimationComplete={handleAnimationComplete} />}
      <div style={{ visibility: showAnimation ? "hidden" : "visible" }}>
        <Hero />
        <Categories />
        <Products products={featuredProducts} />
        <Newsletter />
      </div>
    </>
  )
}

export default Home

