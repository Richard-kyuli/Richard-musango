import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { caseStudies } from '../data/caseStudies'
import './CaseStudies.css'

function CaseStudies() {
  return (
    <div className="case-studies-page">
      <SEO 
        title="Case Studies"
        description="Explore detailed case studies showcasing Richard Musango's UI/UX design process, from research and wireframing to final solutions and outcomes."
      />
      
      <section className="case-studies-hero">
        <div className="container">
          <h1 className="page-title">Case Studies</h1>
          <p className="page-subtitle">
            Deep dives into my design process and problem-solving approach
          </p>
        </div>
      </section>

      <section className="case-studies-content">
        <div className="container">
          <div className="case-studies-grid">
            {caseStudies.map((study, index) => (
              <Link 
                to={`/case-studies/${study.id}`} 
                key={study.id} 
                className="case-study-card"
              >
                <div className={`case-study-image gradient-${index + 1}`}></div>
                <div className="case-study-content">
                  <div className="case-study-meta">
                    <span className="platform-tag">{study.platform}</span>
                    <span className="timeline">{study.timeline}</span>
                  </div>
                  <h3>{study.title}</h3>
                  <p className="role">{study.role}</p>
                  <p className="overview">{study.overview}</p>
                  <div className="tags">
                    {study.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                  <span className="read-more">Read Full Case Study →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
