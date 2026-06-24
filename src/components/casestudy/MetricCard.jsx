const MetricCard = ({ metric, label, color = 'primary', className = '' }) => {
  const colorMap = {
    primary: 'metric-primary',
    green: 'metric-green',
    blue: 'metric-blue',
    purple: 'metric-purple',
    orange: 'metric-orange'
  }

  return (
    <div className={`metric-card ${className}`}>
      <div className={`metric-number ${colorMap[color] || colorMap.primary}`}>
        {metric}
      </div>
      <div className="metric-label">
        {label}
      </div>
    </div>
  )
}

export default MetricCard