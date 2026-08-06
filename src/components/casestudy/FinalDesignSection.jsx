import React, { useState } from 'react'

function FinalDesignSection({ study }) {
  const [activeTab, setActiveTab] = useState('user') // For buy-sell tabs
  
  // Get flow description based on study ID and tab
  const getFlowDescription = (studyId, tab = 'user') => {
    const flowDescriptions = {
      'royal-times': {
        flow: 'Admin Dashboard Flow',
        purpose: 'Enabling efficient fleet management through real-time monitoring, driver management, and operational analytics.'
      },
      'buy-sell': {
        user: {
          flow: 'Product Listing Flow',
          purpose: 'Guiding sellers through a streamlined 7-step process to create and publish product listings with photos, pricing, and contact details.'
        },
        admin: {
          flow: 'Admin Management Flow',
          purpose: 'Providing platform administrators with tools to manage users, moderate listings, and monitor platform health and revenue.'
        }
      },
      'mwalimu-finder': {
        user: {
          flow: 'School Job Posting Flow',
          purpose: 'Enabling schools to create comprehensive job postings with qualifications, responsibilities, and application requirements to attract qualified teachers.'
        },
        admin: {
          flow: 'Admin Management Flow',
          purpose: 'Providing platform oversight with tools to verify schools and teachers, manage job postings, and track platform financial metrics.'
        }
      },
      'nannies': {
        user: {
          flow: 'Mummy Profile Creation Flow',
          purpose: 'Guiding mothers through creating detailed profiles including service needs, preferences, household details, and budget to find matching nannies.'
        },
        admin: {
          flow: 'Admin Management Flow',
          purpose: 'Managing platform operations including nanny onboarding, mummy accounts, offer tracking, and commission monitoring.'
        }
      },
      'karibu-kazi': {
        user: {
          flow: 'Employer Job Posting Flow',
          purpose: 'Enabling employers to post jobs with detailed descriptions, budgets, and locations, then publish to skilled workers on the platform.'
        },
        admin: {
          flow: 'Admin Dashboard Flow',
          purpose: 'Providing comprehensive platform oversight including subscriptions, worker/employer management, job tracking, and profession categories.'
        }
      },
      'kra-pension-portal': {
        flow: 'Pension Management Flow',
        purpose: 'Enabling KRA employees to access and manage their pension information including contributions, payouts, beneficiaries, and help resources.'
      }
    };

    const desc = flowDescriptions[studyId];
    if (!desc) return { flow: 'User Flow', purpose: 'Showcasing the key screens that deliver our solution.' };
    
    // Handle case studies with tabs (user/admin flows)
    if (desc.user && desc.admin) {
      return tab === 'admin' ? desc.admin : desc.user;
    }
    
    return desc;
  };
  
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
              badge: "MY SHOP",
              title: "Store Product Listings",
              description: "Store dashboard showing current product listings count and overview. Orange plus icon button prominently displayed to initiate new product posting. Store owner can view their existing products and quickly add new items to the marketplace.",
              features: ["Product count display", "Orange plus button", "Listings overview"],
              image: "/Buysell/1.png",
              alignment: "left",
              deviceType: "mobile"
            },
            {
              id: 2,
              badge: "CATEGORY",
              title: "Category & Subcategory Selection",
              description: "Category selection screen where users choose the main category and subcategory for their product. Hierarchical selection interface allowing sellers to accurately categorize their items for better discoverability.",
              features: ["Category picker", "Subcategory options", "Hierarchical selection"],
              image: "/Buysell/2.png",
              alignment: "right",
              deviceType: "mobile"
            },
            {
              id: 3,
              badge: "DETAILS",
              title: "Price Type & Product Description",
              description: "Product details screen showing price type selector and description fields. Sellers can specify pricing options and provide detailed product information to attract potential buyers.",
              features: ["Price type selector", "Description field", "Product details input"],
              image: "/Buysell/3.png",
              alignment: "left",
              deviceType: "mobile"
            },
            {
              id: 4,
              badge: "IMAGES",
              title: "Product Images, Price & Condition",
              description: "Image upload screen where users can add product photos, set the price, and specify the current condition of the item being listed. Multiple image upload support with price input and condition selector.",
              features: ["Image upload", "Price input", "Condition selector"],
              image: "/Buysell/4.png",
              alignment: "right",
              deviceType: "mobile"
            },
            {
              id: 5,
              badge: "LOCATION",
              title: "Location & WhatsApp Contact",
              description: "Contact information screen showing location picker and WhatsApp contact details for the store. Buyers can see where the product is located and how to reach the seller via WhatsApp.",
              features: ["Location picker", "WhatsApp contact", "Store details"],
              image: "/Buysell/5.png",
              alignment: "left",
              deviceType: "mobile"
            },
            {
              id: 6,
              badge: "SUCCESS",
              title: "Product Listed Successfully",
              description: "Success overlay confirmation message indicating the product has been successfully listed on the marketplace. Notification confirms the listing is now live and visible to buyers.",
              features: ["Success message", "Confirmation overlay", "Listing confirmation"],
              image: "/Buysell/6.png",
              alignment: "right",
              deviceType: "mobile"
            },
            {
              id: 7,
              badge: "OPTIONS",
              title: "Publish, Edit or Delete Options",
              description: "Action overlay showing options to publish the product listing, edit product details, or delete the draft. Sellers can review their choices before making the listing live or make final adjustments.",
              features: ["Publish button", "Edit option", "Delete option"],
              image: "/Buysell/7.png",
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
              badge: "OPTIONS",
              title: "Job Posting Options",
              description: "Options of whether to post a previous job, drafts, or a new job post. This initial screen gives schools flexibility to reuse previous job postings or start fresh.",
              features: ["Previous jobs", "Draft posts", "New job option"],
              image: "/Mwalimu-finder/1.png",
              alignment: "left",
              deviceType: "mobile"
            },
            {
              id: 2,
              badge: "STEP 1",
              title: "Job Title", 
              description: "Job title input field. Schools enter the specific teaching position they are hiring for in this step of the job posting flow.",
              features: ["Job title input", "Position name", "Teaching role"],
              image: "/Mwalimu-finder/2.png",
              alignment: "right",
              deviceType: "mobile"
            },
            {
              id: 3,
              badge: "STEP 2",
              title: "Teacher Qualifications",
              description: "Teacher qualifications required for the job. This screen captures the educational and professional credentials needed from applicants.",
              features: ["Qualification requirements", "Education criteria", "Professional credentials"],
              image: "/Mwalimu-finder/3.png",
              alignment: "left",
              deviceType: "mobile"
            },
            {
              id: 4,
              badge: "STEP 3",
              title: "Duties and Responsibilities",
              description: "Duties and responsibilities input fields of the teacher when they get the job. Schools define the specific tasks and expectations for the teaching position.",
              features: ["Duties input", "Responsibilities field", "Role expectations"],
              image: "/Mwalimu-finder/4.png",
              alignment: "right",
              deviceType: "mobile"
            },
            {
              id: 5,
              badge: "STEP 4",
              title: "Application Requirements",
              description: "Application requirements (minimum requirements & additional requirements). Schools specify what documents and qualifications teachers must submit when applying.",
              features: ["Minimum requirements", "Additional requirements", "Application criteria"],
              image: "/Mwalimu-finder/5.png",
              alignment: "left",
              deviceType: "mobile"
            },
            {
              id: 6,
              badge: "STEP 5",
              title: "Application Instructions",
              description: "Application instructions (Deadline & how to apply). Schools set the application deadline and provide clear instructions on the application process.",
              features: ["Application deadline", "How to apply", "Submission instructions"],
              image: "/Mwalimu-finder/6.png",
              alignment: "right",
              deviceType: "mobile"
            },
            {
              id: 7,
              badge: "CONFIRM",
              title: "Confirm Contacts",
              description: "School to confirm contacts before posting the job for teachers to apply. Final verification step to ensure correct contact information is displayed to potential applicants.",
              features: ["Contact verification", "Final review", "Publish job"],
              image: "/Mwalimu-finder/7.png",
              alignment: "left",
              deviceType: "mobile"
            }
          ],
          admin: [
            {
              id: 1,
              badge: "LOGIN",
              title: "Admin Login",
              description: "Login screen where the admins log in to the dashboard. Secure authentication entry point for platform administrators.",
              features: ["Admin login", "Secure access", "Authentication"],
              image: "/Mwalimu-finder/Admin/A1.png",
              alignment: "left",
              deviceType: "mobile"
            },
            {
              id: 2,
              badge: "SCHOOLS",
              title: "Schools Management",
              description: "Schools screen shows list of schools in the platform and the jobs each school has posted, location of the school, and contact information. Comprehensive school management interface.",
              features: ["School list", "Posted jobs", "Location and contacts"],
              image: "/Mwalimu-finder/Admin/A2.png",
              alignment: "right",
              deviceType: "mobile"
            },
            {
              id: 3,
              badge: "TEACHERS",
              title: "Teachers Database",
              description: "Teachers screen shows list of teachers in the platform, experience, institution level each teacher can teach in, location, job views, profile status, profile impressions and many more. The admin can add a teacher to the platform.",
              features: ["Teacher list", "Experience tracking", "Profile analytics"],
              image: "/Mwalimu-finder/Admin/A3.png",
              alignment: "left",
              deviceType: "mobile"
            },
            {
              id: 4,
              badge: "MANAGE POSTS",
              title: "Manage Job Posts",
              description: "Manage posts screen gives a list of jobs posted by schools with their details, and admins can manage them. Central hub for overseeing all job postings on the platform.",
              features: ["Job posts list", "Post details", "Management tools"],
              image: "/Mwalimu-finder/Admin/A4.png",
              alignment: "right",
              deviceType: "mobile"
            },
            {
              id: 5,
              badge: "FINANCES",
              title: "Financial Overview",
              description: "Finances screen gives an overview of the financial status of the platform. Shows total revenue from payment packages of job post, job views, profile posts and profile views.",
              features: ["Revenue tracking", "Payment packages", "Financial metrics"],
              image: "/Mwalimu-finder/Admin/A5.png",
              alignment: "left",
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
              title: "Nanny Service Selection",
              description: "What nanny service is the mammy looking for. Choose between Nanny for childcare, Nanny for the elderly, or Nanny for special needs. This initial screen helps direct mothers to the right type of care.",
              features: ["Childcare option", "Elderly care option", "Special needs option"],
              image: "/Nannies/1.png",
              alignment: "left",
              deviceType: "desktop"
            },
            {
              id: 2,
              badge: "STEP 2",
              title: "Personal Profile Creation",
              description: "Create personal profile for mammy with required data in the input fields. This screen captures essential information about the mother/guardian to create their account.",
              features: ["Personal information", "Required fields", "Profile data"],
              image: "/Nannies/2.png",
              alignment: "right",
              deviceType: "desktop"
            },
            {
              id: 3,
              badge: "STEP 3",
              title: "Cultural Preferences",
              description: "Preference in terms of religion and tribe. This screen allows mothers to specify cultural and religious preferences for their nanny match.",
              features: ["Religion preference", "Tribe preference", "Cultural matching"],
              image: "/Nannies/3.png",
              alignment: "left",
              deviceType: "desktop"
            },
            {
              id: 4,
              badge: "STEP 4",
              title: "Residence Description",
              description: "Describing the residence - who the mammy stays with, number of kids and their age range, number of adults in residence. Provides context about the home environment for potential nannies.",
              features: ["Household members", "Kids and age range", "Adults count"],
              image: "/Nannies/4.png",
              alignment: "right",
              deviceType: "desktop"
            },
            {
              id: 5,
              badge: "STEP 5",
              title: "Budget and Location",
              description: "Mammy sets budget and adds their location. This screen captures the financial expectations and geographic details for matching purposes.",
              features: ["Budget setting", "Location input", "Geographic preferences"],
              image: "/Nannies/5.png",
              alignment: "left",
              deviceType: "desktop"
            },
            {
              id: 6,
              badge: "STEP 6",
              title: "Google Sign Up",
              description: "After the profile is created they need to sign up with Google. Mammies need convenience because they tend to forget passwords easily, so Google authentication provides a simple and secure login method.",
              features: ["Google sign-up", "Easy authentication", "Password-free login"],
              image: "/Nannies/6.png",
              alignment: "right",
              deviceType: "desktop"
            }
          ],
          admin: [
            {
              id: 1,
              badge: "LOGIN",
              title: "Admin Login",
              description: "Login screen where administrators access the platform dashboard. Secure authentication entry point for admin users.",
              features: ["Admin authentication", "Secure login", "Dashboard access"],
              image: "/Nannies/A1.png",
              alignment: "left",
              deviceType: "desktop"
            },
            {
              id: 2,
              badge: "NANNIES",
              title: "Nannies List",
              description: "List of nannies onboarded on the platform. Comprehensive view of all registered nannies with their details and status for management purposes.",
              features: ["Nannies database", "Onboarding status", "Profile management"],
              image: "/Nannies/A2.png",
              alignment: "right",
              deviceType: "desktop"
            },
            {
              id: 3,
              badge: "MUMMIES",
              title: "Mummies Management",
              description: "Mummies list on the platform and manage them by either adding or deleting. Administrative control over mother/guardian accounts on the platform.",
              features: ["Mummies list", "Add mummies", "Delete accounts"],
              image: "/Nannies/A3.png",
              alignment: "left",
              deviceType: "desktop"
            },
            {
              id: 4,
              badge: "OFFERS",
              title: "Offers Platform",
              description: "Offers on the platform made by the mummies to the nannies on board. Tracks all job offers, proposals, and matches between mothers and nannies.",
              features: ["Active offers", "Offer tracking", "Match management"],
              image: "/Nannies/A4.png",
              alignment: "right",
              deviceType: "desktop"
            },
            {
              id: 5,
              badge: "FINANCES",
              title: "Financial Overview",
              description: "Finances - commissions made from paid offers. Shows the platform's revenue generated from successful matches and transactions.",
              features: ["Commission tracking", "Revenue overview", "Payment analytics"],
              image: "/Nannies/A5.png",
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
              badge: "STEP 1",
              title: "Job Title and Description",
              description: "User fills in job title and job description. This is the first step in the employer's job posting flow where they define the basic details of the position they're hiring for.",
              features: ["Job title input", "Job description text area", "Basic job details"],
              image: "/KaribuKazi/p1.png",
              alignment: "left",
              deviceType: "mobile"
            },
            {
              id: 2,
              badge: "STEP 2",
              title: "Location, Date and Budget", 
              description: "User fills in the job location, start date, and estimated budget for the job. This screen captures the practical details needed for workers to assess the opportunity.",
              features: ["Location picker", "Start date selector", "Budget input"],
              image: "/KaribuKazi/p2.png",
              alignment: "right",
              deviceType: "mobile"
            },
            {
              id: 3,
              badge: "STEP 3",
              title: "Confirm Job Post Details",
              description: "User confirms job post details before publishing. This review screen allows employers to verify all the information they've entered is correct before making the job live.",
              features: ["Job details review", "Confirmation screen", "Edit option"],
              image: "/KaribuKazi/p3.png",
              alignment: "left",
              deviceType: "mobile"
            },
            {
              id: 4,
              badge: "EDIT",
              title: "Edit Job Details",
              description: "User can edit the job details after clicking the edit button on the previous screen. Provides flexibility to make changes before final publication.",
              features: ["Edit job form", "Modify details", "Update information"],
              image: "/KaribuKazi/p4.png",
              alignment: "right",
              deviceType: "mobile"
            },
            {
              id: 5,
              badge: "PUBLISH",
              title: "Publish Job Post",
              description: "Publish the job post by either 'Post and Invite top workers contracted before' or 'Post without inviting'. Gives employers the option to reach out to their preferred workers directly or open the job to all platform workers.",
              features: ["Publish options", "Invite workers", "Post job"],
              image: "/KaribuKazi/p5.png",
              alignment: "left",
              deviceType: "mobile"
            }
          ],
          admin: [
            {
              id: 1,
              badge: "DASHBOARD",
              title: "Dashboard",
              description: "Dashboard screen gives user quick view of subscriptions, ongoing jobs, employers on the platform, workers on the platform, and subscription graphs. Provides comprehensive overview of platform health and activity.",
              features: ["Subscription metrics", "Jobs overview", "Platform statistics"],
              image: "/KaribuKazi/Admin/1.png",
              alignment: "left",
              deviceType: "desktop"
            },
            {
              id: 2,
              badge: "FINANCES",
              title: "Finances",
              description: "Shows revenue raised from subscriptions (monthly & annually), data of users who have subscribed to the plans (employers & workers). Captures the payment methods of the plans and provides financial insights.",
              features: ["Revenue tracking", "Subscription data", "Payment methods"],
              image: "/KaribuKazi/Admin/2.png",
              alignment: "right",
              deviceType: "desktop"
            },
            {
              id: 3,
              badge: "WORKERS",
              title: "Workers Screen",
              description: "Captures list of workers on the platform with their professions, jobs awarded, location, and contacts. Provides comprehensive worker management capabilities.",
              features: ["Worker list", "Profession details", "Contact information"],
              image: "/KaribuKazi/Admin/3.png",
              alignment: "left",
              deviceType: "desktop"
            },
            {
              id: 4,
              badge: "EMPLOYERS",
              title: "Employers Screen",
              description: "Captures list of employers on the platform with their professions, jobs awarded to workers, location, and contacts. Admin can add an employer directly from this screen.",
              features: ["Employer list", "Job awards tracking", "Add employer capability"],
              image: "/KaribuKazi/Admin/4.png",
              alignment: "right",
              deviceType: "desktop"
            },
            {
              id: 5,
              badge: "JOB POSTS",
              title: "Job Posts Screen",
              description: "Captures the jobs on the platform - either open for bidding, ongoing jobs, completed jobs, or canceled jobs. User can create a job post directly from this management interface.",
              features: ["Job status tracking", "Create job post", "Job management"],
              image: "/KaribuKazi/Admin/5.png",
              alignment: "left",
              deviceType: "desktop"
            },
            {
              id: 6,
              badge: "PROFESSIONS",
              title: "Manage Professions",
              description: "Screen to manage professions on the platform with the skills required in them and number of workers in each profession. User can add new profession or edit an existing one.",
              features: ["Profession management", "Skills mapping", "Add/edit professions"],
              image: "/KaribuKazi/Admin/6.png",
              alignment: "right",
              deviceType: "desktop"
            },
            {
              id: 7,
              badge: "SUBSCRIPTIONS",
              title: "Subscriptions",
              description: "Subscriptions screen where admin can see the plans list and manage them. Provides control over platform subscription tiers and pricing.",
              features: ["Plans list", "Manage subscriptions", "Pricing control"],
              image: "/KaribuKazi/Admin/7.png",
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
            title: "Dashboard",
            description: "Gives the user a quick overview of the cumulative savings, recent contributions, and total monthly contributions. The dashboard provides at-a-glance access to key pension information and account status.",
            features: ["Cumulative savings overview", "Recent contributions", "Monthly contributions total"],
            image: "/KRASSP/1.png",
            alignment: "left",
            deviceType: "desktop"
          },
          {
            id: 2,
            badge: "PAYOUTS",
            title: "Payouts",
            description: "The user can see the total disbursements that he has received from the savings. Shows recent payouts with date, amount, for which period, reference number, and the receiving account.",
            features: ["Total disbursements", "Payout history with dates", "Reference numbers and account details"],
            image: "/KRASSP/2.png",
            alignment: "right",
            deviceType: "desktop"
          },
          {
            id: 3,
            badge: "INBOX",
            title: "Inbox",
            description: "Conversations with the support team are recorded in this screen. Provides a centralized communication hub for users to track their support interactions and receive assistance.",
            features: ["Support conversations", "Message history", "Communication tracking"],
            image: "/KRASSP/3.png",
            alignment: "left",
            deviceType: "desktop"
          },
          {
            id: 4,
            badge: "BENEFICIARIES",
            title: "Beneficiaries",
            description: "Screen shows the list of beneficiaries with their contacts and the percentages they are supposed to receive from the savings. Allows users to manage and review their beneficiary information.",
            features: ["Beneficiary list", "Contact information", "Distribution percentages"],
            image: "/KRASSP/4.png",
            alignment: "right",
            deviceType: "desktop"
          },
          {
            id: 5,
            badge: "RESOURCES",
            title: "Resources",
            description: "Shows where users can access resources like Investment Policy Statement Handbook documents and many others. The resources can be downloaded for reading later, providing important pension information and guidelines.",
            features: ["Investment Policy Statement", "Handbook documents", "Downloadable resources"],
            image: "/KRASSP/5.png",
            alignment: "left",
            deviceType: "desktop"
          },
          {
            id: 6,
            badge: "HELP CENTER",
            title: "Help Center",
            description: "Shows FAQs and Knowledge Base for KRA. It also shows office locations, contacts to the organisation, and socials. Provides comprehensive support resources for users.",
            features: ["FAQs and Knowledge Base", "Office locations", "Contact information and socials"],
            image: "/KRASSP/6.png",
            alignment: "right",
            deviceType: "desktop"
          },
          {
            id: 7,
            badge: "USER PROFILE",
            title: "User Profile",
            description: "Shows information about the user, beneficiaries, and accounts. Centralized location for managing personal information and account settings within the pension portal.",
            features: ["User information", "Beneficiaries overview", "Account management"],
            image: "/KRASSP/7.png",
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
  const flowInfo = getFlowDescription(study.id, activeTab);

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
            <strong style={{ color: '#111827' }}>{flowInfo.flow}:</strong> {flowInfo.purpose}
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
                    <div style={{ backgroundColor: '#1a1a1a', padding: '8px', borderRadius: '30px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', width: '280px', position: 'relative' }}>
                      {/* Mobile Notch */}
                      <div style={{ position: 'absolute', top: '8px', left: '50%', transform: 'translateX(-50%)', width: '140px', height: '28px', backgroundColor: '#1a1a1a', borderRadius: '0 0 20px 20px', zIndex: 10 }}></div>
                      {/* Screen Container */}
                      <div style={{ backgroundColor: '#f3f4f6', borderRadius: '22px', overflow: 'hidden' }}>
                        <img 
                          src={screen.image}
                          alt={screen.title}
                          style={{ width: '100%', height: 'auto', borderRadius: '22px', display: 'block' }}
                        />
                      </div>
                      {/* Home Indicator */}
                      <div style={{ position: 'absolute', bottom: '12px', left: '50%', transform: 'translateX(-50%)', width: '134px', height: '4px', backgroundColor: 'rgba(255, 255, 255, 0.4)', borderRadius: '9999px' }}></div>
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