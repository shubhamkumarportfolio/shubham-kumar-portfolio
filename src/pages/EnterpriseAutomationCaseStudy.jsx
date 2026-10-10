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
    <>
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

      <section
        className="case-study-context"
        id="enterprise-automation-context"
        aria-labelledby="enterprise-automation-context-title"
      >
        <Container>
          <div className="case-study-context__text">
            <div className="case-study-context__heading">
              <p className="case-study-context__label">
                <span>02</span> / The Context
              </p>

              <h2 id="enterprise-automation-context-title">
                Making complex
                <br />
                automation easier
                <br />
                <span>to understand.</span>
              </h2>
            </div>

            <div className="case-study-context__copy">
              <p>
                Automation solutions such as warehouse robotics, RFID, inventory systems and operational software can be technically powerful — but difficult to explain quickly to a business audience.
              </p>
              <p>
                The communication needed to make these products feel clear, connected and commercially relevant without oversimplifying the technology behind them.
              </p>
            </div>
          </div>

          <figure className="case-study-context__visual">
            <img
              src="/projects/enterprise-automation/context.jpg"
              alt="Warehouse automation environment showing RFID infrastructure, autonomous robotics and operational software"
              width="1672"
              height="941"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </Container>
      </section>
    </>
  )
}

export default EnterpriseAutomationCaseStudy
