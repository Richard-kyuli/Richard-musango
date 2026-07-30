import { useParams, Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { caseStudies } from '../data/caseStudies'
import '../pages/CaseStudies.css' // Import portfolio page styles

// Modular Components
import HeroSection from '../components/casestudy/HeroSection'
import ProblemSection from '../components/casestudy/ProblemSection'
import SolutionSection from '../components/casestudy/SolutionSection'
import ResearchSection from '../components/casestudy/ResearchSection'
import ResultsSection from '../components/casestudy/ResultsSection'
import FinalDesignSection from '../components/casestudy/FinalDesignSection'
import KeyDesignDecisions from '../components/casestudy/KeyDesignDecisions'
import LessonsLearned from '../components/casestudy/LessonsLearned'
import KeyAchievements from '../components/casestudy/KeyAchievements'

function CaseStudyDetail() {
  const { id } = useParams()
  const study = caseStudies.find(s => s.id === id)

  // Get other case studies (exclude current one) for the "More Case Studies" section
  const otherCaseStudies = caseStudies.filter(s => s.id !== id).slice(0, 3)

  if (!study) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <SEO title="Case Study Not Found" description="The requested case study could not be found." />
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
          <Link 
            to="/case-studies" 
            className="text-orange-500 hover:text-orange-600 font-semibold"
          >
            ← Back to Case Studies
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="case-study-page">
      <SEO 
        title={study.title}
        description={study.overview}
      />

      <HeroSection study={study} />
      <ProblemSection study={study} />
      <SolutionSection study={study} />
      <ResearchSection study={study} />
      <KeyDesignDecisions study={study} />
      <FinalDesignSection study={study} />
      <ResultsSection study={study} />
      <LessonsLearned study={study} />
      <KeyAchievements study={study} />

      {/* More Case Studies Section */}
      <section className="more-case-studies-section" style={{ 
        padding: '80px 0', 
        backgroundColor: '#f8fafc' 
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold', 
              color: '#1e293b',
              marginBottom: '12px'
            }}>
              More Case Studies
            </h2>
            <p style={{ 
              fontSize: '1.125rem', 
              color: '#64748b',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Explore other projects I've worked on
            </p>
          </div>

          {/* Reuse portfolio page card grid */}
          <div className="case-studies-grid">
            {otherCaseStudies.map((caseStudy, index) => (
              <Link 
                to={`/case-studies/${caseStudy.id}`} 
                key={caseStudy.id} 
                className="case-study-card"
                onClick={() => window.scrollTo(0, 0)}
              >
                <div className="case-study-image">
                  <div className="case-study-platform-tag">
                    {caseStudy.platform === 'Web' ? 'WEB APP' : 
                     caseStudy.platform === 'Mobile & Web' ? 'MOBILE & WEB' : 
                     caseStudy.platform === 'Web (MVP)' ? 'WEB APP' :
                     'MOBILE APP'}
                  </div>
                  {caseStudy.image && caseStudy.image.startsWith('/') ? (
                    <img 
                      src={caseStudy.image} 
                      alt={`${caseStudy.title} mockup`}
                      className="case-study-mockup"
                    />
                  ) : (
                    <div 
                      className="case-study-mockup"
                      data-gradient={`gradient-${index + 1}`}
                      style={{ width: '200px', height: '150px', borderRadius: '8px' }}
                    ></div>
                  )}
                </div>
                <div className="case-study-content">
                  <span className="category-tag">{caseStudy.tags[0]}</span>
                  <h3 className="case-study-title">{caseStudy.title}</h3>
                  <p className="case-study-description">{caseStudy.description}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Button */}
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link 
              to="/case-studies"
              style={{
                display: 'inline-block',
                padding: '12px 32px',
                backgroundColor: '#FF6835',
                color: 'white',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#e55a2b';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FF6835';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudyDetail