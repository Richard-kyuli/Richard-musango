import React, { useState } from 'react'

function FinalDesignSection({ study }) {
  const [activeTab, setActiveTab] = useState('user') // For buy-sell tabs
  
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
        return {
          user: [
            {
              id: 1,
              badge: "DISCOVERY",
              title: "Product Discovery Feed",
              description: "Personalized feed showing relevant products based on location, preferences, and browsing history. Smart algorithms surface the best matches for each user.",
              features: ["Personalized recommendations", "Location-based", "Category filters"],
              image: "/Buysell/Posts1.png",
              alignment: "left",
              deviceType: "mobile"
            },
            {
              id: 2,
              badge: "BROWSING",
              title: "Product Browse & Search",
              description: "Intuitive browsing experience with advanced search and filtering. Users can easily find what they're looking for through categories, price ranges, and conditions.",
              features: ["Advanced search", "Smart filters", "Save searches"],
              image: "/Buysell/Posts2.png",
              alignment: "right",
              deviceType: "mobile"
            },
            {
              id: 3,
              badge: "LISTING",
              title: "Create Product Listing",
              description: "Simple three-step process to list items for sale. Upload photos, select category, set price, and publish - all in under 2 minutes.",
              features: ["Quick photo upload", "Auto-categorization", "Smart pricing suggestions"],
              image: "/Buysell/Post+shop.png",
              alignment: "left",
              deviceType: "mobile"
            },
            {
              id: 4,
              badge: "OPTIONS",
              title: "Listing Options & Features",
              description: "Flexible listing options including featured placement, premium ads, and boost visibility. Sellers can choose the best package for their needs.",
              features: ["Promotion options", "Featured listings", "Boost visibility"],
              image: "/Buysell/Posts-option.png",
              alignment: "right",
              deviceType: "mobile"
            },
            {
              id: 5,
              badge: "SUCCESS",
              title: "Listing Published",
              description: "Confirmation screen showing listing is live with immediate visibility metrics. Sellers can track views, favorites, and messages in real-time.",
              features: ["Live confirmation", "View tracking", "Instant notifications"],
              image: "/Buysell/Posts-success.png",
              alignment: "left",
              deviceType: "mobile"
            }
          ],
          admin: [
            {
              id: 1,
              badge: "DASHBOARD",
              title: "Admin Dashboard Overview",
              description: "Comprehensive dashboard providing real-time insights into platform activity, user metrics, and revenue. Quick access to all administrative functions.",
              features: ["Real-time analytics", "User metrics", "Revenue tracking"],
              image: "/Buysell/Admin/Dashboard.png",
              alignment: "left",
              deviceType: "desktop"
            },
            {
              id: 2,
              badge: "USERS",
              title: "User Management",
              description: "Complete user management system for viewing, verifying, and moderating user accounts. Track user activity, handle reports, and manage verification status.",
              features: ["User verification", "Activity tracking", "Account management"],
              image: "/Buysell/Admin/Users.png",
              alignment: "right",
              deviceType: "desktop"
            },
            {
              id: 3,
              badge: "LISTINGS",
              title: "Product Listing Management",
              description: "Moderate and manage all product listings on the platform. Review flagged content, approve/reject listings, and maintain marketplace quality.",
              features: ["Content moderation", "Listing approval", "Quality control"],
              image: "/Buysell/Admin/Product-Listing.png",
              alignment: "left",
              deviceType: "desktop"
            },
            {
              id: 4,
              badge: "CATEGORIES",
              title: "Category Management",
              description: "Organize and manage marketplace categories. Add new categories, update existing ones, and optimize the browsing experience.",
              features: ["Category organization", "Metadata management", "SEO optimization"],
              image: "/Buysell/Admin/Category.png",
              alignment: "right",
              deviceType: "desktop"
            },
            {
              id: 5,
              badge: "FINANCE",
              title: "Financial Management",
              description: "Track platform revenue, manage ad packages, monitor transactions, and generate financial reports. Complete financial oversight in one place.",
              features: ["Revenue tracking", "Transaction history", "Financial reports"],
              image: "/Buysell/Admin/Finances.png",
              alignment: "left",
              deviceType: "desktop"
            }
          ]
        };

      case 'mwalimu-finder':
        return {
          user: [
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
          ],
          admin: [
            {
              id: 1,
              badge: "VERIFICATION",
              title: "Teacher Profile Verification",
              description: "Administrative interface for verifying teacher credentials, certifications, and background checks. Streamlined workflow for credential validation.",
              features: ["Credential verification", "Background checks", "Certification validation"],
              image: "/Mwalimu-finder/MF07Post a Job.png",
              alignment: "left",
              deviceType: "mobile"
            },
            {
              id: 2,
              badge: "MANAGEMENT",
              title: "Application Management",
              description: "Monitor and manage all job applications, track hiring progress, and facilitate school-teacher connections. Complete oversight of the hiring pipeline.",
              features: ["Application tracking", "Match management", "Communication tools"],
              image: "/Mwalimu-finder/MF08Post a Job.png",
              alignment: "right",
              deviceType: "mobile"
            }
          ]
        };

      case 'nannies':
        return {
          user: [
            {
              id: 1,
              badge: "ONBOARDING - STEP 1",
              title: "Welcome & Account Creation",
              description: "User-friendly onboarding process starts with creating an account. Mothers can sign up quickly to begin searching for trusted nannies in their area.",
              features: ["Quick signup", "Profile creation", "Email verification"],
              image: "/Nannies/1.png",
              alignment: "left",
              deviceType: "desktop"
            },
            {
              id: 2,
              badge: "ONBOARDING - STEP 2",
              title: "Personal Information",
              description: "Mothers provide essential information about their family and childcare needs. This helps the platform suggest the most suitable nanny matches.",
              features: ["Family details", "Childcare preferences", "Location setup"],
              image: "/Nannies/2.png",
              alignment: "right",
              deviceType: "desktop"
            },
            {
              id: 3,
              badge: "ONBOARDING - STEP 3",
              title: "Requirements & Preferences",
              description: "Detailed preferences for nanny qualifications, experience, skills, and schedule requirements. Ensures accurate matching with qualified caregivers.",
              features: ["Skill requirements", "Schedule preferences", "Experience level"],
              image: "/Nannies/3.png",
              alignment: "left",
              deviceType: "desktop"
            },
            {
              id: 4,
              badge: "ONBOARDING - STEP 4",
              title: "Background Check Preferences",
              description: "Set verification and safety requirements including background checks, references, and certifications. Platform prioritizes child safety above all.",
              features: ["Background checks", "Reference verification", "Safety standards"],
              image: "/Nannies/4.png",
              alignment: "right",
              deviceType: "desktop"
            },
            {
              id: 5,
              badge: "ONBOARDING - STEP 5",
              title: "Budget & Payment Setup",
              description: "Establish budget range and payment preferences for nanny services. Transparent pricing helps find matches within family's financial comfort zone.",
              features: ["Budget setting", "Payment preferences", "Service packages"],
              image: "/Nannies/5.png",
              alignment: "left",
              deviceType: "desktop"
            },
            {
              id: 6,
              badge: "ONBOARDING - STEP 6",
              title: "Onboarding Complete",
              description: "Profile setup complete! Mothers can now browse verified nanny profiles, receive smart matches, and connect with qualified caregivers for their family.",
              features: ["Profile complete", "Smart recommendations", "Start browsing"],
              image: "/Nannies/6.png",
              alignment: "right",
              deviceType: "desktop"
            }
          ],
          admin: [
            {
              id: 1,
              badge: "DASHBOARD",
              title: "Admin Dashboard",
              description: "Comprehensive admin dashboard for managing platform operations, user verification, and quality control. Real-time monitoring of all platform activities.",
              features: ["Platform overview", "User metrics", "Activity monitoring"],
              image: "/Nannies/Admin.png",
              alignment: "left",
              deviceType: "desktop"
            },
            {
              id: 2,
              badge: "VERIFICATION",
              title: "Nanny Verification System",
              description: "Robust verification workflow for background checks, certification validation, and identity verification. Multi-step approval process ensuring platform safety.",
              features: ["Background checks", "Document verification", "Approval workflow"],
              image: "/Nannies/Admin1.png",
              alignment: "right",
              deviceType: "desktop"
            },
            {
              id: 3,
              badge: "MODERATION",
              title: "Content Moderation",
              description: "Review and moderate user profiles, messages, and reported content. Tools for maintaining high quality and safety standards across the platform.",
              features: ["Profile review", "Content flagging", "Report management"],
              image: "/Nannies/Admin2.png",
              alignment: "left",
              deviceType: "desktop"
            },
            {
              id: 4,
              badge: "ANALYTICS",
              title: "Platform Analytics",
              description: "Detailed analytics and insights into user behavior, matching success rates, and platform performance. Data-driven decision making for platform improvements.",
              features: ["User analytics", "Match statistics", "Performance metrics"],
              image: "/Nannies/admin3.png",
              alignment: "right",
              deviceType: "desktop"
            },
            {
              id: 5,
              badge: "SUPPORT",
              title: "User Support Management",
              description: "Manage user support tickets, handle disputes, and facilitate communication between users. Complete customer service tools for platform administrators.",
              features: ["Ticket management", "Dispute resolution", "User communication"],
              image: "/Nannies/Admin4.png",
              alignment: "left",
              deviceType: "desktop"
            }
          ]
        };

      case 'karibu-kazi':
        return {
          user: [
            {
              id: 1,
              badge: "DISCOVERY",
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
              badge: "JOB POSTING",
              title: "Employer Job Posting",
              description: "Simple job posting interface for employers to list opportunities. Clear form fields for job requirements, compensation, and project details.",
              features: ["Easy job posting", "Clear requirements", "Quick publication"],
              image: "/KaribuKazi/Android Large - 329Post Job emp.png",
              alignment: "left",
              deviceType: "mobile"
            },
            {
              id: 4,
              badge: "PORTFOLIO",
              title: "Worker Portfolio Showcase",
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
          ],
          admin: [
            {
              id: 1,
              badge: "DASHBOARD",
              title: "Admin Dashboard Overview",
              description: "Comprehensive platform management dashboard providing real-time insights into job postings, worker activity, and platform health metrics.",
              features: ["Platform overview", "Activity monitoring", "Real-time metrics"],
              image: "/KaribuKazi/Admin/Brands Home.png",
              alignment: "left",
              deviceType: "desktop"
            },
            {
              id: 2,
              badge: "VERIFICATION",
              title: "Worker Verification System",
              description: "Robust verification workflow for validating worker credentials, skills, and professional background. Multi-step approval process ensuring platform quality.",
              features: ["Credential verification", "Skill validation", "Background checks"],
              image: "/KaribuKazi/Admin/Brands Home-1.png",
              alignment: "right",
              deviceType: "desktop"
            },
            {
              id: 3,
              badge: "MODERATION",
              title: "Content Moderation Tools",
              description: "Review and moderate job postings, worker profiles, and platform content. Maintain quality standards and handle reported issues efficiently.",
              features: ["Content review", "Flagging system", "Quality control"],
              image: "/KaribuKazi/Admin/Brands Home-2.png",
              alignment: "left",
              deviceType: "desktop"
            },
            {
              id: 4,
              badge: "ANALYTICS",
              title: "Platform Analytics & Insights",
              description: "Detailed analytics on platform usage, job matching success rates, and user engagement. Data-driven insights for platform optimization.",
              features: ["Usage analytics", "Match rates", "Engagement metrics"],
              image: "/KaribuKazi/Admin/Brands Home-3.png",
              alignment: "right",
              deviceType: "desktop"
            },
            {
              id: 5,
              badge: "MANAGEMENT",
              title: "User & Brand Management",
              description: "Manage user accounts, brand partnerships, and platform relationships. Tools for onboarding, support, and partnership management.",
              features: ["User management", "Brand partnerships", "Account tools"],
              image: "/KaribuKazi/Admin/Brands Home-4.png",
              alignment: "left",
              deviceType: "desktop"
            }
          ]
        };

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

  const screensData = getProjectScreens(study?.id)
  const hasTabs = study?.id !== 'royal-times' && study?.id !== 'kra-pension-portal' && screensData.user && screensData.admin
  const screens = hasTabs ? (activeTab === 'user' ? screensData.user : screensData.admin) : screensData

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
    <section style={{ backgroundColor: '#f9fafb', paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: hasTabs ? '2rem' : '4rem' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem', lineHeight: '1.2' }}>
            Final Design Screens
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#6b7280', maxWidth: '42rem', margin: '0 auto' }}>
            A complete user journey showcasing the key screens that deliver our solution. 
            Each screen is carefully crafted to guide users through a seamless experience.
          </p>
        </div>

        {/* Tabs for Buy & Sell */}
        {hasTabs && (
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'inline-flex', backgroundColor: '#f3f4f6', borderRadius: '0.5rem', padding: '0.25rem' }}>
              <button
                onClick={() => setActiveTab('user')}
                style={{
                  padding: '0.75rem 2rem',
                  fontSize: '0.9375rem',
                  fontWeight: '600',
                  borderRadius: '0.375rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  backgroundColor: activeTab === 'user' ? 'white' : 'transparent',
                  color: activeTab === 'user' ? '#111827' : '#6b7280',
                  boxShadow: activeTab === 'user' ? '0 1px 3px 0 rgba(0, 0, 0, 0.1)' : 'none'
                }}
              >
                User Screens
              </button>
              <button
                onClick={() => setActiveTab('admin')}
                style={{
                  padding: '0.75rem 2rem',
                  fontSize: '0.9375rem',
                  fontWeight: '600',
                  borderRadius: '0.375rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  backgroundColor: activeTab === 'admin' ? 'white' : 'transparent',
                  color: activeTab === 'admin' ? '#111827' : '#6b7280',
                  boxShadow: activeTab === 'admin' ? '0 1px 3px 0 rgba(0, 0, 0, 0.1)' : 'none'
                }}
              >
                Admin Screens
              </button>
            </div>
          </div>
        )}

        {/* Zig-Zag Screen Items */}
        <div>
          {screens.map((screen, index) => (
            <div 
              key={screen.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '3rem',
                marginBottom: index === screens.length - 1 ? '0' : '5rem'
              }}
            >
              <style>{`
                @media (min-width: 768px) {
                  .screen-layout-${screen.id} {
                    flex-direction: ${screen.alignment === 'right' ? 'row-reverse' : 'row'} !important;
                  }
                }
              `}</style>
              <div className={`screen-layout-${screen.id}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem', width: '100%' }}>
                {/* Content Column */}
                <div style={{ flex: 1 }}>
                  <span style={{ backgroundColor: '#fef7f0', color: '#FF6835', fontSize: '0.75rem', fontWeight: 'bold', padding: '0.25rem 0.75rem', borderRadius: '9999px', marginBottom: '1rem', display: 'inline-block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {screen.badge}
                  </span>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>
                    {screen.title}
                  </h3>
                  <p style={{ color: '#4b5563', lineHeight: '1.625', marginBottom: '1.5rem' }}>
                    {screen.description}
                  </p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', padding: 0, margin: 0 }}>
                    {screen.features.map((feature, featureIndex) => (
                      <li key={featureIndex} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#4b5563' }}>
                        <CheckmarkIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Device Mockup Column */}
                <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                  {screen.deviceType === 'mobile' ? (
                    /* Mobile Device Mockup */
                    <div style={{ backgroundColor: '#1a1a1a', padding: '0.75rem', borderRadius: '2.5rem', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', width: '280px', position: 'relative' }}>
                      {/* Mobile Notch */}
                      <div style={{ position: 'absolute', top: '0.75rem', left: '50%', transform: 'translateX(-50%)', width: '140px', height: '28px', backgroundColor: '#1a1a1a', borderRadius: '0 0 20px 20px', zIndex: 10 }}></div>
                      {/* Screen Container */}
                      <div style={{ backgroundColor: '#f3f4f6', borderRadius: '2rem', overflow: 'hidden' }}>
                        <img 
                          src={screen.image}
                          alt={screen.title}
                          style={{ width: '100%', height: 'auto', borderRadius: '1.4rem', display: 'block' }}
                        />
                      </div>
                      {/* Home Indicator */}
                      <div style={{ position: 'absolute', bottom: '1rem', left: '50%', transform: 'translateX(-50%)', width: '134px', height: '4px', backgroundColor: 'rgba(255, 255, 255, 0.4)', borderRadius: '9999px' }}></div>
                    </div>
                  ) : (
                    /* Desktop/Browser Mockup */
                    <div style={{ boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', borderRadius: '0.75rem', overflow: 'hidden', border: '1px solid #e5e7eb', maxWidth: '600px', width: '100%' }}>
                      {/* Browser Chrome */}
                      <div style={{ backgroundColor: '#f9fafb', padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '9999px', backgroundColor: '#ff5f57' }}></div>
                        <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '9999px', backgroundColor: '#ffbd2e' }}></div>
                        <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '9999px', backgroundColor: '#28ca42' }}></div>
                      </div>
                      {/* Screen */}
                      <img 
                        src={screen.image}
                        alt={screen.title}
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FinalDesignSection