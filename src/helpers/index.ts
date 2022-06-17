import * as yup from 'yup'
import { productInterface } from '../interfaces'

export const schemaContactInfo = yup.object().shape({
  name: yup.string().required('El nombre es requerido'),
  lastName: yup.string().required('El apellido es requerido'),
  email: yup
    .string()
    .email('El email no es válido')
    .required('El email es requerido'),
  message: yup.string().required('El mensaje es requerido'),
  asunto: yup.string().required('El asunto es requerido'),
})

export const schemaCheckoutInfo = yup.object().shape({
  customerEmail: yup
    .string()
    .email('El email no es válido')
    .required('El email es requerido'),
})

export const getTotalAmount = (
  cart: productInterface[],
  setSubtotal: React.Dispatch<React.SetStateAction<number>>
) => {
  setSubtotal(
    cart.reduce((acc: number, currentProduct: productInterface) => {
      return (
        acc +
        currentProduct.price *
          Object.entries(currentProduct.tallas).reduce(
            (acc2: number, [_, { cantidad }]) => {
              return acc2 + cantidad
            },
            0
          )
      )
    }, 0)
  )
}
