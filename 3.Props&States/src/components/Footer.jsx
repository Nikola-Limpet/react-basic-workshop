

const Footer = () => {

  return (
    <div className='footer'>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: adopt@pets.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">Instagram</a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Location</h3>
          <p>123 Pet Street</p>
          <p>Pawsome City, PC 12345</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Adopt a Pet. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer