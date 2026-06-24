import './CaseStudyComponents.css'

function ResearchSection({ study }) {
  const getResearchPhases = () => {
    if (study.process && study.process.research) {
      return study.process.research.map((item, index) => ({
        phase: `Phase ${index + 1}`,
        title: item.length > 50 ? item.substring(0, 50) + '...' : item,
        description: item
      }))
    }
    
    return [
      {
        phase: 'Phase 1',
        title: 'User Research & Discovery',
        description: 'Conducted comprehensive user interviews and market analysis'
      },
      {
        phase: 'Phase 2', 
        title: 'Competitive Analysis',
        description: 'Analyzed existing solutions and identified market opportunities'
      },
      {
        phase: 'Phase 3',
        title: 'Design & Prototyping',
        description: 'Created wireframes, prototypes, and validated design concepts'
      },
      {
        phase: 'Phase 4',
        title: 'Testing & Iteration',
        description: 'Conducted user testing and refined the solution based on feedback'
      }
    ]
  }

  const phases = getResearchPhases()

  return (
    <section className="research-section">
      <div className="container">
        
        <div className="research-header">
          <h2>Research Process</h2>
          <p>
            Our systematic approach to understanding user needs and market requirements.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          
          {/* Central Timeline Line */}
          <div className="timeline-line"></div>

          {/* Timeline Items */}
          <div className="timeline-items">
            {phases.map((phase, index) => (
              <div key={index} className="timeline-item">
                
                {/* Timeline Node */}
                <div className="timeline-node"></div>

                {/* Content */}
                <div className="timeline-content">
                  <div className="timeline-card">
                    
                    <div className="timeline-phase">
                      {phase.phase}
                    </div>
                    
                    <h3>{phase.title}</h3>
                    
                    <p>{phase.description}</p>

                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

export default ResearchSection