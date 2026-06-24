import './CaseStudyComponents.css'

function ProblemSection({ study }) {
  return (
    <section className="problem-section">
      <div className="container">
        <div className="problem-grid">
          
          {/* Left Column - Text */}
          <div className="problem-content">
            <h2>The Problem</h2>
            <p className="problem-text">
              {study.problem}
            </p>
          </div>

          {/* Right Column - Stat Card */}
          <div className="stat-card">
            <div className="stat-number">
              {study.id === 'royal-times' ? '7,000+' : 
               study.id === 'buy-sell' ? '1,000+' :
               study.id === 'mwalimu-finder' ? '300+' :
               study.id === 'nannies' ? '5,000+' :
               study.id === 'karibu-kazi' ? '5M+' :
               study.id === 'kra-pension-portal' ? '7,000+' : '1,000+'}
            </div>
            <div className="stat-label">
              {study.id === 'royal-times' ? 'KRA employees served' : 
               study.id === 'buy-sell' ? 'active users launched' :
               study.id === 'mwalimu-finder' ? 'teacher profiles verified' :
               study.id === 'nannies' ? 'nannies verified in 6 months' :
               study.id === 'karibu-kazi' ? 'skilled service providers' :
               study.id === 'kra-pension-portal' ? 'KRA employees served' : 'users impacted'}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ProblemSection