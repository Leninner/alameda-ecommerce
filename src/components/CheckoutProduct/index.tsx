import {
  CheckoutProductContainer,
  CantidadContainer,
  PriceSummary,
  ProductData,
} from './styles'
import { useState } from 'react'

export const CheckoutProduct = () => {
  const [cantidad, setCantidad] = useState(1)

  const handleCantidad = e => {
    if (e.target.value >= 0 && e.target.value <= 99) {
      setCantidad(e.target.value)
    }
  }

  return (
    <CheckoutProductContainer>
      <img
        src="https://images.squarespace-cdn.com/content/v1/5ed00bab777fab6698681c63/1590692797680-V0QFN4CTZKX0EYUOYE12/ulihu-charcoal-silk-linen-tunic_0326-v1-FINAL-copy.jpg?format=100w"
        alt=""
      />

      <ProductData>
        <h3>Túnica Lounge / Negra</h3>
        <span>Tamaño: 0</span>
      </ProductData>

      <PriceSummary>
        <span>$50.00</span>

        <CantidadContainer>
          <label htmlFor="cantidad">Cant.</label>
          <input
            type="number"
            onChange={handleCantidad}
            value={cantidad}
            id="cantidad"
          />
        </CantidadContainer>

        <button>Eliminar</button>
      </PriceSummary>
    </CheckoutProductContainer>
  )
}
