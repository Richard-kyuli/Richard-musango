function LessonsLearned({ study }) {
  const lessons = study.outcome && study.outcome.learnings ? 
    study.outcome.learnings.slice(0, 6) : 
    [
      'Startups can compete effectively with comprehensive operational tools from launch',
      'Real-time visibility is crucial for establishing service credibility quickly',
      'Efficient driver onboarding directly impacts service supply and growth rate',
      'Integrated analytics enable rapid optimization in competitive markets',
      'Scalable architecture is essential for startups planning rapid growth',
      'Professional operational interface builds confidence with early stakeholders'
    ]

  return (
    <section style={{ backgroundColor: 'white', paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>
            Lessons Learned
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#4b5563', maxWidth: '42rem', margin: '0 auto 3rem' }}>
            Key insights and learnings that will inform future projects and design decisions.
          </p>
        </div>

        {/* Lessons Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {lessons.map((lesson, index) => (
            <div 
              key={index} 
              style={{
                backgroundColor: 'white',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb',
                padding: '2rem',
                boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'box-shadow 0.3s ease',
                minHeight: '200px'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'
              }}
            >
              {/* Background Number */}
              <div style={{
                position: 'absolute',
                right: '-1rem',
                top: '-1rem',
                fontSize: '6rem',
                fontWeight: 'bold',
                color: '#f3f4f6',
                userSelect: 'none',
                pointerEvents: 'none',
                zIndex: '1'
              }}>
                {String(index + 1).padStart(2, '0')}
              </div>
              
              {/* Lesson Text */}
              <p style={{
                color: '#374151',
                lineHeight: '1.625',
                fontWeight: '500',
                position: 'relative',
                zIndex: '10'
              }}>
                {lesson}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default LessonsLearned