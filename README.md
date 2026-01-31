# Richard Musango - UI/UX Designer Portfolio

A modern, high-performance portfolio website built with React and Vite, showcasing UI/UX design work with enterprise-level accessibility and performance optimization.

## ✨ Features

- 🎨 **Modern Design System** - Consistent typography, colors, and spacing
- ♿ **WCAG 2.1 AA Compliant** - Full accessibility support
- 🚀 **Optimized Performance** - 70KB JS + 7KB CSS (gzipped)
- 📱 **Fully Responsive** - Mobile-first design
- 🔍 **SEO Optimized** - Meta tags, sitemap, structured data
- ⚡ **Code Splitting** - Lazy loading for optimal performance
- 🎯 **Type-Safe** - Built with modern React patterns

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit http://localhost:5173/

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📦 Deployment to Vercel

### Option 1: GitHub Integration (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel will auto-detect Vite and deploy
6. Your site will be live at `https://your-project.vercel.app`

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts to deploy.

### Environment Variables (Optional)

If you need environment variables:
1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add your variables

## 🎨 Customization

### Update Personal Information

1. **Contact Details** - Update in `src/pages/Contact.jsx`
2. **Resume** - Replace `/public/resume.pdf` with your PDF
3. **Experience** - Edit `src/pages/Resume.jsx`
4. **Case Studies** - Modify `src/data/caseStudies.js`
5. **About Content** - Update `src/pages/About.jsx`

### Update Social Links

Edit the following files:
- `src/pages/Contact.jsx` - Social media cards
- `index.html` - Structured data (JSON-LD)

### Customize Design System

Edit `src/styles/variables.css` to change:
- Colors
- Typography
- Spacing
- Breakpoints
- Shadows and transitions

### Update SEO

1. **Sitemap** - Edit `public/sitemap.xml` with your domain
2. **Robots.txt** - Update `public/robots.txt` with your domain
3. **Meta Tags** - Update SEO component calls in each page

## 📊 Performance

### Build Statistics
- **Build Time**: 1.42s
- **Total JS (gzipped)**: ~70 KB
- **Total CSS (gzipped)**: ~7 KB
- **Code Splitting**: 11 optimized chunks

### Lighthouse Scores (Target)
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

See [PERFORMANCE.md](PERFORMANCE.md) for detailed metrics.

## ♿ Accessibility

Full WCAG 2.1 AA compliance with:
- Keyboard navigation
- Screen reader support
- ARIA attributes
- Focus management
- Color contrast compliance
- Touch-friendly targets (44x44px minimum)

See [ACCESSIBILITY.md](ACCESSIBILITY.md) for details.

## 🛠️ Built With

- **React 18** - UI library
- **Vite 5** - Build tool and dev server
- **React Router 6** - Client-side routing
- **React Helmet Async** - SEO meta tags
- **CSS3** - Styling with design system

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── resume.pdf          # Your resume PDF
│   ├── robots.txt          # Search engine instructions
│   └── sitemap.xml         # Site structure for SEO
├── src/
│   ├── components/         # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── SEO.jsx
│   │   ├── LazyImage.jsx
│   │   └── ContactForm.jsx
│   ├── pages/              # Route pages
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── CaseStudies.jsx
│   │   ├── CaseStudyDetail.jsx
│   │   ├── Resume.jsx
│   │   └── Contact.jsx
│   ├── data/               # Data files
│   │   └── caseStudies.js
│   ├── styles/             # Global styles
│   │   ├── variables.css   # Design system tokens
│   │   └── global.css      # Base styles
│   ├── App.jsx             # Main app component
│   └── main.jsx            # Entry point
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
├── vercel.json             # Vercel deployment config
└── package.json            # Dependencies
```

## 🧪 Testing

### Manual Testing
- Test all pages on mobile and desktop
- Verify keyboard navigation
- Test with screen reader
- Check form validation
- Test all links

### Automated Testing
```bash
# Run Lighthouse audit
npm run build
npm run preview
# Then use Chrome DevTools Lighthouse
```

## 🔒 Security

Security headers configured in `vercel.json`:
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy for privacy

## 📝 License

MIT

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

## 📧 Contact

Richard Musango - [richard.musango@example.com](mailto:richard.musango@example.com)

Portfolio: [https://richardmusango.com](https://richardmusango.com)

---

**Note**: Remember to update all placeholder content with your actual information before deploying!