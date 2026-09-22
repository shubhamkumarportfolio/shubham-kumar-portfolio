import { Box, MonitorSmartphone, Target } from 'lucide-react'
import Container from '../components/ui/Container.jsx'

const principles = [
  {
    number: '01',
    title: 'Business First',
    description: 'Objective before decoration.',
    icon: Target,
  },
  {
    number: '02',
    title: 'Cross-Channel Thinking',
    description: 'Brand → Campaign → Web → Motion',
    icon: MonitorSmartphone,
  },
  {
    number: '03',
    title: 'Technology Fluent',
    description: 'Complex products made clear.',
    icon: Box,
  },
]

function AboutSection() {
  return (
    <section className="about" id="about-section" aria-labelledby="about-heading">
      <Container>
        <div className="about__hero">
          <div className="about__copy">
            <header>
              <p className="about__index">
                <span>04</span> / ABOUT
              </p>
              <h2 id="about-heading">
                Designing with
                <br />
                the business in mind<span aria-hidden="true">.</span>
              </h2>
              <p className="about__intro">
                I build brand, product and marketing communication for technology-led businesses
                — turning complex ideas into clear visuals, systems and experiences.
              </p>
            </header>

            <div className="about__principles" aria-label="Design principles">
              {principles.map(({ number, title, description, icon: Icon }) => (
                <article className="about-principle" key={number}>
                  <Icon className="about-principle__icon" aria-hidden="true" strokeWidth={1.7} />
                  <p className="about-principle__number">{number}</p>
                  <div className="about-principle__content">
                    <h3>{title}</h3>
                    <p className="about-principle__description">{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <figure className="about__portrait">
            <img
              src="/images/shubham-kumar-profile-portrait.png"
              alt="Shubham Kumar, Brand & Marketing Visual Designer"
              width="1086"
              height="1448"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>

      </Container>
    </section>
  )
}

export default AboutSection
