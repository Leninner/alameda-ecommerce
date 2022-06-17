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
import { StateInterface } from '../../interfaces'
import { useProductInfoModal } from '../../hooks/useProductInforModal'

export const ProductInfoModal = ({ setIsOpen: setIsOpenModal, currentProductIndex }) => {
  useEffect(() => {
    document.getElementsByTagName('body')[0].style.overflow = 'hidden'

    return () => {
      document.getElementsByTagName('body')[0].style.overflow = 'auto'
    }
  }, [])

  const modalRoot: any = document.getElementById('modal-root')
  const state = useSelector((state: StateInterface) => state)

  const { currentProduct, handlePreviousProduct, handleNextProduct } = useProductInfoModal(
    currentProductIndex,
    state
  )

  return createPortal(
    <ProductInfoModalContainer>
      <CloseButton onClick={() => setIsOpenModal(false)}>X</CloseButton>

      <ModalBody>
        <ImageDescription imageOne={currentProduct.images[0]} imageTwo={currentProduct.images[1]} />

        <ProductDescription product={currentProduct} closeModal={() => setIsOpenModal(false)} />
      </ModalBody>

      <PreviousButton onClick={handlePreviousProduct}> {'<'} </PreviousButton>
      <NextButton onClick={handleNextProduct}> {'>'} </NextButton>
    </ProductInfoModalContainer>,
    modalRoot
  )
}
