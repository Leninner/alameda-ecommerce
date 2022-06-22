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

    if (cantidad > tallas[tamaño].stock) {
      setCantidad(tallas[tamaño].stock)
    } else if (cantidad < 0) {
      setCantidad(0)
    } else {
      setCantidad(parseInt(value))
    }
  }

  const handleBlur = () => {
    if (cantidad) {
      handleUpdateQuantity(cantidad - tallas[tamaño].cantidad)
    } else {
      setCantidad(tallas[tamaño].cantidad)
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
