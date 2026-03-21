import './MobileMockup.css'

function MobileMockup({ imageSrc, alt = "Mobile app screenshot" }) {
  return (
    <div className="mobile-mockup">
      <div className="mobile-frame">
        <div className="mobile-notch"></div>
        <div className="mobile-screen">
          <img src={imageSrc} alt={alt} />
        </div>
      </div>
    </div>
  )
}

export default MobileMockup
