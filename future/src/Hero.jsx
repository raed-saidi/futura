import { ArrowRight } from "lucide-react"

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-gradient"></div>
      <div className="hero-content">
        <div className="hero-grid">
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
          <div className="hero-image">
            <img
              src="https://media.istockphoto.com/id/1226328537/vector/image-place-holder-with-a-gray-camera-icon.jpg?s=612x612&w=0&k=20&c=qRydgCNlE44OUSSoz5XadsH7WCkU59-l-dwrvZzhXsI="
              alt="Hero "
              width={400}
              height={400}
              className="rounded-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

