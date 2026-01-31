import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Mobile App',
      description: 'A seamless shopping experience with intuitive navigation and checkout flow',
      tags: ['Mobile Design', 'User Research', 'Prototyping']
    },
    {
      id: 2,
      title: 'SaaS Dashboard',
      description: 'Data visualization dashboard for analytics and reporting',
      tags: ['Web Design', 'Data Viz', 'UI Design']
    },
    {
      id: 3,
      title: 'Banking App Redesign',
      description: 'Modern redesign focusing on accessibility and user trust',
      tags: ['Mobile', 'Accessibility', 'UX Research']
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image-placeholder"></div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
