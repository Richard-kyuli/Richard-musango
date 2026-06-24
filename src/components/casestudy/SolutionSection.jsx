import './CaseStudyComponents.css'

function SolutionSection({ study }) {
  const getKeyFeatures = () => {
    switch(study.id) {
      case 'royal-times':
        return ['Real-time monitoring', 'Driver management', 'Analytics dashboard']
      case 'buy-sell':
        return ['Mobile-first design', 'Verified profiles', 'Secure messaging']
      case 'mwalimu-finder':
        return ['AI-powered matching', 'Credential verification', 'Mobile accessibility']
      case 'nannies':
        return ['Background checks', 'Smart matching', '24/7 access']
      case 'karibu-kazi':
        return ['Portfolio showcasing', 'Free for workers', 'Dignity-focused']
      case 'kra-pension-portal':
        return ['Self-service portal', 'Real-time data', 'Government security']
      default:
        return ['User-centered design', 'Mobile optimization', 'Secure platform']
    }
  }

  const getFeatureCards = () => {
    switch(study.id) {
      case 'royal-times':
        return [
          { title: 'Live Operations', desc: 'Real-time ride monitoring and fleet management' },
          { title: 'Driver Portal', desc: 'Streamlined onboarding and performance tracking' },
          { title: 'Analytics Suite', desc: 'Business intelligence and reporting tools' }
        ]
      case 'buy-sell':
        return [
          { title: 'Smart Search', desc: 'AI-powered product discovery and filtering' },
          { title: 'Trust System', desc: 'Verified profiles and secure transactions' },
          { title: 'Mobile App', desc: 'Native mobile experience for buyers and sellers' }
        ]
      default:
        return [
          { title: 'User Experience', desc: 'Intuitive interface designed for efficiency' },
          { title: 'Performance', desc: 'Fast, reliable platform built for scale' },
          { title: 'Security', desc: 'Enterprise-grade security and data protection' }
        ]
    }
  }

  return (
    <section className="solution-section">
      <div className="container">
        
        {/* Lead Paragraph */}
        <p className="solution-lead">
          {study.solution}
        </p>

        {/* Asymmetric Grid */}
        <div className="solution-grid">
          
          {/* Pull Quote Box (spans 2 columns) */}
          <div className="pull-quote-box">
            {/* Quote Icon */}
            <svg className="quote-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
            </svg>
            
            <blockquote className="pull-quote">
              {study.opportunity ? study.opportunity.substring(0, 150) + '...' : 
               'Creating innovative solutions that transform user experiences and drive business growth.'}
            </blockquote>
          </div>

          {/* Key Features List */}
          <div className="features-list">
            <h3>Key Features</h3>
            {getKeyFeatures().map((feature, index) => (
              <div key={index} className="feature-item">
                {/* Checkmark Icon */}
                <svg className="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="feature-cards">
          {getFeatureCards().map((card, index) => (
            <div key={index} className="feature-card">
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default SolutionSection