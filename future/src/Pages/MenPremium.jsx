import { Link } from "react-router-dom"
import Products from "../components/Products"
import { useLanguage } from "../LanguageContext"
import { menProducts } from "../data/menProducts"

function MenPremium() {
  const { t } = useLanguage()

  return (
    <div className="men-page">
      <div className="men-hero">
        <div className="container">
          <h1 className="men-title">{t("menPremium")}</h1>
          <p className="men-subtitle">{t("menPremiumSubtitle")}</p>

          <div className="category-tabs">
            <Link to="/men" className="category-tab">
              {t("allProducts")}
            </Link>
            <Link to="/men/premium" className="category-tab active">
              {t("premium")}
            </Link>
            <Link to="/men/luxury" className="category-tab">
              {t("luxury")}
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <Products products={menProducts} category="men" brandType="premium" />
      </div>
    </div>
  )
}

export default MenPremium

