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
          <h1 className="page-title">Portfolio</h1>
          <p className="page-subtitle">
            Check out some of my latest product design case studies. I've led design for millions of users across startups and global corporations.
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
                <div 
                  className="case-study-image"
                  style={{
                    backgroundImage: study.image && study.image.startsWith('/') 
                      ? `url('${study.image}')` 
                      : undefined
                  }}
                  data-gradient={!study.image || !study.image.startsWith('/') ? `gradient-${index + 1}` : undefined}
                ></div>
                <div className="case-study-content">
                  <span className="tag">{study.tags[0]}</span>
                  <h3>{study.title}</h3>
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
