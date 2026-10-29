import { ArrowRight } from 'lucide-react'
import Container from '../components/ui/Container.jsx'

const projectMetadata = [
  { label: 'Category', value: 'Campaign / Social / Paid Creative' },
  { label: 'Role', value: 'Brand & Marketing Visual Designer' },
  { label: 'Scope', value: 'Campaign concepts • Social content • Paid creatives • Motion • Digital' },
]

const challengeItems = [
  {
    number: '01',
    title: 'Complex Offers',
    description: 'Technical products were hard to explain quickly.',
  },
  {
    number: '02',
    title: 'Fragmented Communication',
    description: 'Different messages and visuals felt disconnected across channels.',
  },
  {
    number: '03',
    title: 'Competing for Attention',
    description: 'Content needed to work quickly across social, ads, web and more.',
  },
]

function CampaignsContentCaseStudy() {
  return (
    <div className="campaigns-content-page">
      <section
        className="case-study-hero case-study-hero--campaigns-content"
        aria-labelledby="campaigns-content-title"
      >
        <Container className="case-study-hero__layout case-study-hero__layout--campaigns-content">
          <div className="case-study-hero__content">
            <h1 id="campaigns-content-title">
              <span className="campaigns-content-title__primary">Campaigns &amp;</span>
              <span>Content.</span>
            </h1>

            <p className="case-study-hero__summary">
              Turning business objectives into clear, consistent campaign communication.
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
              <a
                className="button button--primary case-study-hero__cta campaigns-content-hero__cta"
                href="#campaigns-content-next"
              >
                <span>Explore the Project</span>
                <ArrowRight aria-hidden="true" size={18} strokeWidth={1.8} />
              </a>
            </div>
          </div>

          <figure className="case-study-hero__visual campaigns-content-hero__visual">
            <img
              src="/projects/campaigns-content/campaigns-content-hero-showcase.png"
              alt="Nexora campaign system shown across a retail landing page, social and paid creative, mobile content, and printed collateral"
              width="1159"
              height="780"
              decoding="async"
              fetchPriority="high"
            />
          </figure>
        </Container>
      </section>

      <section
        className="campaigns-content-challenge"
        id="campaigns-content-next"
        aria-labelledby="campaigns-content-challenge-title"
      >
        <Container className="campaigns-content-challenge__layout">
          <div className="campaigns-content-challenge__content">
            <p className="campaigns-content-challenge__label">The Challenge</p>

            <h2 id="campaigns-content-challenge-title">
              <span>
                <span className="campaigns-content-challenge__heading-primary">Complex products</span>
              </span>
              <span>
                <span className="campaigns-content-challenge__heading-primary">needed </span>
                clearer,
              </span>
              <span>more consistent</span>
              <span>communication.</span>
            </h2>

            <ol className="campaigns-content-challenge__list">
              {challengeItems.map((item) => (
                <li key={item.number}>
                  <span className="campaigns-content-challenge__number">{item.number}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="campaigns-content-challenge__visuals">
            <figure className="campaigns-content-challenge__visual campaigns-content-challenge__visual--complex">
              <img
                src="/projects/campaigns-content/campaign-challenge-complex.jpg"
                alt="Business professional working through complex retail product information with minimal callouts for complex features, too much information and clearer messaging"
                width="1226"
                height="380"
                loading="lazy"
                decoding="async"
              />
            </figure>

            <figure className="campaigns-content-challenge__visual">
              <img
                src="/projects/campaigns-content/campaign-challenge-fragmented.jpg"
                alt="Disconnected retail campaign executions shown across social posts, advertisements and mobile content"
                width="606"
                height="348"
                loading="lazy"
                decoding="async"
              />
            </figure>

            <figure className="campaigns-content-challenge__visual">
              <img
                src="/projects/campaigns-content/campaign-challenge-channels.jpg"
                alt="Campaign planning workspace with web, social, video, email and printed communication formats"
                width="607"
                height="348"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default CampaignsContentCaseStudy
