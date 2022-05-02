import * as yup from 'yup'

export const schema = yup.object().shape({
  name: yup.string().required('El nombre es requerido'),
  lastName: yup.string().required('El apellido es requerido'),
  email: yup
    .string()
    .email('El email no es válido')
    .required('El email es requerido'),
  message: yup.string().required('El mensaje es requerido'),
  asunto: yup.string().required('El asunto es requerido'),
})
