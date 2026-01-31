import { useState, useEffect, useRef } from 'react'
import './LazyImage.css'

function LazyImage({ src, alt, className = '', placeholder }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef()

  useEffect(() => {
    if (!imgRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '50px' }
    )

    observer.observe(imgRef.current)

    return () => observer.disconnect()
  }, [])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setHasError(true)
    setIsLoaded(true)
  }

  return (
    <div ref={imgRef} className={`lazy-image-wrapper ${className}`}>
      {isInView && !hasError && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`lazy-image ${isLoaded ? 'loaded' : ''}`}
        />
      )}
      {!isLoaded && !hasError && (
        <div className="lazy-image-placeholder">
          {placeholder || <div className="lazy-image-spinner"></div>}
        </div>
      )}
      {hasError && (
        <div className="lazy-image-error">
          <span>Failed to load image</span>
        </div>
      )}
    </div>
  )
}

export default LazyImage
