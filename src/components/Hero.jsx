import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-glass-card">
            <div className="hero-layout">
              <div className="hero-text">
                <h1 className="hero-title">
                  Hi, I'm <span className="highlight">Richard Musango</span>
                </h1>
                <p className="hero-subtitle">UI/UX Designer crafting delightful digital experiences</p>
                <p className="hero-description">
                  I design intuitive interfaces that solve real problems and create meaningful 
                  connections between users and products through research, empathy, and creative problem-solving.
                </p>
                <div className="hero-cta">
                  <a href="#projects" className="btn btn-primary">View My Work</a>
                  <a href="/resume" className="btn btn-secondary">View Resume</a>
                </div>
              </div>
              <div className="hero-image">
                <img src="/HeroImage.png" alt="Richard Musango - UI/UX Designer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
