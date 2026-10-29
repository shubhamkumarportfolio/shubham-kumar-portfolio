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

const approachItems = [
  {
    number: '01',
    title: 'Clear Positioning',
    description: 'Simplified complex product value into clear, easy-to-understand messages.',
  },
  {
    number: '02',
    title: 'Unified Content System',
    description: 'Created a consistent visual and messaging approach across all channels.',
  },
  {
    number: '03',
    title: 'Multi-Format Execution',
    description: 'Designed and produced content for social, ads, web, video, print and more.',
  },
]

const executionItems = [
  {
    number: '01',
    title: 'Campaign Assets',
    description: 'Designed a cohesive set of creatives, messaging and templates for all channels.',
  },
  {
    number: '02',
    title: 'Channel Execution',
    description: 'Adapted the campaign for social, ads, web, video, print, email and more.',
  },
  {
    number: '03',
    title: 'Consistent Experience',
    description: 'Maintained a unified look, messaging and tone across every touchpoint.',
  },
]

const impactItems = [
  {
    number: '01',
    title: 'Clearer Communication',
    description: 'Complex product value became easier to understand across all channels.',
  },
  {
    number: '02',
    title: 'Stronger Brand Consistency',
    description: 'A unified visual and messaging system created a cohesive brand presence.',
  },
  {
    number: '03',
    title: 'Greater Reach and Engagement',
    description: 'The campaign worked seamlessly across social, ads, web, video, print and more.',
  },
]

const conclusionItems = [
  {
    number: '01',
    title: 'Reusable Campaign System',
    description: 'A flexible set of assets and templates that can be easily adapted for future campaigns.',
  },
  {
    number: '02',
    title: 'Consistent Brand Foundation',
    description: 'A clear visual and messaging system to support long-term communication.',
  },
  {
    number: '03',
    title: 'Ready for Future Growth',
    description: 'A scalable approach that can evolve with new channels, products and markets.',
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

      <section
        className="campaigns-content-approach"
        aria-labelledby="campaigns-content-approach-title"
      >
        <Container className="campaigns-content-approach__layout">
          <div className="campaigns-content-approach__content">
            <p className="campaigns-content-approach__label">The Approach</p>

            <h2 id="campaigns-content-approach-title">
              <span>Built a focused</span>
              <span>campaign system</span>
              <span>that communicates</span>
              <span className="campaigns-content-approach__heading-accent">
                clearly and consistently.
              </span>
            </h2>

            <ol className="campaigns-content-approach__list">
              {approachItems.map((item) => (
                <li key={item.number}>
                  <span className="campaigns-content-approach__number">{item.number}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="campaigns-content-approach__visuals">
            <figure className="campaigns-content-approach__visual campaigns-content-approach__visual--strategy">
              <img
                src="/projects/campaigns-content/campaign-approach-strategy.jpg"
                alt="Designer shaping a Nexora campaign direction across a planning board, desktop and laptop"
                width="1600"
                height="673"
                loading="lazy"
                decoding="async"
              />
            </figure>

            <figure className="campaigns-content-approach__visual">
              <img
                src="/projects/campaigns-content/campaign-approach-system.jpg"
                alt="Unified Nexora campaign system applied across social, mobile and printed collateral"
                width="1200"
                height="504"
                loading="lazy"
                decoding="async"
              />
            </figure>

            <figure className="campaigns-content-approach__visual">
              <img
                src="/projects/campaigns-content/campaign-approach-execution.jpg"
                alt="Nexora campaign adapted across web, social, mobile, video and print formats"
                width="1200"
                height="504"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </Container>
      </section>

      <section
        className="campaigns-content-execution"
        aria-labelledby="campaigns-content-execution-title"
      >
        <Container className="campaigns-content-execution__layout">
          <div className="campaigns-content-execution__content">
            <p className="campaigns-content-execution__label">The Execution</p>

            <h2 id="campaigns-content-execution-title">
              <span>Created and</span>
              <span>executed a complete</span>
              <span className="campaigns-content-execution__heading-accent">multi-channel</span>
              <span className="campaigns-content-execution__heading-accent">campaign.</span>
            </h2>

            <ol className="campaigns-content-execution__list">
              {executionItems.map((item) => (
                <li key={item.number}>
                  <span className="campaigns-content-execution__number">{item.number}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="campaigns-content-execution__visuals">
            <figure className="campaigns-content-execution__visual campaigns-content-execution__visual--master">
              <img
                src="/projects/campaigns-content/campaign-execution-master.jpg"
                alt="Complete Nexora campaign system shown across a website, mobile screen, tablet, poster and printed collateral"
                width="1600"
                height="673"
                loading="lazy"
                decoding="async"
              />
            </figure>

            <figure className="campaigns-content-execution__visual">
              <img
                src="/projects/campaigns-content/campaign-execution-digital.jpg"
                alt="Coordinated Nexora social, paid and video campaign formats"
                width="1200"
                height="504"
                loading="lazy"
                decoding="async"
              />
            </figure>

            <figure className="campaigns-content-execution__visual">
              <img
                src="/projects/campaigns-content/campaign-execution-print.jpg"
                alt="Nexora brochures, sales sheets, presentation covers and business collateral"
                width="1200"
                height="504"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </Container>
      </section>

      <section
        className="campaigns-content-impact"
        id="campaigns-content-impact"
        aria-labelledby="campaigns-content-impact-title"
      >
        <Container className="campaigns-content-impact__layout">
          <div className="campaigns-content-impact__content">
            <p className="campaigns-content-impact__label">The Impact</p>

            <h2 id="campaigns-content-impact-title">
              <span>A stronger, more</span>
              <span>consistent brand</span>
              <span>
                presence <span className="campaigns-content-impact__heading-accent">across</span>
              </span>
              <span className="campaigns-content-impact__heading-accent">all channels.</span>
            </h2>

            <ol className="campaigns-content-impact__list">
              {impactItems.map((item) => (
                <li key={item.number}>
                  <span className="campaigns-content-impact__number">{item.number}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="campaigns-content-impact__visuals">
            <figure className="campaigns-content-impact__visual campaigns-content-impact__visual--overall">
              <img
                src="/projects/campaigns-content/campaign-impact-overall.jpg"
                alt="Unified Nexora campaign presence shown across a website, mobile experience, poster and printed collateral"
                width="1600"
                height="673"
                loading="lazy"
                decoding="async"
              />
            </figure>

            <figure className="campaigns-content-impact__visual">
              <img
                src="/projects/campaigns-content/campaign-impact-digital.jpg"
                alt="Consistent Nexora campaign creative adapted across social, paid and video formats"
                width="1200"
                height="504"
                loading="lazy"
                decoding="async"
              />
            </figure>

            <figure className="campaigns-content-impact__visual">
              <img
                src="/projects/campaigns-content/campaign-impact-print.jpg"
                alt="Cohesive Nexora campaign system applied to brochures, sales sheets and business collateral"
                width="1200"
                height="504"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </Container>
      </section>

      <section
        className="campaigns-content-conclusion"
        id="campaigns-content-conclusion"
        aria-labelledby="campaigns-content-conclusion-title"
      >
        <Container className="campaigns-content-conclusion__layout">
          <div className="campaigns-content-conclusion__content">
            <p className="campaigns-content-conclusion__label">The Conclusion</p>

            <h2 id="campaigns-content-conclusion-title">
              <span>A complete</span>
              <span>campaign system</span>
              <span>ready to scale</span>
              <span className="campaigns-content-conclusion__heading-accent">and adapt.</span>
            </h2>

            <ol className="campaigns-content-conclusion__list">
              {conclusionItems.map((item) => (
                <li key={item.number}>
                  <span className="campaigns-content-conclusion__number">{item.number}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="campaigns-content-conclusion__visuals">
            <figure className="campaigns-content-conclusion__visual campaigns-content-conclusion__visual--system">
              <img
                src="/projects/campaigns-content/campaign-conclusion-system.jpg"
                alt="Complete Nexora campaign ecosystem presented across a website, key visual, brochure and coordinated communication assets"
                width="1600"
                height="673"
                loading="lazy"
                decoding="async"
              />
            </figure>

            <figure className="campaigns-content-conclusion__visual">
              <img
                src="/projects/campaigns-content/campaign-conclusion-guidelines.jpg"
                alt="Nexora brand guidelines with color, typography, imagery and reusable interface components"
                width="1200"
                height="504"
                loading="lazy"
                decoding="async"
              />
            </figure>

            <figure className="campaigns-content-conclusion__visual">
              <img
                src="/projects/campaigns-content/campaign-conclusion-playbook.jpg"
                alt="Nexora campaign playbook covering strategy, messaging, templates and channel execution"
                width="1200"
                height="504"
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
