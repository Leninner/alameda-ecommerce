import { PaymentSummaryContainer, NoImportant } from './styles'

export const PaymentSummary = () => {
  return (
    <PaymentSummaryContainer>
      <NoImportant>
        <span>Subtotal</span>
        <span>$150.00</span>
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
        <span>$150.00</span>
      </div>
    </PaymentSummaryContainer>
  )
}
