import { createPortal } from 'react-dom'
import { PopUpModalContainer, PopupButton } from './styles'
import { ErrorType } from '../../interfaces'

interface PopUpModalProps {
  onClose: () => void
  error: ErrorType
}

export const PopUpModal = ({ error, onClose }: PopUpModalProps) => {
  const popupRoot: any = document.getElementById('modal-root')

  return createPortal(
    <PopUpModalContainer>
      <span>NO SE PUDO AÑADIR EL ARTÍCULO</span>

      <p>{error.errorMessage}</p>

      <PopupButton onClick={onClose}>ESTÁ BIEN</PopupButton>
    </PopUpModalContainer>,
    popupRoot
  )
}
