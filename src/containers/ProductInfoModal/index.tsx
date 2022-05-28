import { createPortal } from 'react-dom'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import {
  ProductInfoModalContainer,
  CloseButton,
  PreviousButton,
  NextButton,
  ModalBody,
} from './styles'
import { ImageDescription } from '../../components/ImageDescription'
import { ProductDescription } from '../../components/ProductDescription'
import { stateInterface } from '../../interfaces'

export const ProductInfoModal = ({
  setIsOpen: setIsOpenModal,
  currentProductIndex,
}) => {
  const modalRoot: any = document.getElementById('modal-root')
  const state = useSelector((state: stateInterface) => state)

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
    currentProduct,
  })

  return createPortal(
    <ProductInfoModalContainer>
      <CloseButton onClick={() => setIsOpenModal(false)}>X</CloseButton>

      <ModalBody>
        <ImageDescription
          imageOne={currentProduct.images[0]}
          imageTwo={currentProduct.images[1]}
        />

        <ProductDescription
          id={currentProduct.id}
          name={currentProduct.name}
          price={currentProduct.price}
          closeModal={() => setIsOpenModal(false)}
        />
      </ModalBody>

      <PreviousButton onClick={handlePreviousProduct}> {'<'} </PreviousButton>
      <NextButton onClick={handleNextProduct}> {'>'} </NextButton>
    </ProductInfoModalContainer>,
    modalRoot
  )
}
