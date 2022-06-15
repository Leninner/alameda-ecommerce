import {
  Section,
  DefaultCartTitle,
  DefaultCartSubtitle,
  DefaultButton,
} from './styles'
import { CartList } from '../../containers/CartList'
import { useSelector } from 'react-redux'
import { StateInterface } from '../../interfaces'
import { Link } from 'react-router-dom'

export const Cart = () => {
  const { cart } = useSelector((state: StateInterface) => state.cart)

  return (
    <Section>
      <DefaultCartTitle>Carrito de Compra</DefaultCartTitle>
      {cart.length ? <CartList cart={cart} /> : <DefaultCart />}
    </Section>
  )
}

const DefaultCart = () => {
  return (
    <>
      <DefaultCartSubtitle>
        No tienes nada en tu carrito de compras.
      </DefaultCartSubtitle>
      <Link to="/">
        <DefaultButton>Seguir Comprando</DefaultButton>
      </Link>
    </>
  )
}
