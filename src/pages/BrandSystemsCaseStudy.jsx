import {
  BarChart3,
  Bell,
  Expand,
  Eye,
  FileText,
  Home,
  Layers3,
  LayoutGrid,
  MapPin,
  Package,
  Settings,
  Star,
  UserRound,
} from 'lucide-react'
import Button from '../components/ui/Button.jsx'
import Container from '../components/ui/Container.jsx'

const projectMetadata = [
  { label: 'Category', value: 'Brand / Identity / Visual System' },
  { label: 'Role', value: 'Brand & Marketing Visual Designer' },
  { label: 'Scope', value: 'Visual direction • Brand system • Guidelines • Applications' },
]

const problemItems = [
  {
    number: '01',
    title: 'Inconsistent Identity',
    description: 'Too many visual styles.',
    image: '/projects/brand-systems/brand-problem-identity.jpg',
    alt: 'Nexora identity assets using varied layouts across cards, posters and digital materials',
  },
  {
    number: '02',
    title: 'Weak Hierarchy',
    description: 'Key messages lacked clarity.',
    image: '/projects/brand-systems/brand-problem-hierarchy.jpg',
    alt: 'Nexora website communication displayed on a laptop',
  },
  {
    number: '03',
    title: 'Fragmented Touchpoints',
    description: 'Brand communication felt disconnected.',
    image: '/projects/brand-systems/brand-problem-touchpoints.jpg',
    alt: 'Nexora brand executions across mobile, social, stationery and marketing collateral',
  },
]

const directionPrinciples = [
  {
    number: '01',
    title: 'Clarity',
    description: 'A focused visual language that’s easy to understand.',
    icon: Eye,
  },
  {
    number: '02',
    title: 'Consistency',
    description: 'Unified design rules across every touchpoint.',
    icon: Layers3,
  },
  {
    number: '03',
    title: 'Recognition',
    description: 'A distinctive look that strengthens brand recall.',
    icon: Star,
  },
  {
    number: '04',
    title: 'Flexibility',
    description: 'A system designed to work across digital, print and future needs.',
    icon: Expand,
  },
]

const brandSystemModules = [
  {
    number: '01',
    title: 'Logo',
    description: 'A distinctive and versatile logo system.',
    type: 'logo',
  },
  {
    number: '02',
    title: 'Color Palette',
    description: 'A consistent and expressive color system.',
    type: 'colors',
  },
  {
    number: '03',
    title: 'Typography',
    description: 'Clean, modern and highly readable type system.',
    type: 'typography',
  },
  {
    number: '04',
    title: 'Imagery Direction',
    description: 'A clean and modern visual style.',
    type: 'imagery',
  },
  {
    number: '05',
    title: 'Icon Language',
    description: 'A simple and consistent icon system.',
    type: 'icons',
  },
]

const applicationModules = [
  {
    number: '01',
    title: 'Digital',
    description: 'Website and digital platforms that communicate the brand clearly.',
    type: 'digital',
    image: '/projects/brand-systems/brand-direction-applications.jpg',
    alt: 'Nexora website and responsive digital experience shown on laptop and mobile screens',
  },
  {
    number: '02',
    title: 'Print',
    description: 'Stationery and marketing materials with a consistent brand experience.',
    type: 'print',
    image: '/projects/brand-systems/brand-problem-touchpoints.jpg',
    alt: 'Nexora stationery, business cards and printed brand collateral',
  },
  {
    number: '03',
    title: 'Mobile',
    description: 'Mobile interfaces designed for clarity and ease of use.',
    type: 'mobile',
    image: '/projects/brand-systems/brand-problem-touchpoints.jpg',
    alt: 'Nexora mobile interface presented within a phone mockup',
  },
  {
    number: '04',
    title: 'Presentations',
    description: 'Branded templates for clear and consistent communication.',
    type: 'presentations',
    alt: 'Nexora branded corporate presentation template',
  },
  {
    number: '05',
    title: 'Environmental',
    description: 'Real-world touchpoints that strengthen brand recognition.',
    type: 'environmental',
    image: '/projects/brand-systems/brand-problem-hierarchy.jpg',
    alt: 'Nexora identity applied to an architectural environment and exterior signage',
  },
]

const iconLanguageIcons = [
  { name: 'Home', icon: Home },
  { name: 'Grid', icon: LayoutGrid },
  { name: 'Profile', icon: UserRound },
  { name: 'Document', icon: FileText },
  { name: 'Analytics', icon: BarChart3 },
  { name: 'Settings', icon: Settings },
  { name: 'Location', icon: MapPin },
  { name: 'Package', icon: Package },
  { name: 'Notifications', icon: Bell },
]

function NexoraMark({ compact = false }) {
  return (
    <span className={`nexora-lockup${compact ? ' nexora-lockup--compact' : ''}`}>
      <span className="nexora-mark" aria-hidden="true">
        <span />
        <span />
      </span>
      {!compact && <strong>Nexora</strong>}
    </span>
  )
}

function BrandSystemPreview({ type }) {
  if (type === 'logo') {
    return (
      <div className="brand-system-preview brand-system-preview--logo" aria-hidden="true">
        <NexoraMark />
        <div className="brand-system-logo-variants">
          <span className="brand-system-logo-variant brand-system-logo-variant--dark">
            <NexoraMark compact />
          </span>
          <span className="brand-system-logo-variant">
            <NexoraMark compact />
          </span>
          <span className="brand-system-logo-variant brand-system-logo-variant--accent">
            <NexoraMark compact />
          </span>
        </div>
      </div>
    )
  }

  if (type === 'colors') {
    return (
      <div className="brand-system-preview brand-system-preview--colors" aria-hidden="true">
        <div className="brand-system-swatches">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="brand-system-color-band" />
        <div className="brand-system-color-dots">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    )
  }

  if (type === 'typography') {
    return (
      <div className="brand-system-preview brand-system-preview--typography" aria-hidden="true">
        <div className="brand-system-type-display">Aa</div>
        <p>ABCDEFGHIJKLM<br />NOPQRSTUVWXYZ</p>
        <div className="brand-system-type-weights">
          <span>Regular</span>
          <span>Medium</span>
          <span>Semibold</span>
          <span>Bold</span>
        </div>
        <div className="brand-system-type-scale">
          <span>Aa</span>
          <span>Aa</span>
          <span>Aa</span>
        </div>
      </div>
    )
  }

  if (type === 'imagery') {
    return (
      <div className="brand-system-preview brand-system-preview--imagery" aria-hidden="true">
        <img src="/projects/brand-systems/brand-problem-identity.jpg" alt="" loading="lazy" />
        <img src="/projects/brand-systems/brand-problem-hierarchy.jpg" alt="" loading="lazy" />
        <img src="/projects/brand-systems/brand-direction-visual.jpg" alt="" loading="lazy" />
        <img src="/projects/brand-systems/brand-direction-applications.jpg" alt="" loading="lazy" />
      </div>
    )
  }

  return (
    <div className="brand-system-preview brand-system-preview--icons" aria-hidden="true">
      {iconLanguageIcons.map(({ name, icon: Icon }) => (
        <span key={name}>
          <Icon size={20} strokeWidth={1.7} />
        </span>
      ))}
    </div>
  )
}

function ApplicationVisual({ type, image, alt }) {
  if (type === 'mobile') {
    return (
      <figure
        className="brand-application-visual brand-application-visual--mobile"
        role="img"
        aria-label={alt}
      >
        <div className="brand-application-phone">
          <span aria-hidden="true" />
          <img src={image} alt="" loading="lazy" decoding="async" />
        </div>
      </figure>
    )
  }

  if (type === 'presentations') {
    return (
      <figure
        className="brand-application-visual brand-application-visual--presentations"
        role="img"
        aria-label={alt}
      >
        <div className="brand-application-slide">
          <NexoraMark />
          <strong>
            A clearer path to <span>what’s next.</span>
          </strong>
          <small>People. Ideas. Real Outcomes.</small>
        </div>
        <div className="brand-application-slide brand-application-slide--secondary" aria-hidden="true">
          <NexoraMark compact />
          <span />
          <span />
          <span />
        </div>
      </figure>
    )
  }

  if (type === 'environmental') {
    return (
      <figure
        className="brand-application-visual brand-application-visual--environmental"
        role="img"
        aria-label={alt}
      >
        <img src={image} alt="" loading="lazy" decoding="async" />
        <div className="brand-application-signage" aria-hidden="true">
          <NexoraMark />
        </div>
        <div className="brand-application-flag" aria-hidden="true">
          <NexoraMark compact />
        </div>
      </figure>
    )
  }

  return (
    <figure className={`brand-application-visual brand-application-visual--${type}`}>
      <img src={image} alt={alt} loading="lazy" decoding="async" />
    </figure>
  )
}

function BrandSystemsCaseStudy() {
  return (
    <div className="brand-systems-page">
      <section
        className="case-study-hero case-study-hero--brand-systems"
        aria-labelledby="brand-systems-title"
      >
        <Container className="case-study-hero__layout case-study-hero__layout--brand-systems">
          <div className="case-study-hero__content">
            <p className="case-study-hero__label">
              <span>02</span> / Case Study
            </p>

            <h1 id="brand-systems-title">
              Brand
              <span>Systems.</span>
            </h1>

            <p className="case-study-hero__summary">
              Building a recognizable visual language across every brand touchpoint.
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
              <Button className="case-study-hero__cta" href="#brand-systems-overview">
                Explore the Project
              </Button>
            </div>
          </div>

          <figure className="case-study-hero__visual">
            <img
              src="/projects/brand-systems/brand-systems-hero-showcase.png"
              alt="Nexora brand system presented across guidelines, color palette, responsive website, stationery and business cards"
              width="1325"
              height="1187"
              decoding="async"
              fetchPriority="high"
            />
          </figure>
        </Container>
      </section>

      <section
        className="brand-systems-problem brand-systems-section"
        id="brand-systems-overview"
        aria-labelledby="brand-systems-problem-title"
      >
        <Container className="brand-systems-problem__layout">
          <header className="brand-systems-problem__intro">
            <p className="brand-systems-problem__label">
              <span>03</span> / The Problem
            </p>

            <h2 id="brand-systems-problem-title">
              <span>Scattered visuals</span>
              <span>were weakening</span>
              <span>recognition.</span>
            </h2>
          </header>

          <ol className="brand-systems-problem__grid">
            {problemItems.map((item) => (
              <li className="brand-systems-problem__item" key={item.number}>
                <figure className="brand-systems-problem__visual">
                  <img
                    src={item.image}
                    alt={item.alt}
                    width="1448"
                    height="1086"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>

                <span className="brand-systems-problem__number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section
        className="brand-systems-direction brand-systems-section"
        aria-labelledby="brand-systems-direction-title"
      >
        <Container className="brand-systems-direction__layout">
          <header className="brand-systems-direction__intro">
            <p className="brand-systems-direction__label">
              <span>04</span> / The Direction
            </p>

            <h2 id="brand-systems-direction-title">
              <span>A clearer, more consistent</span>
              <span>system designed for</span>
              <span>recognition and flexibility.</span>
            </h2>
          </header>

          <ol className="brand-systems-direction__grid">
            {directionPrinciples.map(({ icon: Icon, ...item }) => (
              <li className="brand-systems-direction__item" key={item.number}>
                <div className="brand-systems-direction__icon" aria-hidden="true">
                  <Icon size={32} strokeWidth={1.7} />
                </div>
                <span className="brand-systems-direction__number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section
        className="brand-systems-system brand-systems-section"
        aria-labelledby="brand-systems-system-title"
      >
        <Container className="brand-systems-system__layout">
          <header className="brand-systems-system__intro">
            <p className="brand-systems-system__label">
              <span>05</span> / The Brand System
            </p>

            <h2 id="brand-systems-system-title">
              <span>A cohesive</span>
              <span>visual system</span>
              <span>built for</span>
              <span>every touchpoint.</span>
            </h2>
          </header>

          <ol className="brand-systems-system__grid">
            {brandSystemModules.map((item) => (
              <li className="brand-systems-system__item" key={item.number}>
                <BrandSystemPreview type={item.type} />
                <span className="brand-systems-system__number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section
        className="brand-systems-applications brand-systems-section"
        aria-labelledby="brand-systems-applications-title"
      >
        <Container className="brand-systems-applications__layout">
          <header className="brand-systems-applications__intro">
            <p className="brand-systems-applications__label">
              <span>06</span> / Applications
            </p>

            <h2 id="brand-systems-applications-title">
              <span>Bringing the</span>
              <span>brand to life</span>
              <span>across real</span>
              <span>experiences.</span>
            </h2>
          </header>

          <ol className="brand-systems-applications__grid">
            {applicationModules.map((item) => (
              <li className="brand-systems-applications__item" key={item.number}>
                <ApplicationVisual type={item.type} image={item.image} alt={item.alt} />
                <span className="brand-systems-applications__number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </div>
  )
}

export default BrandSystemsCaseStudy
