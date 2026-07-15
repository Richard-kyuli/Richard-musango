import { Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies'
import './Projects.css'

function Projects() {
  // Show only the first 6 case studies on the landing page
  const featuredProjects = caseStudies.slice(0, 6)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {featuredProjects.map(project => (
            <Link 
              to={`/case-studies/${project.id}`} 
              key={project.id} 
              className="project-card"
            >
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags && project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="view-all-container">
          <Link to="/case-studies" className="btn btn-primary">
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects
