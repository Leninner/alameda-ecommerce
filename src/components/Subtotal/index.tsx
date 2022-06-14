import { SubtotalContainer } from './styles'
import { useEffect, useState } from 'react'
import { getTotalAmount } from '../../helpers'

export const Subtotal = ({ cart }) => {
  const [subtotal, setSubtotal] = useState(0)
  useEffect(() => getTotalAmount(cart, setSubtotal), [cart])

  return (
    <SubtotalContainer>
      <div>
        <span>Subtotal</span>
        <span>${subtotal}</span>
      </div>

      <button>Área de pago</button>
    </SubtotalContainer>
  )
}
