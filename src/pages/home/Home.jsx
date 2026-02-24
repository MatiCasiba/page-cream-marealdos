import { useEffect, useState } from "react"
import ProductCard from "../../components/card/ProductCard"
import { products } from "../../data/products"
import "./Home.scss"

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [visibleProducts, setVisibleProducts] = useState(4)
  const [showAll, setShowAll] = useState(false)
  const [isMobile,setIsMobile] = useState(window.innerWidth <= 576)

  //detectar cambios de tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // filtrar productos destacados
  useEffect(() => {
    const featured = products.filter(producto => producto.featured)
    setFeaturedProducts(featured)
  }, [])

  // Handlers para las acciones
  const handleViewDetails = (productId) => {
    console.log('Ver detalles del producto:', productId)
    // acá podría navegar a la página de detalle del producto
    // navigate(`/producto/${prroducId}`)
  }

  // función para agregar al carro (futuro)
  const handleAddToCart = (product) => {
    console.log('Agregar al carrito:', product)
    // lógica a implementar del carrito más adelante
  }

  const toggleShowAll = () => {
    setShowAll(!showAll)
    setVisibleProducts(showAll ? 4 : featuredProducts.length)
  }

  return (
    <div className="home">
      {/* sección del banner */}
      <section className="banner-section">
        <div className="banner">
          <h1 className="banner-title">Marelados</h1>
          <p className="banner-subtitle">Ola de sabor en cada bocado</p>
          <button className="banner-cta">Ver productos</button>
        </div>
      </section>

      <section className="featured-products">
        <div className="section-header">
          <h2 className="section-title">Productos destacados</h2>
          <p className="section-subtitle">Los más pedidos por nuestros clientes</p>
        </div>

      {/* grid de productos */}
      {featuredProducts.length > 0 ? (
          <>
            {/* vista condicional -> scroll en celulares, grid en desktop */}
            {isMobile ? (
              // CELULARES: Scroll horizontal
              <div className="products-scroll-container">
                <div className="products-scroll">
                  {featuredProducts.map(product => (
                    <div key={product.id} className="scroll-item">
                      <ProductCard
                        product={product}
                        onViewDetails={() => handleViewDetails(product.id)}
                        onAddToCart={() => handleAddToCart(product)}
                      />
                    </div>
                  ))}
                </div>
                {/* indicador de scroll */}
                <div className="scroll-indicator">
                  <span className="scroll-hint">Desliza para ver más →</span>
                </div>
              </div>
            ) : (
              // DESKTOP: Grid con ver más/ver menos
              <>
                <div className="products-grid">
                  {featuredProducts.slice(0, visibleProducts).map(product => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onViewDetails={() => handleViewDetails(product.id)}
                      onAddToCart={() => handleAddToCart(product)}
                    />
                  ))}
                </div>

                {/* botón Ver más / Ver menos (solo si hay más de 4 productos) */}
                {featuredProducts.length > 4 && (
                  <div className="view-toggle-container">
                    <button 
                      className="view-toggle-btn"
                      onClick={toggleShowAll}
                    >
                      {showAll ? (
                        <>Ver menos productos <span className="arrow">↑</span></>
                      ) : (
                        <>Ver todos los productos ({featuredProducts.length - 4} más) <span className="arrow">↓</span></>
                      )}
                    </button>
                  </div>
                )}
              </>
            )}
          </>
        ) : (
          <div className="no-products">
            <p>Cargando productos destacados</p>
          </div>
        )}

      </section>

      {/* Sección de categorías */}
      <section className="categories-preview">
        <h2 className="section-title">Nuestras Categorías</h2>
        <div className="categories-grid">
          <div className="category-card">
            <h3>Palitos</h3>
            <p>Desde $800</p>
          </div>
          <div className="category-card">
            <h3>Bombones</h3>
            <p>Desde $1200</p>
          </div>
          <div className="category-card">
            <h3>Tortas</h3>
            <p>Desde $17000</p>
          </div>
        </div>
      </section>

      {/* <div className="placeholder">
        <h2>Banner</h2>
        <p>Imagen promocional de helados</p>
      </div>

      <div className="placeholder">
        <h2>Productos destacados</h2>
        <p>grid de tarjetas de productos</p>
      </div> */}
    </div>
  )
}

export default Home