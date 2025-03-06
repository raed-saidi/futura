import { Link } from "react-router-dom"
import Products from "../components/Products"
import { useLanguage } from "../LanguageContext"
import { newArrivalsProducts } from "../data/newArrivalsProducts"

function NewArrivalsLuxury() {
  const { t } = useLanguage()

  return (
    <div className="new-arrivals-page luxury">
      <div className="new-arrivals-hero luxury">
        <div className="container">
          <h1 className="new-arrivals-title">{t("newArrivalsLuxury")}</h1>
          <p className="new-arrivals-subtitle">{t("newArrivalsLuxurySubtitle")}</p>

          <div className="category-tabs">
            <Link to="/new" className="category-tab">
              {t("allProducts")}
            </Link>
            <Link to="/new/premium" className="category-tab">
              {t("premium")}
            </Link>
            <Link to="/new/luxury" className="category-tab active">
              {t("luxury")}
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <Products products={newArrivalsProducts} category="new" brandType="luxury" />
      </div>
    </div>
  )
}

export default NewArrivalsLuxury

