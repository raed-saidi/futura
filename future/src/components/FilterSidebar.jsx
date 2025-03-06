"use client"

import { X } from "lucide-react"
import { useFilter } from "../FilterContext"
import { useLanguage } from "../LanguageContext"

function FilterSidebar({ products, onClose }) {
  const { filters, updateFilters, clearFilters } = useFilter()
  const { t } = useLanguage()

  // Extract unique values for each filter type
  const types = [...new Set(products.map((product) => product.type))]
  const colors = [...new Set(products.map((product) => product.color))]
  const sizes = [...new Set(products.flatMap((product) => product.size))]

  // Get min and max prices from products
  const prices = products.map((product) => product.price)
  const minPrice = Math.floor(Math.min(...prices))
  const maxPrice = Math.ceil(Math.max(...prices))

  const handlePriceChange = (type, value) => {
    updateFilters("priceRange", {
      ...filters.priceRange,
      [type]: Number(value),
    })
  }

  return (
    <div className="filter-sidebar">
      <div className="filter-header">
        <h3 className="filter-title">{t("filters")}</h3>
        <button className="icon-button small" onClick={onClose}>
          <X className="icon-small" />
        </button>
      </div>

      <div className="filter-section">
        <h4 className="filter-section-title">{t("productType")}</h4>
        <div className="filter-options">
          {types.map((type) => (
            <label key={type} className="filter-option">
              <input
                type="checkbox"
                checked={filters.type.includes(type)}
                onChange={() => updateFilters("type", type)}
              />
              <span className="filter-option-label">{type.charAt(0).toUpperCase() + type.slice(1)}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h4 className="filter-section-title">{t("color")}</h4>
        <div className="filter-options">
          {colors.map((color) => (
            <label key={color} className="filter-option">
              <input
                type="checkbox"
                checked={filters.color.includes(color)}
                onChange={() => updateFilters("color", color)}
              />
              <span className="filter-option-label">{color.charAt(0).toUpperCase() + color.slice(1)}</span>
              {color !== "N/A" && (
                <span
                  className="color-swatch"
                  style={{ backgroundColor: color === "multi" ? "linear-gradient(to right, red, blue)" : color }}
                ></span>
              )}
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h4 className="filter-section-title">{t("size")}</h4>
        <div className="filter-options size-options">
          {sizes.map((size) => (
            <label key={size} className="filter-option size-option">
              <input
                type="checkbox"
                checked={filters.size.includes(size)}
                onChange={() => updateFilters("size", size)}
              />
              <span className="filter-option-label">{size}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h4 className="filter-section-title">{t("priceRange")}</h4>
        <div className="price-range">
          <div className="price-inputs">
            <div className="price-input-group">
              <label htmlFor="min-price">{t("min")}</label>
              <div className="price-input-wrapper">
                <span className="currency-symbol">$</span>
                <input
                  id="min-price"
                  type="number"
                  min={minPrice}
                  max={filters.priceRange.max}
                  value={filters.priceRange.min}
                  onChange={(e) => handlePriceChange("min", e.target.value)}
                  className="price-input"
                />
              </div>
            </div>
            <div className="price-input-group">
              <label htmlFor="max-price">{t("max")}</label>
              <div className="price-input-wrapper">
                <span className="currency-symbol">$</span>
                <input
                  id="max-price"
                  type="number"
                  min={filters.priceRange.min}
                  max={maxPrice}
                  value={filters.priceRange.max}
                  onChange={(e) => handlePriceChange("max", e.target.value)}
                  className="price-input"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="filter-actions">
        <button className="button outline" onClick={clearFilters}>
          {t("clearFilters")}
        </button>
      </div>
    </div>
  )
}

export default FilterSidebar

