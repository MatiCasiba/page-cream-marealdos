import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import "./Header.scss"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false)
    setIsCategoriesOpen(false)
  }, [location])

  // Detectar scroll para cambiar estilo del header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (!isMenuOpen) {
      setIsCategoriesOpen(false)
    }
  }

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsCategoriesOpen(false)
  }

  const categories = [
    { id: "palitos", name: "Palitos", path: "/categoria/palitos" },
    { id: "bombones", name: "Bombones", path: "/categoria/bombones" },
    { id: "tortas", name: "Tortas", path: "/categoria/tortas" },
    { id: "tentaciones", name: "Tentaciones", path: "/categoria/tentaciones" },
    { id: "familiares", name: "Familiares", path: "/categoria/familiares" },
    { id: "postres", name: "Postres", path: "/categoria/postres" }
  ]

  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""} ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <img 
            src="/logos/marelados.png" 
            alt="Marelados" 
            className="logo-img"
          />
          <span className="logo-text">Marelados</span>
        </Link>

        {/* Botón menú hamburguesa */}
        <button 
          className="menu-toggle" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? (
            <AiOutlineClose className="menu-icon" />
          ) : (
            <GiHamburgerMenu className="menu-icon" />
          )}
        </button>

        {/* Menú de navegación */}
        <nav className={`nav-menu ${isMenuOpen ? "nav-menu-open" : ""}`}>
          <ul className="nav-list">
            {/* Inicio */}
            <li className="nav-item">
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                onClick={closeMenu}
              >
                Inicio
              </Link>
            </li>

            {/* Categorías con desplegable */}
            <li className="nav-item nav-item-categories">
              <button 
                className="nav-link category-toggle"
                onClick={toggleCategories}
                aria-expanded={isCategoriesOpen}
              >
                <span>Categorías</span>
                {isCategoriesOpen ? (
                  <FaChevronUp className="category-icon" />
                ) : (
                  <FaChevronDown className="category-icon" />
                )}
              </button>
              
              {/* Submenú de categorías */}
              <ul className={`submenu ${isCategoriesOpen ? "submenu-open" : ""}`}>
                {categories.map((category) => (
                  <li key={category.id} className="submenu-item">
                    <Link 
                      to={category.path} 
                      className={`submenu-link ${
                        location.pathname === category.path ? "active" : ""
                      }`}
                      onClick={closeMenu}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Contacto */}
            <li className="nav-item">
              <Link 
                to="/contacto" 
                className={`nav-link ${location.pathname === "/contacto" ? "active" : ""}`}
                onClick={closeMenu}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>

        {/* Overlay para cerrar menú en móvil */}
        {isMenuOpen && (
          <div className="menu-overlay" onClick={closeMenu} />
        )}
      </div>
    </header>
  )
}

export default Header