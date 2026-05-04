import { useParams, Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import SEO from '../components/SEO'
import MobileMockup from '../components/MobileMockup'
import { caseStudies } from '../data/caseStudies'
import './CaseStudyDetail.css'

// Updated opportunity section - 2026-03-21
function CaseStudyDetail() {
  const { id } = useParams()
  const study = caseStudies.find(s => s.id === id)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [mobileScreens, setMobileScreens] = useState([])

  useEffect(() => {
    if (study?.mobileScreens) {
      const filtered = study.mobileScreens.filter(
        screen => !screen.image.toLowerCase().includes('feedbackoverlay')
      )
      setMobileScreens(filtered)
    }
  }, [study])

  const openLightbox = (index) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden' // Prevent background scrolling
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = 'auto'
  }

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === mobileScreens.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? mobileScreens.length - 1 : prevIndex - 1
    )
  }

  const handleKeyDown = (e) => {
    if (!lightboxOpen) return
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowRight') goToNext()
    if (e.key === 'ArrowLeft') goToPrevious()
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen, currentImageIndex])

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

      <section className="detail-section detail-overview">
        <div className="container">
          <div className="content-section">
            <h2>Overview</h2>
            <p>{study.overview}</p>
          </div>
        </div>
      </section>

      <section className="detail-section detail-problem">
        <div className="container">
          <div className="content-section">
            <h2>Problem</h2>
            <p>{study.problem}</p>
          </div>
        </div>
      </section>

      <section className="detail-section detail-solution">
        <div className="container">
          <div className="content-section">
            <h2>Solution</h2>
            <p>{study.solution}</p>
          </div>
        </div>
      </section>

      {study.competitiveAnalysis && (
        <section className="detail-section detail-competitive">
          <div className="container">
            <div className="content-section">
              <h2>Competitive Analysis</h2>
              <p>{study.competitiveAnalysis}</p>
            </div>
          </div>
        </section>
      )}

      {study.opportunity && (
        <section className="detail-section detail-opportunity">
          <div className="container">
            <div className="content-section">
              <h2>Opportunity</h2>
              <div className="opportunity-content">
                {study.opportunity.split('\n\n').map((paragraph, i) => {
                  // Check if paragraph starts with ** and contains a colon
                  if (paragraph.startsWith('**') && paragraph.includes(':')) {
                    // Find the first colon and split there
                    const colonIndex = paragraph.indexOf(':');
                    const title = paragraph.substring(0, colonIndex);
                    const content = paragraph.substring(colonIndex + 1);
                    
                    return (
                      <div key={i} className="opportunity-subsection">
                        <h3>{title.replace(/\*\*/g, '')}</h3>
                        <p>{content.trim()}</p>
                      </div>
                    );
                  } else {
                    return <p key={i}>{paragraph}</p>;
                  }
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="detail-section detail-final-screens">
        <div className="container">
          <div className="content-section">
            <h2>Final Screens</h2>
            
            {study.platform.includes('Mobile') && (
              <>
                {study.onboardingScreens && (
                  <div className="onboarding-screens-section">
                    <h3>Onboarding Experience</h3>
                    <p>The onboarding flow introduces users to key features through engaging visuals and clear value propositions.</p>
                    <div className="onboarding-screens-grid">
                      {study.onboardingScreens.map((screen, i) => (
                        <div key={i} className="onboarding-screen-item">
                          <MobileMockup 
                            imageSrc={screen.image} 
                            alt={`${study.title} - ${screen.title}`} 
                          />
                          <div className="screen-info">
                            <h4>{screen.title}</h4>
                            <p>{screen.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {study.mobileScreens && (
                  <div className="mobile-screens-section">
                    <h3>{study.id === 'mwalimu-finder' ? 'School Job Posting Flow' : 'Onboarding & Product Listing Flow'}</h3>
                    {study.id === 'mwalimu-finder' ? (
                      <>
                        <p>The mobile application demonstrates the complete school experience for posting teaching positions and finding qualified teachers.</p>
                        
                        <p><strong>Job Posting Flow:</strong> Schools begin with onboarding screens introducing the platform's teacher discovery and job posting features. The sign-up process guides them through institutional verification and profile setup. The job posting flow walks schools through creating comprehensive listings: entering position details (subject, grade level, requirements), specifying qualifications needed, setting salary ranges and benefits, adding school culture information, and publishing the listing. Schools can then review incoming applications, filter candidates, and communicate with interested teachers.</p>
                        
                        <p><strong>Teacher Discovery:</strong> Beyond posting jobs, schools can proactively search for teachers using advanced filters (subject expertise, qualifications, experience, location). They can view detailed teacher profiles with verified credentials, save promising candidates, and reach out directly for opportunities.</p>
                        
                        <p>The platform serves both schools and teachers with tailored experiences: schools get job posting tools and applicant tracking, while teachers (on their own interface) get job discovery and application management.</p>
                      </>
                    ) : (
                      <>
                        <p>The mobile application demonstrates the complete user journey from initial app launch through the comprehensive product listing process. The flow begins with engaging splash screens that introduce users to the platform's key features and value propositions.</p>
                        
                        <p>The 8-step posting process guides sellers through creating detailed, high-quality listings: initial product information, photo uploads with editing capabilities, category and condition selection, detailed description and specifications, pricing and negotiation preferences, location and delivery options, review and preview, and final publication. Each step uses progressive disclosure to maintain simplicity while collecting comprehensive product information that helps buyers make informed decisions.</p>
                        
                        <p>The flow concludes with feedback overlay screens that demonstrate the app's user engagement features, including rating prompts and feedback collection mechanisms that help build trust and continuously improve the platform experience.</p>
                      </>
                    )}
                    
                    {study.platform.includes('Mobile') && study.platform.includes('Web') ? (
                      <div className="screens-tabs">
                        <div className="tab-buttons">
                          <button 
                            className="tab-button active" 
                            onClick={(e) => {
                              document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
                              document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
                              e.target.classList.add('active');
                              document.querySelector('.mobile-tab').classList.add('active');
                            }}
                          >
                            Mobile App
                          </button>
                          <button 
                            className="tab-button" 
                            onClick={(e) => {
                              document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
                              document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
                              e.target.classList.add('active');
                              document.querySelector('.web-tab').classList.add('active');
                            }}
                          >
                            Admin Dashboard
                          </button>
                        </div>
                        
                        <div className="tab-content mobile-tab active">
                          <div className="tab-description">
                            <h4>{study.id === 'mwalimu-finder' ? 'School Mobile Experience - Job Posting Flow' : 'Onboarding & Complete Posting Flow'}</h4>
                            <p>{study.id === 'mwalimu-finder' 
                              ? 'Mobile app designed for schools to post teaching positions and find qualified teachers. The flow demonstrates the complete job posting process: from splash screens and onboarding, through creating detailed job listings with requirements and salary information, to publishing and managing applications from interested teachers.'
                              : 'From splash screens introducing the platform to the comprehensive 8-step product listing process. The flow demonstrates how the app guides users through creating detailed, professional listings with intuitive forms and smart input validation.'
                            }</p>
                          </div>
                          
                          {/* Thumbnail Grid */}
                          <div className="mobile-screens-thumbnail-grid">
                            {study.mobileScreens
                              .filter(screen => !screen.image.toLowerCase().includes('feedbackoverlay'))
                              .map((screen, i) => (
                                <div 
                                  key={i} 
                                  className="screen-thumbnail"
                                  onClick={() => openLightbox(i)}
                                  role="button"
                                  tabIndex={0}
                                  onKeyPress={(e) => e.key === 'Enter' && openLightbox(i)}
                                >
                                  <div className="thumbnail-wrapper">
                                    <div className="step-badge">{i + 1}</div>
                                    <img 
                                      src={screen.image} 
                                      alt={`${study.title} - ${screen.title}`}
                                      className="thumbnail-image"
                                    />
                                    <div className="thumbnail-overlay">
                                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.35-4.35"></path>
                                        <line x1="11" y1="8" x2="11" y2="14"></line>
                                        <line x1="8" y1="11" x2="14" y2="11"></line>
                                      </svg>
                                    </div>
                                  </div>
                                  <p className="thumbnail-title">{screen.title}</p>
                                </div>
                              ))
                            }
                          </div>
                          
                          <div className="gallery-hint">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="11" cy="11" r="8"></circle>
                              <path d="m21 21-4.35-4.35"></path>
                            </svg>
                            Click any screen to view full size
                          </div>
                          
                          {/* Lightbox Modal */}
                          {lightboxOpen && (
                            <div className="lightbox-overlay" onClick={closeLightbox}>
                              <button className="lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <line x1="18" y1="6" x2="6" y2="18"></line>
                                  <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                              </button>
                              
                              <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); goToPrevious(); }} aria-label="Previous screen">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                              </button>
                              
                              <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                                <div className="lightbox-header">
                                  <div className="lightbox-step">Step {currentImageIndex + 1} of {mobileScreens.length}</div>
                                  <h3 className="lightbox-title">{mobileScreens[currentImageIndex]?.title}</h3>
                                </div>
                                
                                <div className="lightbox-image-container">
                                  <MobileMockup 
                                    imageSrc={mobileScreens[currentImageIndex]?.image} 
                                    alt={`${study.title} - ${mobileScreens[currentImageIndex]?.title}`}
                                  />
                                </div>
                                
                                <div className="lightbox-thumbnails">
                                  {mobileScreens.map((screen, i) => (
                                    <button
                                      key={i}
                                      className={`lightbox-thumb ${i === currentImageIndex ? 'active' : ''}`}
                                      onClick={() => setCurrentImageIndex(i)}
                                      aria-label={`Go to screen ${i + 1}`}
                                    >
                                      <img src={screen.image} alt={`Thumbnail ${i + 1}`} />
                                    </button>
                                  ))}
                                </div>
                              </div>
                              
                              <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); goToNext(); }} aria-label="Next screen">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                              </button>
                            </div>
                          )}
                          
                          <div className="mobile-screens-grid" style={{ display: 'none' }}>
                            {study.mobileScreens
                              .filter(screen => !screen.image.toLowerCase().includes('feedbackoverlay'))
                              .map((screen, i) => (
                                <div key={i} className="screen-step-wrapper">
                                  <div className="step-indicator">{i + 1}</div>
                                  <MobileMockup 
                                    imageSrc={screen.image} 
                                    alt={`${study.title} - ${screen.title}`} 
                                  />
                                  <p className="screen-title">{screen.title}</p>
                                </div>
                              ))
                            }
                          </div>
                          
                          
                          {study.mobileScreens.some(screen => screen.image.toLowerCase().includes('feedbackoverlay')) && (
                            <div className="overlay-screens-section">
                              <h4>Feedback Overlays</h4>
                              <p>Modal overlays for user feedback and engagement</p>
                              <div className="overlay-screens-container">
                                {study.mobileScreens
                                  .filter(screen => screen.image.toLowerCase().includes('feedbackoverlay'))
                                  .map((screen, i) => (
                                    <div key={i} className="overlay-screen">
                                      <img 
                                        src={screen.image} 
                                        alt={`${study.title} - ${screen.title}`}
                                        className="overlay-image"
                                      />
                                    </div>
                                  ))
                                }
                              </div>
                            </div>
                          )}
                        </div>
                        
                        <div className="tab-content web-tab">
                          <div className="tab-description">
                            <h4>{study.id === 'mwalimu-finder' ? 'Teacher Web Platform & Admin Dashboard' : 'Admin Dashboard'}</h4>
                            <p>{study.id === 'mwalimu-finder'
                              ? 'Web platform designed for teachers to create comprehensive profiles, discover job opportunities, and manage applications. Features credential showcase, personalized job recommendations, application tracking, and school communication tools. Also includes admin dashboard for platform oversight, user verification, and quality control.'
                              : 'Comprehensive management platform with real-time analytics, content moderation, user verification, and automated reporting capabilities. These screens represent the different views that appear when administrators click on navlinks in the side navigation menu.'
                            }</p>
                          </div>
                          {study.adminScreens && study.adminScreens.length > 0 ? (
                            <div className="web-screens-grid">
                              {study.adminScreens.map((screen, i) => (
                                <div key={i} className="admin-screen-item">
                                  <img 
                                    src={screen.image} 
                                    alt={`${study.title} - ${screen.title}`}
                                    className="admin-screen-image"
                                  />
                                  <p className="admin-screen-title">{screen.title}</p>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="web-screens-grid">
                              <div className="image-placeholder large">
                                <span>Admin Dashboard Overview</span>
                              </div>
                              <div className="image-placeholder large">
                                <span>User Management Panel</span>
                              </div>
                              <div className="image-placeholder large">
                                <span>Content Moderation Tools</span>
                              </div>
                              <div className="image-placeholder large">
                                <span>Analytics & Reports</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="mobile-screens-grid">
                        {study.mobileScreens.map((screen, i) => (
                          <MobileMockup 
                            key={i}
                            imageSrc={screen.image} 
                            alt={`${study.title} - ${screen.title}`} 
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </>
            )}

            {study.platform.includes('Web') && !study.platform.includes('Mobile') && (
              <div className="web-screens-section">
                <h3>Web Application</h3>
                <div className="web-screens-grid">
                  <div className="image-placeholder large">
                    <span>Web Dashboard View</span>
                  </div>
                  <div className="image-placeholder large">
                    <span>Web Detail View</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="detail-footer">
        <div className="container">
          <div className="tags-section">
            {study.tags.map((tag, i) => (
              <span key={i} className="tag">{tag}</span>
            ))}
          </div>

          <div className="navigation-section">
            <Link to="/case-studies" className="btn btn-secondary">
              View All Case Studies
            </Link>
            <Link to="/contact" className="btn btn-primary">
              Let's Work Together
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudyDetail
