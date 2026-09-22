import { useEffect, useState } from 'react'

const STORAGE_KEY = 'shubham-portfolio-theme'

function getInitialTheme() {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

function applyTheme(theme) {
  const root = document.documentElement
  const themeColor = document.querySelector('meta[name="theme-color"]')

  root.dataset.theme = theme
  root.style.colorScheme = theme
  themeColor?.setAttribute('content', theme === 'dark' ? '#0B0D12' : '#FFFFFF')
}

function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    applyTheme(theme)

    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // The selected theme still applies when storage is unavailable.
    }
  }, [theme])

  useEffect(() => {
    const syncTheme = (event) => {
      if (event.key !== STORAGE_KEY) return
      setTheme(event.newValue === 'dark' ? 'dark' : 'light')
    }

    window.addEventListener('storage', syncTheme)
    return () => window.removeEventListener('storage', syncTheme)
  }, [])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  }

  return { theme, toggleTheme }
}

export default useTheme
