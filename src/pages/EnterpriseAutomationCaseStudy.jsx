import { ArrowDown } from 'lucide-react'
import Button from '../components/ui/Button.jsx'
import Container from '../components/ui/Container.jsx'

const projectMetadata = [
  { label: 'Category', value: 'Brand / Product / Campaign' },
  { label: 'Role', value: 'Brand & Marketing Visual Designer' },
  { label: 'Scope', value: 'Brand communication • Product visuals • Campaigns • Digital' },
]

function EnterpriseAutomationCaseStudy() {
  return (
    <section className="case-study-hero" aria-labelledby="enterprise-automation-title">
      <Container className="case-study-hero__layout">
        <div className="case-study-hero__content">
          <p className="case-study-hero__label">
            <span>01</span> / Case Study
          </p>

          <h1 id="enterprise-automation-title">
            Enterprise
            <span>Automation.</span>
          </h1>

          <p className="case-study-hero__summary">
            Turning complex automation technology into clear, consistent business communication.
          </p>

          <dl className="case-study-hero__metadata">
            {projectMetadata.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="case-study-hero__actions">
            <Button className="case-study-hero__cta" href="#enterprise-automation-visual">
              Explore the Project
            </Button>

            <a className="case-study-hero__scroll" href="#enterprise-automation-visual">
              <span className="case-study-hero__scroll-icon" aria-hidden="true">
                <ArrowDown size={19} strokeWidth={1.7} />
              </span>
              <span>
                Scroll to explore
                <br />
                the project
              </span>
            </a>
          </div>
        </div>

        <figure className="case-study-hero__visual" id="enterprise-automation-visual">
          <img
            src="/projects/enterprise-automation/hero.jpg"
            alt="Enterprise automation communication system shown across warehouse robotics, operational dashboard, RFID hardware and digital interfaces"
            width="1672"
            height="941"
            decoding="async"
            fetchPriority="high"
          />
        </figure>
      </Container>
    </section>
  )
}

export default EnterpriseAutomationCaseStudy
