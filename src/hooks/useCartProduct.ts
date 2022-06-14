import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { productInterface } from '../interfaces'

export const useCartProduct = (
  product: productInterface,
  tamaño: string,
  cantidad: number
) => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const { name, price, images, tallas } = product

  const [isIncrementing, setIsIncrementing] = useState(false)
  const [isDecrementing, setIsDecrementing] = useState(false)
  const { stock } = tallas[tamaño]

  useEffect(() => {
    if (cantidad === 1) {
      setIsDecrementing(true)
    } else {
      setIsDecrementing(false)
    }

    if (stock) {
      setIsIncrementing(false)
    } else {
      setIsIncrementing(true)
    }
  }, [cantidad])

  console.log({ estadoActualizado: state })

  const handleIncrement = () => {
    if (stock) {
      dispatch({
        type: 'UPDATE_STOCK',
        payload: {
          product,
          size: tamaño,
          quantity: 1,
        },
      })

      dispatch({
        type: 'UPDATE_CART',
        payload: {
          product,
          size: tamaño,
          quantity: -1,
        },
      })
    }
  }

  const handleDecrement = () => {
    if (cantidad >= 2) {
      dispatch({
        type: 'UPDATE_STOCK',
        payload: {
          product,
          size: tamaño,
          quantity: -1,
        },
      })

      dispatch({
        type: 'UPDATE_CART',
        payload: {
          product,
          size: tamaño,
          quantity: 1,
        },
      })
    }

    // TODO: Poner el botón en disabled
  }

  return {
    isIncrementing,
    isDecrementing,
    handleIncrement,
    handleDecrement,
    name,
    price,
    images,
  }
}
