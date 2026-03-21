import { useParams, Link } from 'react-router-dom'
import SEO from '../components/SEO'
import MobileMockup from '../components/MobileMockup'
import { caseStudies } from '../data/caseStudiesNew'
import './CaseStudyDetail.css'

// Updated opportunity section - 2026-03-21
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
                    <h3>Onboarding & Product Listing Flow</h3>
                    <p>The mobile application demonstrates the complete user journey from initial app launch through the comprehensive product listing process. The flow begins with engaging splash screens that introduce users to the platform's key features and value propositions.</p>
                    
                    <p>The 8-step posting process guides sellers through creating detailed, high-quality listings: initial product information, photo uploads with editing capabilities, category and condition selection, detailed description and specifications, pricing and negotiation preferences, location and delivery options, review and preview, and final publication. Each step uses progressive disclosure to maintain simplicity while collecting comprehensive product information that helps buyers make informed decisions.</p>
                    
                    <p>The flow concludes with feedback overlay screens that demonstrate the app's user engagement features, including rating prompts and feedback collection mechanisms that help build trust and continuously improve the platform experience.</p>
                    
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
                            <h4>Onboarding & Complete Posting Flow</h4>
                            <p>From splash screens introducing the platform to the comprehensive 8-step product listing process. The flow demonstrates how the app guides users through creating detailed, professional listings with intuitive forms and smart input validation.</p>
                          </div>
                          <div className="mobile-screens-grid">
                            {study.mobileScreens
                              .filter(screen => !screen.image.toLowerCase().includes('feedbackoverlay'))
                              .map((screen, i) => (
                                <MobileMockup 
                                  key={i}
                                  imageSrc={screen.image} 
                                  alt={`${study.title} - ${screen.title}`} 
                                />
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
                            <h4>Admin Dashboard</h4>
                            <p>Comprehensive management platform with real-time analytics, content moderation, user verification, and automated reporting capabilities.</p>
                          </div>
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
