import { Moon, Sun } from 'lucide-react'
import useTheme from '../../hooks/useTheme.js'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode'

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={label}
      title={label}
      onClick={toggleTheme}
    >
      {isDark ? (
        <Moon aria-hidden="true" size={20} strokeWidth={1.8} />
      ) : (
        <Sun aria-hidden="true" size={20} strokeWidth={1.8} />
      )}
    </button>
  )
}

export default ThemeToggle
