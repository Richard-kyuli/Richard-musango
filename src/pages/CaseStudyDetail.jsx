import { useParams, Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { caseStudies } from '../data/caseStudies'
import './CaseStudyDetail.css'

function CaseStudyDetail() {
  const { id } = useParams()
  const study = caseStudies.find(s => s.id === id)

  if (!study) {
    return (
      <div className="case-study-detail-page">
        <SEO title="Case Study Not Found" description="The requested case study could not be found." />
        <div className="container">
          <h1>Case Study Not Found</h1>
          <Link to="/case-studies">← Back to Case Studies</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="case-study-detail-page">
      <SEO 
        title={study.title}
        description={study.overview}
      />
      
      <section className="detail-hero">
        <div className="container">
          <Link to="/case-studies" className="back-link">← Back to Case Studies</Link>
          <h1 className="detail-title">{study.title}</h1>
          <div className="detail-meta">
            <div className="meta-item">
              <span className="meta-label">Platform</span>
              <span className="meta-value">{study.platform}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Role</span>
              <span className="meta-value">{study.role}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Timeline</span>
              <span className="meta-value">{study.timeline}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="detail-content">
        <div className="container">
          <div className="content-section">
            <h2>Overview</h2>
            <p>{study.overview}</p>
          </div>

          <div className="content-section">
            <h2>Problem Statement</h2>
            <p>{study.problem}</p>
          </div>

          <div className="content-section">
            <h2>Goals & Constraints</h2>
            <div className="two-column">
              <div>
                <h3>Goals</h3>
                <ul>
                  {study.goals.map((goal, i) => (
                    <li key={i}>{goal}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Constraints</h3>
                <ul>
                  {study.constraints.map((constraint, i) => (
                    <li key={i}>{constraint}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Design Process</h2>
            
            <div className="process-step">
              <h3>Research</h3>
              <ul>
                {study.process.research.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="process-step">
              <h3>User Flows</h3>
              <p>{study.process.userFlows}</p>
            </div>

            <div className="process-step">
              <h3>Wireframes</h3>
              <p>{study.process.wireframes}</p>
            </div>

            <div className="process-step">
              <h3>UI Exploration</h3>
              <p>{study.process.uiExploration}</p>
            </div>
          </div>

          <div className="content-section">
            <h2>Final Solution</h2>
            <p>{study.solution}</p>
          </div>

          <div className="content-section">
            <h2>Outcome & Learnings</h2>
            <div className="two-column">
              <div>
                <h3>Impact</h3>
                <ul className="impact-list">
                  {study.outcome.impact.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Key Learnings</h3>
                <ul>
                  {study.outcome.learnings.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="tags-section">
            {study.tags.map((tag, i) => (
              <span key={i} className="tag">{tag}</span>
            ))}
          </div>

          <div className="navigation-section">
            <Link to="/case-studies" className="btn btn-primary">
              View All Case Studies
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Let's Work Together
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudyDetail
