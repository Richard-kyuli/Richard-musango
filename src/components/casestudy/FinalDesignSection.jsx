import React from 'react'

function FinalDesignSection({ study }) {
  
  // Get project-specific screens based on study ID
  const getProjectScreens = (studyId) => {
    switch(studyId) {
      case 'royal-times':
        return [
          {
            id: 1,
            badge: "DASHBOARD",
            title: "Real-Time Operations Dashboard",
            description: "Comprehensive command center for monitoring live rides, driver locations, and fleet performance. The dashboard provides instant visibility into all operations with interactive maps and real-time data feeds.",
            features: ["Live ride tracking", "Fleet monitoring", "Performance analytics"],
            image: "/RoyalTimes/Dashboard.png",
            alignment: "left",
            deviceType: "desktop"
          },
          {
            id: 2,
            badge: "ANALYTICS",
            title: "Business Intelligence Suite", 
            description: "Advanced analytics platform providing insights into revenue patterns, driver performance, and operational efficiency. Data visualization helps make informed business decisions for competitive advantage.",
            features: ["Revenue analytics", "Driver insights", "Market trends"],
            image: "/RoyalTimes/Analytics.png",
            alignment: "right",
            deviceType: "desktop"
          },
          {
            id: 3,
            badge: "MANAGEMENT",
            title: "Driver & Fleet Management",
            description: "Comprehensive driver onboarding, performance tracking, and fleet optimization tools. Streamlined workflows for managing growing driver network and vehicle fleet efficiently.",
            features: ["Driver onboarding", "Performance tracking", "Fleet optimization"],
            image: "/RoyalTimes/Drivers.png",
            alignment: "left",
            deviceType: "desktop"
          },
          {
            id: 4,
            badge: "CUSTOMERS",
            title: "Customer Support Center",
            description: "Integrated customer service platform for handling inquiries, complaints, and support requests. Tools for maintaining high service quality and customer satisfaction.",
            features: ["Support ticketing", "Customer profiles", "Response tracking"],
            image: "/RoyalTimes/Cutomers.png",
            alignment: "right",
            deviceType: "desktop"
          },
          {
            id: 5,
            badge: "DELIVERY",
            title: "Parcel Delivery Operations",
            description: "Specialized interface for managing parcel delivery services, tracking packages, and optimizing delivery routes. Expanded service offerings beyond ride-hailing.",
            features: ["Package tracking", "Route optimization", "Delivery scheduling"],
            image: "/RoyalTimes/Parcel Delivery.png",
            alignment: "left",
            deviceType: "desktop"
          }
        ];

      case 'buy-sell':
        return [
          {
            id: 1,
            badge: "ONBOARDING",
            title: "Welcome & Authentication",
            description: "Streamlined onboarding process that builds trust from the first interaction. Quick sign-up with social login options and progressive profile completion to reduce friction.",
            features: ["Social login integration", "Quick verification", "Profile setup"],
            image: "/Buysell/Splash.png",
            alignment: "left",
            deviceType: "mobile"
          },
          {
            id: 2,
            badge: "DISCOVERY",
            title: "Smart Product Discovery", 
            description: "AI-powered feed showing personalized recommendations based on user behavior and preferences. Category-based navigation with visual cards for easy browsing.",
            features: ["Personalized feed", "Smart categories", "Visual browsing"],
            image: "/Buysell/Posts2.png",
            alignment: "right",
            deviceType: "mobile"
          },
          {
            id: 3,
            badge: "LISTING",
            title: "Easy Product Listing",
            description: "Simplified three-step listing process with photo upload, category selection, and pricing. Progressive disclosure keeps the experience manageable while capturing essential details.",
            features: ["Photo upload", "Auto-categorization", "Smart pricing"],
            image: "/Buysell/Post1.png",
            alignment: "left",
            deviceType: "mobile"
          },
          {
            id: 4,
            badge: "ADMIN",
            title: "Admin Dashboard",
            description: "Comprehensive admin dashboard for managing users, listings, transactions, and platform analytics. Desktop interface for administrators to oversee marketplace operations.",
            features: ["User management", "Content moderation", "Analytics dashboard"],
            image: "/Buysell/Admin/Dashboard.png",
            alignment: "right",
            deviceType: "desktop"
          },
          {
            id: 5,
            badge: "COMMUNICATION",
            title: "In-App Messaging",
            description: "Secure messaging system with offer negotiation, photo sharing, and safety reminders. All communication stays within the platform for accountability and user safety.",
            features: ["Secure messaging", "Offer negotiation", "Photo sharing"],
            image: "/Buysell/Posts4.png",
            alignment: "left",
            deviceType: "mobile"
          }
        ];

      case 'mwalimu-finder':
        return [
          {
            id: 1,
            badge: "JOB POSTING",
            title: "School Job Posting - Step 1",
            description: "Comprehensive job posting workflow starts with basic position details. Schools provide subject area, grade level, and key requirements in an intuitive form design.",
            features: ["Subject selection", "Grade levels", "Position details"],
            image: "/Mwalimu-finder/MF03Post a Job.png",
            alignment: "left",
            deviceType: "mobile"
          },
          {
            id: 2,
            badge: "REQUIREMENTS",
            title: "Teacher Requirements - Step 2", 
            description: "Detailed requirements specification including qualifications, experience level, and special skills. Helps schools attract the right candidates with clear expectations.",
            features: ["Qualification requirements", "Experience criteria", "Skill specifications"],
            image: "/Mwalimu-finder/MF04Post a Job.png",
            alignment: "right",
            deviceType: "mobile"
          },
          {
            id: 3,
            badge: "QUALIFICATIONS",
            title: "Education & Certifications - Step 3",
            description: "Specific education and certification requirements tailored to the position. Integration with teaching certification bodies for verification and validation.",
            features: ["Education requirements", "Certification verification", "Professional credentials"],
            image: "/Mwalimu-finder/MF05Post a Job.png",
            alignment: "left",
            deviceType: "mobile"
          },
          {
            id: 4,
            badge: "COMPENSATION",
            title: "Salary & Benefits - Step 4",
            description: "Transparent salary ranges and comprehensive benefits package details. Helps attract quality candidates by being upfront about compensation structure.",
            features: ["Salary transparency", "Benefits package", "Additional perks"],
            image: "/Mwalimu-finder/MF06Post a Job.png",
            alignment: "right",
            deviceType: "mobile"
          },
          {
            id: 5,
            badge: "COMPLETION",
            title: "Job Posted Successfully",
            description: "Confirmation screen with job posting summary and next steps. Clear call-to-actions for managing applications and candidate pipeline.",
            features: ["Posting confirmation", "Application tracking", "Management tools"],
            image: "/Mwalimu-finder/MF09Post a Job.png",
            alignment: "left",
            deviceType: "mobile"
          }
        ];

      case 'nannies':
        return [
          {
            id: 1,
            badge: "DISCOVERY",
            title: "Nanny Search & Discovery",
            description: "Advanced search interface with filters for location, experience, skills, and availability. Smart matching algorithm suggests the best candidates based on family needs.",
            features: ["Smart matching", "Advanced filters", "Location-based search"],
            image: "/Nannies/MacBook Pro 16_ - 19.png",
            alignment: "left",
            deviceType: "desktop"
          },
          {
            id: 2,
            badge: "PROFILES",
            title: "Verified Nanny Profiles", 
            description: "Comprehensive nanny profiles with verification badges, background checks, certifications, and detailed experience information. Trust indicators prominently displayed.",
            features: ["Background verification", "Certification display", "Experience timeline"],
            image: "/Nannies/MacBook Pro 16_ - 20.png",
            alignment: "right",
            deviceType: "desktop"
          },
          {
            id: 3,
            badge: "MOBILE",
            title: "Mobile Nanny Profiles",
            description: "Mobile-optimized nanny profiles allowing mothers to browse and connect with caregivers on-the-go. Quick access to verification status and key information.",
            features: ["Mobile browsing", "Quick verification", "On-the-go access"],
            image: "/Nannies/MacBook Pro 16_ - 44.png",
            alignment: "left",
            deviceType: "mobile"
          },
          {
            id: 4,
            badge: "ADMIN",
            title: "Admin Management System",
            description: "Robust admin dashboard for managing user verification, content moderation, and platform quality. Tools for maintaining high safety and trust standards.",
            features: ["User verification", "Content moderation", "Quality assurance"],
            image: "/Nannies/Admin.png",
            alignment: "right",
            deviceType: "desktop"
          },
          {
            id: 5,
            badge: "COMMUNICATION",
            title: "Secure Messaging Platform",
            description: "Encrypted messaging system for safe communication between mothers and nannies. Interview scheduling, reference sharing, and contract negotiation.",
            features: ["Encrypted messaging", "Interview scheduling", "Document sharing"],
            image: "/Nannies/MacBook Pro 16_ - 22.png",
            alignment: "left",
            deviceType: "desktop"
          }
        ];

      case 'karibu-kazi':
        return [
          {
            id: 1,
            badge: "OPPORTUNITY",
            title: "Job Discovery Platform",
            description: "Comprehensive job discovery interface showcasing opportunities across 50+ service categories. Dignity-focused design that celebrates skilled work and craftsmanship.",
            features: ["50+ job categories", "Skill-based matching", "Professional profiles"],
            image: "/KaribuKazi/Android Large - 320Post Job emp.png",
            alignment: "left",
            deviceType: "mobile"
          },
          {
            id: 2,
            badge: "APPLICATION",
            title: "Job Application Process", 
            description: "Streamlined application process that allows skilled workers to showcase their expertise and portfolio. Easy-to-use interface designed for mobile-first experience.",
            features: ["Portfolio showcase", "Skill verification", "Quick applications"],
            image: "/KaribuKazi/Android Large - 322Post Job emp.png",
            alignment: "right",
            deviceType: "mobile"
          },
          {
            id: 3,
            badge: "DETAILS",
            title: "Job Details & Requirements",
            description: "Detailed job information with clear requirements, compensation, and project scope. Transparent communication helps workers make informed decisions.",
            features: ["Clear requirements", "Transparent pricing", "Project details"],
            image: "/KaribuKazi/Android Large - 329Post Job emp.png",
            alignment: "left",
            deviceType: "mobile"
          },
          {
            id: 4,
            badge: "PORTFOLIO",
            title: "Worker Portfolio System",
            description: "Professional portfolio platform where skilled workers can showcase completed projects, certifications, and client testimonials. Builds credibility and attracts clients.",
            features: ["Project portfolio", "Client testimonials", "Skill badges"],
            image: "/KaribuKazi/Android Large - 435Post Job emp.png",
            alignment: "right",
            deviceType: "mobile"
          },
          {
            id: 5,
            badge: "SUCCESS",
            title: "Achievement Recognition",
            description: "Recognition system that celebrates quality work and professional growth. Awards, badges, and testimonials that build worker reputation and self-worth.",
            features: ["Achievement badges", "Quality awards", "Professional recognition"],
            image: "/KaribuKazi/Android Large - 436Post Job emp.png",
            alignment: "left",
            deviceType: "mobile"
          }
        ];

      case 'kra-pension-portal':
        return [
          {
            id: 1,
            badge: "DASHBOARD",
            title: "Employee Dashboard Overview",
            description: "Comprehensive self-service portal providing KRA employees with instant access to pension information, claim status, and account management tools.",
            features: ["Pension overview", "Claim tracking", "Account management"],
            image: "/KRASSP/MacBook Pro 16_ - 21.png",
            alignment: "left",
            deviceType: "desktop"
          },
          {
            id: 2,
            badge: "CLAIMS",
            title: "Pension Claims Management", 
            description: "Streamlined claims processing interface that reduced average processing time from 6 weeks to 3 weeks through digital workflows and real-time tracking.",
            features: ["Digital claims", "Real-time tracking", "Status updates"],
            image: "/KRASSP/MacBook Pro 16_ - 22.png",
            alignment: "right",
            deviceType: "desktop"
          },
          {
            id: 3,
            badge: "DOCUMENTS",
            title: "Document Management System",
            description: "Secure document upload and management system with verification workflows. Employees can submit required documents and track approval status digitally.",
            features: ["Document upload", "Verification tracking", "Secure storage"],
            image: "/KRASSP/MacBook Pro 16_ - 23.png",
            alignment: "left",
            deviceType: "desktop"
          },
          {
            id: 4,
            badge: "CALCULATOR",
            title: "Pension Calculator Tools",
            description: "Interactive pension calculation tools helping employees understand benefits, project retirement income, and make informed financial planning decisions.",
            features: ["Benefit calculator", "Projection tools", "Financial planning"],
            image: "/KRASSP/MacBook Pro 16_ - 24.png",
            alignment: "right",
            deviceType: "desktop"
          },
          {
            id: 5,
            badge: "SUPPORT",
            title: "Self-Service Help Center",
            description: "Comprehensive help system with FAQs, tutorials, and support ticket management. Reduced HR inquiries by 75% through accessible self-service options.",
            features: ["FAQ system", "Video tutorials", "Support tickets"],
            image: "/KRASSP/MacBook Pro 16_ - 25.png",
            alignment: "left",
            deviceType: "desktop"
          }
        ];

      default:
        // Fallback to placeholder images if study ID not recognized
        return [
          {
            id: 1,
            badge: "ONBOARDING",
            title: "User Onboarding Experience",
            description: "Streamlined onboarding flow that guides users through account setup and introduces key features with progressive disclosure and intuitive design patterns.",
            features: ["Account setup", "Feature introduction", "Progressive onboarding"],
            image: "https://placehold.co/320x640/f8fafc/1e293b?text=Onboarding+Flow",
            alignment: "left",
            deviceType: "mobile"
          },
          {
            id: 2,
            badge: "DISCOVERY",
            title: "Content Discovery Interface", 
            description: "Advanced search and filtering capabilities with personalized recommendations, enabling users to efficiently find relevant content and opportunities.",
            features: ["Advanced search", "Smart filters", "Personalized recommendations"],
            image: "https://placehold.co/320x640/f8fafc/1e293b?text=Search+%26+Filters",
            alignment: "right",
            deviceType: "mobile"
          },
          {
            id: 3,
            badge: "PROFILES",
            title: "User Profile Management",
            description: "Comprehensive profile system with verification, portfolio showcase, and reputation building features that establish trust and credibility.",
            features: ["Profile verification", "Portfolio showcase", "Reputation system"],
            image: "https://placehold.co/320x640/f8fafc/1e293b?text=Profile+Management",
            alignment: "left",
            deviceType: "mobile"
          },
          {
            id: 4,
            badge: "COMMUNICATION",
            title: "Messaging & Communication",
            description: "Secure communication platform with real-time messaging, file sharing, and collaboration tools that facilitate seamless user interactions.",
            features: ["Real-time messaging", "File sharing", "Collaboration tools"],
            image: "https://placehold.co/320x640/f8fafc/1e293b?text=Messaging+Platform",
            alignment: "right",
            deviceType: "mobile"
          },
          {
            id: 5,
            badge: "ANALYTICS",
            title: "Analytics & Insights",
            description: "Comprehensive analytics dashboard providing actionable insights, performance metrics, and data visualization for informed decision making.",
            features: ["Performance metrics", "Data visualization", "Actionable insights"],
            image: "https://placehold.co/320x640/f8fafc/1e293b?text=Analytics+Dashboard",
            alignment: "left",
            deviceType: "desktop"
          }
        ];
    }
  }

  const screens = getProjectScreens(study?.id)

  const CheckmarkIcon = () => (
    <svg 
      className="w-4 h-4 text-green-500" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2" 
        d="M5 13l4 4L19 7"
      />
    </svg>
  )

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Final Design Screens
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A complete user journey showcasing the key screens that deliver our solution. 
            Each screen is carefully crafted to guide users through a seamless experience.
          </p>
        </div>

        {/* Zig-Zag Screen Items */}
        <div>
          {screens.map((screen, index) => (
            <div 
              key={screen.id}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                screen.alignment === 'right' ? 'md:flex-row-reverse' : ''
              } ${index === screens.length - 1 ? '' : 'mb-20'}`}
            >
              {/* Content Column */}
              <div className="flex-1">
                <span className="bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block uppercase tracking-wide">
                  {screen.badge}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {screen.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {screen.description}
                </p>
                <ul className="space-y-2">
                  {screen.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckmarkIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Device Mockup Column */}
              <div className="flex-1 flex justify-center">
                {screen.deviceType === 'mobile' ? (
                  /* Mobile Device Mockup */
                  <div className="bg-gray-900 p-3 rounded-[2.5rem] shadow-2xl w-[280px] relative">
                    {/* Mobile Notch */}
                    <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-[140px] h-7 bg-gray-900 rounded-b-[20px] z-10"></div>
                    {/* Screen Container */}
                    <div className="bg-gray-100 rounded-[2rem] overflow-hidden">
                      <img 
                        src={screen.image}
                        alt={screen.title}
                        className="w-full h-auto rounded-[1.4rem]"
                      />
                    </div>
                    {/* Home Indicator */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[134px] h-1 bg-white bg-opacity-40 rounded-full"></div>
                  </div>
                ) : (
                  /* Desktop/Browser Mockup */
                  <div className="shadow-2xl rounded-xl overflow-hidden border border-gray-200 max-w-[600px] w-full">
                    {/* Browser Chrome */}
                    <div className="bg-gray-50 px-4 py-3 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#28ca42]"></div>
                    </div>
                    {/* Screen */}
                    <img 
                      src={screen.image}
                      alt={screen.title}
                      className="w-full h-auto"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FinalDesignSection