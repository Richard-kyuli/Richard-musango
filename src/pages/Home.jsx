import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import './Home.css'

function Home() {


  const projects = [
    {
      id: 1,
      title: 'Royal Times Admin Dashboard',
      category: 'Web Design',
      image: 'royal-times-logo',
      link: '/case-studies/royal-times',
      tags: ['Dashboard']
    },
    {
      id: 2,
      title: 'Buy & Sell Online',
      category: 'Mobile & Web',
      image: 'buysell-logo',
      link: '/case-studies/buy-sell',
      tags: ['Ecommerce']
    },
    {
      id: 3,
      title: 'Mwalimu Finder',
      category: 'Mobile & Web',
      image: 'mwalimu-logo',
      link: '/case-studies/mwalimu-finder',
      tags: ['Education Technology']
    }
  ]



  return (
    <div className="home-page">
      <SEO 
        description="Richard Musango - UI/UX Designer creating delightful digital experiences. View my portfolio of case studies showcasing user-centered design solutions."
      />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content-centered">
            <h1 className="hero-title">
              Hello, I'm<br />
              <span className="highlight">Richard Musango</span>
            </h1>
            <p className="hero-description">
              I'm a UI/UX Designer based in Nairobi, Kenya. I create intuitive and 
              beautiful digital experiences that solve real problems and delight users 
              through thoughtful, user-centric design.
            </p>
            <div className="hero-buttons">
              <Link to="/case-studies" className="btn btn-primary">View My Work</Link>
              <a href="/resume.pdf" download className="btn btn-outline">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>



      {/* Portfolio Section */}
      <section className="portfolio-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Portfolio</h2>
            <p className="section-subtitle">Check out some of my latest product design case studies. I've led design for millions of users across startups and global corporations.</p>
          </div>
          <div className="portfolio-grid">
            {projects.map((project, index) => (
              <Link to={project.link} key={project.id} className="portfolio-card">
                <div 
                  className="portfolio-image"
                  style={{
                    backgroundImage: project.image && project.image.startsWith('/') 
                      ? `url('${project.image}')` 
                      : undefined
                  }}
                  data-gradient={!project.image || !project.image.startsWith('/') ? project.image : undefined}
                ></div>
                <div className="portfolio-content">
                  <span className="tag">{project.tags[0]}</span>
                  <h3>{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="portfolio-cta">
            <Link to="/case-studies" className="btn btn-primary">View All Projects</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
