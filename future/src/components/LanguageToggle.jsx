import { Globe } from "lucide-react"
import { useLanguage } from "../LanguageContext"

function LanguageToggle() {
  const { language, toggleLanguage, t } = useLanguage()

  return (
    <button className="language-toggle icon-button" onClick={toggleLanguage} aria-label={t("language")}>
      <Globe className="icon" />
      <span className="language-code">{language.toUpperCase()}</span>
    </button>
  )
}

export default LanguageToggle

