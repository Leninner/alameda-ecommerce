import { ProductListContainer } from './styles'
import { CardProduct } from '../CardProduct'
import { useSelector } from 'react-redux'

interface shopListInterface {
  id: number
  name: string
  price: number
  image: string
  images: string[]
}

export const ProductList = () => {
  const { shopList }: any = useSelector(state => state)

  console.log(shopList.products)

  return (
    <ProductListContainer>
      {shopList.products.map((product: shopListInterface) => {
        return <CardProduct key={product.id} {...product} />
      })}
    </ProductListContainer>
  )
}
