"use client"

import { useState, useEffect } from "react"
import { Search, ShoppingBag, User, Menu, X } from "lucide-react"
import { Link } from "react-router-dom"
import { useCart } from "../CartContext"
import { useLanguage } from "../LanguageContext"
import ThemeToggle from "./ThemeToggle"
import LanguageToggle from "./LanguageToggle"

function Header() {
  const { cart, openCart } = useCart()
  const { t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Calculate total items in cart
  const itemCount = cart.reduce((count, item) => count + item.quantity, 0)

  // Check if the screen is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener
    window.addEventListener("resize", checkIfMobile)

    // Clean up
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    // Implement search functionality here
    console.log("Searching for:", searchQuery)
    // You could redirect to a search results page or filter products
    alert(`Search query: ${searchQuery}`)
    setSearchQuery("")
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    // Prevent scrolling when mobile menu is open
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  // Close mobile menu when screen size changes from mobile to desktop
  useEffect(() => {
    if (!isMobile && isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
      document.body.style.overflow = "auto"
    }
  }, [isMobile, isMobileMenuOpen])

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <Link to="/" className="logo">
            OnlyBrands
          </Link>
          <nav className={`main-nav ${isMobileMenuOpen && isMobile ? "mobile-open" : ""}`}>
            <div className="nav-dropdown">
              <Link to="/women" className="nav-link">
                {t("women")}
              </Link>
              <div className="dropdown-content">
                <Link to="/women/premium" className="dropdown-link">
                  {t("premium")}
                </Link>
                <Link to="/women/luxury" className="dropdown-link">
                  {t("luxury")}
                </Link>
              </div>
            </div>
            <div className="nav-dropdown">
              <Link to="/men" className="nav-link">
                {t("men")}
              </Link>
              <div className="dropdown-content">
                <Link to="/men/premium" className="dropdown-link">
                  {t("premium")}
                </Link>
                <Link to="/men/luxury" className="dropdown-link">
                  {t("luxury")}
                </Link>
              </div>
            </div>
            <div className="nav-dropdown">
              <Link to="/new" className="nav-link">
                {t("newArrivals")}
              </Link>
              <div className="dropdown-content">
                <Link to="/new/premium" className="dropdown-link">
                  {t("premium")}
                </Link>
                <Link to="/new/luxury" className="dropdown-link">
                  {t("luxury")}
                </Link>
              </div>
            </div>
            <Link to="/about" className="nav-link">
              {t("aboutUsTitle")}
            </Link>
          </nav>
        </div>
        <div className="header-right">
          <form className="search-container" onSubmit={handleSearch}>
            <button type="submit" className="search-button" aria-label="Search">
              <Search className="search-icon" />
            </button>
            <input
              type="text"
              placeholder={t("search")}
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
          <LanguageToggle />
          <ThemeToggle />
          <button className="icon-button">
            <User className="icon" />
          </button>
          <button className="icon-button cart-button" onClick={openCart}>
            <ShoppingBag className="icon" />
            {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
          </button>
          {isMobile && (
            <button className="icon-button mobile-menu-toggle" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && isMobile && (
        <div className="mobile-menu-overlay" onClick={toggleMobileMenu}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <h2 className="mobile-menu-title">OnlyBrands</h2>
              <button className="icon-button" onClick={toggleMobileMenu}>
                <X className="icon" />
              </button>
            </div>
            <div className="mobile-menu-content">
              <div className="mobile-menu-section">
                <h3 className="mobile-menu-section-title">{t("women")}</h3>
                <Link to="/women" className="mobile-menu-link" onClick={toggleMobileMenu}>
                  {t("womenCollection")}
                </Link>
                <Link to="/women/premium" className="mobile-menu-link" onClick={toggleMobileMenu}>
                  {t("womenPremium")}
                </Link>
                <Link to="/women/luxury" className="mobile-menu-link" onClick={toggleMobileMenu}>
                  {t("womenLuxury")}
                </Link>
              </div>
              <div className="mobile-menu-section">
                <h3 className="mobile-menu-section-title">{t("men")}</h3>
                <Link to="/men" className="mobile-menu-link" onClick={toggleMobileMenu}>
                  {t("menCollection")}
                </Link>
                <Link to="/men/premium" className="mobile-menu-link" onClick={toggleMobileMenu}>
                  {t("menPremium")}
                </Link>
                <Link to="/men/luxury" className="mobile-menu-link" onClick={toggleMobileMenu}>
                  {t("menLuxury")}
                </Link>
              </div>
              <div className="mobile-menu-section">
                <h3 className="mobile-menu-section-title">{t("newArrivals")}</h3>
                <Link to="/new" className="mobile-menu-link" onClick={toggleMobileMenu}>
                  {t("newArrivalsTitle")}
                </Link>
                <Link to="/new/premium" className="mobile-menu-link" onClick={toggleMobileMenu}>
                  {t("newArrivalsPremium")}
                </Link>
                <Link to="/new/luxury" className="mobile-menu-link" onClick={toggleMobileMenu}>
                  {t("newArrivalsLuxury")}
                </Link>
              </div>
              <div className="mobile-menu-section">
                <Link to="/about" className="mobile-menu-link" onClick={toggleMobileMenu}>
                  {t("aboutUsTitle")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

