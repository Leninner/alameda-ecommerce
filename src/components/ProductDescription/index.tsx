import { Link } from 'react-router-dom'
import { ProductInfoModalProps, productInterface } from '../../interfaces'
import { Campos, MainDescription, Formulario } from './styles'
import { useProductDescription } from '../../hooks/useProductDescription'
import { PopUpModal } from '../PopUpModal'

export const ProductDescription = ({
  product,
  closeModal,
  fullWidth,
}: ProductInfoModalProps) => {
  const { id, name, price, description, details, tallas } = product
  const {
    quantity,
    size,
    handleSizeChange,
    handleQuantityChange,
    sendToCart,
    error,
    setError,
  } = useProductDescription()

  const handleSubmitProductToCart = (e: Event, product: productInterface) => {
    e.preventDefault()
    sendToCart(product, quantity, size)
  }

  return (
    <Formulario onSubmit={(e: Event) => handleSubmitProductToCart(e, product)}>
      <MainDescription fullWidth={fullWidth}>
        <h1>{name}</h1>
        <span>$ {price}</span>

        <h4>DESCRIPCIÓN</h4>
        <p>{description}</p>

        <h4>DETALLES</h4>
        <ul>
          {details.map(detail => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </MainDescription>

      <Campos fullWidth={fullWidth}>
        <label htmlFor="size">
          <span>Tamaño:</span>

          <select name="" id="size" onChange={handleSizeChange}>
            <option value="">Seleccionar Tamaño</option>

            {Object.entries(tallas).map(([tallaName, { stock }]) => (
              <option key={tallaName} value={tallaName}>
                {tallaName} ({stock} disponibles)
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="quantity">
          <span>Cantidad:</span>
          <input
            type="number"
            name="number"
            id="quantity"
            value={quantity}
            onChange={e => {
              handleQuantityChange(e, tallas, quantity, size)
            }}
          />
        </label>

        <button type="submit">Añadir al Carrito</button>

        {!fullWidth && (
          <Link
            to={`/shop/id=${id}/${name?.split(' ')[0]}`}
            onClick={closeModal}
          >
            Ver elemento completo
          </Link>
        )}

        {error && (
          <PopUpModal
            description={'Selecciona la opción de tamaño'}
            onClose={() => setError(false)}
          />
        )}
      </Campos>
    </Formulario>
  )
}
