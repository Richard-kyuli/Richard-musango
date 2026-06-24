const ImageGrid = ({ images, columns = 3, className = '' }) => {
  const gridClass = `image-grid cols-${columns}`

  return (
    <div className={`${gridClass} ${className}`}>
      {images.map((image, index) => (
        <div key={index} className="image-grid-item">
          <div className="image-container">
            <img
              src={image.src}
              alt={image.alt}
              className="grid-image"
            />
          </div>
          {image.caption && (
            <p className="image-caption">{image.caption}</p>
          )}
        </div>
      ))}
    </div>
  )
}

export default ImageGrid