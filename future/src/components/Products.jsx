"use client"

import { useState, useEffect } from "react"
import { ChevronRight, ShoppingBag, Plus, Filter } from "lucide-react"
import { useCart } from "../CartContext"
import { useLanguage } from "../LanguageContext"
import { useFilter } from "../FilterContext"
import FilterSidebar from "./FilterSidebar"

function Products({ products, category, brandType = "all" }) {
  const [title, setTitle] = useState("Featured Products")
  const [description, setDescription] = useState("Our most popular items, handpicked for you.")
  const [filteredProducts, setFilteredProducts] = useState([])
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const { addToCart } = useCart()
  const { t } = useLanguage()
  const { applyFilters } = useFilter()

  useEffect(() => {
    // Set title and description based on category and brand type
    if (category === "women") {
      if (brandType === "premium") {
        setTitle("Women's Premium Collection")
        setDescription("Quality designs from renowned premium brands.")
      } else if (brandType === "luxury") {
        setTitle("Women's Luxury Collection")
        setDescription("Exclusive pieces from the world's most prestigious fashion houses.")
      } else {
        setTitle("Feminine Futurism")
        setDescription("Where elegance meets innovation in our curated women's collection.")
      }
    } else if (category === "men") {
      if (brandType === "premium") {
        setTitle("Men's Premium Collection")
        setDescription("Sophisticated designs from leading premium brands.")
      } else if (brandType === "luxury") {
        setTitle("Men's Luxury Collection")
        setDescription("Exceptional craftsmanship from the most prestigious menswear designers.")
      } else {
        setTitle("Bold Essentials")
        setDescription("Sophisticated designs crafted for the modern man.")
      }
    } else if (category === "new") {
      if (brandType === "premium") {
        setTitle("New Premium Arrivals")
        setDescription("The latest additions from our premium brand partners.")
      } else if (brandType === "luxury") {
        setTitle("New Luxury Arrivals")
        setDescription("Be the first to discover our newest luxury acquisitions.")
      } else {
        setTitle("New Arrivals")
        setDescription("Be the first to discover our latest innovations and trending styles.")
      }
    }

    // Filter products based on brand type if specified
    let productsToShow = products
    if (brandType === "premium") {
      productsToShow = products.filter((product) => product.category === "premium")
    } else if (brandType === "luxury") {
      productsToShow = products.filter((product) => product.category === "luxury")
    }

    // Apply any active filters
    setFilteredProducts(applyFilters(productsToShow))
  }, [category, brandType, products, applyFilters])

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen)
  }

  return (
    <section className="products-section">
      <div className="container">
        <div className="section-header">
          <div className="section-title-container">
            <h2 className="section-title">{title}</h2>
            <p className="section-description">{description}</p>
          </div>
          <div className="section-actions">
            <button className="filter-button" onClick={toggleFilter}>
              <Filter className="icon-small" />
              {t("filters")}
            </button>
            <button className="text-button primary">
              {t("viewAllProducts")}
              <ChevronRight className="button-icon-small" />
            </button>
          </div>
        </div>

        <div className="products-container">
          {/* Filter sidebar */}
          {isFilterOpen && (
            <div className="filter-overlay" onClick={toggleFilter}>
              <div className="filter-sidebar-container" onClick={(e) => e.stopPropagation()}>
                <FilterSidebar products={products} onClose={toggleFilter} />
              </div>
            </div>
          )}

          {/* Products grid */}
          <div className="products-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-image-container">
                    <img src={product.image || "/placeholder.svg"} alt={product.title} className="product-image" />
                    <button
                      className="product-quick-add"
                      onClick={() => addToCart(product)}
                      aria-label={`${t("addToCart")} ${product.title}`}
                    >
                      <Plus className="icon-small" />
                      {t("addToCart")}
                    </button>
                  </div>
                  <div className="product-details">
                    <h3 className="product-title">{product.title}</h3>
                    <p className="product-subtitle">{product.subtitle}</p>
                    <div className="product-footer">
                      <span className="product-price">${product.price.toFixed(2)}</span>
                      <button
                        className="icon-button small"
                        onClick={() => addToCart(product)}
                        aria-label={`${t("addToCart")} ${product.title}`}
                      >
                        <ShoppingBag className="icon-small" />
                        <span className="sr-only">{t("addToCart")}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-products-message">
                <p>{t("noProductsFound")}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products

