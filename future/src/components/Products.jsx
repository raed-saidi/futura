"use client"

import { useState, useEffect } from "react"
import { ChevronRight, ShoppingBag, Plus } from "lucide-react"
import { useCart } from "../CartContext"

// Sample product data
const sampleProducts = [
  {
    id: 1,
    title: "Ethereal Dress",
    subtitle: "Feminine Collection",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=720&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Futuristic Blouse",
    subtitle: "Premium Collection",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=720&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Modern Jacket",
    subtitle: "Feminine Collection",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=720&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Elegant Skirt",
    subtitle: "Premium Collection",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=720&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Minimalist Top",
    subtitle: "Feminine Collection",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=720&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Statement Pants",
    subtitle: "Premium Collection",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=720&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Futuristic Shoes",
    subtitle: "Feminine Collection",
    price: 219.99,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=720&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Ethereal Accessory",
    subtitle: "Premium Collection",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=720&auto=format&fit=crop",
  },
]

function Products({ category }) {
  const [title, setTitle] = useState("Featured Products")
  const [description, setDescription] = useState("Our most popular items, handpicked for you.")
  const { addToCart } = useCart()

  useEffect(() => {
    if (category === "women") {
      setTitle("Feminine Futurism")
      setDescription("Where elegance meets innovation in our curated women's collection.")
    } else if (category === "men") {
      setTitle("Bold Essentials")
      setDescription("Sophisticated designs crafted for the modern man.")
    } else if (category === "new") {
      setTitle("New Arrivals")
      setDescription("Be the first to discover our latest innovations and trending styles.")
    }
  }, [category])

  return (
    <section className="products-section">
      <div className="container">
        <div className="section-header">
          <div className="section-title-container">
            <h2 className="section-title">{title}</h2>
            <p className="section-description">{description}</p>
          </div>
          <div className="section-action">
            <button className="text-button primary">
              View All Products
              <ChevronRight className="button-icon-small" />
            </button>
          </div>
        </div>

        <div className="products-grid">
          {sampleProducts.map((product, i) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img src={product.image || "/placeholder.svg"} alt={product.title} className="product-image" />
                <button
                  className="product-quick-add"
                  onClick={() => addToCart(product)}
                  aria-label={`Add ${product.title} to cart`}
                >
                  <Plus className="icon-small" />
                  Add to Cart
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
                    aria-label={`Add ${product.title} to cart`}
                  >
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

