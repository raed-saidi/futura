"use client"

import { createContext, useContext, useState, useEffect } from "react"

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if theme preference is stored in localStorage
    const savedTheme = localStorage.getItem("theme")
    // Check if user has a system preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    // Return true if saved theme is dark or if no saved theme but system prefers dark
    return savedTheme === "dark" || (!savedTheme && prefersDark)
  })

  // Update localStorage and document class when theme changes
  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light")

    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev)
  }

  return <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}

