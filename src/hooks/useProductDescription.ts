import { SetStateAction, useState } from 'react'
import { productInterface, Tallas } from '../interfaces'
import { useDispatch } from 'react-redux'

export const useProductDescription = () => {
  const [quantity, setQuantity] = useState(1)
  const [size, setSize] = useState('')
  const dispatch = useDispatch()
  const [error, setError] = useState({
    isError: false,
    errorMessage: '',
  })

  const handleSizeChange = (e: { target: { value: SetStateAction<string> } }) =>
    setSize(e.target.value)

  const handleQuantityChange = (
    e: any,
    tallas: Tallas,
    quantity: number,
    size: string
  ) => {
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
    try {
      if (product.tallas[size].stock < quantity) {
        setError({
          isError: true,
          errorMessage: 'No hay suficientes unidades en stock',
        })

        return
      }

      const productToSend = {
        ...product,
        tallas: {
          ...product.tallas,
          [size]: {
            ...product.tallas[size],
            stock: product.tallas[size].stock - quantity,
            cantidad: quantity,
          },
        },
      }

      dispatch({
        type: 'ADD_TO_CART',
        payload: {
          product: productToSend,
          size,
        },
      })

      dispatch({
        type: 'UPDATE_STOCK',
        payload: {
          product: {
            ...productToSend,
            tallas: {
              ...productToSend.tallas,
              [size]: {
                ...productToSend.tallas[size],
                cantidad: 0,
              },
            },
          },
        },
      })

      setQuantity(1)
    } catch (error) {
      setError({
        isError: true,
        errorMessage: 'Selecciona la opción de tamaño',
      })
    }
  }

  const handleSubmitProductToCart = (e: Event, product: productInterface) => {
    e.preventDefault()
    sendToCart(product, quantity, size)
  }

  const getTotalProductsOnCart = (cart: any) => {
    return cart.reduce(
      (acc: any, item: any) =>
        acc +
        Object.entries(item.tallas).reduce(
          (acc2, curr: any) => acc2 + curr[1].cantidad,
          0
        ),
      0
    )
  }

  return {
    quantity,
    size,
    handleSizeChange,
    handleQuantityChange,
    error,
    setError,
    handleSubmitProductToCart,
    getTotalProductsOnCart,
  }
}
