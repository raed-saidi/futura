"use client"

import { createContext, useContext, useState } from "react"

const FilterContext = createContext()

export function FilterProvider({ children }) {
  const [filters, setFilters] = useState({
    type: [],
    color: [],
    size: [],
    priceRange: { min: 0, max: 10000 },
  })

  const applyFilter = (filterType, value) => {
    setFilters((prevFilters) => {
      // For array filters (type, color, size)
      if (Array.isArray(prevFilters[filterType])) {
        // If value is already in the array, remove it (toggle off)
        if (prevFilters[filterType].includes(value)) {
          return {
            ...prevFilters,
            [filterType]: prevFilters[filterType].filter((item) => item !== value),
          }
        }
        // Otherwise add it (toggle on)
        return {
          ...prevFilters,
          [filterType]: [...prevFilters[filterType], value],
        }
      }
      // For price range
      return {
        ...prevFilters,
        [filterType]: value,
      }
    })
  }

  const clearFilters = () => {
    setFilters({
      type: [],
      color: [],
      size: [],
      priceRange: { min: 0, max: 10000 },
    })
  }

  const filterProducts = (products) => {
    return products.filter((product) => {
      // Filter by type
      if (filters.type.length > 0 && !filters.type.includes(product.type)) {
        return false
      }

      // Filter by color
      if (filters.color.length > 0 && !product.colors.some((color) => filters.color.includes(color))) {
        return false
      }

      // Filter by size
      if (filters.size.length > 0 && !product.sizes.some((size) => filters.size.includes(size))) {
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
    <FilterContext.Provider value={{ filters, applyFilter, clearFilters, filterProducts }}>
      {children}
    </FilterContext.Provider>
  )
}

export function useFilter() {
  return useContext(FilterContext)
}

