"use client"

import Products from "../components/Products"
import { useLanguage } from "../LanguageContext"
import { Link } from "react-router-dom"
import { useState } from "react"

function NewArrivals() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState("all")

  return (
    <div className="new-arrivals-page">
      <div className="new-arrivals-hero">
        <div className="container">
          <h1 className="new-arrivals-title">{t("newArrivalsTitle")}</h1>
          <p className="new-arrivals-subtitle">{t("newArrivalsSubtitle")}</p>

          <div className="category-tabs">
            <button
              className={`category-tab ${activeTab === "all" ? "active" : ""}`}
              onClick={() => setActiveTab("all")}
            >
              {t("allProducts")}
            </button>
            <Link to="/new/premium" className={`category-tab ${activeTab === "premium" ? "active" : ""}`}>
              {t("premium")}
            </Link>
            <Link to="/new/luxury" className={`category-tab ${activeTab === "luxury" ? "active" : ""}`}>
              {t("luxury")}
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <Products category="new" />
      </div>
    </div>
  )
}

export default NewArrivals

