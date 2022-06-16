import { useEffect } from 'react'
import { PurchaseSummary } from '../../containers/PurchaseSummary'
import { FormCheckout } from '../../containers/FormCheckout'
import { EmailUser } from '../../components/EmailUser'
import { CheckoutContainer, Container } from './styles'

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
      <FormCheckout Container={Container}>
        <EmailUser />
        <EmailUser />
      </FormCheckout>

      <PurchaseSummary />
    </CheckoutContainer>
  )
}
