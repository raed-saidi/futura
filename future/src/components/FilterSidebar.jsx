"use client"

import { useState } from "react"
import { useFilter } from "../FilterContext"
import { useLanguage } from "../LanguageContext"
import { X, Filter, ChevronDown, ChevronUp } from "lucide-react"

function FilterSidebar({ products, isOpen, onClose }) {
  const { t } = useLanguage()
  const { filters, applyFilter, clearFilters } = useFilter()
  const [expandedSections, setExpandedSections] = useState({
    type: true,
    color: true,
    size: true,
    price: true,
  })

  // Extract unique values from products
  const getUniqueValues = (key) => {
    if (key === "colors" || key === "sizes") {
      const allValues = products.flatMap((product) => product[key])
      return [...new Set(allValues)]
    }
    return [...new Set(products.map((product) => product[key]))]
  }

  const types = getUniqueValues("type")
  const colors = getUniqueValues("colors")
  const sizes = getUniqueValues("sizes")

  // Price range
  const minPrice = Math.min(...products.map((product) => product.price))
  const maxPrice = Math.max(...products.map((product) => product.price))

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const handlePriceChange = (e, bound) => {
    const value = Number.parseFloat(e.target.value)
    applyFilter("priceRange", {
      ...filters.priceRange,
      [bound]: value,
    })
  }

  return (
    <div className={`filter-sidebar ${isOpen ? "open" : ""}`} onClick={(e) => e.stopPropagation()}>
      <div className="filter-header">
        <h3 className="filter-title">
          <Filter className="icon-small" />
          {t("filters")}
        </h3>
        <button className="icon-button small" onClick={onClose}>
          <X className="icon-small" />
        </button>
      </div>

      <div className="filter-content">
        {/* Type Filter */}
        <div className="filter-section">
          <button className="filter-section-header" onClick={() => toggleSection("type")}>
            <h4 className="filter-section-title">{t("productType")}</h4>
            {expandedSections.type ? <ChevronUp className="icon-small" /> : <ChevronDown className="icon-small" />}
          </button>
          {expandedSections.type && (
            <div className="filter-options">
              {types.map((type) => (
                <label key={type} className="filter-option">
                  <input
                    type="checkbox"
                    checked={filters.type.includes(type)}
                    onChange={() => applyFilter("type", type)}
                  />
                  <span className="filter-option-label">{t(type)}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Color Filter */}
        <div className="filter-section">
          <button className="filter-section-header" onClick={() => toggleSection("color")}>
            <h4 className="filter-section-title">{t("color")}</h4>
            {expandedSections.color ? <ChevronUp className="icon-small" /> : <ChevronDown className="icon-small" />}
          </button>
          {expandedSections.color && (
            <div className="filter-options">
              {colors.map((color) => (
                <label key={color} className="filter-option">
                  <input
                    type="checkbox"
                    checked={filters.color.includes(color)}
                    onChange={() => applyFilter("color", color)}
                  />
                  <span className="filter-option-label">
                    <span
                      className="color-swatch"
                      style={{
                        backgroundColor:
                          color === "multicolor"
                            ? "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)"
                            : color,
                      }}
                    ></span>
                    {t(color)}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Size Filter */}
        <div className="filter-section">
          <button className="filter-section-header" onClick={() => toggleSection("size")}>
            <h4 className="filter-section-title">{t("size")}</h4>
            {expandedSections.size ? <ChevronUp className="icon-small" /> : <ChevronDown className="icon-small" />}
          </button>
          {expandedSections.size && (
            <div className="filter-options size-options">
              {sizes.map((size) => (
                <label key={size} className="size-option">
                  <input
                    type="checkbox"
                    checked={filters.size.includes(size)}
                    onChange={() => applyFilter("size", size)}
                    className="sr-only"
                  />
                  <span className={`size-button ${filters.size.includes(size) ? "selected" : ""}`}>{size}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Price Range Filter */}
        <div className="filter-section">
          <button className="filter-section-header" onClick={() => toggleSection("price")}>
            <h4 className="filter-section-title">{t("priceRange")}</h4>
            {expandedSections.price ? <ChevronUp className="icon-small" /> : <ChevronDown className="icon-small" />}
          </button>
          {expandedSections.price && (
            <div className="filter-price-range">
              <div className="price-inputs">
                <div className="price-input-group">
                  <label htmlFor="min-price">{t("min")}</label>
                  <div className="price-input-wrapper">
                    <span className="price-currency">$</span>
                    <input
                      type="number"
                      id="min-price"
                      min={minPrice}
                      max={maxPrice}
                      value={filters.priceRange.min}
                      onChange={(e) => handlePriceChange(e, "min")}
                      className="price-input"
                    />
                  </div>
                </div>
                <div className="price-input-group">
                  <label htmlFor="max-price">{t("max")}</label>
                  <div className="price-input-wrapper">
                    <span className="price-currency">$</span>
                    <input
                      type="number"
                      id="max-price"
                      min={minPrice}
                      max={maxPrice}
                      value={filters.priceRange.max}
                      onChange={(e) => handlePriceChange(e, "max")}
                      className="price-input"
                    />
                  </div>
                </div>
              </div>
              <div className="price-range-slider">
                <input
                  type="range"
                  min={minPrice}
                  max={maxPrice}
                  value={filters.priceRange.min}
                  onChange={(e) => handlePriceChange(e, "min")}
                  className="price-slider"
                />
                <input
                  type="range"
                  min={minPrice}
                  max={maxPrice}
                  value={filters.priceRange.max}
                  onChange={(e) => handlePriceChange(e, "max")}
                  className="price-slider"
                />
              </div>
              <div className="price-range-display">
                ${filters.priceRange.min.toFixed(2)} - ${filters.priceRange.max.toFixed(2)}
              </div>
            </div>
          )}
        </div>

        <div className="filter-actions">
          <button className="button outline" onClick={clearFilters}>
            {t("clearFilters")}
          </button>
        </div>
      </div>
    </div>
  )
}

export default FilterSidebar

