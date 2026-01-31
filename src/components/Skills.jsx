import './Skills.css'

function Skills() {
  const skills = [
    { name: 'User Research', level: 90 },
    { name: 'Wireframing', level: 95 },
    { name: 'Prototyping', level: 90 },
    { name: 'Visual Design', level: 85 },
    { name: 'Figma', level: 95 },
    { name: 'Adobe XD', level: 80 },
    { name: 'Usability Testing', level: 85 },
    { name: 'Design Systems', level: 80 }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Tools</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
