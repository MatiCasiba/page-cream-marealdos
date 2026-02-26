import { useParams } from "react-router"
import './Category.scss'
import { useEffect, useState } from "react"
import { products } from "../../data/products"
import ProductCard from "../../components/card/ProductCard"

const Category = () => {

  const {categoryID} = useParams()
  const [categoryProducts, setCategoryProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const getCategoryName = (id) => {
    const names = {
      'palitos': 'Palitos',
      'bombones': 'Bombones',
      'tortas': 'Tortas',
      'tentaciones': 'Tentaciones',
      'familiar': 'Familiar',
      'postres': 'Postres'
    }
    return names[id] || id;
  }

  //filtro productos por categoria
  useEffect(() => {
    setLoading(true)
    //filtrado case insensitive
    const filtered = products.filter(
      product => product.category.toLowerCase() === categoryID.toLowerCase()
    )
    setCategoryProducts(filtered)
    setLoading(false)
  }, [categoryID])

  //handlers para las acciones
  const handleViewDetails = (productId) => {
    console.log('Ver detalles:', productId)
  }

  const handleAddToCart = (product) => {
    console.log('Agregar al carrito:', product)
  }

  if(loading) {
    return (
      <div className="category">
        <div className="loading">
          <p>Cargando productos...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="category">
      <div className="category-header">
        <h1 className="category-title">
          {getCategoryName(categoryID)}
        </h1>
        <p className="category-count">
          {categoryProducts.length} productos disponibles
        </p>
      </div>

      {categoryProducts.length > 0 ? (
        <div className="category-products-grid">
          {categoryProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={() => handleViewDetails(product.id)}
              onAddToCart={() => handleAddToCart(product)}
            />
          ))}
        </div>
      ) : (
        <div className="category-empty">
          <p>No hay productos disponibles en {getCategoryName(categoryID)}</p>
          <p className="category-empty-sub">Pronto tendremos novedades</p>
        </div>
      )}
    </div>
  )
}

export default Category