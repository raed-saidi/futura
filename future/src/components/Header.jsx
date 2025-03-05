import { Search, ShoppingBag, User, Menu } from "lucide-react"
import { Link } from "react-router-dom"
import { useCart } from "../CartContext"
import ThemeToggle from "./ThemeToggle"

function Header() {
  const { cart, openCart } = useCart()

  // Calculate total items in cart
  const itemCount = cart.reduce((count, item) => count + item.quantity, 0)

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <Link to="/" className="logo">
            FUTURA
          </Link>
          <nav className="main-nav">
            <Link to="/women" className="nav-link">
              Women
            </Link>
            <Link to="/men" className="nav-link">
              Men
            </Link>
            <Link to="/new" className="nav-link">
              New Arrivals
            </Link>
          </nav>
        </div>
        <div className="header-right">
          <div className="search-container">
            <Search className="search-icon" />
            <input type="text" placeholder="Search..." className="search-input" />
          </div>
          <ThemeToggle />
          <button className="icon-button">
            <User className="icon" />
          </button>
          <button className="icon-button cart-button" onClick={openCart}>
            <ShoppingBag className="icon" />
            {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
          </button>
          <button className="icon-button md:hidden">
            <Menu className="icon" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

