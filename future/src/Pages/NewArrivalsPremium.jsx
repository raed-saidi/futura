import { Link } from "react-router-dom"
import Products from "../components/Products"
import { useLanguage } from "../LanguageContext"
import { newArrivalsProducts } from "../data/newArrivalsProducts"

function NewArrivalsPremium() {
  const { t } = useLanguage()

  return (
    <div className="new-arrivals-page">
      <div className="new-arrivals-hero">
        <div className="container">
          <h1 className="new-arrivals-title">{t("newArrivalsPremium")}</h1>
          <p className="new-arrivals-subtitle">{t("newArrivalsPremiumSubtitle")}</p>

          <div className="category-tabs">
            <Link to="/new" className="category-tab">
              {t("allProducts")}
            </Link>
            <Link to="/new/premium" className="category-tab active">
              {t("premium")}
            </Link>
            <Link to="/new/luxury" className="category-tab">
              {t("luxury")}
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <Products products={newArrivalsProducts} category="new" brandType="premium" />
      </div>
    </div>
  )
}

export default NewArrivalsPremium

