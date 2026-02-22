import { FaEye, FaShoppingCart, FaStar } from "react-icons/fa"
import './ProductCard.scss' 

const ProductCard = ({ product, onViewDetails, onAddToCart }) => {
  // Si no hay producto, muestra un skeleton
  if (!product) {
    return (
      <div className="product-card skeleton">
        <div className="skeleton-image"></div>
        <div className="skeleton-content">
          <div className="skeleton-title"></div>
          <div className="skeleton-description"></div>
          <div className="skeleton-price"></div>
        </div>
      </div>
    )
  }

  const {
    id,
    name,
    description,
    price,
    category,
    image,
    featured = false,
    discount = 0,
    rating = 4.5
  } = product

  // calculo precio con descuento si hay
  const finalPrice = discount > 0 ? price * (1 - discount / 100) : price
  const hasDiscount = discount > 0

  return (
    <div className="product-card">
      {/* badges */}
      <div className="product-badges">
        {featured && <span className="badge badge-featured">Destacado</span>}
        {hasDiscount && <span className="badge badge-discount">-{discount}%</span>}
        <span className="badge badge-category">{category}</span>
      </div>

      {/* imagen del producto */}
      <div className="product-image-container">
        <img 
          src={image || '/productos/default.jpg'} 
          alt={name} 
          className="product-image"
          loading="lazy"
        />

        {/* acciones rápidas */}
        <div className="product-actions">
          <button
            className="action-btn view-btn"
            onClick={() => onViewDetails && onViewDetails(id)}
            aria-label={`Ver detalles de ${name}`}
          >
            <FaEye />
          </button>
          <button
            className="action-btn cart-btn"
            onClick={() => onAddToCart && onAddToCart(product)}
            aria-label={`Agregar ${name} al carrito`}
          >
            <FaShoppingCart />
          </button>
        </div>
      </div>

      {/* contenido del producto */}
      <div className="product-content">
        <span className="product-category">{category}</span>
        <h3 className="product-name">{name}</h3>
        <p className="product-description">
          {description && description.length > 60 
            ? `${description.substring(0, 60)}...` 
            : description || "Sin descripción"}
        </p>

        {/* rating */}
        <div className="product-rating">
          <div className="stars">
            {[...Array(5)].map((_, index) => (
              <FaStar 
                key={index} 
                className={`star ${index < Math.floor(rating) ? 'filled' : ''}`}
              />
            ))}
          </div>
          <span className="rating-text">({rating})</span>
        </div>
        
        {/* precio y acciones */}
        <div className="product-footer">
          <div className="product-pricing">
            {hasDiscount && (
              <span className="original-price">${price.toFixed(2)}</span>
            )}
            <span className="final-price">${finalPrice.toFixed(2)}</span>
          </div>
          
          <button 
            className="add-to-cart-btn"
            onClick={() => onAddToCart && onAddToCart(product)}
          >
            <FaShoppingCart className="cart-icon" />
            <span>Agregar</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard