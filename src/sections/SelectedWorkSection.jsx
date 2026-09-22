import Container from '../components/ui/Container.jsx'
import ProjectCard from '../components/ui/ProjectCard.jsx'
import { ArrowRight } from 'lucide-react'
import projects from '../data/projects.js'

function SelectedWorkSection() {
  return (
    <section className="selected-work" id="selected-work" aria-labelledby="selected-work-heading">
      <Container>
        <div className="selected-work__layout">
        <header className="selected-work__intro">
  <p className="selected-work__index">
    <span>02</span> / Selected Work
  </p>

  <div className="selected-work__headline-row">
    <h2 id="selected-work-heading">
      Work that turns complexity into clarity
      <span aria-hidden="true">.</span>
    </h2>

    <div className="selected-work__meta">
      

      <a
        className="selected-work__all-link"
        href="#selected-work-grid"
      >
        <span>View all projects</span>
        <ArrowRight
          aria-hidden="true"
          size={20}
          strokeWidth={1.7}
        />
      </a>
    </div>
  </div>
</header>

          <div className="selected-work__grid" id="selected-work-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SelectedWorkSection
