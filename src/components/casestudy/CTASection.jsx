import { Link } from 'react-router-dom'
import './CaseStudyComponents.css'

function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-content">
        
        <h2>Ready to work together?</h2>
        
        <p>
          Let's create something amazing. I'd love to hear about your project and explore how we can bring your ideas to life.
        </p>

        {/* CTA Buttons */}
        <div className="cta-buttons">
          <Link
            to="/contact"
            className="btn-cta-primary"
          >
            Get in Touch
          </Link>
          
          <Link
            to="/case-studies"
            className="btn-cta-secondary"
          >
            View More Work
          </Link>
        </div>

      </div>
    </section>
  )
}

export default CTASection