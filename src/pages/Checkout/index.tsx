import styled from 'styled-components'
import { useEffect } from 'react'

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
      <div id="prueba">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
        quibusdam necessitatibus repellendus, aspernatur adipisci voluptates
        maxime dicta. A in labore exercitationem voluptatibus dolor dolore
        perspiciatis sit, voluptatum modi, repellat sapiente?
      </div>

      <div id="sticky">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam dolor
        voluptate nulla expedita quisquam enim. Optio placeat ex voluptas, quo
        obcaecati velit, commodi necessitatibus illo impedit inventore numquam.
        Assumenda, modi!
      </div>
    </CheckoutContainer>
  )
}

const CheckoutContainer = styled.div`
  max-width: 870px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;

  div {
    background-color: red;
    width: 418px;
  }

  #sticky {
    position: sticky;
    top: 176px;
    height: 200px;
  }

  #prueba {
    height: 200vh;
  }
`
