import { useState, useEffect } from 'react'
import { StateInterface } from '../interfaces'

export const useProductInfoModal = (currentProductIndex: number, state: StateInterface) => {
  const [currentIndex, setCurrentIndex] = useState(currentProductIndex)
  const [currentProduct, setCurrentProduct] = useState(
    state.shopList.filteredProducts[currentIndex]
  )

  useEffect(() => {
    setCurrentProduct(state.shopList.filteredProducts[currentIndex])
  }, [currentIndex, state.shopList.filteredProducts])

  const handleNextProduct = () => {
    if (currentIndex < state.shopList.filteredProducts.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePreviousProduct = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return {
    currentProduct,
    handleNextProduct,
    handlePreviousProduct,
  }
}
