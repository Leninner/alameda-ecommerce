import styled from 'styled-components'
import { useEffect } from 'react'
import { PurchaseSummary } from '../../containers/PurchaseSummary'

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
      <section id="prueba">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
        quibusdam necessitatibus repellendus, aspernatur adipisci voluptates
        maxime dicta. A in labore exercitationem voluptatibus dolor dolore
        perspiciatis sit, voluptatum modi, repellat sapiente?
      </section>

      <PurchaseSummary />
    </CheckoutContainer>
  )
}

const CheckoutContainer = styled.div`
  max-width: 870px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;

  section {
    width: 418px;
    padding: 22px 22px 0 22px;
    background-color: #fff;
    border: 1px solid #e6e6e6;
  }

  #prueba {
    height: 1000px;
  }
`
