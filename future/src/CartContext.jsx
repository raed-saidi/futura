"use client"

import { createContext, useContext, useState, useEffect } from "react"

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [total, setTotal] = useState(0)

  // Calculate total whenever cart changes
  useEffect(() => {
    const newTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    setTotal(newTotal)
  }, [cart])

  // Add item to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if product already exists in cart
      const existingItem = prevCart.find((item) => item.id === product.id)

      if (existingItem) {
        // Increase quantity if product already in cart
        return prevCart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      } else {
        // Add new product to cart
        return [...prevCart, { ...product, quantity: 1 }]
      }
    })
  }

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
  }

  // Update item quantity
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }

    setCart((prevCart) => prevCart.map((item) => (item.id === productId ? { ...item, quantity } : item)))
  }

  // Clear cart
  const clearCart = () => {
    setCart([])
  }

  // Open cart
  const openCart = () => {
    setIsOpen(true)
  }

  // Close cart
  const closeCart = () => {
    setIsOpen(false)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        isOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}

