import { useEffect, useState } from 'react'
import { ArrowUpRight, FileText, Menu, X } from 'lucide-react'
import Container from '../ui/Container.jsx'
import ThemeToggle from '../ui/ThemeToggle.jsx'

const navItems = [
  { label: 'Work', href: '#selected-work' },
  { label: 'About', href: '#about-section' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

function Navbar({ homeHref = '#main-content', sectionHrefPrefix = '' }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeHref, setActiveHref] = useState(sectionHrefPrefix ? null : '#selected-work')

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <header className="navbar">
      <Container className="navbar__inner">
        <a className="navbar__brand" href={homeHref} aria-label="Shubham Kumar, home">
          <span className="navbar__name">SHUBHAM KUMAR</span>
          <span className="navbar__role">Brand &amp; Marketing Visual Designer</span>
        </a>

        <button
          className="navbar__toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <div
          className={`navbar__panel${isOpen ? ' navbar__panel--open' : ''}`}
          id="primary-navigation"
        >
          <nav className="navbar__nav" aria-label="Primary navigation">
            <ul>
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    className={activeHref === item.href ? 'navbar__link--active' : undefined}
                    href={`${sectionHrefPrefix}${item.href}`}
                    aria-current={activeHref === item.href ? 'location' : undefined}
                    onClick={() => {
                      setActiveHref(item.href)
                      setIsOpen(false)
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="navbar__actions">
            <a
              className="navbar__resume"
              href="/Shubham_Premium_Graphic_Designer_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <FileText aria-hidden="true" size={17} strokeWidth={1.8} />
              <span>Résumé</span>
              <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} />
            </a>
            <div className="navbar__theme-item">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Navbar
