import { cloneElement, Children } from 'react'

export const FormCheckout = ({
  Container,
  children,
  InputComponent,
  ButtonComponent,
}) => {
  return (
    <section>
      {Children.map(children, child =>
        cloneElement(child, {
          WrapperComponent: Container,
          InputComponent,
          ButtonComponent,
        })
      )}
    </section>
  )
}
