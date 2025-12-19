import { useParams } from "react-router"
import './Category.scss'

const Category = () => {

  const {categoryId} = useParams()

  const getCategoryName = (id) => {
    const names = {
      'palitos': 'Palitos',
      'bombones': 'Bombones',
      'tortas': 'Tortas',
      'tentaciones': 'Tentaciones',
      'familiar': 'Familiar',
    }
    return names[id] || id;
  }

  return (
    <div className="category">
      <h1 className="category-title">
        Categoria: {getCategoryName(categoryId)}
      </h1>
      <p className="category-description">
        Productos de esta categoría
      </p>

      <div className="placholder">
        <p>Lista de productos de la categoria "{categoryId}"</p>
      </div>
    </div>
  )
}

export default Category