function KeyAchievements({ study }) {
  // Get metrics based on case study
  const getMetrics = () => {
    switch(study.id) {
      case 'royal-times':
        return [
          { number: '95%', label: 'Driver onboarding completion' },
          { number: '< 2 hrs', label: 'Customer response time' },
          { number: '300%', label: 'Growth in first year' }
        ]
      case 'buy-sell':
        return [
          { number: '1000+', label: 'Active users launched' },
          { number: '< 2 min', label: 'Average listing time' },
          { number: '4.6★', label: 'User satisfaction rating' }
        ]
      case 'mwalimu-finder':
        return [
          { number: '300+', label: 'Teacher profiles verified' },
          { number: '< 3 weeks', label: 'Reduced hiring time' },
          { number: '50+', label: 'Partner schools' }
        ]
      case 'nannies':
        return [
          { number: '5000+', label: 'Nannies verified' },
          { number: '< 7 days', label: 'Average time-to-hire' },
          { number: '4.7★', label: 'Platform rating' }
        ]
      default:
        return [
          { number: '95%', label: 'User satisfaction' },
          { number: '< 2 hrs', label: 'Response time' },
          { number: '300%', label: 'Performance improvement' }
        ]
    }
  }

  // Get achievements from case study data
  const getAchievements = () => {
    if (study.outcome && study.outcome.impact) {
      return study.outcome.impact.slice(0, 6)
    }
    
    // Default achievements
    return [
      'Successfully launched with enterprise-level operational capabilities',
      'Achieved 95% driver onboarding completion rate within first 3 months',
      'Established 24/7 operational monitoring from day one of service launch',
      'Reduced customer complaint response time to under 2 hours from launch',
      'Enabled data-driven decision making that accelerated market penetration',
      'Built scalable platform that supported 300% growth in first year'
    ]
  }

  const metrics = getMetrics()
  const achievements = getAchievements()

  return (
    <section style={{ 
      backgroundColor: '#f9fafb', 
      paddingTop: '5rem', 
      paddingBottom: '5rem',
      borderTop: '1px solid #e5e7eb'
    }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>
            Key Achievements
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#4b5563', maxWidth: '42rem', margin: '0 auto 3rem' }}>
            Measurable outcomes that demonstrate the success and value of our solution.
          </p>
        </div>

        {/* Part A: Metric Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          {metrics.map((metric, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: 'white',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb',
                padding: '2rem',
                textAlign: 'center',
                boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0px)'
              }}
            >
              <div style={{ 
                fontSize: '3rem', 
                fontWeight: 'bold', 
                color: '#059669', 
                marginBottom: '0.5rem',
                letterSpacing: '-0.025em'
              }}>
                {metric.number}
              </div>
              <div style={{ 
                fontSize: '0.875rem', 
                color: '#4b5563', 
                fontWeight: '500',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Part B: Achievement Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
          gap: '1.5rem'
        }}>
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: 'white',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb',
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                transition: 'box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = '0 1px 2px 0 rgb(0 0 0 / 0.05)'
              }}
            >
              {/* Icon Container */}
              <div style={{
                width: '2.5rem',
                height: '2.5rem',
                backgroundColor: '#dcfce7',
                borderRadius: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: '0'
              }}>
                {/* Checkmark SVG */}
                <svg 
                  style={{ width: '1.25rem', height: '1.25rem', color: '#059669' }}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2.5" 
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              
              {/* Achievement Text */}
              <p style={{
                color: '#374151',
                lineHeight: '1.625',
                fontWeight: '500'
              }}>
                {achievement}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default KeyAchievements