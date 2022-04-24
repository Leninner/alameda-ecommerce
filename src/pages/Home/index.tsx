import { CategoriesFilter } from '../../components/CategoriesFilter'
import { ProductList } from '../../components/ProductList'

export const Home = () => {
  return (
    <div>
      <CategoriesFilter />
      <ProductList />
    </div>
  )
}
