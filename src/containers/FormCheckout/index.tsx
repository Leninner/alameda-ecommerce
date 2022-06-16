import { cloneElement, Children } from 'react'

export const FormCheckout = ({ Container, children }) => {
  return (
    <section>
      {Children.map(children, child =>
        cloneElement(child, {
          WrapperComponent: Container,
        })
      )}
    </section>
  )
}
