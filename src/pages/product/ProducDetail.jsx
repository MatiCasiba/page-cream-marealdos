import { useEffect, useState } from "react"
import { FaArrowLeft, FaStar, FaShoppingCart } from "react-icons/fa"
import { useNavigate, useParams } from "react-router"
import { products } from "../../data/products"
import "./ProductDetail.scss"

const ProducDetail = () => {
  const {productId} = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    ///buscar producto por id
    const foundProduct = products.find(p => p.id === parseInt(productId))
    setProduct(foundProduct)
    setLoading(false)

    //scroll al inicio al cargar la página
    window.scrollTo(0, 0)
  }, [productId])

  const handleAddToCart = () => {
    console.log("Agregar al carrito:", { ...product, quantity})
    // acá va  ir la lógica del carrito después
  }

  const handleGoBack = () => {
    navigate(-1) // volver a la página anterior
  }

  if(loading) {
    return (
        <div className="product-detail-error">
            <h2>Producto no encontrado</h2>
            <p>El producto que buscas no existe o fue eliminado</p>
            <button onClick={handleGoBack} className="back-btn">
                <FaArrowLeft /> Volver
            </button>
        </div>
    )
  }

  // calcular precio descuento
  const finalPrice = product.discount > 0
    ? product.price * (1 - product.discount / 100)
    : product.price
  const hasDiscount = product.discount > 0

  // arrya de imágenes
  const productImages = [product.image]
  
  return (
    <div className="product-detail">
      <button className="back-button" onClick={handleGoBack}>
        <FaArrowLeft /> Volver
      </button>

      <div className="product-detail-container">
        {/* galería de imágenes */}
        <div className="product-gallery">
          <div className="main-image">
            <img 
              src={productImages[selectedImage] || "/productos/default.jpg"} 
              alt={product.name}
            />
            
            {/* badges */}
            <div className="image-badges">
              {product.featured && <span className="badge featured">Destacado</span>}
              {hasDiscount && <span className="badge discount">-{product.discount}%</span>}
            </div>
          </div>

          {/* miniaturas (si hay más de una imagen) */}
          {productImages.length > 1 && (
            <div className="thumbnail-list">
              {productImages.map((img, index) => (
                <div 
                  key={index}
                  className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={img} alt={`${product.name} ${index + 1}`} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* información del producto */}
        <div className="product-info">
          <h1 className="product-name">{product.name}</h1>
          
          <div className="product-rating">
            <div className="stars">
              {[...Array(5)].map((_, index) => (
                <FaStar 
                  key={index} 
                  className={`star ${index < Math.floor(product.rating || 4.5) ? 'filled' : ''}`}
                />
              ))}
            </div>
            <span className="rating-count">({product.rating || 4.5})</span>
          </div>

          <div className="product-price">
            {hasDiscount && (
              <span className="original-price">${product.price.toFixed(2)}</span>
            )}
            <span className="final-price">${finalPrice.toFixed(2)}</span>
          </div>

          <div className="product-category">
            <strong>Categoría:</strong> {product.category}
          </div>

          <div className="product-description">
            <h3>Descripción</h3>
            <p>{product.description || "Sin descripción disponible"}</p>
          </div>

          {/* selector de cantidad */}
          <div className="product-quantity">
            <label>Cantidad:</label>
            <div className="quantity-selector">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                -
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          {/* botones de acción */}
          <div className="product-actions">
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              <FaShoppingCart />
              Agregar al carrito
            </button>
          </div>

          {/* información adicional */}
          <div className="product-meta">
            <div className="meta-item">
              <span className="meta-label">📦 Envío:</span>
              <span className="meta-value">Consultar por WhatsApp</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">⏰ Disponibilidad:</span>
              <span className="meta-value">Inmediata</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProducDetail