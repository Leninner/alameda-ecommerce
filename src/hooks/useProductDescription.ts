import { useState } from 'react'

export const useProductDescription = () => {
  const [quantity, setQuantity] = useState(1)
  const [size, setSize] = useState('')

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

  return { quantity, size, handleSizeChange, handleQuantityChange }
}
