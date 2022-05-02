import { CategoriesFilter } from '../../components/CategoriesFilter'
import { ProductList } from '../../containers/ProductList'
import { HandBook } from './styles'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
      <CategoriesFilter />
      <ProductList />

      <HandBook>
        <h1>
          <Link to="/lookbook">Catálogo primavera-verano 2020</Link>
        </h1>
      </HandBook>
    </div>
  )
}
