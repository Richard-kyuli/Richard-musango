import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Richard Musango. All rights reserved.</p>
        <p className="footer-tagline">Designed with passion, built with React</p>
      </div>
    </footer>
  )
}

export default Footer
