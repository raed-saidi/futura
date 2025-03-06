import { useLanguage } from "../LanguageContext"

function AboutUs() {
  const { t } = useLanguage()

  return (
    <div className="about-us-page">
      <div className="about-us-hero">
        <div className="container">
          <h1 className="about-us-title">{t("aboutUsTitle")}</h1>
          <p className="about-us-subtitle">{t("aboutUsSubtitle")}</p>
        </div>
      </div>

      <div className="container">
        <div className="about-us-content">
          <section className="about-us-section">
            <h2 className="about-us-section-title">{t("ourStory")}</h2>
            <p className="about-us-text">{t("ourStoryText1")}</p>
            <p className="about-us-text">{t("ourStoryText2")}</p>
          </section>

          <section className="about-us-section">
            <h2 className="about-us-section-title">{t("ourMission")}</h2>
            <p className="about-us-text">{t("ourMissionText")}</p>
          </section>

          <section className="about-us-section">
            <h2 className="about-us-section-title">{t("ourValues")}</h2>
            <div className="about-us-values">
              <div className="about-us-value">
                <h3 className="about-us-value-title">{t("valueQuality")}</h3>
                <p className="about-us-value-text">{t("valueQualityText")}</p>
              </div>
              <div className="about-us-value">
                <h3 className="about-us-value-title">{t("valueSustainability")}</h3>
                <p className="about-us-value-text">{t("valueSustainabilityText")}</p>
              </div>
              <div className="about-us-value">
                <h3 className="about-us-value-title">{t("valueInnovation")}</h3>
                <p className="about-us-value-text">{t("valueInnovationText")}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default AboutUs

