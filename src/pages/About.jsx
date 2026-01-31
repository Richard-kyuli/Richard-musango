import SEO from '../components/SEO'
import './About.css'

function About() {
  const principles = [
    'User-centered design always comes first',
    'Simplicity is the ultimate sophistication',
    'Design with empathy and accessibility in mind',
    'Iterate based on feedback and data',
    'Collaborate openly with teams and stakeholders'
  ]

  const tools = [
    'Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator',
    'Miro', 'FigJam', 'Maze', 'Optimal Workshop', 'Hotjar'
  ]

  return (
    <div className="about-page">
      <SEO 
        title="About"
        description="Learn about Richard Musango, a passionate UI/UX designer specializing in user-centered design, research, and creating accessible digital experiences."
      />
      
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title">About Me</h1>
          <p className="page-subtitle">Designer, Problem Solver, Collaborator</p>
        </div>
      </section>

      <section className="about-content-section">
        <div className="container">
          <div className="about-story">
            <h2>My Story</h2>
            <p>
              I'm a passionate UI/UX designer with a keen eye for detail and a love for 
              creating user-centered designs. My journey into design started with a curiosity 
              about how people interact with technology and a desire to make those interactions 
              more intuitive and delightful.
            </p>
            <p>
              Over the years, I've worked on diverse projects ranging from mobile apps to 
              complex web platforms. Each project has taught me the importance of understanding 
              user needs, iterating based on feedback, and collaborating closely with 
              cross-functional teams.
            </p>
            <p>
              My approach combines research, creativity, and strategic thinking to deliver 
              solutions that not only look great but also provide exceptional user experiences. 
              I believe that good design is invisible—it just works.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <h3>Design Focus</h3>
              <p>
                I specialize in creating intuitive interfaces for web and mobile applications, 
                with a strong focus on user research, information architecture, and interaction design.
              </p>
            </div>

            <div className="about-card">
              <h3>Collaboration Style</h3>
              <p>
                I thrive in collaborative environments where I can work closely with developers, 
                product managers, and stakeholders to bring ideas to life. Clear communication 
                and empathy are at the core of how I work.
              </p>
            </div>
          </div>

          <div className="principles-section">
            <h2>Design Principles</h2>
            <ul className="principles-list">
              {principles.map((principle, index) => (
                <li key={index}>{principle}</li>
              ))}
            </ul>
          </div>

          <div className="tools-section">
            <h2>Tools & Skills</h2>
            <div className="tools-grid">
              {tools.map((tool, index) => (
                <span key={index} className="tool-tag">{tool}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
