import { CartListContainer } from './styles'
import { CartProduct } from '../../components/CartProduct'

export const CartList = () => {
  return (
    <CartListContainer>
      <CartProduct />
      <CartProduct />
      <CartProduct />
      <CartProduct />
    </CartListContainer>
  )
}
