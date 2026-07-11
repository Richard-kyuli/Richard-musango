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
            description: "Main dashboard displaying active rides overview with live statistics, interactive map showing driver locations and ongoing trips, key performance metrics including total rides, active drivers, and revenue. Quick access navigation menu for all system modules.",
            features: ["Active rides counter", "Live location map", "Performance metrics cards"],
            image: "/RoyalTimes/Dashboard.png",
            alignment: "left",
            deviceType: "desktop"
          },
          {
            id: 2,
            badge: "ANALYTICS",
            title: "Business Intelligence & Analytics", 
            description: "Comprehensive analytics view featuring revenue charts, driver performance graphs, and operational trends. Visual data representations including bar charts, line graphs, and statistical summaries for data-driven decision making.",
            features: ["Revenue trend charts", "Driver statistics", "Performance graphs"],
            image: "/RoyalTimes/Analytics.png",
            alignment: "right",
            deviceType: "desktop"
          },
          {
            id: 3,
            badge: "DRIVERS",
            title: "Driver Management Interface",
            description: "Complete driver management screen showing driver list with verification status, performance ratings, and activity status. Table view with driver profiles, vehicle information, earnings, and action buttons for driver management and onboarding.",
            features: ["Driver list table", "Status indicators", "Management actions"],
            image: "/RoyalTimes/Drivers.png",
            alignment: "left",
            deviceType: "desktop"
          },
          {
            id: 4,
            badge: "CUSTOMERS",
            title: "Customer Management Dashboard",
            description: "Customer database interface displaying user profiles, ride history, and account status. Comprehensive table showing customer details, registration dates, trip counts, ratings, and customer support tools for account management.",
            features: ["Customer data table", "Profile details", "Account actions"],
            image: "/RoyalTimes/Cutomers.png",
            alignment: "right",
            deviceType: "desktop"
          },
          {
            id: 5,
            badge: "DELIVERY",
            title: "Parcel Delivery Management",
            description: "Dedicated delivery operations screen showing parcel tracking interface with package status, delivery routes on map, courier assignments, and delivery timeline. Management tools for coordinating package pickups and drop-offs.",
            features: ["Parcel tracking list", "Delivery map view", "Status updates"],
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
              badge: "HOME FEED",
              title: "Product Discovery Feed",
              description: "Mobile home screen displaying grid of product listings with images, prices, and locations. Featured items carousel at top, category filter tabs, and scrollable product cards showing item photos, titles, pricing, and seller locations.",
              features: ["Product grid view", "Price tags", "Location badges"],
              image: "/Buysell/Posts1.png",
              alignment: "left",
              deviceType: "mobile"
            },
            {
              id: 2,
              badge: "CATEGORY VIEW",
              title: "Product Category Browse",
              description: "Category browsing interface showing product listings organized by category. List view with product thumbnails, titles, condition badges, prices, and quick filter options for sorting by price, condition, and distance.",
              features: ["Category filters", "List layout", "Sort options"],
              image: "/Buysell/Posts2.png",
              alignment: "right",
              deviceType: "mobile"
            },
            {
              id: 3,
              badge: "POST ITEM",
              title: "Create New Listing",
              description: "Product listing creation screen with photo upload area, title input field, category selection dropdown, price input, condition selector, description text area, and location picker. Shop/Business toggle option visible at top.",
              features: ["Photo upload", "Form fields", "Category picker"],
              image: "/Buysell/Post+shop.png",
              alignment: "left",
              deviceType: "mobile"
            },
            {
              id: 4,
              badge: "AD PACKAGES",
              title: "Boost Your Listing",
              description: "Listing promotion screen displaying available ad package options with pricing cards. Featured listing, premium placement, and boost packages shown with benefits, duration, and pricing. Package selection interface with upgrade buttons.",
              features: ["Package cards", "Pricing tiers", "Feature comparison"],
              image: "/Buysell/Posts-option.png",
              alignment: "right",
              deviceType: "mobile"
            },
            {
              id: 5,
              badge: "CONFIRMATION",
              title: "Listing Published Successfully",
              description: "Success confirmation screen with checkmark icon, congratulations message, listing preview card, and action buttons to view listing, share to social media, or create another listing. Listing status and visibility information displayed.",
              features: ["Success indicator", "Listing preview", "Share options"],
              image: "/Buysell/Posts-success.png",
              alignment: "left",
              deviceType: "mobile"
            }
          ],
          admin: [
            {
              id: 1,
              badge: "OVERVIEW",
              title: "Admin Dashboard",
              description: "Main admin dashboard showing key metrics in cards: total users, active listings, revenue, and transactions. Charts displaying platform activity trends, recent listings table, and quick action buttons for platform management tasks.",
              features: ["Metrics cards", "Activity charts", "Recent items table"],
              image: "/Buysell/Admin/Dashboard.png",
              alignment: "left",
              deviceType: "desktop"
            },
            {
              id: 2,
              badge: "USER DATABASE",
              title: "User Management Panel",
              description: "User management interface with searchable data table showing user profiles, registration dates, listing counts, verification status badges, and action buttons. Filters for user status, verification level, and activity. Bulk actions toolbar available.",
              features: ["User data table", "Status filters", "Action buttons"],
              image: "/Buysell/Admin/Users.png",
              alignment: "right",
              deviceType: "desktop"
            },
            {
              id: 3,
              badge: "MODERATION",
              title: "Listings Management",
              description: "Product listings moderation screen with table view showing listing images, titles, sellers, prices, status tags, and moderation actions. Filtering by pending review, approved, rejected, and flagged listings. Bulk approve/reject functionality.",
              features: ["Listings table", "Status indicators", "Moderation tools"],
              image: "/Buysell/Admin/Product-Listing.png",
              alignment: "left",
              deviceType: "desktop"
            },
            {
              id: 4,
              badge: "TAXONOMY",
              title: "Category Management",
              description: "Category hierarchy management interface showing tree view of product categories and subcategories. Add/edit/delete category options, category icons, listing counts per category, and drag-and-drop reordering functionality.",
              features: ["Category tree", "Edit controls", "Listing counts"],
              image: "/Buysell/Admin/Category.png",
              alignment: "right",
              deviceType: "desktop"
            },
            {
              id: 5,
              badge: "REVENUE",
              title: "Financial Dashboard",
              description: "Financial management screen displaying revenue charts, transaction history table, ad package sales summary, and payment statistics. Revenue breakdown by category, payment methods, and date ranges with export functionality.",
              features: ["Revenue graphs", "Transaction log", "Financial reports"],
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
              badge: "STEP 1",
              title: "Job Position Details",
              description: "Job posting form showing subject selection dropdown, grade level checkboxes, position type selector, and required qualifications input fields. Progress indicator shows Step 1 of multi-step process with 'Continue' button at bottom.",
              features: ["Subject dropdown", "Grade checkboxes", "Position fields"],
              image: "/Mwalimu-finder/MF03Post a Job.png",
              alignment: "left",
              deviceType: "mobile"
            },
            {
              id: 2,
              badge: "STEP 2",
              title: "Teacher Requirements", 
              description: "Requirements screen with form fields for minimum years of experience, teaching certifications needed, language proficiency selectors, and special skills checkboxes. Back and Continue navigation buttons with step progress bar.",
              features: ["Experience input", "Certification list", "Skills checklist"],
              image: "/Mwalimu-finder/MF04Post a Job.png",
              alignment: "right",
              deviceType: "mobile"
            },
            {
              id: 3,
              badge: "STEP 3",
              title: "Education Requirements",
              description: "Education qualifications form displaying minimum degree level selector, required certifications dropdown, TSC registration requirement toggle, and additional credentials text area. Multi-step progress indicator and navigation controls.",
              features: ["Degree selector", "TSC registration", "Credentials input"],
              image: "/Mwalimu-finder/MF05Post a Job.png",
              alignment: "left",
              deviceType: "mobile"
            },
            {
              id: 4,
              badge: "STEP 4",
              title: "Compensation Details",
              description: "Salary and benefits screen with salary range slider, currency selector, payment frequency dropdown, benefits checklist (housing, medical, transport), and additional perks text field. Clear compensation breakdown display.",
              features: ["Salary range slider", "Benefits checkboxes", "Perks field"],
              image: "/Mwalimu-finder/MF06Post a Job.png",
              alignment: "right",
              deviceType: "mobile"
            },
            {
              id: 5,
              badge: "COMPLETE",
              title: "Job Posting Success",
              description: "Success confirmation screen with checkmark icon, job posting summary card showing position details, success message, and action buttons to 'View Job Posting', 'Post Another Job', and 'Manage Applications'. Job ID and publication timestamp displayed.",
              features: ["Success checkmark", "Job summary", "Action buttons"],
              image: "/Mwalimu-finder/MF09Post a Job.png",
              alignment: "left",
              deviceType: "mobile"
            }
          ],
          admin: [
            {
              id: 1,
              badge: "VERIFICATION",
              title: "Teacher Credential Verification",
              description: "Admin verification interface showing teacher profile with uploaded documents, TSC certificate viewer, education credential checklist, and verification status toggles. Approve/Reject buttons with notes field for verification decisions.",
              features: ["Document viewer", "Verification checklist", "Approval actions"],
              image: "/Mwalimu-finder/MF07Post a Job.png",
              alignment: "left",
              deviceType: "mobile"
            },
            {
              id: 2,
              badge: "APPLICATIONS",
              title: "Application Pipeline Management",
              description: "Application management dashboard showing job listings with applicant counts, filter options by status (pending, shortlisted, interviewed), applicant cards with teacher profiles, and workflow actions to move candidates through hiring stages.",
              features: ["Job listings", "Applicant cards", "Status filters"],
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
              badge: "STEP 1",
              title: "Create Your Account",
              description: "Account creation screen with welcome message, email/phone input field, password creation with strength indicator, profile type selector (Mother/Guardian), and sign-up button. Social login options and terms agreement checkbox visible.",
              features: ["Email/phone input", "Password field", "Sign-up button"],
              image: "/Nannies/1.png",
              alignment: "left",
              deviceType: "desktop"
            },
            {
              id: 2,
              badge: "STEP 2",
              title: "Family Information",
              description: "Family profile form showing input fields for parent/guardian name, number of children with age selectors, home address with location picker, contact information, and preferred language selection. Progress bar indicates Step 2 of 6.",
              features: ["Name fields", "Children count", "Address picker"],
              image: "/Nannies/2.png",
              alignment: "right",
              deviceType: "desktop"
            },
            {
              id: 3,
              badge: "STEP 3",
              title: "Childcare Needs & Schedule",
              description: "Requirements screen with care type checkboxes (full-time, part-time, occasional), schedule calendar picker, start date selector, special needs or requirements text area, and household tasks checkboxes if applicable.",
              features: ["Care type options", "Schedule picker", "Requirements field"],
              image: "/Nannies/3.png",
              alignment: "left",
              deviceType: "desktop"
            },
            {
              id: 4,
              badge: "STEP 4",
              title: "Safety & Verification Requirements",
              description: "Safety preferences screen showing background check requirements toggle, reference checks selector, first aid certification requirement, vaccination status requirement, and additional safety preferences. Priority level indicators for each requirement.",
              features: ["Background check toggle", "Certification requirements", "Safety preferences"],
              image: "/Nannies/4.png",
              alignment: "right",
              deviceType: "desktop"
            },
            {
              id: 5,
              badge: "STEP 5",
              title: "Budget & Payment Preferences",
              description: "Compensation screen displaying hourly/monthly rate slider, payment frequency dropdown (weekly, bi-weekly, monthly), payment method options, and additional benefits willing to offer checkboxes. Budget calculator showing estimated costs.",
              features: ["Rate slider", "Payment frequency", "Benefits options"],
              image: "/Nannies/5.png",
              alignment: "left",
              deviceType: "desktop"
            },
            {
              id: 6,
              badge: "COMPLETE",
              title: "Profile Complete - Start Browsing",
              description: "Onboarding completion screen with success animation, profile summary card, recommended nanny matches preview cards, and prominent 'Browse Nannies' button. Options to refine preferences or get smart recommendations.",
              features: ["Success animation", "Profile summary", "Browse button"],
              image: "/Nannies/6.png",
              alignment: "right",
              deviceType: "desktop"
            }
          ],
          admin: [
            {
              id: 1,
              badge: "OVERVIEW",
              title: "Admin Control Panel",
              description: "Main admin dashboard displaying metrics cards for total nannies, active families, pending verifications, and recent matches. Quick stats charts, recent activity feed, and navigation menu to all admin functions.",
              features: ["Metrics cards", "Activity feed", "Quick stats"],
              image: "/Nannies/Admin.png",
              alignment: "left",
              deviceType: "desktop"
            },
            {
              id: 2,
              badge: "VERIFICATION",
              title: "Nanny Verification Queue",
              description: "Verification dashboard showing nanny applications pending review with profile photos, documents uploaded, verification status checklist (ID, background check, references, certifications), and approve/reject/request more info actions.",
              features: ["Application queue", "Document viewer", "Verification actions"],
              image: "/Nannies/Admin1.png",
              alignment: "right",
              deviceType: "desktop"
            },
            {
              id: 3,
              badge: "MODERATION",
              title: "Content & Profile Moderation",
              description: "Moderation interface with flagged profiles table, reported content cards, review status filters, profile preview panel, and moderation actions (approve, remove, suspend, warn). Notes field for moderation decisions.",
              features: ["Flagged items list", "Content preview", "Moderation tools"],
              image: "/Nannies/Admin2.png",
              alignment: "left",
              deviceType: "desktop"
            },
            {
              id: 4,
              badge: "INSIGHTS",
              title: "Platform Analytics Dashboard",
              description: "Analytics screen featuring user growth charts, matching success rate graphs, verification completion statistics, popular search criteria data, and platform engagement metrics. Date range selector and export options available.",
              features: ["Growth charts", "Success metrics", "Engagement data"],
              image: "/Nannies/admin3.png",
              alignment: "right",
              deviceType: "desktop"
            },
            {
              id: 5,
              badge: "SUPPORT",
              title: "Support Ticket Management",
              description: "Support dashboard showing open tickets table with priority badges, ticket details panel, conversation history, status updates dropdown, canned response library, and resolution tracking. Filter by ticket type and priority level.",
              features: ["Tickets table", "Conversation view", "Response tools"],
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
              badge: "JOB FEED",
              title: "Browse Job Opportunities",
              description: "Mobile job feed displaying available opportunities with job cards showing service category icons, job titles, location pins, pay rates, and urgency badges. Filter tabs for category, location, and pay range at top. Quick apply buttons on each card.",
              features: ["Job cards", "Category filters", "Quick apply"],
              image: "/KaribuKazi/Android Large - 320Post Job emp.png",
              alignment: "left",
              deviceType: "mobile"
            },
            {
              id: 2,
              badge: "APPLICATION",
              title: "Job Application Form", 
              description: "Application screen showing job details summary at top, application form with worker availability selector, expected pay input, cover message text area, portfolio attachments option, and submit application button. Estimated response time indicator visible.",
              features: ["Job summary", "Application form", "Portfolio upload"],
              image: "/KaribuKazi/Android Large - 322Post Job emp.png",
              alignment: "right",
              deviceType: "mobile"
            },
            {
              id: 3,
              badge: "POST JOB",
              title: "Create Job Posting",
              description: "Employer job posting form with service category dropdown, job title field, detailed description text area, required skills checkboxes, location picker, payment amount input, urgency level selector, and post job button. Character count for description field.",
              features: ["Category selector", "Details form", "Payment input"],
              image: "/KaribuKazi/Android Large - 329Post Job emp.png",
              alignment: "left",
              deviceType: "mobile"
            },
            {
              id: 4,
              badge: "PORTFOLIO",
              title: "Worker Profile & Portfolio",
              description: "Worker profile page displaying profile photo, name, service categories, star rating, completed jobs counter, photo gallery of past work projects, skills badges, client reviews section, and contact/hire button. Verification status badge visible.",
              features: ["Profile header", "Project gallery", "Reviews section"],
              image: "/KaribuKazi/Android Large - 435Post Job emp.png",
              alignment: "right",
              deviceType: "mobile"
            },
            {
              id: 5,
              badge: "ACHIEVEMENTS",
              title: "Recognition & Milestones",
              description: "Achievement screen showing earned badges for quality work, milestone celebrations (10 jobs, 50 jobs, etc.), skill level indicators, top worker badges, client testimonials, and achievement progress bars. Share achievements button at bottom.",
              features: ["Achievement badges", "Milestone cards", "Progress indicators"],
              image: "/KaribuKazi/Android Large - 436Post Job emp.png",
              alignment: "left",
              deviceType: "mobile"
            }
          ],
          admin: [
            {
              id: 1,
              badge: "DASHBOARD",
              title: "Platform Management Dashboard",
              description: "Admin dashboard showing key metrics: total workers, active jobs, completed projects, platform revenue. Real-time activity feed, pending verifications counter, recent registrations list, and quick access navigation to all admin modules.",
              features: ["Metrics overview", "Activity feed", "Quick actions"],
              image: "/KaribuKazi/Admin/Brands Home.png",
              alignment: "left",
              deviceType: "desktop"
            },
            {
              id: 2,
              badge: "VERIFICATION",
              title: "Worker Credential Verification",
              description: "Verification interface displaying worker applications with profile details, uploaded ID documents, skill certification viewer, work history review, and verification checklist. Approve, reject, or request additional documents buttons with admin notes field.",
              features: ["Application review", "Document viewer", "Verification actions"],
              image: "/KaribuKazi/Admin/Brands Home-1.png",
              alignment: "right",
              deviceType: "desktop"
            },
            {
              id: 3,
              badge: "MODERATION",
              title: "Content & Job Moderation",
              description: "Moderation dashboard with flagged job postings table, reported worker profiles, moderation queue with priority sorting, content preview panel, policy violation indicators, and moderation actions (approve, remove, warn, suspend). Moderation notes and history.",
              features: ["Flagged content", "Review queue", "Moderation tools"],
              image: "/KaribuKazi/Admin/Brands Home-2.png",
              alignment: "left",
              deviceType: "desktop"
            },
            {
              id: 4,
              badge: "ANALYTICS",
              title: "Platform Performance Analytics",
              description: "Analytics dashboard featuring job posting trends chart, worker activity graphs, matching success rate metrics, category popularity data, geographic heat maps, and user engagement statistics. Custom date range selector and CSV export option.",
              features: ["Trend charts", "Success metrics", "Geographic data"],
              image: "/KaribuKazi/Admin/Brands Home-3.png",
              alignment: "right",
              deviceType: "desktop"
            },
            {
              id: 5,
              badge: "PARTNERS",
              title: "Brand & Partnership Management",
              description: "Partnership management interface showing active brand partnerships table, partner onboarding workflow, partnership tier levels, revenue sharing dashboard, partner performance metrics, and communication tools. Contract management and renewal tracking.",
              features: ["Partners table", "Tier management", "Performance stats"],
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
            badge: "HOME",
            title: "Employee Dashboard Overview",
            description: "Main dashboard displaying employee welcome header with photo, pension balance summary card, recent contribution history table, upcoming payment schedule, quick action buttons (view statements, file claim, update profile), and notifications panel. Navigation sidebar for all portal sections.",
            features: ["Balance summary", "Contribution history", "Quick actions"],
            image: "/KRASSP/MacBook Pro 16_ - 21.png",
            alignment: "left",
            deviceType: "desktop"
          },
          {
            id: 2,
            badge: "CLAIMS",
            title: "Claims Submission & Tracking", 
            description: "Claims management interface showing active claims list with status badges, claim submission form with document upload, claim type selector (retirement, withdrawal, loan), amount calculator, submission timeline, and claim status tracker. Pending, approved, and completed claims tabs.",
            features: ["Claim form", "Status tracker", "Document upload"],
            image: "/KRASSP/MacBook Pro 16_ - 22.png",
            alignment: "right",
            deviceType: "desktop"
          },
          {
            id: 3,
            badge: "DOCUMENTS",
            title: "Document Management Center",
            description: "Document repository showing categorized folders (ID documents, payslips, certificates, beneficiary forms), upload interface with drag-and-drop, document preview panel, verification status icons, and document actions (view, download, delete, share). File size and format indicators.",
            features: ["Document folders", "Upload interface", "Preview panel"],
            image: "/KRASSP/MacBook Pro 16_ - 23.png",
            alignment: "left",
            deviceType: "desktop"
          },
          {
            id: 4,
            badge: "CALCULATOR",
            title: "Pension Benefits Calculator",
            description: "Interactive calculator tool with input fields for current age, retirement age, monthly contributions, and years of service. Real-time calculation results showing projected pension amount, lump sum estimate, and monthly payout forecast. Comparison charts and retirement planning guidance.",
            features: ["Input fields", "Calculation results", "Projection charts"],
            image: "/KRASSP/MacBook Pro 16_ - 24.png",
            alignment: "right",
            deviceType: "desktop"
          },
          {
            id: 5,
            badge: "HELP",
            title: "Self-Service Support Center",
            description: "Help center interface with searchable FAQ database, category browsing (claims, contributions, documents, benefits), tutorial videos player, contact support form with ticket submission, live chat widget, and downloadable user guides. Recent support tickets section with status updates.",
            features: ["FAQ search", "Video tutorials", "Support tickets"],
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