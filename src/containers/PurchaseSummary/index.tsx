import { PurchaseSummaryContainer } from './styles'
import { CheckoutProduct } from '../../components/CheckoutProduct'

export const PurchaseSummary = () => {
  return (
    <PurchaseSummaryContainer id="sticky">
      <h2>Resumen del Pedido</h2>

      <CheckoutProduct />
      <CheckoutProduct />
      <CheckoutProduct />
      <CheckoutProduct />

      <FooterSummary />
    </PurchaseSummaryContainer>
  )
}

const FooterSummary = () => (
  <footer>
    <img
      src="data:image/svg+xml;charset=utf-8,%3Csvg width='22' height='22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m20 15.928-8.25 4.916L3 15.912V2.471C8.489.51 14.994.517 20 2.45v13.478Z' stroke='%23000' stroke-width='2'/%3E%3Cpath d='m7 10 3 3 6-6' stroke='%23000' stroke-width='2'/%3E%3C/svg%3E"
      alt=""
    />

    <span>ÁREA DE PAGO SSL SEGURA</span>
  </footer>
)
