import { CartListContainer, SubtotalContainer } from './styles'
import { CartProduct } from '../../components/CartProduct'
import { productInterface } from '../../interfaces'
import { Subtotal } from '../../components/Subtotal'

export const CartList = ({ cart }) => {
  return (
    <CartListContainer>
      {cart.map((product: productInterface) => {
        return Object.entries(product.tallas).map(([key, { cantidad }]) => {
          return (
            cantidad > 0 && (
              <CartProduct
                key={`${product.id}-${key}`}
                product={product}
                tamaño={key}
                cantidad={cantidad}
              />
            )
          )
        })
      })}

      <SubtotalContainer>
        <Subtotal cart={cart} />
      </SubtotalContainer>
    </CartListContainer>
  )
}
