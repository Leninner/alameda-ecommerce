import { useState } from 'react'
import { productInterface } from '../interfaces'
import { useDispatch } from 'react-redux'

export const useProductDescription = () => {
  const [quantity, setQuantity] = useState(1)
  const [size, setSize] = useState('')
  const dispatch = useDispatch()

  const handleSizeChange = e => setSize(e.target.value)

  const handleQuantityChange = (e, tallas, quantity, size) => {
    setQuantity(
      quantity < 1
        ? 1
        : Number(e.target.value) > tallas[size]?.stock
        ? tallas[size]?.stock
        : Number(e.target.value) < 1
        ? 1
        : Number(e.target.value)
    )
  }

  const sendToCart = (
    product: productInterface,
    quantity: number,
    size: string
  ) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        product,
        quantity,
        size,
      },
    })
  }

  return { quantity, size, handleSizeChange, handleQuantityChange, sendToCart }
}
