import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"


const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section">
          <div className="footer-logo">
            <img 
              src="../../public/logos/marelados.png" 
              alt="marelados logo"
              className="footer-logoImg" 
            />
            <h3 className="footer-title"></h3>
          </div>
          <p className="footer-desciption">
            Ola de sabor en cada bocado.
          </p>

          <div className="social-media">
            <a href="" target="_blank" rel="" aria-label="Facebook">
              <FaFacebook className="social-icon" />
            </a>
            <a href="" target="_blank" rel="" aria-label="Instagram">
              <FaInstagram className="social-icon" />
            </a>
            <a href="" target="_blank" rel="" aria-label="WhatsApp">
              <FaWhatsapp className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer