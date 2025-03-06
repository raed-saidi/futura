"use client"

import { createContext, useContext, useState } from "react"

const FilterContext = createContext()

export function FilterProvider({ children }) {
  const [filters, setFilters] = useState({
    type: [],
    color: [],
    size: [],
    priceRange: { min: 0, max: 15000 },
  })

  const updateFilters = (filterType, value) => {
    setFilters((prevFilters) => {
      // If it's a price range update
      if (filterType === "priceRange") {
        return { ...prevFilters, priceRange: value }
      }

      // For array-based filters (type, color, size)
      const currentValues = [...prevFilters[filterType]]
      const valueIndex = currentValues.indexOf(value)

      // Toggle the value (add if not present, remove if present)
      if (valueIndex === -1) {
        currentValues.push(value)
      } else {
        currentValues.splice(valueIndex, 1)
      }

      return { ...prevFilters, [filterType]: currentValues }
    })
  }

  const clearFilters = () => {
    setFilters({
      type: [],
      color: [],
      size: [],
      priceRange: { min: 0, max: 15000 },
    })
  }

  const applyFilters = (products) => {
    return products.filter((product) => {
      // Filter by type
      if (filters.type.length > 0 && !filters.type.includes(product.type)) {
        return false
      }

      // Filter by color
      if (filters.color.length > 0 && !filters.color.includes(product.color)) {
        return false
      }

      // Filter by size (check if any of the product sizes match the selected sizes)
      if (filters.size.length > 0 && !product.size.some((s) => filters.size.includes(s))) {
        return false
      }

      // Filter by price range
      if (product.price < filters.priceRange.min || product.price > filters.priceRange.max) {
        return false
      }

      return true
    })
  }

  return (
    <FilterContext.Provider value={{ filters, updateFilters, clearFilters, applyFilters }}>
      {children}
    </FilterContext.Provider>
  )
}

export function useFilter() {
  return useContext(FilterContext)
}

