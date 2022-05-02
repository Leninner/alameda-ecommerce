import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '../helpers'
import { Inputs } from '../interfaces'
import { SubmitHandler } from 'react-hook-form'

export const useFormHook = (): any => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data)

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  }
}
