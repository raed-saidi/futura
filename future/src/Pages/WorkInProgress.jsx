import { Construction } from "lucide-react"
import { useLanguage } from "../LanguageContext"
import { useLocation } from "react-router-dom"

function WorkInProgress() {
  const { t } = useLanguage()
  const location = useLocation()
  const pageName = location.pathname.split("/").filter(Boolean).join(" > ")

  return (
    <div className="work-in-progress-page">
      <div className="container">
        <div className="work-in-progress-content">
          <Construction size={64} className="work-in-progress-icon" />
          <h1 className="work-in-progress-title">{t("workInProgressTitle")}</h1>
          <p className="work-in-progress-message">
            {t("workInProgressMessage")} <strong>{pageName || t("thisPage")}</strong>
          </p>
          <p className="work-in-progress-submessage">{t("workInProgressSubmessage")}</p>
        </div>
      </div>
    </div>
  )
}

export default WorkInProgress

