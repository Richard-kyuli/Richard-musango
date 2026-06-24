Act as an expert Frontend Developer and UI/UX Designer. I need to refactor the "Project Goals" section of my React Case Study page using Tailwind CSS. 

I want to replace the current generic numbered cards with a modern, icon-based card layout. To keep the design cohesive and minimalist, please use a single brand color (orange) for all icons instead of multiple colors.

Please generate the updated `ProjectGoalsSection` React component using the exact specifications below. Use inline SVGs for icons (do not use external icon libraries).

### 1. Section Layout & Header
- **Background:** `bg-gray-50 py-20 md:py-24`
- **Container:** `max-w-6xl mx-auto px-6 md:px-8`
- **Header:** Centered text. 
  - Heading: `text-3xl md:text-4xl font-bold text-gray-900 mb-4`
  - Subtitle: `text-lg text-gray-600 max-w-2xl mx-auto mb-16`

### 2. Grid Layout
- Use a responsive grid: `grid md:grid-cols-2 lg:grid-cols-4 gap-6`

### 3. Card Design (Single Color Theme)
Each goal should be a card with the following structure:
- **Container:** `bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 group h-full`
- **Icon Container:** 
  - Classes: `w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`
  - **Icon:** Inside the container, place an inline SVG. Classes for the SVG: `w-7 h-7 text-orange-600`
- **Title:** `text-lg font-bold text-gray-900 mb-3`
- **Description:** `text-gray-600 text-sm leading-relaxed`

### 4. Content & Icons to Implement
Please create 4 cards with the following specific content and inline SVGs:

**Card 1: User-Centric Design**
- Icon: Users/People icon. `<svg class="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`
- Title: "User-Centric Design"
- Text: "Launch with enterprise-level operational capabilities from day one to serve 7,000+ employees."

**Card 2: Rapid Growth**
- Icon: Trending Up/Chart icon. `<svg class="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>`
- Title: "Rapid Growth"
- Text: "Enable rapid driver onboarding to build service supply quickly and support 300% growth."

**Card 3: Scalable Architecture**
- Icon: Code/Brackets icon. `<svg class="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>`
- Title: "Scalable Architecture"
- Text: "Build a scalable platform that supports rapid expansion across government agencies."

**Card 4: Operational Efficiency**
- Icon: Checkmark/Success icon. `<svg class="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`
- Title: "Operational Efficiency"
- Text: "Reduce HR administrative burden by 40% through automated self-service processes."

### Technical Requirements:
1. Create this as a functional React component named `ProjectGoalsSection`.
2. Ensure the layout is fully responsive (1 column on mobile, 2 on tablet, 4 on desktop).
3. Use the exact Tailwind classes provided to ensure the hover effects (shadow and icon scaling) work perfectly.

Please generate the complete, clean React code for this section.