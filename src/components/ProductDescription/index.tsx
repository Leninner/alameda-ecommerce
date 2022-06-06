import { Link } from 'react-router-dom'
import { productInterface } from '../../interfaces'
import { Campos, MainDescription, Formulario } from './styles'
import { useState } from 'react'

interface ProductInfoModalProps {
  product: productInterface
  closeModal?: () => void
  fullWidth?: boolean
}

export const ProductDescription = ({
  product: { id, name, price, description, details, tallas },
  closeModal,
  fullWidth,
}: ProductInfoModalProps) => {
  const [quantity, setQuantity] = useState(1)
  const [size, setSize] = useState('')

  const handleSizeChange = e => {
    setSize(e.target.value)
  }

  console.log(quantity)

  return (
    <Formulario>
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
              setQuantity(
                quantity < 1
                  ? 1
                  : Number(e.target.value) > tallas[size]?.stock
                  ? tallas[size]?.stock
                  : Number(e.target.value)
              )
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
      </Campos>
    </Formulario>
  )
}
