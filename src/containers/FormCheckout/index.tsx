import { cloneElement, Children } from 'react'
import { useFormHook } from '../../hooks/useFormHook'

export const FormCheckout = ({
  Container,
  children,
  InputComponent,
  ButtonComponent,
}) => {
  const { register, errors, handleSubmit, onSubmit } = useFormHook()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Children.map(children, child =>
        cloneElement(child, {
          WrapperComponent: Container,
          InputComponent,
          ButtonComponent,
          register,
          errors,
        })
      )}
    </form>
  )
}
