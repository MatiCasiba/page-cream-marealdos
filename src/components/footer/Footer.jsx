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

        <div className="footer-section">
          <h4 className="footerr-subtitle">Horarios</h4>
          <ul className="schedule-list">
            <li className="schedule-item">
              <span className="schedule-day">Lunes a Sabado</span>
              <span className="schedule-time">13:00 - 20:30</span>
            </li>
            <li className="schedule-item">
              <span className="schedule-day">Domingo</span>
              <span className="schedule-time">12:00 - 17:00</span>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Enlaces rápidos</h4>
          <ul className="quick-links">
            <li><a href="/">Inicio</a></li>
            <li><a href="/categoria/palitos">Palitos</a></li>
            <li><a href="/categoria/bombones">Bombones</a></li>
            <li><a href="/categoria/tortas">Tortas</a></li>
            <li><a href="/categoria/fammiliares"></a></li>
            <li><a href="/contacto">Contacto</a></li>
            <li><a href="/#promociones">Promociones</a></li>
          </ul>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer