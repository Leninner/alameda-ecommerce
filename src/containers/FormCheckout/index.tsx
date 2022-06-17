import { cloneElement, Children, useState } from 'react'
import { useFormHook } from '../../hooks/useFormHook'
import { schemaCheckoutInfo } from '../../helpers'

export const FormCheckout = ({ Container, children, InputComponent, ButtonComponent }) => {
  const { register, errors, handleSubmit, onSubmit, setValue, getValues, trigger } =
    useFormHook(schemaCheckoutInfo)

  const [isOpen, setIsOpen] = useState(true)

  // Uso de composición de componentes
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Children.map(children, child =>
        cloneElement(child, {
          WrapperComponent: Container,
          InputComponent,
          ButtonComponent,
          register,
          errors,
          setValue,
          getValues,
          trigger,
          isOpen,
          setIsOpen,
        })
      )}
    </form>
  )
}
