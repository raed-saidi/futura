import { ArrowRight } from "lucide-react"
import ProductCarousel from "./components/ProductCarousel"

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-carousel">
        <ProductCarousel />
      </div>
      <div className="hero-gradient"></div>
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1 className="hero-title">
              The Future of <span className="gradient-text">Fashion</span> is Here
            </h1>
            <p className="hero-description">
              Discover our new collection of futuristic designs that blend style, comfort, and innovation.
            </p>
            <div className="hero-buttons">
              <button className="button primary-gradient">
                Shop Now
                <ArrowRight className="button-icon" />
              </button>
              <button className="button outline">Explore Collection</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

