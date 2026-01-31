import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-description">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="contact-links">
            <a href="mailto:your.email@example.com" className="contact-btn">
              📧 Email Me
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-btn">
              💼 LinkedIn
            </a>
            <a href="https://dribbble.com/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-btn">
              🎨 Dribbble
            </a>
            <a href="https://behance.net/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-btn">
              🎯 Behance
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
