import { useState } from 'react'
import './ContactForm.css'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const validate = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched(prev => ({
      ...prev,
      [name]: true
    }))
    
    // Validate on blur
    const newErrors = validate()
    if (newErrors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: newErrors[name]
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      message: true
    })
    
    const newErrors = validate()
    
    if (Object.keys(newErrors).length === 0) {
      // Create mailto link
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
      window.location.href = `mailto:richard.musango@example.com?subject=${subject}&body=${body}`
      
      // Reset form
      setFormData({ name: '', email: '', message: '' })
      setTouched({})
      setErrors({})
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form" noValidate>
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Name <span className="required" aria-label="required">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`form-input ${touched.name && errors.name ? 'error' : ''}`}
          aria-required="true"
          aria-invalid={touched.name && errors.name ? 'true' : 'false'}
          aria-describedby={touched.name && errors.name ? 'name-error' : undefined}
        />
        {touched.name && errors.name && (
          <span id="name-error" className="error-message" role="alert">
            {errors.name}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email <span className="required" aria-label="required">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`form-input ${touched.email && errors.email ? 'error' : ''}`}
          aria-required="true"
          aria-invalid={touched.email && errors.email ? 'true' : 'false'}
          aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
        />
        {touched.email && errors.email && (
          <span id="email-error" className="error-message" role="alert">
            {errors.email}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">
          Message <span className="required" aria-label="required">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          rows="6"
          className={`form-input ${touched.message && errors.message ? 'error' : ''}`}
          aria-required="true"
          aria-invalid={touched.message && errors.message ? 'true' : 'false'}
          aria-describedby={touched.message && errors.message ? 'message-error' : undefined}
        />
        {touched.message && errors.message && (
          <span id="message-error" className="error-message" role="alert">
            {errors.message}
          </span>
        )}
      </div>

      <button type="submit" className="btn btn-primary btn-submit">
        Send Message
      </button>
    </form>
  )
}

export default ContactForm
