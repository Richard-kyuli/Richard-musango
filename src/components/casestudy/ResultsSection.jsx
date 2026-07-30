function ResultsSection({ study }) {
  // Define featured metrics for each case study
  const getFeaturedMetric = (studyId) => {
    const metrics = {
      'royal-times': {
        label: 'ACTIVE DRIVERS',
        value: '150+',
        description: 'Drivers successfully onboarded and managed through the platform within the first 6 months of operation.'
      },
      'buy-sell': {
        label: 'ACTIVE USERS',
        value: '1,000+',
        description: 'Buyers and sellers actively using the marketplace to trade items safely and efficiently.'
      },
      'mwalimu-finder': {
        label: 'SUCCESSFUL MATCHES',
        value: '300+',
        description: 'Teachers successfully matched with schools through the platform in the first year.'
      },
      'nannies': {
        label: 'VERIFIED NANNIES',
        value: '500+',
        description: 'Professional nannies verified and onboarded on the MVP platform within the first 6 months.'
      },
      'karibu-kazi': {
        label: 'SKILLED WORKERS',
        value: '2,500+',
        description: 'Skilled service providers across 50+ categories empowered with professional profiles in the first year.'
      },
      'kra-pension-portal': {
        label: 'TOTAL REACH',
        value: '7,000+',
        description: 'KRA employees successfully onboarded and served nationwide within the first 6 months.'
      }
    };
    
    return metrics[studyId] || metrics['kra-pension-portal'];
  };

  const featuredMetric = getFeaturedMetric(study.id);

  // Define testimonials for specific case studies
  const testimonials = {
    'royal-times': {
      quote: "The operations dashboard has completely transformed how we manage our fleet. Real-time visibility into driver locations and ride status has improved our response times significantly.",
      attribution: "Operations Manager, Royal Times Cab Service"
    },
    'buy-sell': {
      quote: "The streamlined listing process and trusted verification system have made it incredibly easy for our community to buy and sell items. User engagement exceeded our expectations.",
      attribution: "Product Lead, Buy & Sell Platform"
    },
    'mwalimu-finder': {
      quote: "This platform has revolutionized how we recruit teachers. The credential verification and direct application system save us weeks of hiring time while ensuring quality candidates.",
      attribution: "School Administrator, Private School Network"
    },
    'nannies': {
      quote: "The comprehensive verification system gives mothers peace of mind when hiring childcare. The platform has made finding qualified, trustworthy nannies so much easier and faster.",
      attribution: "Platform Manager, Nannies"
    },
    'karibu-kazi': {
      quote: "The dignity-focused design and portfolio showcasing features have empowered our skilled workers. The platform celebrates their craft and connects them with opportunities they deserve.",
      attribution: "Community Liaison, KaribuKazi"
    },
    'kra-pension-portal': {
      quote: "The design leadership as part of the contracted team completely transformed how our staff handles pension inquiries. The 75% drop in support tickets was a game-changer.",
      attribution: "Head of HR Operations, KRA"
    }
  };

  const hasTestimonial = testimonials[study.id];

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
                  {featuredMetric.label}
                </div>
                <div style={{
                  fontSize: '4rem',
                  fontWeight: 'bold',
                  marginBottom: '16px',
                  letterSpacing: '-0.025em',
                  lineHeight: '1'
                }}>
                  {featuredMetric.value}
                </div>
                <div style={{
                  fontSize: '1.125rem',
                  color: '#fed7aa',
                  maxWidth: '336px',
                  lineHeight: '1.625'
                }}>
                  {featuredMetric.description}
                </div>
              </div>
            </div>

            {/* Stakeholder Testimonial - Only show if testimonial exists */}
            {hasTestimonial && (
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
                  {testimonials[study.id].quote}
                </p>
                
                {/* Author - Title Only */}
                <div>
                  <div style={{ fontWeight: '600', color: '#111827', fontSize: '0.875rem' }}>
                    {testimonials[study.id].attribution}
                  </div>
                </div>
              </div>
            )}
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