import { SubtotalContainer } from './styles'
import { useEffect, useState } from 'react'
import { getTotalAmount } from '../../helpers'
import { Link } from 'react-router-dom'

export const Subtotal = ({ cart }) => {
  const [subtotal, setSubtotal] = useState(0)
  useEffect(() => getTotalAmount(cart, setSubtotal), [cart])

  return (
    <SubtotalContainer>
      <div>
        <span>Subtotal</span>
        <span>${subtotal}</span>
      </div>

      <Link to="/checkout">
        <button>Área de pago</button>
      </Link>
    </SubtotalContainer>
  )
}
