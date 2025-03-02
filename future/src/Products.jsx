import { ChevronRight, ShoppingBag } from "lucide-react"

function Products() {
  return (
    <section className="products-section">
      <div className="container">
        <div className="section-header">
          <div className="section-title-container">
            <h2 className="section-title">Featured Products</h2>
            <p className="section-description">Our most popular items, handpicked for you.</p>
          </div>
          <div className="section-action">
            <button className="text-button primary">
              View All Products
              <ChevronRight className="button-icon-small" />
            </button>
          </div>
        </div>

        <div className="products-grid">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="product-card">
              <div className="product-image-container">
                <img
                  src="https://media.istockphoto.com/id/1226328537/vector/image-place-holder-with-a-gray-camera-icon.jpg?s=612x612&w=0&k=20&c=qRydgCNlE44OUSSoz5XadsH7WCkU59-l-dwrvZzhXsI="
                  alt={`Product ${i + 1}`}
                  className="product-image"
                />
              </div>
              <div className="product-details">
                <h3 className="product-title">Futuristic Product {i + 1}</h3>
                <p className="product-subtitle">Premium Collection</p>
                <div className="product-footer">
                  <span className="product-price">$199.99</span>
                  <button className="icon-button small">
                    <ShoppingBag className="icon-small" />
                    <span className="sr-only">Add to cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products

