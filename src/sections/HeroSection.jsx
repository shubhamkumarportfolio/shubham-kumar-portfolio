import Button from '../components/ui/Button.jsx'
import Container from '../components/ui/Container.jsx'
import SectionLabel from '../components/ui/SectionLabel.jsx'
import CredibilityStrip from './CredibilityStrip.jsx'
import HeroProjectWall from './HeroProjectWall.jsx'

function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <Container>
        <div className="hero-section__layout">
          <div className="hero-section__content" id="about">
            <SectionLabel>Brand &amp; Marketing Visual Designer</SectionLabel>
            <h1 id="hero-heading">
              I turn complex products into clear visual{' '}
              <span>communication.</span>
            </h1>
            <p className="hero-section__intro">
              Brand, product and campaign communication for technology-driven businesses.
            </p>
           
            <div className="hero-section__actions">
              <Button href="#work-preview">
                View Selected Work</Button>
              <Button href="#contact" variant="secondary">
                Let’s Connect
              </Button>
            </div>
          </div>

          <HeroProjectWall />
        </div>

        <CredibilityStrip />
      </Container>
    </section>
  )
}

export default HeroSection
