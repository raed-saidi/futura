"use client"

import { Link } from "react-router-dom"
import { useLanguage } from "../LanguageContext"

function Footer() {
  const { t } = useLanguage()

  const resetIntroAnimation = () => {
    localStorage.removeItem("hasVisitedBefore")
    window.location.href = "/"
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-heading">{t("shop")}</h3>
            <div className="footer-links">
              <Link to="/women" className="footer-link">
                {t("women")}
              </Link>
              <Link to="/men" className="footer-link">
                {t("men")}
              </Link>
              <Link to="/new" className="footer-link">
                {t("newArrivals")}
              </Link>
              <Link to="/sale" className="footer-link">
                {t("sale")}
              </Link>
            </div>
          </div>
          <div>
            <h3 className="footer-heading">{t("brands")}</h3>
            <div className="footer-links">
              <Link to="/women/premium" className="footer-link">
                {t("premiumWomen")}
              </Link>
              <Link to="/women/luxury" className="footer-link">
                {t("luxuryWomen")}
              </Link>
              <Link to="/men/premium" className="footer-link">
                {t("premiumMen")}
              </Link>
              <Link to="/men/luxury" className="footer-link">
                {t("luxuryMen")}
              </Link>
            </div>
          </div>
          <div>
            <h3 className="footer-heading">{t("help")}</h3>
            <div className="footer-links">
              <Link to="/faq" className="footer-link">
                {t("faq")}
              </Link>
              <Link to="/shipping" className="footer-link">
                {t("shippingReturns")}
              </Link>
              <Link to="/contact" className="footer-link">
                {t("contactUs")}
              </Link>
              <Link to="/size-guide" className="footer-link">
                {t("sizeGuide")}
              </Link>
              <button
                onClick={resetIntroAnimation}
                className="footer-link"
                style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
              >
                Reset Intro
              </button>
            </div>
          </div>
          <div>
            <h3 className="footer-heading">{t("followUs")}</h3>
            <div className="footer-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                Instagram
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                Twitter
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                Facebook
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                Pinterest
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">© 2023 OnlyBrands. {t("allRightsReserved")}</p>
            <div className="legal-links">
              <Link to="/privacy" className="legal-link">
                {t("privacyPolicy")}
              </Link>
              <Link to="/terms" className="legal-link">
                {t("termsOfService")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

