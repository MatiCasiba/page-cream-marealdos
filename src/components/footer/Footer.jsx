

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
      </div>
      </div>
    </footer>
  )
}

export default Footer