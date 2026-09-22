import { ArrowUpRight } from 'lucide-react'

function ProjectCard({ project }) {
  const isAvailable = project.caseStudyAvailable
  const CardContent = isAvailable ? 'a' : 'div'
  const cardProps = isAvailable
    ? { href: project.href, 'aria-label': `View ${project.title} case study` }
    : {}

  return (
    <article className={`selected-project selected-project--${project.id}`}>
      <CardContent className="selected-project__link" {...cardProps}>
        <div className="selected-project__media">
          <img
            src={project.coverImage}
            alt={project.alt}
            width={project.imageWidth}
            height={project.imageHeight}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="selected-project__content">
          <div className="selected-project__heading">
            <span className="selected-project__number">{project.number}</span>
            <h3>{project.title}</h3>
            <ArrowUpRight className="selected-project__action" aria-hidden="true" size={19} strokeWidth={1.7} />
          </div>
          <p className="selected-project__category">{project.category}</p>
        </div>
      </CardContent>
    </article>
  )
}

export default ProjectCard
