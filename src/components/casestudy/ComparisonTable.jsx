const ComparisonTable = ({ headers, rows, className = '' }) => {
  return (
    <div className={`comparison-table-wrapper ${className}`}>
      <table className="comparison-table">
        <thead>
          <tr className="table-header">
            {headers.map((header, index) => (
              <th key={index} className="table-header-cell">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="table-row">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="table-cell">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ComparisonTable