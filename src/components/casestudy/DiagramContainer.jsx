const DiagramContainer = ({ children, caption, className = '' }) => {
  return (
    <div className={`diagram-container ${className}`}>
      <div className="diagram-content">
        {children}
      </div>
      {caption && (
        <p className="diagram-caption">{caption}</p>
      )}
    </div>
  )
}

export default DiagramContainer