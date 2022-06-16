import { useEffect } from 'react'
import { PurchaseSummary } from '../../containers/PurchaseSummary'
import { FormCheckout } from '../../containers/FormCheckout'
import { EmailUser } from '../../components/EmailUser'
import {
  CheckoutContainer,
  Container,
  InputComponent,
  ButtonComponent,
} from './styles'

export const Checkout = ({ handleHeader }) => {
  useEffect(() => {
    handleHeader(true)
    window.scrollTo(0, 0)

    return () => {
      handleHeader(false)
    }
  }, [])

  return (
    <CheckoutContainer>
      <FormCheckout
        Container={Container}
        InputComponent={InputComponent}
        ButtonComponent={ButtonComponent}
      >
        <EmailUser />
      </FormCheckout>

      <PurchaseSummary />
    </CheckoutContainer>
  )
}
