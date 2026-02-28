import { useState } from 'react'
import './Contact.scss'

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    motivo: "consulta",
    mensaje: ""
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    //número de WhatsApp (con código del país, sin +)
    const numero = "5491161118645"

    //armado del mensaje
    const mensaje = `*Nuevo mensaje desde la web*%0A%0A
        *Nombre:* ${formData.nombre}%0A
        *Email:* ${formData.email}%0A
        *Teléfono:* ${formData.telefono}%0A
        *Motivo:* ${formData.motivo}%0A
        *Mensaje:* ${formData.mensaje}`.replace(/ /g, '%20')

    // abrir whatsapp
    window.open(`https://wa.me/${numero}?text=${mensaje}`, '_blank')
  }

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1 className="contact-title">Contactanos</h1>
        <p className="contact-subtitle">
          ¿Tenés dudas o querés hacer un pedido? Escribinos por WhatsApp
        </p>
      </div>

      <div className="contact-container">
        {/* Formulario */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre *</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              placeholder="Tu nombre"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="tu@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="telefono">Teléfono *</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
              placeholder="11 5131 8346"
            />
          </div>

          <div className="form-group">
            <label htmlFor="motivo">Motivo</label>
            <select
              id="motivo"
              name="motivo"
              value={formData.motivo}
              onChange={handleChange}
            >
              <option value="consulta">Consulta general</option>
              <option value="pedido">Quiero hacer un pedido</option>
              <option value="sugerencia">Sugerencia</option>
              <option value="evento">Evento / Cumpleaños</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje *</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Escribí tu consulta o pedido..."
            />
          </div>

          <button type="submit" className="submit-btn">
            <span className="whatsapp-icon">📱</span>
            Enviar por WhatsApp
          </button>
        </form>

        {/* información de contacto */}
        <div className="contact-info">
          <div className="info-card">
            <h3>📞 Teléfono</h3>
            <p>
              <a href="tel:+541161118645">11 6111-8645</a>
            </p>
          </div>

          <div className="info-card">
            <h3>⏰ Horarios</h3>
            <p>Lunes a Sábado: 13:00 - 20:30</p>
            <p>Domingo: 12:00 - 17:00</p>
          </div>

          <div className="info-card whatsapp-direct">
            <h3>📱 WhatsApp directo</h3>
            <a 
              href="https://wa.me/5491161118645" 
              target="_blank" 
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              <span className="whatsapp-icon">📱</span>
              Escribinos ahora
            </a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Contact