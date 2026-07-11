import { Link } from 'react-router-dom'
import './CaseStudyComponents.css'

function HeroSection({ study }) {
  // Determine if we should show dual screens for Mobile & Web projects
  const isMobileAndWeb = study.platform === 'Mobile & Web'
  
  // Define web/desktop images for Mobile & Web projects
  const getWebImage = (projectId) => {
    switch(projectId) {
      case 'buy-sell':
        return '/Buysell/Admin/Dashboard.png'
      case 'mwalimu-finder':
        return '/Mwalimu-finder/MF03Post a Job.png' // Use mobile as fallback
      case 'nannies':
        return '/Nannies/1.png'
      case 'karibu-kazi':
        return '/KaribuKazi/Admin/Brands Home.png'
      default:
        return study.image
    }
  }

  const getMobileImage = (projectId) => {
    switch(projectId) {
      case 'buy-sell':
        return '/Buysell/Posts2.png'
      case 'mwalimu-finder':
        return '/Mwalimu-finder/MF03Post a Job.png'
      case 'nannies':
        return '/Nannies/Mobileview.png'
      case 'karibu-kazi':
        return '/KaribuKazi/Android Large - 320Post Job emp.png'
      default:
        return study.image
    }
  }

  return (
    <section className="hero-section">
      <div className="container">
        {/* Back Button */}
        <Link to="/case-studies" className="back-link">
          <svg className="back-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Case Studies
        </Link>

        {/* Hero Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            {study.title}
          </h1>
          
          <p className="hero-subtitle">
            {study.overview}
          </p>

          {/* Metadata */}
          <div className="hero-metadata">
            <div className="meta-item">
              <div className="meta-label">Role</div>
              <div className="meta-value">{study.role}</div>
            </div>
            <div className="meta-item">
              <div className="meta-label">Timeline</div>
              <div className="meta-value">{study.timeline}</div>
            </div>
            <div className="meta-item">
              <div className="meta-label">Platform</div>
              <div className="meta-value">{study.platform}</div>
            </div>
          </div>
        </div>

        {/* Hero Images */}
        {isMobileAndWeb ? (
          /* Dual Screen Layout for Mobile & Web */
          <div className="hero-dual-screens">
            {/* Desktop/Web Screen */}
            <div className="desktop-screen">
              <div className="browser-chrome">
                <div className="chrome-dot chrome-red"></div>
                <div className="chrome-dot chrome-yellow"></div>
                <div className="chrome-dot chrome-green"></div>
              </div>
              <img 
                src={getWebImage(study.id)}
                alt={`${study.title} web interface`}
                className="hero-image desktop-image"
              />
            </div>

            {/* Mobile Screen */}
            <div className="mobile-screen">
              <div className="mobile-frame">
                <div className="mobile-notch"></div>
                <img 
                  src={getMobileImage(study.id)}
                  alt={`${study.title} mobile interface`}
                  className="hero-image mobile-image"
                />
                <div className="mobile-home-indicator"></div>
              </div>
            </div>
          </div>
        ) : (
          /* Single Screen Layout for Web or Mobile only */
          <div className="hero-image-container">
            {/* Browser Chrome Bar */}
            <div className="browser-chrome">
              <div className="chrome-dot chrome-red"></div>
              <div className="chrome-dot chrome-yellow"></div>
              <div className="chrome-dot chrome-green"></div>
            </div>
            
            {/* Main Image */}
            <img 
              src={study.image || 'https://placehold.co/1200x700/f8fafc/1e293b?text=Dashboard+Screenshot'}
              alt={`${study.title} preview`}
              className="hero-image"
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default HeroSection