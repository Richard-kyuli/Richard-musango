const Section = ({ tag, tagColor = 'gray', title, children, className = '' }) => {
  const tagColorMap = {
    yellow: 'bg-yellow-100 text-yellow-800 border-yellow-500',
    green: 'bg-green-100 text-green-800 border-green-500',
    blue: 'bg-blue-100 text-blue-800 border-blue-500',
    purple: 'bg-purple-100 text-purple-800 border-purple-500',
    orange: 'bg-orange-100 text-orange-800 border-orange-500',
    gray: 'bg-gray-100 text-gray-800 border-gray-500'
  }

  const backgroundMap = {
    yellow: 'bg-yellow-50',
    green: 'bg-green-50', 
    blue: 'bg-blue-50',
    purple: 'bg-purple-50',
    orange: 'bg-orange-50',
    gray: 'bg-gray-50'
  }

  return (
    <section className={`section-container ${backgroundMap[tagColor] || 'bg-white'} ${className}`}>
      <div className="container">
        <div className="content-wrapper">
          {tag && (
            <div className={`section-tag ${tagColorMap[tagColor] || tagColorMap.gray}`}>
              {tag}
            </div>
          )}
          {title && (
            <h2 className="section-title">{title}</h2>
          )}
          <div className="section-content">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section