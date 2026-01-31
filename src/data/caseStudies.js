export const caseStudies = [
  {
    id: 'ecommerce-app',
    title: 'E-Commerce Mobile App',
    platform: 'Mobile',
    role: 'Lead UI/UX Designer',
    timeline: '3 months',
    overview: 'Redesigning the shopping experience for a seamless mobile-first platform',
    problem: 'The existing e-commerce app had a high cart abandonment rate (68%) and users complained about a confusing checkout process. Customer support received numerous complaints about difficulty finding products and completing purchases.',
    goals: [
      'Reduce cart abandonment rate by 30%',
      'Improve checkout completion rate',
      'Enhance product discovery',
      'Create a more intuitive navigation system'
    ],
    constraints: [
      'Limited development resources',
      'Tight 3-month deadline',
      'Must maintain existing brand identity',
      'Integration with legacy backend systems'
    ],
    process: {
      research: [
        'Conducted 15 user interviews with existing customers',
        'Analyzed user behavior data and heatmaps',
        'Competitive analysis of 5 leading e-commerce apps',
        'Identified key pain points in the checkout flow'
      ],
      userFlows: 'Created detailed user flows for product discovery, cart management, and checkout process. Mapped out edge cases and error states.',
      wireframes: 'Developed low-fidelity wireframes focusing on simplified navigation and streamlined checkout. Iterated based on stakeholder feedback.',
      uiExploration: 'Explored multiple visual directions while maintaining brand consistency. Created a component library for scalability.'
    },
    solution: 'Implemented a simplified three-step checkout process, enhanced search with filters and smart suggestions, and redesigned the product detail page with better imagery and clear CTAs. Added a persistent cart indicator and one-tap payment options.',
    outcome: {
      impact: [
        'Cart abandonment reduced by 42% (exceeded goal)',
        'Checkout completion rate increased by 35%',
        'Average session duration increased by 28%',
        'Customer satisfaction score improved from 3.2 to 4.5/5'
      ],
      learnings: [
        'Small UX improvements in checkout flow had massive impact on conversion',
        'Users valued speed and simplicity over feature richness',
        'Early prototype testing saved weeks of development time',
        'Close collaboration with developers led to better implementation'
      ]
    },
    tags: ['Mobile Design', 'User Research', 'Prototyping', 'E-commerce']
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Analytics Dashboard',
    platform: 'Web',
    role: 'UI/UX Designer',
    timeline: '4 months',
    overview: 'Data visualization dashboard helping teams make informed decisions',
    problem: 'Business users struggled to extract meaningful insights from complex data. The existing dashboard was cluttered, slow to load, and lacked customization options. Users spent excessive time generating reports manually.',
    goals: [
      'Simplify data visualization for non-technical users',
      'Reduce time to insight by 50%',
      'Enable customizable dashboards',
      'Improve dashboard load time'
    ],
    constraints: [
      'Large amounts of data to display',
      'Diverse user personas with different needs',
      'Must work across different screen sizes',
      'Performance limitations with real-time data'
    ],
    process: {
      research: [
        'Interviewed 20 users across different roles',
        'Conducted card sorting exercises for information architecture',
        'Analyzed usage patterns and most-viewed metrics',
        'Benchmarked against industry-leading analytics tools'
      ],
      userFlows: 'Mapped out different user journeys for various personas (executives, analysts, managers). Identified common tasks and prioritized features.',
      wireframes: 'Created modular wireframe system allowing for customizable layouts. Focused on progressive disclosure of complex data.',
      uiExploration: 'Designed multiple chart types and visualization options. Established a clear visual hierarchy and color system for data representation.'
    },
    solution: 'Built a modular dashboard system with drag-and-drop widgets, customizable views for different user roles, and smart data filtering. Implemented progressive loading and data caching for better performance.',
    outcome: {
      impact: [
        'Time to generate reports reduced by 65%',
        'Dashboard load time improved by 40%',
        'User adoption increased by 80% in first quarter',
        'Support tickets related to reporting decreased by 55%'
      ],
      learnings: [
        'Customization is key for tools used by diverse user groups',
        'Performance optimization is crucial for data-heavy applications',
        'Clear data visualization reduces cognitive load significantly',
        'User testing with real data revealed unexpected use cases'
      ]
    },
    tags: ['Web Design', 'Data Visualization', 'SaaS', 'Dashboard']
  },
  {
    id: 'banking-app',
    title: 'Banking App Redesign',
    platform: 'Mobile',
    role: 'Senior UI/UX Designer',
    timeline: '5 months',
    overview: 'Modern banking experience focused on accessibility and trust',
    problem: 'The banking app had low user ratings (2.8/5) due to outdated interface, accessibility issues, and lack of modern features. Users found it difficult to complete basic tasks and didn\'t trust the security of the app.',
    goals: [
      'Improve app store rating to 4.0+',
      'Meet WCAG 2.1 AA accessibility standards',
      'Modernize visual design while maintaining trust',
      'Reduce task completion time for common actions'
    ],
    constraints: [
      'Strict security and compliance requirements',
      'Must support users aged 18-80+',
      'Cannot disrupt existing user workflows drastically',
      'Limited budget for user testing'
    ],
    process: {
      research: [
        'Conducted accessibility audit of existing app',
        'Interviewed 25 users including elderly and visually impaired',
        'Analyzed customer service calls for common issues',
        'Studied banking regulations and security requirements'
      ],
      userFlows: 'Redesigned core flows for transfers, bill payments, and account management. Simplified multi-step processes and added clear progress indicators.',
      wireframes: 'Created accessible wireframes with proper heading hierarchy, touch target sizes, and color contrast. Tested with screen readers.',
      uiExploration: 'Developed a modern yet trustworthy visual language. Used familiar banking patterns while introducing contemporary design elements.'
    },
    solution: 'Implemented biometric authentication, simplified navigation with bottom tab bar, added quick actions for frequent tasks, and ensured full accessibility compliance. Introduced dark mode and customizable text sizes.',
    outcome: {
      impact: [
        'App store rating improved to 4.3/5',
        'Achieved WCAG 2.1 AA compliance',
        'Task completion time reduced by 45%',
        'Active user base grew by 32% in 6 months'
      ],
      learnings: [
        'Accessibility improvements benefit all users, not just those with disabilities',
        'Trust is built through consistent, predictable interactions',
        'Security features should be convenient, not burdensome',
        'Testing with diverse age groups revealed critical usability issues'
      ]
    },
    tags: ['Mobile', 'Accessibility', 'UX Research', 'Banking']
  }
]
