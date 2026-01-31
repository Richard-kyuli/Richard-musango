import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
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
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
