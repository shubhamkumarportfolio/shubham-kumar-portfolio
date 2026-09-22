import { ArrowRight, CirclePlay, Megaphone, Monitor, PenTool } from 'lucide-react'
import Container from '../components/ui/Container.jsx'
import { experienceWork, ownershipAreas } from '../data/experience.js'

const ownershipIcons = {
  brand: PenTool,
  marketing: Megaphone,
  web: Monitor,
  motion: CirclePlay,
}

function OwnershipArea({ area }) {
  const Icon = ownershipIcons[area.icon]

  return (
    <article className="ownership-area">
      <span className="ownership-area__icon" aria-hidden="true">
        <Icon size={21} strokeWidth={1.7} />
      </span>
      <div className="ownership-area__content">
        <p className="ownership-area__number">{area.number}</p>
        <h3>{area.title}</h3>
        <p className="ownership-area__description">{area.description}</p>
      </div>
    </article>
  )
}

function WorkExample({ work }) {
  return (
    <figure className="experience-work__item">
      <div className="experience-work__image">
        <img src={work.image} alt={work.alt} loading="lazy" decoding="async" />
      </div>
      <figcaption>
        <p>{work.category}</p>
        <h3>{work.title}</h3>
      </figcaption>
    </figure>
  )
}

function ExperienceSection() {
  return (
    <section className="experience" id="experience-section" aria-labelledby="experience-heading">
      <Container>
        <header className="experience__header">
          <p className="experience__index">
            <span>05</span> / EXPERIENCE
          </p>
          <h2 id="experience-heading">
            Built through real
            <br />
            business ownership<span aria-hidden="true">.</span>
          </h2>
          <p className="experience__intro">
            Over the last 5+ years, I’ve worked closely with business, product and marketing teams
            — building communication systems that support growth across brand, digital and sales
            touchpoints.
          </p>
        </header>

        <div className="experience__role">
          <h3>Brand &amp; Marketing Visual Designer</h3>
          <p>Technology &amp; Business Solutions · In-house</p>
        </div>

        <div className="experience__ownership" aria-label="Areas of ownership">
          {ownershipAreas.map((area) => (
            <OwnershipArea key={area.number} area={area} />
          ))}
        </div>

        <div className="experience-work">
          <div className="experience-work__header">
            <h3>Selected work across touchpoints</h3>
            <a href="#selected-work">
              <span>See more work</span>
              <ArrowRight aria-hidden="true" size={17} strokeWidth={1.7} />
            </a>
          </div>
          <div className="experience-work__grid">
            {experienceWork.map((work) => (
              <WorkExample key={work.title} work={work} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ExperienceSection
