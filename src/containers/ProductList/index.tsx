import { ProductListContainer } from './styles'
import { CardProduct } from '../../components/CardProduct'
import { useSelector } from 'react-redux'
import { shopListInterface } from '../../interfaces'

export const ProductList = () => {
  const { shopList }: any = useSelector(state => state)

  console.log(shopList.filteredProducts)

  return (
    <ProductListContainer>
      {shopList.filteredProducts.map((product: shopListInterface) => (
        <CardProduct key={product.id} {...product} />
      ))}
    </ProductListContainer>
  )
}
