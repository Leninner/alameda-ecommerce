import { CheckoutProductContainer, CantidadContainer, PriceSummary, ProductData } from './styles'
import { productInterface } from '../../interfaces'
import { useCartProduct } from '../../hooks/useCartProduct'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

interface CheckoutProductProps {
  product: productInterface
  tamaño: string
}

export const CheckoutProduct = ({ product, tamaño }: CheckoutProductProps) => {
  const dispatch = useDispatch()
  const { name, images, price, tallas } = product
  const { removeFromCart } = useCartProduct(product, tamaño, tallas[tamaño].cantidad)
  const [cantidad, setCantidad] = useState(tallas[tamaño].cantidad)

  const handleUpdateQuantity = (quantity: number) => {
    dispatch({
      type: 'UPDATE_CART',
      payload: {
        product,
        size: tamaño,
        quantity: -quantity,
      },
    })

    dispatch({
      type: 'UPDATE_STOCK',
      payload: {
        product,
        quantity,
        size: tamaño,
      },
    })
  }

  const handleChange = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.target
    setCantidad(parseInt(value))
  }

  const handleBlur = () => {
    if (cantidad < 1) {
      setCantidad(tallas[tamaño].cantidad)
    } else if (cantidad > tallas[tamaño].stock + tallas[tamaño].cantidad) {
      setCantidad(tallas[tamaño].cantidad)
    } else if (!cantidad) {
      setCantidad(tallas[tamaño].cantidad)
    } else {
      handleUpdateQuantity(cantidad - tallas[tamaño].cantidad)
    }
  }

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
          <input
            type="number"
            value={cantidad}
            id="cantidad"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </CantidadContainer>

        <button onClick={removeFromCart}>Eliminar</button>
      </PriceSummary>
    </CheckoutProductContainer>
  )
}
