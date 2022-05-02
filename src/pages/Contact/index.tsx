import { Form } from '../../components/Form'
import { ContactContainer, ContactIntro } from './styles'

export const Contact = () => {
  return (
    <ContactContainer>
      <ContactIntro>
        <h3>Contáctanos.</h3>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <p>Ropa cortesía de Lauren Winter, Kinem y ULIHU</p>
      </ContactIntro>

      <Form />
    </ContactContainer>
  )
}
