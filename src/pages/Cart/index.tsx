import {
  Section,
  DefaultCartTitle,
  DefaultCartSubtitle,
  DefaultButton,
} from './styles'
import { CartList } from '../../containers/CartList'

export const Cart = () => {
  return (
    <Section>
      <DefaultCart />
      <CartList />
    </Section>
  )
}

const DefaultCart = () => {
  return (
    <>
      <DefaultCartTitle>Carrito de Compra</DefaultCartTitle>
      <DefaultCartSubtitle>
        No tienes nada en tu carrito de compras.
      </DefaultCartSubtitle>
      <DefaultButton>Seguir Comprando</DefaultButton>
    </>
  )
}
