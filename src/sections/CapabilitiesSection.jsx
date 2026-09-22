import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Container from '../components/ui/Container.jsx'
import { capabilities, processSteps } from '../data/capabilities.js'

function CapabilityCard({ capability }) {
  return (
    <article className="capability-card">
      <div className="capability-card__visual">
        <img
          src={capability.image}
          alt={capability.alt}
          width={capability.imageWidth}
          height={capability.imageHeight}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="capability-card__content">
        <span className="capability-card__number">{capability.number}</span>
        <h3>{capability.title}</h3>
        <div className="capability-card__footer">
          <span>{capability.description}</span>
          <ArrowUpRight
            className="capability-card__arrow"
            aria-hidden="true"
            size={20}
            strokeWidth={1.7}
          />
        </div>
      </div>
    </article>
  )
}

function ProcessStep({ step, isLast }) {
  return (
    <li className="approach-step">
      <p className="approach-step__number">{step.number}</p>
      <h4>{step.title}</h4>
      <p className="approach-step__description">{step.description}</p>
      {!isLast && (
        <ArrowRight
          className="approach-step__arrow"
          aria-hidden="true"
          size={18}
          strokeWidth={1.6}
        />
      )}
    </li>
  )
}

function CapabilitiesSection() {
  return (
    <section className="capabilities" id="capabilities" aria-labelledby="capabilities-heading">
      <Container>
        <header className="capabilities__header">
          <p className="capabilities__index">
            <span>03</span> / Capabilities
          </p>
          <div className="capabilities__heading-row">
            <h2 id="capabilities-heading">
              Where I create value<span aria-hidden="true">.</span>
            </h2>
            <p className="capabilities__summary">
              Helping brands and businesses communicate better through strategy, design and
              technology.
            </p>
          </div>
        </header>

        <div className="capabilities__grid">
          {capabilities.map((capability) => (
            <CapabilityCard key={capability.number} capability={capability} />
          ))}
        </div>

        <div className="approach" aria-labelledby="approach-heading">
          <header className="approach__intro">
            <p>My Approach</p>
            <h3 id="approach-heading">
              From insight
              <br />
              to impact<span aria-hidden="true">.</span>
            </h3>
          </header>
          <ol className="approach__steps">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.number}
                step={step}
                isLast={index === processSteps.length - 1}
              />
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}

export default CapabilitiesSection
