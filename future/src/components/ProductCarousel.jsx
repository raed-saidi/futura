"use client"

import { useState, useEffect, useCallback } from "react"

const images = [
  {
    src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop",
    alt: "Fashion model in modern outfit",
    title: "Ethereal Collection",
    description: "Discover our signature blend of elegance and innovation",
  },
  {
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    alt: "Minimalist fashion design",
    title: "Minimalist Series",
    description: "Clean lines and sophisticated silhouettes for the modern woman",
  },
  {
    src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop",
    alt: "Bold fashion statement",
    title: "Bold Statement",
    description: "Express yourself with our vibrant and distinctive designs",
  },
  {
    src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
    alt: "Elegant evening wear",
    title: "Evening Elegance",
    description: "Sophisticated attire for your special occasions",
  },
]

function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Function to go to the next slide (always forward)
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [])

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="carousel-container">
      <div className="carousel-slides">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentIndex ? "active" : ""}`}
            style={{ opacity: index === currentIndex ? 1 : 0 }}
          >
            <img src={image.src || "/placeholder.svg"} alt={image.alt} className="carousel-image" />
            <div className="carousel-content">
              <h2 className="carousel-title">{image.title}</h2>
              <p className="carousel-description">{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductCarousel

