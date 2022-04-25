import { CategoriesFilter } from '../../components/CategoriesFilter'
import { ProductList } from '../../containers/ProductList'

export const Home = () => {
  return (
    <div>
      <CategoriesFilter />
      <ProductList />
    </div>
  )
}
