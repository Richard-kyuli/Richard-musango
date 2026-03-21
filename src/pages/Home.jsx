import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import './Home.css'

function Home() {
  const workProcess = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        </svg>
      ),
      number: '1',
      title: 'Research',
      description: 'Understanding user needs, business goals, and market trends through interviews, surveys, and competitive analysis to inform design decisions.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      ),
      number: '2',
      title: 'Analyze',
      description: 'Synthesizing research data to identify patterns, pain points, and opportunities. Creating user personas and journey maps to guide the design process.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 19l7-7 3 3-7 7-3-3z"/>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
          <path d="M2 2l7.586 7.586"/>
          <circle cx="11" cy="11" r="2"/>
        </svg>
      ),
      number: '3',
      title: 'Design',
      description: 'Creating wireframes, prototypes, and high-fidelity mockups. Iterating based on feedback and ensuring consistency with design systems and brand guidelines.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      number: '4',
      title: 'Launch',
      description: 'Collaborating with developers for implementation, conducting usability testing, and monitoring user feedback to continuously improve the product experience.'
    }
  ]

  const projects = [
    {
      id: 1,
      title: 'Royal Times Admin Dashboard',
      category: 'Web Design',
      image: 'gradient-1',
      link: '/case-studies/royal-times'
    },
    {
      id: 2,
      title: 'Buy & Sell Online',
      category: 'Mobile & Web',
      image: 'buysell-thumbnail',
      link: '/case-studies/buy-sell'
    },
    {
      id: 3,
      title: 'Mwalimu Finder',
      category: 'Mobile & Web',
      image: 'gradient-3',
      link: '/case-studies/mwalimu-finder'
    },
    {
      id: 4,
      title: 'Nannies Web Application',
      category: 'Web Design',
      image: 'nanny-thumbnail',
      link: '/case-studies/nannies'
    },
    {
      id: 5,
      title: 'Karibu Kazi',
      category: 'Mobile & Web',
      image: 'gradient-5',
      link: '/case-studies/karibu-kazi'
    },
    {
      id: 6,
      title: 'Property Management Dashboard',
      category: 'Web Design',
      image: 'gradient-6',
      link: '/case-studies/property-management'
    }
  ]



  return (
    <div className="home-page">
      <SEO 
        description="Richard Musango - UI/UX Designer creating delightful digital experiences. View my portfolio of case studies showcasing user-centered design solutions."
      />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content-centered">
            <h1 className="hero-title">
              Hello, I'm<br />
              <span className="highlight">Richard Musango</span>
            </h1>
            <p className="hero-description">
              I'm a UI/UX Designer based in Nairobi, Kenya. I create intuitive and 
              beautiful digital experiences that solve real problems and delight users 
              through thoughtful, user-centric design.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">Contact Me</Link>
              <a href="/resume.pdf" download className="btn btn-outline">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content-full">
            <h2 className="section-title">I am Professional User<br />Experience Designer</h2>
            <p className="about-text">
              I specialize in creating stylish, modern digital experiences for web and mobile 
              platforms. My passion is designing intuitive interfaces that make complex tasks 
              simple and enjoyable for users.
            </p>
            <p className="about-text">
              Through research, empathy, and creative problem-solving, I craft designs that 
              not only look beautiful but also drive business results and user satisfaction.
            </p>
            <div className="about-buttons">
              <Link to="/case-studies" className="btn btn-primary">My Project</Link>
              <a href="/resume.pdf" download className="btn btn-outline">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="work-process-section">
        <div className="container">
          <div className="work-process-layout">
            <div className="work-process-intro">
              <h2 className="section-title">Work Process</h2>
              <p className="work-process-description">
                My design process is centered around understanding users and solving real problems. 
                I follow a structured approach that combines research, analysis, creative design, 
                and continuous improvement to deliver exceptional user experiences.
              </p>
              <p className="work-process-description">
                Each project is unique, but these core phases ensure that every solution is 
                user-focused, data-driven, and aligned with business objectives.
              </p>
            </div>
            <div className="work-process-grid">
              {workProcess.map((step, index) => (
                <div key={index} className="process-card">
                  <div className="process-icon">{step.icon}</div>
                  <h3>{step.number}. {step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Portfolio</h2>
            <p className="section-subtitle">Explore my recent work</p>
          </div>
          <div className="portfolio-grid">
            {projects.map(project => (
              <Link to={project.link} key={project.id} className="portfolio-card">
                <div className={`portfolio-image ${project.image}`}></div>
                <div className="portfolio-content">
                  <span className="portfolio-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <span className="portfolio-link">View Project →</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="portfolio-cta">
            <Link to="/case-studies" className="btn btn-primary">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-preview-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What's next?</h2>
            <p className="section-subtitle">Get in touch with me</p>
          </div>
          <div className="contact-preview-grid">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>richardkyuli243@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+254 112 719 010</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Nairobi, Kenya</p>
                </div>
              </div>
            </div>
            <div className="contact-form-preview">
              <h3>Let's work on a project</h3>
              <form className="simple-form">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea placeholder="Your Message" rows="4"></textarea>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
