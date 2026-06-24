const CardBlock = ({ title, children, className = '' }) => {
  return (
    <div className={`card-block ${className}`}>
      {title && (
        <h3 className="card-title">{title}</h3>
      )}
      <div className="card-content">
        {children}
      </div>
    </div>
  )
}

export default CardBlock