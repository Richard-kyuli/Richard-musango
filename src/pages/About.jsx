import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import './About.css'

function About() {
  return (
    <div className="about-page">
      <SEO 
        title="About"
        description="Learn about Richard Musango, a passionate UI/UX designer specializing in user-centered design, research, and creating accessible digital experiences."
      />
      
      {/* Main Content */}
      <div className="about-container">
        {/* Left Column */}
        <div className="left-column">
          {/* Profile Card */}
          <div className="profile-card">
            <div className="profile-image">
              <img src="/HeroImage.png" alt="Richard Musango" />
            </div>
            <div className="profile-info">
              <p className="role-label">PRODUCT DESIGNER</p>
              <h1 className="name">Richard Musango</h1>
              <p className="bio">
                UI/UX and product designer based in Nairobi, Kenya. I specialise in simplifying complex, multi-stakeholder systems into intuitive, scalable user experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="right-column">
          {/* Stats Section */}
          <div className="stats-section">
            <div className="intro-text">
              <p>
                With 3.5+ years of experience, I've designed user-centric digital 
                platforms across fintech, e-commerce, UX management, digital 
                transformation, and EdTech. I transform complex problems into 
                simple, elegant solutions that users love and businesses grow.
              </p>
            </div>
            
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">3.5+</div>
                <div className="stat-label">Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3</div>
                <div className="stat-label">Industries</div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="skills-section">
            <div className="skills-grid">
              <div className="skill-category">
                <div className="skill-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4>UX/UI Design</h4>
                <p>User research, wireframing, prototyping, and visual design</p>
              </div>
              <div className="skill-category">
                <div className="skill-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <rect x="7" y="7" width="3" height="9"/>
                    <rect x="14" y="7" width="3" height="5"/>
                  </svg>
                </div>
                <h4>Design Systems</h4>
                <p>Creating scalable design systems and component libraries</p>
              </div>
              <div className="skill-category">
                <div className="skill-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                  </svg>
                </div>
                <h4>User Research</h4>
                <p>Conducting user interviews, usability testing, data analysis</p>
              </div>
              <div className="skill-category">
                <div className="skill-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h4>Workshop Facilitation</h4>
                <p>Leading design sprints and collaborative workshops</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Design Principles & Tools Full Width Section */}
      <div className="principles-tools-full-section">
        <div className="principles-tools-container">
          <div className="principles-tools-grid">
            {/* Design Principles */}
            <div className="principles-subsection">
              <h3>Design Principles</h3>
              <div className="principles-list">
                <div className="principle-item">
                  <h4>User-Centered</h4>
                  <p>Every design decision starts with understanding user needs and behaviors.</p>
                </div>
                <div className="principle-item">
                  <h4>Systems Thinking</h4>
                  <p>Creating cohesive experiences that work seamlessly across platforms.</p>
                </div>
                <div className="principle-item">
                  <h4>Research-Led</h4>
                  <p>Using data and insights to inform design decisions and validate solutions.</p>
                </div>
                <div className="principle-item">
                  <h4>Impact-Driven</h4>
                  <p>Focusing on measurable outcomes that drive business success.</p>
                </div>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="vertical-divider"></div>

            {/* Tools */}
            <div className="tools-subsection">
              <h3>Tools I use</h3>
              <div className="tools-list">
                <div className="tool-item">
                  <div className="tool-icon figma">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M8 24C10.2091 24 12 22.2091 12 20V16H8C5.79086 16 4 17.7909 4 20C4 22.2091 5.79086 24 8 24Z" fill="#0ACF83"/>
                      <path d="M4 12C4 9.79086 5.79086 8 8 8H12V16H8C5.79086 16 4 14.2091 4 12Z" fill="#A259FF"/>
                      <path d="M4 4C4 1.79086 5.79086 0 8 0H12V8H8C5.79086 8 4 6.20914 4 4Z" fill="#F24E1E"/>
                      <path d="M12 0H16C18.2091 0 20 1.79086 20 4C20 6.20914 18.2091 8 16 8H12V0Z" fill="#FF7262"/>
                      <path d="M20 12C20 14.2091 18.2091 16 16 16C13.7909 16 12 14.2091 12 12C12 9.79086 13.7909 8 16 8C18.2091 8 20 9.79086 20 12Z" fill="#1ABCFE"/>
                    </svg>
                  </div>
                  <span>Figma</span>
                </div>
                <div className="tool-item">
                  <div className="tool-icon sketch">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L4.5 9L12 22L19.5 9L12 2Z" fill="#FDB300"/>
                      <path d="M12 2L7.5 2L4.5 9L12 22L12 2Z" fill="#EA6C00"/>
                      <path d="M12 2L16.5 2L19.5 9L12 22L12 2Z" fill="#EA6C00"/>
                      <path d="M4.5 9L12 22L19.5 9L12 9L4.5 9Z" fill="#FDAD00"/>
                    </svg>
                  </div>
                  <span>Sketch</span>
                </div>
                <div className="tool-item">
                  <div className="tool-icon adobe">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#FF9A00"/>
                      <path d="M7 7H10L14 17H11L10 14H8L7 17H4L7 7ZM8.5 12H9.5L9 10.5L8.5 12Z" fill="white"/>
                      <path d="M14 7H17V17H14V7Z" fill="white"/>
                    </svg>
                  </div>
                  <span>Illustrator</span>
                </div>
                <div className="tool-item">
                  <div className="tool-icon miro">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#050038"/>
                      <circle cx="8" cy="8" r="2" fill="#FFD02F"/>
                      <circle cx="16" cy="8" r="2" fill="#FF6B6B"/>
                      <circle cx="8" cy="16" r="2" fill="#4ECDC4"/>
                      <circle cx="16" cy="16" r="2" fill="#45B7D1"/>
                    </svg>
                  </div>
                  <span>Miro</span>
                </div>
                <div className="tool-item">
                  <div className="tool-icon notion">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#000"/>
                      <path d="M6 4H18C19.1 4 20 4.9 20 6V18C20 19.1 19.1 20 18 20H6C4.9 20 4 19.1 4 18V6C4 4.9 4.9 4 6 4Z" fill="white"/>
                      <path d="M7 7V17H9V9H15V17H17V7H7Z" fill="#000"/>
                    </svg>
                  </div>
                  <span>Notion</span>
                </div>
                <div className="tool-item">
                  <div className="tool-icon uxpilot">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="6" fill="#7C6FDC"/>
                      <text x="12" y="17" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="white" text-anchor="middle">P</text>
                    </svg>
                  </div>
                  <span>UX Pilot</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Design System Section */}
      <div className="design-system-section">
        <div className="design-system-content">
          <div className="design-system-preview">
            <div className="preview-header">
              <h3>Scalable Design System</h3>
            </div>
            <div className="preview-body">
              <div className="color-palette">
                <div className="color-row">
                  <div className="color-swatch primary"></div>
                  <div className="color-swatch secondary"></div>
                  <div className="color-swatch accent"></div>
                </div>
                <div className="color-labels">
                  <span>Primary</span>
                  <span>Secondary</span>
                  <span>Accent</span>
                </div>
              </div>
              <div className="components-preview">
                <div className="component-line"></div>
                <div className="component-line"></div>
                <div className="component-line short"></div>
              </div>
            </div>
          </div>
          <div className="design-system-text">
            <h2>My design system</h2>
            <p>
              A comprehensive design system built to ensure 
              consistency, scalability, and efficiency across all 
              products I create. It includes components, patterns, 
              design tokens, and guidelines that streamline the 
              design and development process.
            </p>
            <a 
              href="https://www.figma.com/design/IvymjBwOXpQH8TNVst5p40/My-Design-System--Copy-?node-id=2383-20190&t=H4yqNk8Ube1I2NC4-1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="view-system-btn"
            >
              View full design system →
            </a>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-content">
          <h2>Let's work together</h2>
          <p>I'm always excited to take on new challenges and help solve design problems.</p>
          <div className="cta-buttons">
            <Link to="/case-studies" className="btn-primary">View my work</Link>
            <a 
              href="https://www.linkedin.com/in/richard-kyuli-a11376268/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary"
            >
              Contact on LinkedIn →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
