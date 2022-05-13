import { createPortal } from 'react-dom'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { ProductInfoModalContainer } from './styles'

export const ProductInfoModal = ({
  setIsOpen: setIsOpenModal,
  currentProductIndex,
}) => {
  const modalRoot: any = document.getElementById('modal-root')
  const state = useSelector((state: any) => state)

  // Efecto para evitar el scroll en el body al abrir un modal
  useEffect(() => {
    document.getElementsByTagName('body')[0].style.overflow = 'hidden'

    return () => {
      document.getElementsByTagName('body')[0].style.overflow = 'auto'
    }
  })

  const [currentIndex, setCurrentIndex] = useState(currentProductIndex)
  const [currentProduct, setCurrentProduct] = useState(
    state.shopList.filteredProducts[currentIndex]
  )

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

  useEffect(() => {
    setCurrentProduct(state.shopList.filteredProducts[currentIndex])
  }, [currentIndex])

  console.log({
    state: state.shopList.filteredProducts,
    currentProductIndex,
    currentProduct,
  })

  return createPortal(
    <ProductInfoModalContainer>
      <div className="modal">
        <span className="close" onClick={() => setIsOpenModal(false)}>
          X
        </span>

        <div className="modal-header">
          <h2>Product Info</h2>
          <p>{currentProduct.name}</p>
        </div>

        <span onClick={handlePreviousProduct}> {'<'} </span>
        <span onClick={handleNextProduct}> {'>'} </span>
      </div>
    </ProductInfoModalContainer>,
    modalRoot
  )
}
