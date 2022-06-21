import { PaymentSummaryContainer, NoImportant } from './styles'
import { useSelector } from 'react-redux'
import { StateInterface } from '../../interfaces'

export const PaymentSummary = () => {
  const { cart } = useSelector((state: StateInterface) => state.cart)

  const totalPayment = cart.reduce((acc, product) => {
    return (
      acc +
      product.price *
        Object.entries(product.tallas).reduce((acc2, [_, { cantidad }]) => {
          return acc2 + cantidad
        }, 0)
    )
  }, 0)

  return (
    <PaymentSummaryContainer>
      <NoImportant>
        <span>Subtotal</span>
        <span>${totalPayment}.00</span>
      </NoImportant>

      <NoImportant>
        <span>Impuestos</span>
        <span>$00.00</span>
      </NoImportant>

      <NoImportant>
        <span>Envío</span>
        <span>-</span>
      </NoImportant>

      <div
        style={{
          marginTop: '1rem',
        }}
      >
        <span>Total</span>
        <span>${totalPayment}.00</span>
      </div>
    </PaymentSummaryContainer>
  )
}
