import React from 'react'

function KeyDesignDecisions({ study }) {
  
  // Get project-specific design decisions based on study ID
  const getDesignDecisions = (studyId) => {
    switch(studyId) {
      case 'royal-times':
        return [
          {
            title: "Real-Time Dashboard Architecture",
            challenge: "How do we provide instant operational visibility without overwhelming new users?",
            decision: "Implemented a modular dashboard with progressive disclosure - essential metrics front and center, detailed analytics one click away.",
            impact: "Operations team could monitor all rides at a glance while drill down for details. Reduced learning curve from 2 weeks to 3 days.",
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            )
          },
          {
            title: "Map-First Interface",
            challenge: "Traditional admin panels are table-heavy. How do we make operations more intuitive?",
            decision: "Placed an interactive map at the center of the dashboard showing live driver locations and ride requests with real-time updates.",
            impact: "Operations staff could visualize fleet deployment instantly. Reduced dispatch decision time by 60%.",
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            )
          },
          {
            title: "Streamlined Driver Onboarding",
            challenge: "Competitor platforms had 15-20 step onboarding processes taking days to complete.",
            decision: "Reduced to 7 essential steps with smart defaults and batch document upload. Background verification runs in parallel.",
            impact: "Average onboarding time dropped from 5 days to 45 minutes. 95% completion rate vs industry average of 60%.",
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            )
          }
        ];

      case 'buy-sell':
        return [
          {
            title: "Three-Step Listing Flow",
            challenge: "Competitor apps had 10+ fields required upfront, causing 70% abandonment.",
            decision: "Reduced to 3 core steps: Photos, Category, Price. Additional details optional and collected progressively as users engage.",
            impact: "Listing completion rate jumped to 92%. Average time to post reduced from 8 minutes to under 2 minutes.",
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            )
          },
          {
            title: "Trust-First Profile Design",
            challenge: "Online marketplaces struggle with trust. How do we build credibility from the first interaction?",
            decision: "Placed verification badges, rating stars, and response time prominently at the top of every profile. Made ID verification free and instant.",
            impact: "Verified users received 4x more inquiries. Transaction completion rate increased by 55%.",
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            )
          },
          {
            title: "In-App Messaging with Safety",
            challenge: "External messaging led to scams. But users resisted forced in-app communication.",
            decision: "Made messaging convenient with push notifications, photo sharing, and offer templates. Added automated safety reminders at key moments.",
            impact: "98% of communication stayed in-app. Reported scam attempts dropped by 80%.",
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            )
          }
        ];

      case 'mwalimu-finder':
        return [
          {
            title: "Mobile-First for Teachers",
            challenge: "Teachers don't sit at desks all day. Desktop-first platforms meant limited job search time.",
            decision: "Built mobile app as primary experience with one-click job applications and push notifications for new opportunities.",
            impact: "85% of teacher applications came from mobile. Average response time improved from days to hours.",
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            )
          },
          {
            title: "Credential-First Profiles",
            challenge: "Schools couldn't quickly assess if teachers met basic requirements from generic profiles.",
            decision: "Restructured profiles to showcase certifications, qualifications, and experience upfront with verification badges. Personal details secondary.",
            impact: "Schools could screen candidates 5x faster. Verified profiles received 340% more profile views.",
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            )
          },
          {
            title: "Subject-Specific Matching",
            challenge: "Generic job boards don't understand education - a Math teacher isn't qualified for English Literature.",
            decision: "Built education-specific filters for subjects, grade levels, curriculum experience, and teaching certifications.",
            impact: "Subject-specific search became #1 used feature. Hiring quality improved - 90% of hires lasted beyond first year.",
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            )
          }
        ];

      case 'nannies':
        return [
          {
            title: "Safety-First Verification",
            challenge: "Childcare is the highest-stakes hiring decision. Trust must be absolute from day one.",
            decision: "Implemented multi-layer verification: government ID check, criminal background check, reference calls, and certification validation. Made verification status highly visible.",
            impact: "95% verification completion rate. Verified nannies received 5x more inquiries and 80% premium pay.",
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            )
          },
          {
            title: "AI-Powered Smart Matching",
            challenge: "Finding the 'right fit' nanny involves 15+ compatibility factors. Manual search overwhelms mothers.",
            decision: "Built matching algorithm analyzing location, experience, skills, schedule, personality, and family preferences. Prioritized compatibility over proximity.",
            impact: "70% of mothers hired from first 3 matches. Average search time dropped from 3 weeks to 5 days.",
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            )
          },
          {
            title: "24/7 Accessible Design",
            challenge: "Working mothers job search during lunch breaks, commutes, late nights - not 9-5.",
            decision: "Optimized for one-handed mobile use with quick-save features, offline browsing, and instant notifications.",
            impact: "88% of activity happened outside business hours. Mobile sessions averaged 8 minutes vs industry 3 minutes.",
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )
          }
        ];

      case 'karibu-kazi':
        return [
          {
            title: "Dignity-Focused Language",
            challenge: "Traditional job platforms use language that diminishes skilled trades - 'casual labor', 'manual work'.",
            decision: "Reframed all copy to celebrate craftsmanship: 'Skilled Professional', 'Master Technician', 'Expert Artisan'. Highlighted years of experience and expertise.",
            impact: "60% of workers reported feeling more respected. Worker engagement increased 3x compared to generic platforms.",
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            )
          },
          {
            title: "Portfolio-First Profiles",
            challenge: "Resumes don't showcase hands-on skills effectively. How do electricians or plumbers show expertise?",
            decision: "Made photo portfolios the centerpiece. Workers upload project photos with before/after comparisons and client testimonials.",
            impact: "Profiles with portfolios received 7x more job offers. Workers with 5+ photos earned 40% premium rates.",
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            )
          },
          {
            title: "Free for Workers, Always",
            challenge: "Competing platforms charged workers 15-30% commission, reducing already-modest incomes.",
            decision: "Made platform completely free for workers. Revenue from employers only. Transparent pricing with no hidden fees.",
            impact: "Zero worker acquisition cost. 5M+ workers signed up in first year. 95% would recommend to fellow workers.",
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )
          }
        ];

      case 'kra-pension-portal':
        return [
          {
            title: "Self-Service First",
            challenge: "7,000 employees calling HR for basic pension information overwhelmed the small team.",
            decision: "Built comprehensive self-service portal where employees can access all information, submit claims, and track status without HR involvement.",
            impact: "75% reduction in HR inquiries. Employees got answers instantly instead of waiting days for callback.",
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )
          },
          {
            title: "Government-Grade Security",
            challenge: "Pension data is highly sensitive. Any security breach would be catastrophic for employee trust.",
            decision: "Implemented military-grade encryption, two-factor authentication, session timeouts, and audit logging for every action.",
            impact: "Zero security incidents in 2 years. Passed government security audits with 100% compliance.",
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            )
          },
          {
            title: "Plain Language Design",
            challenge: "Government systems are notorious for complex jargon that confuses citizens.",
            decision: "Rewrote all content in plain language. Replaced 'pensionable emoluments' with 'salary included in pension'. Added contextual help everywhere.",
            impact: "User comprehension scores jumped from 45% to 92%. Support tickets for 'how does this work' dropped by 85%.",
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            )
          }
        ];

      default:
        return [
          {
            title: "User-Centered Design Approach",
            challenge: "How do we ensure the solution truly meets user needs rather than assumptions?",
            decision: "Conducted extensive user research with 50+ interviews, usability testing with prototypes, and iterative design refinement based on feedback.",
            impact: "Final design achieved 92% user satisfaction and solved core pain points effectively.",
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )
          },
          {
            title: "Mobile-First Responsive Design",
            challenge: "How do we deliver great experience across all devices when mobile usage dominates?",
            decision: "Designed for mobile screens first, then progressively enhanced for tablets and desktops with adaptive layouts and touch-optimized interactions.",
            impact: "Mobile users reported same satisfaction as desktop. 85% of interactions happened on mobile.",
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            )
          },
          {
            title: "Performance Optimization",
            challenge: "How do we maintain fast load times as the application grows in complexity?",
            decision: "Implemented code splitting, lazy loading, image optimization, and efficient state management to keep bundle sizes small and interactions snappy.",
            impact: "Page load under 2 seconds on 3G. 95th percentile interaction time under 100ms.",
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            )
          }
        ];
    }
  }

  const decisions = getDesignDecisions(study?.id)

  return (
    <section className="bg-gray-50 py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Key Design Decisions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Critical choices that shaped the solution and drove measurable impact. 
            Each decision was informed by user research, tested with real users, and validated by results.
          </p>
        </div>

        {/* Decision Cards */}
        <div className="space-y-8">
          {decisions.map((decision, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600">
                  {decision.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {decision.title}
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">
                        Challenge
                      </span>
                      <p className="text-gray-700 mt-1">
                        {decision.challenge}
                      </p>
                    </div>

                    <div>
                      <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">
                        Decision
                      </span>
                      <p className="text-gray-700 mt-1">
                        {decision.decision}
                      </p>
                    </div>

                    <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                      <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">
                        Impact
                      </span>
                      <p className="text-green-800 mt-1 font-medium">
                        {decision.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default KeyDesignDecisions
