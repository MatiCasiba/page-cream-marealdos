import { useEffect, useState } from "react"
import ProductCard from "../../components/card/ProductCard"
import { products } from "../../data/products"
import "./Home.scss"

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([])

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
        <div className="products-grid">
          {featuredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={() => handleViewDetails(product.id)}
              onAddToCart={() => handleAddToCart(product)}
            />
          ))}
        </div>
      ) : (
        <div className="no-products">
          <p>Cargando productos destacados</p>
        </div>
      )}

      {/* Boton parra ver todos los productos */}
        <div className="view-all-container">
          <button className="view-all-btn">
            Ver todos los productos
          </button>
        </div>
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