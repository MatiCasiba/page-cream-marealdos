import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaWhatsapp } from "react-icons/fa"


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
          <h4 className="footer-subtitle">Contacto</h4>
          <ul>
            <li className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>Montes de Oca 5920, José C Paz, Buenoss Aires</span>
            </li>
            <li className="contact-item">
              <FaPhone className="contact-icon" />
              <span>+54 11 3107748</span>
            </li>
            <li className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>gabrielcasiab19@gmail.com</span>
            </li>
          </ul>
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

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <div className="footer-bottom__content">
          <p className="copyrigth">
            &copy; {currentYear} Marelados. Todos los derechos reservados.
          </p>
          <div className="legal-links">
            <a href="/política-privacidad">Política de Privacidad</a>
            <span className="separator">|</span>
            <a href="/termino-condiciones">Términos y Condiciones</a>
          </div>
        </div>
        <p className="footer-note">
          El refugio mas dulce contra el calor
        </p>

      </div>
    </footer>
  )
}

export default Footer