import { ProductListContainer } from './styles'
import { CardProduct } from '../../components/CardProduct'
import { useSelector } from 'react-redux'
import { productInterface, StateInterface } from '../../interfaces'

export const ProductList = () => {
  const { filteredProducts } = useSelector(
    (state: StateInterface) => state.shopList
  )

  return (
    <ProductListContainer>
      {filteredProducts.map(
        (product: productInterface, currentProductIndex: number) => (
          <CardProduct
            key={product.id}
            product={product}
            currentProductIndex={currentProductIndex}
          />
        )
      )}
    </ProductListContainer>
  )
}
