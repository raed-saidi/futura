import { Link } from "react-router-dom"
import Products from "../components/Products"
import { useLanguage } from "../LanguageContext"
import { womenProducts } from "../data/womenProducts"

function WomenLuxury() {
  const { t } = useLanguage()

  return (
    <div className="women-page luxury">
      <div className="women-hero luxury">
        <div className="container">
          <h1 className="women-title">{t("womenLuxury")}</h1>
          <p className="women-subtitle">{t("womenLuxurySubtitle")}</p>

          <div className="category-tabs">
            <Link to="/women" className="category-tab">
              {t("allProducts")}
            </Link>
            <Link to="/women/premium" className="category-tab">
              {t("premium")}
            </Link>
            <Link to="/women/luxury" className="category-tab active">
              {t("luxury")}
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <Products products={womenProducts} category="women" brandType="luxury" />
      </div>
    </div>
  )
}

export default WomenLuxury

