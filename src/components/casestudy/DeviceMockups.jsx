const DeviceMockups = ({ mobileImage, laptopImage, tabletImage, className = '' }) => {
  return (
    <div className={`device-mockups ${className}`}>
      {/* Mobile Device */}
      <div className="device-container mobile-device">
        <div className="mobile-frame">
          <div className="mobile-notch"></div>
          <div className="mobile-screen">
            <img 
              src={mobileImage || "https://placehold.co/300x600/1e293b/ffffff?text=Mobile+View"} 
              alt="Mobile view"
              className="device-image"
            />
          </div>
          <div className="mobile-home-indicator"></div>
        </div>
      </div>

      {/* Laptop Device */}
      <div className="device-container laptop-device">
        <div className="laptop-frame">
          <div className="laptop-screen">
            <div className="browser-chrome">
              <div className="browser-controls">
                <span className="control-dot red"></span>
                <span className="control-dot yellow"></span>
                <span className="control-dot green"></span>
              </div>
              <div className="address-bar">
                <span className="url">app.example.com</span>
              </div>
            </div>
            <div className="browser-content">
              <img 
                src={laptopImage || "https://placehold.co/800x600/1e293b/ffffff?text=Desktop+View"} 
                alt="Desktop view"
                className="device-image"
              />
            </div>
          </div>
          <div className="laptop-base"></div>
        </div>
      </div>

      {/* Tablet Device */}
      <div className="device-container tablet-device">
        <div className="tablet-frame">
          <div className="tablet-screen">
            <img 
              src={tabletImage || "https://placehold.co/600x800/1e293b/ffffff?text=Tablet+View"} 
              alt="Tablet view"
              className="device-image"
            />
          </div>
          <div className="tablet-home-button"></div>
        </div>
      </div>
    </div>
  )
}

export default DeviceMockups