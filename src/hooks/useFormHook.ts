import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Inputs } from '../interfaces'

interface UseFormHookReturns {
  register: any
  handleSubmit: any
  errors: any
  onSubmit: (data: Inputs) => void
  setValue: any
  getValues: any
  trigger: any
}

export const useFormHook = (schema: any): UseFormHookReturns => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    trigger,
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data)

  return {
    register,
    handleSubmit,
    errors,
    setValue,
    onSubmit,
    getValues,
    trigger,
  }
}
