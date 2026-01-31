import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import './Home.css'

function Home() {
  const featuredCaseStudies = [
    {
      id: 'ecommerce-app',
      title: 'E-Commerce Mobile App',
      description: 'Redesigning the shopping experience for a seamless mobile-first platform',
      platform: 'Mobile',
      image: 'gradient-1'
    },
    {
      id: 'saas-dashboard',
      title: 'SaaS Analytics Dashboard',
      description: 'Data visualization dashboard helping teams make informed decisions',
      platform: 'Web',
      image: 'gradient-2'
    },
    {
      id: 'banking-app',
      title: 'Banking App Redesign',
      description: 'Modern banking experience focused on accessibility and trust',
      platform: 'Mobile',
      image: 'gradient-3'
    }
  ]

  return (
    <div className="home-page">
      <SEO 
        description="Richard Musango - UI/UX Designer creating delightful digital experiences. View my portfolio of case studies showcasing user-centered design solutions."
      />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Richard Musango</span>
            </h1>
            <p className="hero-subtitle">UI/UX Designer crafting delightful digital experiences</p>
            <p className="hero-description">
              I design intuitive interfaces that solve real problems and create meaningful 
              connections between users and products.
            </p>
            <div className="hero-cta">
              <Link to="/case-studies" className="btn btn-primary">View Case Studies</Link>
              <a href="/resume.pdf" download className="btn btn-secondary">Download CV</a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Featured Case Studies</h2>
          <div className="featured-grid">
            {featuredCaseStudies.map(study => (
              <Link to={`/case-studies/${study.id}`} key={study.id} className="featured-card">
                <div className={`featured-image ${study.image}`}></div>
                <div className="featured-content">
                  <span className="platform-tag">{study.platform}</span>
                  <h3>{study.title}</h3>
                  <p>{study.description}</p>
                  <span className="read-more">Read Case Study →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
