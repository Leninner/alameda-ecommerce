import { Link } from 'react-router-dom'
import { Campos, MainDescription, Formulario } from './styles'

interface ProductInfoModalProps {
  id?: number
  name?: string
  price?: number
  closeModal?: () => void
  fullWidth?: boolean
}

export const ProductDescription = ({
  id,
  name,
  price,
  closeModal,
  fullWidth,
}: ProductInfoModalProps) => {
  return (
    <Formulario>
      <MainDescription fullWidth={fullWidth}>
        <h1>{name}</h1>
        <span>$ {price}</span>

        <h4>DESCRIPCIÓN</h4>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut ...
        </p>

        <h4>DETALLES</h4>

        <ul>
          <li>100% algodón</li>
          <li>Lavar en lavadora en frío</li>
          <li>Secar en secadora a baja temperatura</li>
        </ul>
      </MainDescription>

      <Campos fullWidth={fullWidth}>
        <label htmlFor="size">
          <span>Tamaño:</span>

          <select name="" id="size">
            <option value="">Seleccionar Tamaño</option>
            <option value="0">0</option>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
          </select>
        </label>

        <label htmlFor="quantity">
          <span>Cantidad:</span>
          <input
            type="number"
            name=""
            id="quantity"
            value={1}
            onChange={() => {
              console.log('cambio')
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
