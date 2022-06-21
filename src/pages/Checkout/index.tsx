import { useEffect } from 'react'
import { PurchaseSummary } from '../../containers/PurchaseSummary'
import { FormCheckout } from '../../containers/FormCheckout'
import { EmailUserField } from '../../components/EmailUserField'
import { ShippingInformation } from '../../components/ShippingInformation'
import { CheckoutContainer, Container, InputComponent, ButtonComponent } from './styles'
import { useSelector } from 'react-redux'
import { StateInterface } from '../../interfaces'
import { useNavigate } from 'react-router-dom'

export const Checkout = ({ handleHeader }) => {
  const { cart } = useSelector((state: StateInterface) => state.cart)
  const navigate = useNavigate()

  useEffect(() => {
    !cart.length && navigate('/')
  }, [cart])

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
        <EmailUserField />
        <ShippingInformation />
      </FormCheckout>

      <PurchaseSummary />
    </CheckoutContainer>
  )
}
