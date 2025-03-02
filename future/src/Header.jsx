import { Search, ShoppingBag, User } from "lucide-react"

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <a href="/" className="logo">
            FUTURA
          </a>
          <nav className="main-nav">
            <a href="/women" className="nav-link">
              Women
            </a>
            <a href="/men" className="nav-link">
              Men
            </a>
            <a href="/new" className="nav-link">
              New Arrivals
            </a>
            <a href="/sale" className="nav-link">
              Sale
            </a>
          </nav>
        </div>
        <div className="header-right">
          <div className="search-container">
            
            <input type="search" placeholder="Search products..." className="search-input" />
          </div>
          <button className="icon-button">
            <User className="icon" />
            <span className="sr-only">Account</span>
          </button>
          <button className="icon-button">
            <ShoppingBag className="icon" />
            <span className="sr-only">Cart</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

