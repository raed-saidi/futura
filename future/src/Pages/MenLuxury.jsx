import { Link } from "react-router-dom"
import Products from "../components/Products"
import { useLanguage } from "../LanguageContext"
import { menProducts } from "../data/menProducts"

function MenLuxury() {
  const { t } = useLanguage()

  return (
    <div className="men-page luxury">
      <div className="men-hero luxury">
        <div className="container">
          <h1 className="men-title">{t("menLuxury")}</h1>
          <p className="men-subtitle">{t("menLuxurySubtitle")}</p>

          <div className="category-tabs">
            <Link to="/men" className="category-tab">
              {t("allProducts")}
            </Link>
            <Link to="/men/premium" className="category-tab">
              {t("premium")}
            </Link>
            <Link to="/men/luxury" className="category-tab active">
              {t("luxury")}
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <Products products={menProducts} category="men" brandType="luxury" />
      </div>
    </div>
  )
}

export default MenLuxury

