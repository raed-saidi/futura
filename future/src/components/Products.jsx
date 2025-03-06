"use client"

import { useState, useEffect } from "react"
import { ChevronRight, ShoppingBag, Plus, Filter } from "lucide-react"
import { useCart } from "../CartContext"
import { useLanguage } from "../LanguageContext"

// Sample product data for premium brands
const premiumProducts = [
  {
    id: 1,
    title: "Ethereal Dress",
    subtitle: "Calvin Klein",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=720&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Futuristic Blouse",
    subtitle: "Tommy Hilfiger",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=720&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Modern Jacket",
    subtitle: "Ralph Lauren",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=720&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Elegant Skirt",
    subtitle: "Michael Kors",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=720&auto=format&fit=crop",
  },
]

// Sample product data for luxury brands
const luxuryProducts = [
  {
    id: 5,
    title: "Minimalist Top",
    subtitle: "Gucci",
    price: 589.99,
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=720&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Statement Pants",
    subtitle: "Louis Vuitton",
    price: 879.99,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=720&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Futuristic Shoes",
    subtitle: "Prada",
    price: 1219.99,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=720&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Ethereal Accessory",
    subtitle: "Chanel",
    price: 979.99,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=720&auto=format&fit=crop",
  },
]

function Products({ category, brandType = "all" }) {
  const [title, setTitle] = useState("Featured Products")
  const [description, setDescription] = useState("Our most popular items, handpicked for you.")
  const [products, setProducts] = useState([])
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const { addToCart } = useCart()
  const { t } = useLanguage()

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

    // Set products based on brand type
    if (brandType === "premium") {
      setProducts(premiumProducts)
    } else if (brandType === "luxury") {
      setProducts(luxuryProducts)
    } else {
      setProducts([...premiumProducts, ...luxuryProducts])
    }
  }, [category, brandType])

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
              <div className="filter-sidebar">
                {/* Filter content would go here */}
                <h3>Filters</h3>
              </div>
            </div>
          )}

          {/* Products grid */}
          <div className="products-grid">
            {products.map((product) => (
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products

