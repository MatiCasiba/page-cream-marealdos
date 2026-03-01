import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa"
import './Footer.scss'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section">
          <div className="footer-logo">
            <img
              src="/logos/marelados.png" 
              alt="marelados logo"
              className="footer-logoImg"
            />
            <h3 className="footer-title">Marelados</h3>
          </div>
          <p className="footer-desciption">
            Ola de sabor en cada bocado.
          </p>

          <div className="social-media">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook">
              <FaFacebook className="social-icon" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
              <FaInstagram className="social-icon" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp">
              <FaWhatsapp className="social-icon" />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Desarrollador</h4>
          <ul className="contact-list">
            <li className="contact-item">
              <FaGithub className="contact-icon" />
              <span><a href="https://github.com/MatiCasiba" target="_blank" rel="noopener noreferrer">MatiCasiba</a></span>
            </li>
            <li className="contact-item">
              <FaPhone className="contact-icon" />
              <span>+54 9 11 3107748</span>
            </li>
            <li className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>casibagabriel@gmail.com</span>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Horarios</h4>
          <ul className="schedule-list">
            <li className="schedule-item">
              <span className="schedule-day">Lunes a Sábado</span>
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
            <li><a href="/categoria/familiares">Familiares</a></li>
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
            <a href="/politica-privacidad">Política de Privacidad</a>
            <span className="separator">|</span>
            <a href="/terminos-condiciones">Términos y Condiciones</a>
          </div>
        </div>
        <p className="footer-note">
          El refugio más dulce contra el calor
        </p>
      </div>
    </footer>
  )
}

export default Footer