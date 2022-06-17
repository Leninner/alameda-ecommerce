import { useFormHook } from '../../hooks/useFormHook'
import { FormContainer, Label, Button } from './styles'
import { schemaContactInfo } from '../../helpers'

export const Form = () => {
  const { register, handleSubmit, errors, onSubmit } =
    useFormHook(schemaContactInfo)

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h3>Nombre *</h3>

        <section>
          <Label htmlFor="name">
            <input
              {...register('name', {
                required: true,
              })}
              name="name"
              id="name"
            />
            Nombre
            {errors.name?.message && <span>{errors.name?.message}</span>}
          </Label>

          <Label htmlFor="lastName">
            <input
              {...register('lastName', {
                required: true,
              })}
              id="lastName"
              name="lastName"
            />
            Apellido
            {errors.lastName?.message && (
              <span>{errors.lastName?.message}</span>
            )}
          </Label>
        </section>
      </div>

      <Label htmlFor="email">
        Correo Electrónico *
        <input
          id="email"
          {...register('email', {
            required: true,
          })}
          name="email"
        />
        {errors.email?.message && <span>{errors.email?.message}</span>}
      </Label>

      <Label htmlFor="asunto">
        Asunto *
        <input
          id="asunto"
          {...register('asunto', {
            required: true,
          })}
          name="asunto"
        />
        {errors.asunto?.message && <span>{errors.asunto?.message}</span>}
      </Label>

      <Label htmlFor="message">
        Mensaje *
        <textarea
          id="message"
          {...register('message', {
            required: true,
          })}
          name="message"
        />
        {errors.message?.message && <span>{errors.message?.message}</span>}
      </Label>

      <Button type="submit">Enviar</Button>
    </FormContainer>
  )
}
