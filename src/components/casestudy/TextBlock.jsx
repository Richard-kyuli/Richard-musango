const TextBlock = ({ children, className = '' }) => {
  return (
    <div className={`text-block ${className}`}>
      {children}
    </div>
  )
}

export default TextBlock