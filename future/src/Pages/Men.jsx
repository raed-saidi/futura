"use client"

import Products from "../components/Products"
import { useLanguage } from "../LanguageContext"
import { Link } from "react-router-dom"
import { useState } from "react"

function Men() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState("all")

  return (
    <div className="men-page">
      <div className="men-hero">
        <div className="container">
          <h1 className="men-title">{t("menCollection")}</h1>
          <p className="men-subtitle">{t("menSubtitle")}</p>

          <div className="category-tabs">
            <button
              className={`category-tab ${activeTab === "all" ? "active" : ""}`}
              onClick={() => setActiveTab("all")}
            >
              {t("allProducts")}
            </button>
            <Link to="/men/premium" className={`category-tab ${activeTab === "premium" ? "active" : ""}`}>
              {t("premium")}
            </Link>
            <Link to="/men/luxury" className={`category-tab ${activeTab === "luxury" ? "active" : ""}`}>
              {t("luxury")}
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <Products category="men" />
      </div>
    </div>
  )
}

export default Men

