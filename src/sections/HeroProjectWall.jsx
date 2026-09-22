import heroProjects from '../data/heroProjects.js'

function ProjectVisual({ project, index }) {
  return (
    <article
      className={`project-preview project-preview--${project.visualStyle}${index === 0 ? ' project-preview--featured' : ''}`}
      aria-label={`${project.heroTitle}. ${project.heroCategory}.`}
    >
      <div className="project-preview__media">
        <img
          src={project.coverImage}
          alt={project.alt}
          width={project.imageWidth}
          height={project.imageHeight}
          loading="eager"
          decoding="async"
          fetchPriority={index === 0 ? 'high' : undefined}
        />
      </div>
      <div className="project-preview__details">
        <h2>{project.heroTitle}</h2>
      </div>
    </article>
  )
}

function HeroProjectWall() {
  return (
    <div className="project-wall" id="work-preview">
      <div className="project-wall__grid">
        {heroProjects.map((project, index) => (
          <ProjectVisual key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}

export default HeroProjectWall
