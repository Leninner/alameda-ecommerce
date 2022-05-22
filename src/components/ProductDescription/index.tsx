import { Link } from 'react-router-dom'
import { Campos, MainDescription, Formulario } from './styles'

export const ProductDescription = ({ name, price, closeModal }) => {
  return (
    <Formulario>
      <MainDescription>
        <h1>{name}</h1>
        <span>$ {price}</span>

        <h4>DESCRIPCIÓN</h4>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut ...
        </p>
      </MainDescription>

      <Campos>
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

        <Link to={`/shop/${name.split(' ')[0]}`} onClick={closeModal}>
          Ver elemento completo
        </Link>
      </Campos>
    </Formulario>
  )
}
