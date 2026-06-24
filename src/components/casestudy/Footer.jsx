import './CaseStudyComponents.css'

function Footer() {
  return (
    <footer className="case-study-footer">
      <div className="container">
        <div className="footer-content">
          <p>
            © {new Date().getFullYear()} Richard Musango. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer