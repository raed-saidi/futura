"use client"

import Products from "../components/Products"
import { useLanguage } from "../LanguageContext"
import { Link } from "react-router-dom"
import { useState } from "react"

function Women() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState("all")

  return (
    <div className="women-page">
      <div className="women-hero">
        <div className="container">
          <h1 className="women-title">{t("womenCollection")}</h1>
          <p className="women-subtitle">{t("womenSubtitle")}</p>

          <div className="category-tabs">
            <button
              className={`category-tab ${activeTab === "all" ? "active" : ""}`}
              onClick={() => setActiveTab("all")}
            >
              {t("allProducts")}
            </button>
            <Link to="/women/premium" className={`category-tab ${activeTab === "premium" ? "active" : ""}`}>
              {t("premium")}
            </Link>
            <Link to="/women/luxury" className={`category-tab ${activeTab === "luxury" ? "active" : ""}`}>
              {t("luxury")}
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <Products category="women" />
      </div>
    </div>
  )
}

export default Women

