import SEO from '../components/SEO'
import ContactForm from '../components/ContactForm'
import './Contact.css'

function Contact() {
  return (
    <div className="contact-page">
      <SEO 
        title="Contact"
        description="Get in touch with Richard Musango for UI/UX design projects, collaborations, or inquiries. Connect via email, LinkedIn, Behance, or GitHub."
      />
      
      <section className="contact-hero">
        <div className="container">
          <h1 className="page-title">Let's Work Together</h1>
          <p className="page-subtitle">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>
                Whether you have a project in mind, need design consultation, or just want to say hello, 
                I'd love to hear from you.
              </p>
              
              <ContactForm />
              
              <div className="contact-methods">
                <div className="contact-method">
                  <span className="icon" aria-hidden="true">📧</span>
                  <div>
                    <h3>Email</h3>
                    <a href="mailto:richard.musango@example.com">richard.musango@example.com</a>
                  </div>
                </div>
                <div className="contact-method">
                  <span className="icon" aria-hidden="true">💼</span>
                  <div>
                    <h3>LinkedIn</h3>
                    <a href="https://linkedin.com/in/richardmusango" target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/richardmusango
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h2>Find Me Online</h2>
              <div className="social-grid">
                <a 
                  href="https://linkedin.com/in/richardmusango" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-card"
                  aria-label="Visit my LinkedIn profile"
                >
                  <span className="social-icon" aria-hidden="true">💼</span>
                  <h3>LinkedIn</h3>
                  <p>Professional network</p>
                </a>
                <a 
                  href="https://dribbble.com/richardmusango" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-card"
                  aria-label="View my work on Dribbble"
                >
                  <span className="social-icon" aria-hidden="true">🎨</span>
                  <h3>Dribbble</h3>
                  <p>Design shots</p>
                </a>
                <a 
                  href="https://behance.net/richardmusango" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-card"
                  aria-label="See my portfolio on Behance"
                >
                  <span className="social-icon" aria-hidden="true">🎯</span>
                  <h3>Behance</h3>
                  <p>Portfolio projects</p>
                </a>
                <a 
                  href="https://github.com/richardmusango" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-card"
                  aria-label="Check out my code on GitHub"
                >
                  <span className="social-icon" aria-hidden="true">💻</span>
                  <h3>GitHub</h3>
                  <p>Code & projects</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
