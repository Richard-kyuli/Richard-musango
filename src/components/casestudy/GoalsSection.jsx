function GoalsSection({ study }) {
  const goals = [
    {
      icon: (
        <svg className="w-12 h-12" fill="#ea580c" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      ),
      category: "DESIGN",
      title: "User-Centric Design",
      description: "Launch with enterprise-level operational capabilities from day one to serve 7,000+ employees."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="#ea580c" viewBox="0 0 24 24">
          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
        </svg>
      ),
      category: "STRATEGY", 
      title: "Rapid Growth",
      description: "Enable rapid driver onboarding to build service supply quickly and support 300% growth."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="#ea580c" viewBox="0 0 24 24">
          <path d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
        </svg>
      ),
      category: "ENGINEERING",
      title: "Scalable Architecture", 
      description: "Build a scalable platform that supports rapid expansion across government agencies."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="#ea580c" viewBox="0 0 24 24">
          <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
        </svg>
      ),
      category: "OPERATIONS",
      title: "Operational Efficiency",
      description: "Reduce HR administrative burden by 40% through automated self-service processes."
    }
  ]

  const handleCardHover = (e, isHovering) => {
    if (isHovering) {
      e.currentTarget.style.transform = 'translateY(-8px)'
      e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.2)'
      const title = e.currentTarget.querySelector('.goal-title')
      const icon = e.currentTarget.querySelector('.goal-icon')
      if (title) title.style.color = '#ea580c'
      if (icon) icon.style.transform = 'scale(1.05)'
    } else {
      e.currentTarget.style.transform = 'translateY(0px)'
      e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.12)'
      const title = e.currentTarget.querySelector('.goal-title')
      const icon = e.currentTarget.querySelector('.goal-icon')
      if (title) title.style.color = '#111827'
      if (icon) icon.style.transform = 'scale(1)'
    }
  }

  return (
    <section style={{ 
      padding: '80px 16px 96px 16px', 
      backgroundColor: '#f9fafb' 
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto' 
      }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            color: '#111827', 
            marginBottom: '16px',
            lineHeight: '1.2'
          }}>
            🚀 NEW DESIGN - Project Goals
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#6b7280', 
            maxWidth: '600px', 
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Our strategic objectives focused on delivering measurable impact and long-term value.
          </p>
        </div>

        {/* Goals Grid - Matching case studies design */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px'
        }}>
          {goals.map((goal, index) => (
            <div 
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'column', 
                backgroundColor: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
                transition: 'all 0.3s ease-in-out',
                border: '1px solid #f3f4f6',
                height: '100%',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              {/* Icon Area - Similar to case study image area */}
              <div style={{
                width: '100%',
                aspectRatio: '16 / 10',
                background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '24px',
                overflow: 'hidden'
              }}>
                {/* Category Tag */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  padding: '6px 8px',
                  borderRadius: '6px',
                  fontSize: '0.65rem',
                  fontWeight: '600',
                  color: '#6b7280',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  border: '1px solid rgba(255, 255, 255, 0.3)'
                }}>
                  {goal.category}
                </div>
                
                {/* Icon */}
                <div 
                  className="goal-icon"
                  style={{
                    filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.15))',
                    transition: 'transform 0.3s ease-in-out'
                  }}
                >
                  {goal.icon}
                </div>
              </div>

              {/* Content Area */}
              <div style={{
                padding: '20px',
                flex: 1,
                display: 'flex',
                flexDirection: 'column'
              }}>
                <h3 
                  className="goal-title"
                  style={{
                    fontSize: '1.25rem',
                    marginBottom: '8px',
                    color: '#111827',
                    lineHeight: '1.3',
                    fontWeight: '600',
                    transition: 'color 0.3s ease-in-out'
                  }}
                >
                  {goal.title}
                </h3>
                
                <p style={{
                  fontSize: '0.9rem',
                  color: '#6b7280',
                  lineHeight: '1.5',
                  marginTop: 'auto'
                }}>
                  {goal.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default GoalsSection