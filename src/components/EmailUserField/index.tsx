import { Error, Span, SpanExtended } from './styles'
import { useState } from 'react'

export const EmailUserField = (props: any) => {
  const {
    WrapperComponent,
    InputComponent,
    ButtonComponent,
    register,
    errors,
    setValue,
    getValues,
    trigger,
    isOpen,
    setIsOpen,
  } = props

  const handleSetCustomerEmail = (email: string) => {
    setValue('customerEmail', email)
    setIsOpen(false)
  }

  return (
    <WrapperComponent>
      <h2>1. Tu correo electrónico</h2>

      {!isOpen && <SpanExtended onClick={() => setIsOpen(true)}>Editar</SpanExtended>}

      <InputComponent
        type="text"
        placeholder="Correo electrónico"
        {...register('customerEmail', {
          required: true,
        })}
        error={errors.customerEmail?.message}
        disabled={!isOpen}
      />

      {!errors.customerEmail?.message && isOpen && (
        <Span>Recibirás recibos y notificaciones en esta dirección de correo.</Span>
      )}

      {errors.customerEmail?.message && (
        <Error>Escribe una dirección de correo electrónico que sea válida</Error>
      )}

      {isOpen && (
        <ButtonComponent
          type="button"
          onClick={async () => {
            const result = await trigger('customerEmail')

            if (result) {
              handleSetCustomerEmail(getValues().customerEmail)
            }
          }}
        >
          Continuar
        </ButtonComponent>
      )}
    </WrapperComponent>
  )
}

/**
 * La función trigger() es una función que Activa manualmente la validación de formularios o entradas. Este método también es útil cuando tiene una validación dependiente (la validación de entrada depende del valor de otra entrada).
 */
