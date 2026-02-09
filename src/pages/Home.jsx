import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import './Home.css'

function Home() {
  const services = [
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces'
    },
    {
      icon: '📱',
      title: 'Mobile Design',
      description: 'Responsive designs for mobile platforms'
    },
    {
      icon: '💻',
      title: 'Web Design',
      description: 'Modern web experiences that engage users'
    },
    {
      icon: '🎯',
      title: 'Branding',
      description: 'Building memorable brand identities'
    }
  ]

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Design',
      image: 'gradient-1',
      link: '/case-studies/ecommerce-app'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'Mobile Design',
      image: 'gradient-2',
      link: '/case-studies/banking-app'
    },
    {
      id: 3,
      title: 'SaaS Dashboard',
      category: 'UI/UX Design',
      image: 'gradient-3',
      link: '/case-studies/saas-dashboard'
    },
    {
      id: 4,
      title: 'Fitness Tracker',
      category: 'Mobile Design',
      image: 'gradient-4',
      link: '/case-studies'
    },
    {
      id: 5,
      title: 'Real Estate Portal',
      category: 'Web Design',
      image: 'gradient-5',
      link: '/case-studies'
    },
    {
      id: 6,
      title: 'Food Delivery App',
      category: 'Mobile Design',
      image: 'gradient-6',
      link: '/case-studies'
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
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="hero-title">
                Hello, I'm<br />
                <span className="highlight">Richard Musango</span>
              </h1>
              <p className="hero-description">
                I'm a Freelance UI/UX Designer and Developer based in London, England.
                I strives to build immersive and beautiful web applications through
                carefully crafted code and user-centric design.
              </p>
              <Link to="/contact" className="btn btn-primary">Say Hello!</Link>
              
              <div className="hero-stats">
                <div className="stat-item">
                  <h3>15 Y.</h3>
                  <p>Experience</p>
                </div>
                <div className="stat-item">
                  <h3>250+</h3>
                  <p>Project Completed</p>
                </div>
                <div className="stat-item">
                  <h3>58</h3>
                  <p>Happy Client</p>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <div className="profile-image-wrapper">
                <div className="profile-placeholder">
                  <span>Your Photo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <div className="about-image-card">
                <div className="about-placeholder">
                  <span>About Photo</span>
                </div>
                <div className="social-links">
                  <a href="#" className="social-icon" aria-label="Facebook">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-icon" aria-label="Dribbble">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm8.5 6.5c1.438 1.75 2.312 3.969 2.438 6.406-2.156-.469-4.156-.5-5.969-.219-.219-.531-.438-1.031-.688-1.531 2.063-.875 3.75-2.188 4.219-4.656zm-8.5-5c2.344 0 4.5.781 6.25 2.094-.438 2.219-1.969 3.406-3.875 4.219-1.188-2.188-2.5-4.031-3.875-5.656.469-.406.969-.656 1.5-.656zm-3.5 1.031c1.344 1.594 2.625 3.406 3.781 5.531-2.531.781-5.406 1.188-8.531 1.188-.031-.219-.031-.438-.031-.656 0-2.531.969-4.844 2.594-6.656.719.188 1.469.406 2.188.594zm-5.5 8.969c0-.219 0-.438.031-.656 3.281 0 6.344-.438 9.031-1.281.219.438.438.906.656 1.375-3.031 1.219-5.406 3.406-6.719 6.219-1.781-1.656-3-4.031-3-6.656zm8.5 8.5c-2.344 0-4.5-.781-6.25-2.094.438-2.219 1.969-3.406 3.875-4.219 1.188 2.188 2.5 4.031 3.875 5.656-.469.406-.969.656-1.5.656zm3.5-1.031c-1.344-1.594-2.625-3.406-3.781-5.531 2.531-.781 5.406-1.188 8.531-1.188.031.219.031.438.031.656 0 2.531-.969 4.844-2.594 6.656-.719-.188-1.469-.406-2.188-.594z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-icon" aria-label="Instagram">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-icon social-icon-primary" aria-label="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-icon" aria-label="Behance">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="about-content">
              <h2 className="section-title">I am Professional User<br />Experience Designer</h2>
              <p className="about-text">
                I design and develop services for customers specializing creating stylish, 
                modern websites, web services and online stores. My passion is to design 
                digital user experiences.
              </p>
              <p className="about-text">
                I design and develop services for customers specializing creating stylish, 
                modern websites, web services.
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
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">UI/UX Process</h2>
            <p className="section-subtitle">My design process ensures quality results</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
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
                <div className="contact-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p>richard@example.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Location</h4>
                  <p>New York, USA</p>
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
