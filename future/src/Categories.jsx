import { ChevronRight } from "lucide-react"

function Categories() {
  return (
    <section className="categories-section">
      <div className="container">
        <div className="section-header">
          <div className="section-title-container">
            <h2 className="section-title">Categories</h2>
            <p className="section-description">Explore our curated collections for every style and occasion.</p>
          </div>
          <div className="section-action">
            <button className="text-button primary">
              View All Categories
              <ChevronRight className="button-icon-small" />
            </button>
          </div>
        </div>

        <div className="categories-grid">
          {/* Women's Category */}
          <div className="category-card">
            <img src="https://media.istockphoto.com/id/1226328537/vector/image-place-holder-with-a-gray-camera-icon.jpg?s=612x612&w=0&k=20&c=qRydgCNlE44OUSSoz5XadsH7WCkU59-l-dwrvZzhXsI="alt="Women's Collection" className="category-image" />
            <div className="category-overlay"></div>
            <div className="category-content">
              <h3 className="category-title">Women</h3>
              <div className="category-tags">
                <a href="/women/shoes" className="category-tag">
                  Shoes
                </a>
                <a href="/women/accessories" className="category-tag">
                  Accessories
                </a>
                <a href="/women/clothes" className="category-tag">
                  Clothes
                </a>
              </div>
            </div>
          </div>

          {/* Men's Category */}
          <div className="category-card">
            <img src="https://media.istockphoto.com/id/1226328537/vector/image-place-holder-with-a-gray-camera-icon.jpg?s=612x612&w=0&k=20&c=qRydgCNlE44OUSSoz5XadsH7WCkU59-l-dwrvZzhXsI=" alt="Men's Collection" className="category-image" />
            <div className="category-overlay"></div>
            <div className="category-content">
              <h3 className="category-title">Men</h3>
              <div className="category-tags">
                <a href="/men/shoes" className="category-tag">
                  Shoes
                </a>
                <a href="/men/accessories" className="category-tag">
                  Accessories
                </a>
                <a href="/men/clothes" className="category-tag">
                  Clothes
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Categories

