import Navbar from './components/layout/Navbar.jsx'
import HeroSection from './sections/HeroSection.jsx'
import SelectedWorkSection from './sections/SelectedWorkSection.jsx'
import CapabilitiesSection from './sections/CapabilitiesSection.jsx'
import AboutSection from './sections/AboutSection.jsx'
import ExperienceSection from './sections/ExperienceSection.jsx'
import Footer from './components/layout/Footer.jsx'

function App() {
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
