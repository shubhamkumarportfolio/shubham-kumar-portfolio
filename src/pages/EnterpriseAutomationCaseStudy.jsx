import { ArrowDown } from 'lucide-react'
import Button from '../components/ui/Button.jsx'
import Container from '../components/ui/Container.jsx'

const projectMetadata = [
  { label: 'Category', value: 'Brand / Product / Campaign' },
  { label: 'Role', value: 'Brand & Marketing Visual Designer' },
  { label: 'Scope', value: 'Brand communication • Product visuals • Campaigns • Digital' },
]

const challengeItems = [
  {
    number: '01',
    title: 'Complex technology',
    description: 'Multiple products. Too much information.',
    image: '/projects/enterprise-automation/challenge-complexity.jpg',
    alt: 'Enterprise automation ecosystem with robotics, RFID and operational software',
  },
  {
    number: '02',
    title: 'Different audiences',
    description: 'One solution. Different levels of understanding.',
    image: '/projects/enterprise-automation/challenge-audiences.jpg',
    alt: 'Leadership, operations and marketing audiences interacting with enterprise automation',
  },
  {
    number: '03',
    title: 'Inconsistent touchpoints',
    description: 'Many formats. No unified visual system.',
    image: '/projects/enterprise-automation/challenge-touchpoints.jpg',
    alt: 'Multiple digital and physical communication touchpoints for enterprise automation',
  },
]

const roleAreas = [
  {
    number: '01',
    title: 'Visual Direction',
    description: 'Defining a cohesive visual language across touchpoints.',
  },
  {
    number: '02',
    title: 'Product Communication',
    description: 'Simplifying complex technology through clear visuals.',
  },
  {
    number: '03',
    title: 'Campaign Design',
    description: 'Creating high-impact campaigns for product and brand.',
  },
  {
    number: '04',
    title: 'Digital & Social',
    description: 'Crafting social content for awareness and engagement.',
  },
  {
    number: '05',
    title: 'Web & Presentations',
    description: 'Designing engaging web experiences and presentations.',
  },
  {
    number: '06',
    title: 'Motion & Video',
    description: 'Bringing ideas to life with motion and video content.',
  },
]

const systemPillars = [
  {
    number: '01',
    title: 'Brand Language',
    description: 'Typography • Color • Grid • Imagery',
  },
  {
    number: '02',
    title: 'Product Communication',
    description: 'RFID • WMS • Robotics • Automation',
  },
  {
    number: '03',
    title: 'Messaging Hierarchy',
    description: 'Problem → Solution → Business Value',
  },
  {
    number: '04',
    title: 'Reusable System',
    description: 'Campaigns • Web • Sales • Motion',
  },
]

const applicationGroups = [
  {
    id: 'campaigns',
    title: 'Campaigns',
    description: 'Social • Paid Creative • Product Launches',
    image: '/projects/enterprise-automation/applications-campaigns.jpg',
    alt: 'Enterprise automation campaign system across social posts, mobile screens, launch creative and large-format advertising',
    width: 2158,
    height: 729,
  },
  {
    id: 'product',
    title: 'Product Communication',
    description: 'RFID • WMS • Robotics • Automation',
    image: '/projects/enterprise-automation/applications-product.jpg',
    alt: 'Enterprise automation product communication across RFID hardware, warehouse software and autonomous robotics',
    width: 1672,
    height: 941,
  },
  {
    id: 'sales',
    title: 'Sales Communication',
    description: 'Presentations • Brochures • Company Profiles',
    image: '/projects/enterprise-automation/applications-sales.jpg',
    alt: 'Enterprise automation sales communication across presentations, brochures and company profiles',
    width: 1672,
    height: 941,
  },
  {
    id: 'digital',
    title: 'Digital & Motion',
    description: 'Web • Landing Pages • Motion • Video',
    image: '/projects/enterprise-automation/applications-digital.jpg',
    alt: 'Enterprise automation digital communication across web, mobile, motion and video formats',
    width: 2152,
    height: 731,
  },
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

      <section
        className="case-study-challenge"
        id="enterprise-automation-challenge"
        aria-labelledby="enterprise-automation-challenge-title"
      >
        <Container>
          <p className="case-study-challenge__label">
            <span>03</span> / The Challenge
          </p>

          <h2 id="enterprise-automation-challenge-title">
            Three things were making
            <br />
            the communication <span>harder.</span>
          </h2>

          <div className="case-study-challenge__grid">
            {challengeItems.map((item) => (
              <article className="case-study-challenge__card" key={item.number}>
                <figure className="case-study-challenge__visual">
                  <img
                    src={item.image}
                    alt={item.alt}
                    width="1536"
                    height="1024"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>

                <div className="case-study-challenge__card-content">
                  <div className="case-study-challenge__number">
                    <span>{item.number}</span>
                    <span aria-hidden="true" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="case-study-challenge__statement">
            <p>
              The solution wasn’t more content. It was <span>a clearer system.</span>
            </p>
          </div>
        </Container>
      </section>

      <section
        className="case-study-role"
        id="enterprise-automation-role"
        aria-labelledby="enterprise-automation-role-title"
      >
        <Container>
          <div className="case-study-role__top">
            <div className="case-study-role__intro">
              <p className="case-study-role__label">
                <span>04</span> / MY ROLE
              </p>

              <h2 id="enterprise-automation-role-title">
                Turning technical products into
                <br />
                <span>clear visual communication.</span>
              </h2>
            </div>

            <ol className="case-study-role__grid">
              {roleAreas.map((item) => (
                <li className="case-study-role__item" key={item.number}>
                  <div className="case-study-role__number">
                    <span>{item.number}</span>
                    <span aria-hidden="true" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ol>
          </div>

          <figure className="case-study-role__visual">
            <img
              src="/projects/enterprise-automation/my-role-showcase.jpg"
              alt="Enterprise automation communication system shown across digital interfaces, campaign material, presentations and product visuals"
              width="2048"
              height="768"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </Container>
      </section>

      <section
        className="case-study-system"
        id="enterprise-automation-system"
        aria-labelledby="enterprise-automation-system-title"
      >
        <Container>
          <div className="case-study-system__top">
            <div className="case-study-system__intro">
              <p className="case-study-system__label">
                <span>05</span> / THE SYSTEM
              </p>

              <h2 id="enterprise-automation-system-title">
                <span className="case-study-system__headline-primary">One visual system.</span>
                <span className="case-study-system__headline-accent">Built to work</span>
                <span className="case-study-system__headline-accent">everywhere.</span>
              </h2>
            </div>

            <ol className="case-study-system__grid">
              {systemPillars.map((item) => (
                <li className="case-study-system__item" key={item.number}>
                  <div className="case-study-system__number">
                    <span>{item.number}</span>
                    <span aria-hidden="true" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ol>
          </div>

          <figure className="case-study-system__visual">
            <img
              src="/projects/enterprise-automation/system-showcase.jpg"
              alt="Enterprise automation visual system showing brand language, product communication, digital interfaces, campaign assets and presentation materials"
              width="1672"
              height="941"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </Container>
      </section>

      <section
        className="case-study-applications"
        id="enterprise-automation-applications"
        aria-labelledby="enterprise-automation-applications-title"
      >
        <Container>
          <p className="case-study-applications__label">
            <span>06</span> / APPLICATIONS
          </p>

          <h2 id="enterprise-automation-applications-title">
            <span>One system.</span>{' '}
            <span>Many touchpoints.</span>
          </h2>

          <div className="case-study-applications__grid">
            {applicationGroups.map((item) => (
              <article
                className={`case-study-applications__group case-study-applications__group--${item.id}`}
                key={item.id}
              >
                <div className="case-study-applications__group-heading">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <figure className="case-study-applications__visual">
                  <img
                    src={item.image}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              </article>
            ))}
          </div>

          <p className="case-study-applications__closing">
            Different formats. One recognizable visual language.
          </p>
        </Container>
      </section>
    </>
  )
}

export default EnterpriseAutomationCaseStudy
