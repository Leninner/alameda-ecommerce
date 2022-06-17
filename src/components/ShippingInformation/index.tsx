import styled from 'styled-components'

export const ShippingInformation = (props: any) => {
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
  } = props

  return (
    <WrapperComponent>
      <h2>2. Envío</h2>

      <div
        style={{
          display: isOpen ? 'none' : 'block',
        }}
      >
        <InLine>
          <InputComponent
            type="text"
            id="first"
            placeholder="Nombre"
            {...register('customerName', {
              required: true,
            })}
            error={errors.customerLastName?.message}
          />

          <InputComponent
            type="text"
            placeholder="Apellidos"
            {...register('customerLastName', {
              required: true,
            })}
            error={errors.customerLastName?.message}
          />
        </InLine>

        <InputComponent
          type="text"
          placeholder="Dirección 1"
          {...register('customerDirectionOne', {
            required: true,
          })}
          error={errors.customerDirectionOne?.message}
        />

        <InputComponent
          type="text"
          placeholder="Dirección 2"
          error={errors.customerDirectionTwo?.message}
          {...register('customerDirectionTwo')}
        />

        <InputComponent
          as="select"
          {...register('customerCountry', {
            required: true,
          })}
          error={errors.customerCountry?.message}
        >
          <option value="">Selecciona una ciudad</option>
          <option value="Quito">Quito</option>
          <option value="Ambato">Ambato</option>
          <option value="Cuenca">Cuenca</option>
        </InputComponent>

        <InLine>
          <InputComponent
            type="text"
            id="first"
            placeholder="Código postal"
            {...register('customerPostalCode', {
              required: true,
            })}
            error={errors.customerPostalCode?.message}
          />

          <InputComponent
            type="text"
            placeholder="Ciudad"
            {...register('customerCity', {
              required: true,
            })}
            error={errors.customerCity?.message}
          />
        </InLine>

        <InputComponent
          type="tel"
          placeholder="Teléfono"
          {...register('customerPhone', {
            required: true,
          })}
          error={errors.customerPhone?.message}
        />

        <ButtonComponent type="submit">Pagar</ButtonComponent>
      </div>
    </WrapperComponent>
  )
}

const InLine = styled.div`
  display: flex;

  #first {
    margin-right: 10px;
  }
`
