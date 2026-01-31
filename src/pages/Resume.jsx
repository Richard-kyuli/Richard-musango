import SEO from '../components/SEO'
import './Resume.css'

function Resume() {
  const experience = [
    {
      title: 'Senior UI/UX Designer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      responsibilities: [
        'Lead design for mobile and web applications',
        'Conduct user research and usability testing',
        'Collaborate with cross-functional teams',
        'Mentor junior designers'
      ]
    },
    {
      title: 'UI/UX Designer',
      company: 'Digital Agency Co.',
      period: '2020 - 2022',
      responsibilities: [
        'Designed user interfaces for client projects',
        'Created wireframes and prototypes',
        'Conducted competitive analysis',
        'Maintained design systems'
      ]
    },
    {
      title: 'Junior Designer',
      company: 'Startup Studio',
      period: '2018 - 2020',
      responsibilities: [
        'Assisted in UI design projects',
        'Created marketing materials',
        'Participated in brainstorming sessions',
        'Learned industry best practices'
      ]
    }
  ]

  const skills = {
    design: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design', 'Interaction Design', 'Information Architecture'],
    tools: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 'InVision'],
    research: ['User Interviews', 'Usability Testing', 'A/B Testing', 'Analytics', 'Surveys', 'Card Sorting'],
    other: ['Design Systems', 'Accessibility', 'Responsive Design', 'Agile/Scrum', 'HTML/CSS', 'Collaboration']
  }

  return (
    <div className="resume-page">
      <SEO 
        title="Resume"
        description="View Richard Musango's professional experience, skills, and qualifications as a UI/UX Designer. Download resume PDF."
      />
      
      <section className="resume-hero">
        <div className="container">
          <h1 className="page-title">Resume</h1>
          <p className="page-subtitle">Experience, skills, and qualifications</p>
          <a href="/resume.pdf" download className="btn btn-download">
            Download PDF Resume
          </a>
        </div>
      </section>

      <section className="resume-content">
        <div className="container">
          <div className="resume-section">
            <h2>Experience</h2>
            <div className="experience-list">
              {experience.map((job, index) => (
                <div key={index} className="experience-item">
                  <div className="experience-header">
                    <div>
                      <h3>{job.title}</h3>
                      <p className="company">{job.company}</p>
                    </div>
                    <span className="period">{job.period}</span>
                  </div>
                  <ul className="responsibilities">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-section">
            <h2>Skills & Tools</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Design Skills</h3>
                <div className="skill-tags">
                  {skills.design.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h3>Design Tools</h3>
                <div className="skill-tags">
                  {skills.tools.map((tool, i) => (
                    <span key={i} className="skill-tag">{tool}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h3>Research Methods</h3>
                <div className="skill-tags">
                  {skills.research.map((method, i) => (
                    <span key={i} className="skill-tag">{method}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h3>Other Skills</h3>
                <div className="skill-tags">
                  {skills.other.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="resume-section">
            <h2>Education</h2>
            <div className="education-item">
              <h3>Bachelor of Design</h3>
              <p className="institution">University of Design</p>
              <p className="period">2014 - 2018</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resume
