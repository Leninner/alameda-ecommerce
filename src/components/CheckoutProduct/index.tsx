import { CheckoutProductContainer, CantidadContainer, PriceSummary, ProductData } from './styles'
import { productInterface } from '../../interfaces'
import { useCartProduct } from '../../hooks/useCartProduct'

interface CheckoutProductProps {
  product: productInterface
  tamaño: string
}

export const CheckoutProduct = ({ product, tamaño }: CheckoutProductProps) => {
  const { name, images, price, tallas } = product
  const { removeFromCart } = useCartProduct(product, tamaño, tallas[tamaño].cantidad)

  return (
    <CheckoutProductContainer>
      <img src={images[0]} alt="" />

      <ProductData>
        <h3>{name}</h3>
        <span>Tamaño: {tamaño}</span>
      </ProductData>

      <PriceSummary>
        <span>${price}.00</span>

        <CantidadContainer>
          <label htmlFor="cantidad">Cant.</label>
          <input type="number" value={tallas[tamaño].cantidad} id="cantidad" />
        </CantidadContainer>

        <button onClick={removeFromCart}>Eliminar</button>
      </PriceSummary>
    </CheckoutProductContainer>
  )
}
