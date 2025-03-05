import { X, Trash2, ShoppingBag, ArrowLeft, CreditCard } from "lucide-react"
import { useCart } from "../CartContext"

function ShoppingCart() {
  const { cart, total, isOpen, removeFromCart, updateQuantity, clearCart, closeCart } = useCart()

  if (!isOpen) return null

  return (
    <div className="shopping-cart-overlay">
      <div className="shopping-cart">
        <div className="shopping-cart-header">
          <h2 className="shopping-cart-title">Your Cart</h2>
          <button className="icon-button" onClick={closeCart} aria-label="Close cart">
            <X className="icon" />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="shopping-cart-empty">
            <ShoppingBag className="shopping-cart-empty-icon" />
            <p>Your cart is empty</p>
            <button className="button primary-gradient" onClick={closeCart}>
              Start Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="shopping-cart-items">
              {cart.map((item) => (
                <div key={item.id} className="shopping-cart-item">
                  <div className="shopping-cart-item-image-container">
                    <img
                      src={
                        item.image ||
                        "https://media.istockphoto.com/id/1226328537/vector/image-place-holder-with-a-gray-camera-icon.jpg?s=612x612&w=0&k=20&c=qRydgCNlE44OUSSoz5XadsH7WCkU59-l-dwrvZzhXsI="
                      }
                      alt={item.title}
                      className="shopping-cart-item-image"
                    />
                  </div>
                  <div className="shopping-cart-item-details">
                    <h3 className="shopping-cart-item-title">{item.title}</h3>
                    <p className="shopping-cart-item-price">${item.price.toFixed(2)}</p>
                    <div className="shopping-cart-item-quantity">
                      <button
                        className="quantity-button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="quantity-value">{item.quantity}</span>
                      <button
                        className="quantity-button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="icon-button small"
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Remove item"
                  >
                    <X className="icon-small" />
                  </button>
                </div>
              ))}
            </div>

            <div className="shopping-cart-footer">
              <div className="shopping-cart-summary">
                <div className="shopping-cart-total">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <button className="text-button danger" onClick={clearCart}>
                  <Trash2 className="button-icon-small" />
                  Clear Cart
                </button>
              </div>

              <div className="shopping-cart-actions">
                <button className="button outline" onClick={closeCart}>
                  <ArrowLeft className="button-icon" />
                  Return to Shop
                </button>
                <button className="button primary-gradient">
                  <CreditCard className="button-icon" />
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ShoppingCart

