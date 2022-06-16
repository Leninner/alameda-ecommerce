import { Error, Span, SpanExtended } from './styles'
import { useState } from 'react'

export const EmailUser = (props: any) => {
  const { WrapperComponent, InputComponent, ButtonComponent } = props
  const [email, setEmail] = useState(false)

  const handleClick = () => setEmail(!email)

  return (
    <WrapperComponent>
      <h2>1. Tu correo electrónico</h2>

      {email && <SpanExtended onClick={handleClick}>Editar</SpanExtended>}

      <InputComponent
        type="text"
        placeholder="Correo electrónico"
        disabled={email}
      />

      {!email && (
        <Span>
          Recibirás recibos y notificaciones en esta dirección de correo.
        </Span>
      )}

      {false && (
        <Error>
          Escribe una dirección de correo electrónico que sea válida
        </Error>
      )}

      {!email && (
        <ButtonComponent onClick={handleClick}>Continuar</ButtonComponent>
      )}
    </WrapperComponent>
  )
}
