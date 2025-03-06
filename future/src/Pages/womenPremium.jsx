import { Link } from "react-router-dom"
import Products from "../components/Products"
import { useLanguage } from "../LanguageContext"
import { womenProducts } from "../data/womenProducts"

function WomenPremium() {
  const { t } = useLanguage()

  return (
    <div className="women-page">
      <div className="women-hero">
        <div className="container">
          <h1 className="women-title">{t("womenPremium")}</h1>
          <p className="women-subtitle">{t("womenPremiumSubtitle")}</p>

          <div className="category-tabs">
            <Link to="/women" className="category-tab">
              {t("allProducts")}
            </Link>
            <Link to="/women/premium" className="category-tab active">
              {t("premium")}
            </Link>
            <Link to="/women/luxury" className="category-tab">
              {t("luxury")}
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <Products products={womenProducts} category="women" brandType="premium" />
      </div>
    </div>
  )
}

export default WomenPremium

