import { Moon, Sun } from "lucide-react"
import { useTheme } from "../ThemeContext"

function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <button
      className="theme-toggle icon-button"
      onClick={toggleTheme}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? <Sun className="icon" /> : <Moon className="icon" />}
    </button>
  )
}

export default ThemeToggle

