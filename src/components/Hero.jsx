import { useState, useEffect } from 'react'
import './Hero.css'

const phrases = [
  'delightful digital experiences',
  'intuitive user interfaces',
  'seamless interactions',
  'user-centered solutions'
]

function Hero() {
  const [typedText, setTypedText] = useState('')
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex]
    const typingSpeed = isDeleting ? 50 : 100
    
    let timer
    
    if (!isDeleting && typedText.length < currentPhrase.length) {
      // Typing forward
      timer = setTimeout(() => {
        setTypedText(currentPhrase.substring(0, typedText.length + 1))
      }, typingSpeed)
    } else if (!isDeleting && typedText.length === currentPhrase.length) {
      // Finished typing, pause then start deleting
      timer = setTimeout(() => {
        setIsDeleting(true)
      }, 2000)
    } else if (isDeleting && typedText.length > 0) {
      // Deleting
      timer = setTimeout(() => {
        setTypedText(currentPhrase.substring(0, typedText.length - 1))
      }, typingSpeed)
    } else if (isDeleting && typedText.length === 0) {
      // Finished deleting, move to next phrase
      setIsDeleting(false)
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
    }
    
    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [typedText, isDeleting, currentPhraseIndex])
  
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
                <p className="hero-subtitle">
                  UI/UX Designer crafting <span className="typing-text">{typedText}</span>
                  <span className="cursor">|</span>
                </p>
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
