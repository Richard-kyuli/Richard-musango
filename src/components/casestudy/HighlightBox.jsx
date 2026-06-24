const HighlightBox = ({ children, color = 'yellow', className = '' }) => {
  const colorMap = {
    yellow: 'highlight-yellow',
    green: 'highlight-green',
    blue: 'highlight-blue',
    purple: 'highlight-purple',
    orange: 'highlight-orange'
  }

  return (
    <div className={`highlight-box ${colorMap[color] || colorMap.yellow} ${className}`}>
      {children}
    </div>
  )
}

export default HighlightBox