function ResultsSection({ study }) {
  return (
    <section style={{ backgroundColor: '#ffffff', padding: '80px 0 96px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '16px', lineHeight: '1.2' }}>
            Results & Impact
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '512px', margin: '0 auto' }}>
            Measurable outcomes that demonstrate the success and value of our solution.
          </p>
        </div>

        {/* Top Row: Featured Metric + Stakeholder Quote */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr', 
          gap: '24px', 
          marginBottom: '24px'
        }}>
          
          <style>{`
            @media (min-width: 768px) {
              .top-row-grid {
                grid-template-columns: 3fr 2fr !important;
              }
            }
          `}</style>
          
          <div className="top-row-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr', 
            gap: '24px'
          }}>
          
            {/* Featured Metric */}
            <div style={{ 
              background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
              borderRadius: '16px',
              padding: '40px',
              color: 'white',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
            }}>
              {/* Decorative Circle */}
              <div style={{
                position: 'absolute',
                right: '-40px',
                top: '-40px',
                width: '160px',
                height: '160px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%'
              }} />
              
              <div style={{ position: 'relative', zIndex: 10 }}>
                <div style={{
                  color: '#fed7aa',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  marginBottom: '8px'
                }}>
                  TOTAL REACH
                </div>
                <div style={{
                  fontSize: '4rem',
                  fontWeight: 'bold',
                  marginBottom: '16px',
                  letterSpacing: '-0.025em',
                  lineHeight: '1'
                }}>
                  7,000+
                </div>
                <div style={{
                  fontSize: '1.125rem',
                  color: '#fed7aa',
                  maxWidth: '336px',
                  lineHeight: '1.625'
                }}>
                  KRA employees successfully onboarded and served nationwide within the first 6 months.
                </div>
              </div>
            </div>

            {/* Stakeholder Quote */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              border: '1px solid #e5e7eb',
              padding: '40px',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              {/* Quote Icon */}
              <div style={{
                fontSize: '3rem',
                color: '#fed7aa',
                fontFamily: 'Manrope, serif',
                lineHeight: '1',
                marginBottom: '16px'
              }}>
                "
              </div>
              
              {/* Quote Text */}
              <p style={{
                color: '#374151',
                fontSize: '1.125rem',
                fontStyle: 'italic',
                lineHeight: '1.625',
                marginBottom: '24px'
              }}>
                Richard's design leadership as part of the contracted team completely transformed how our staff handles pension inquiries. The 75% drop in support tickets was a game-changer.
              </p>
              
              {/* Author */}
              <div>
                <div style={{ fontWeight: '600', color: '#111827' }}>Jane Doe</div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Head of HR Operations, KRA</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Asymmetric Metric Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Before & After Card */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            border: '1px solid #e5e7eb',
            padding: '32px',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
          }}>
            <div style={{
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: '#6b7280',
              fontWeight: '600',
              marginBottom: '16px'
            }}>
              CLAIM PROCESSING TIME
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <span style={{
                fontSize: '2rem',
                color: '#9ca3af',
                textDecoration: 'line-through',
                fontWeight: '500'
              }}>
                6 weeks
              </span>
              <span style={{ color: '#d1d5db', fontSize: '1.25rem' }}>→</span>
              <span style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: '#16a34a'
              }}>
                3 weeks
              </span>
            </div>
            
            <p style={{
              fontSize: '0.875rem',
              color: '#6b7280',
              marginTop: '8px'
            }}>
              Average time reduced by 50%
            </p>
          </div>

          {/* 4 Metric Cards in a Horizontal Row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px'
          }}>
            {/* Metric Card 1 */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              border: '1px solid #e5e7eb',
              padding: '24px',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
              transition: 'box-shadow 0.3s ease'
            }}>
              <div style={{
                fontSize: '4rem',
                fontWeight: 'bold',
                color: '#111827',
                marginBottom: '8px',
                lineHeight: '1'
              }}>
                75%
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: '#6b7280',
                fontWeight: '500',
                lineHeight: '1.25'
              }}>
                Reduction in HR inquiries
              </div>
            </div>

            {/* Metric Card 2 */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              border: '1px solid #e5e7eb',
              padding: '24px',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
              transition: 'box-shadow 0.3s ease'
            }}>
              <div style={{
                fontSize: '4rem',
                fontWeight: 'bold',
                color: '#111827',
                marginBottom: '8px',
                lineHeight: '1'
              }}>
                89%
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: '#6b7280',
                fontWeight: '500',
                lineHeight: '1.25'
              }}>
                Employee adoption rate (Year 1)
              </div>
            </div>

            {/* Metric Card 3 */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              border: '1px solid #e5e7eb',
              padding: '24px',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
              transition: 'box-shadow 0.3s ease'
            }}>
              <div style={{
                fontSize: '4rem',
                fontWeight: 'bold',
                color: '#111827',
                marginBottom: '8px',
                lineHeight: '1'
              }}>
                95%
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: '#6b7280',
                fontWeight: '500',
                lineHeight: '1.25'
              }}>
                User satisfaction rating
              </div>
            </div>

            {/* Metric Card 4 */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              border: '1px solid #e5e7eb',
              padding: '24px',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
              transition: 'box-shadow 0.3s ease'
            }}>
              <div style={{
                fontSize: '4rem',
                fontWeight: 'bold',
                color: '#111827',
                marginBottom: '8px',
                lineHeight: '1'
              }}>
                40%
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: '#6b7280',
                fontWeight: '500',
                lineHeight: '1.25'
              }}>
                Reduction in admin costs
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ResultsSection