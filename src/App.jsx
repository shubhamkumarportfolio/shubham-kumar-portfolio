import Navbar from './components/layout/Navbar.jsx'
import HeroSection from './sections/HeroSection.jsx'
import SelectedWorkSection from './sections/SelectedWorkSection.jsx'
import CapabilitiesSection from './sections/CapabilitiesSection.jsx'
import AboutSection from './sections/AboutSection.jsx'
import ExperienceSection from './sections/ExperienceSection.jsx'
import Footer from './components/layout/Footer.jsx'
import EnterpriseAutomationCaseStudy from './pages/EnterpriseAutomationCaseStudy.jsx'

const currentPath = window.location.pathname.replace(/\/+$/, '') || '/'

function App() {
  if (currentPath === '/work/enterprise-automation') {
    return (
      <div className="site-shell">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navbar homeHref="/" sectionHrefPrefix="/" />
        <main id="main-content">
          <EnterpriseAutomationCaseStudy />
        </main>
      </div>
    )
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <SelectedWorkSection />
        <CapabilitiesSection />
        <AboutSection />
        <ExperienceSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
