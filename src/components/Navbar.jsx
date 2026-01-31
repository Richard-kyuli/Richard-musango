import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navRef = useRef(null)

  const isActive = (path) => location.pathname === path

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target) && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <nav className="navbar" ref={navRef} role="navigation" aria-label="Main navigation">
      <div className="container">
        <Link to="/" className="logo" aria-label="Richard Musango - Home">
          Richard Musango
        </Link>
        <ul 
          className={`nav-links ${isOpen ? 'active' : ''}`}
          role="list"
        >
          <li>
            <Link 
              to="/" 
              className={isActive('/') ? 'active' : ''} 
              onClick={() => setIsOpen(false)}
              aria-current={isActive('/') ? 'page' : undefined}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={isActive('/about') ? 'active' : ''} 
              onClick={() => setIsOpen(false)}
              aria-current={isActive('/about') ? 'page' : undefined}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/case-studies" 
              className={isActive('/case-studies') || location.pathname.startsWith('/case-studies/') ? 'active' : ''} 
              onClick={() => setIsOpen(false)}
              aria-current={isActive('/case-studies') || location.pathname.startsWith('/case-studies/') ? 'page' : undefined}
            >
              Case Studies
            </Link>
          </li>
          <li>
            <Link 
              to="/resume" 
              className={isActive('/resume') ? 'active' : ''} 
              onClick={() => setIsOpen(false)}
              aria-current={isActive('/resume') ? 'page' : undefined}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={isActive('/contact') ? 'active' : ''} 
              onClick={() => setIsOpen(false)}
              aria-current={isActive('/contact') ? 'page' : undefined}
            >
              Contact
            </Link>
          </li>
        </ul>
        <button 
          className={`mobile-menu-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="nav-links"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
