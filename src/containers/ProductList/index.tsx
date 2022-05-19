import { ProductListContainer } from './styles'
import { CardProduct } from '../../components/CardProduct'
import { useSelector } from 'react-redux'
import { productInterface, stateInterface } from '../../interfaces'

export const ProductList = () => {
  const { filteredProducts } = useSelector(
    (state: stateInterface) => state.shopList
  )

  return (
    <ProductListContainer>
      {filteredProducts.map(
        (product: productInterface, currentProductIndex: number) => (
          <CardProduct
            key={product.id}
            {...product}
            currentProductIndex={currentProductIndex}
          />
        )
      )}
    </ProductListContainer>
  )
}
