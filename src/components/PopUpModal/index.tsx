import { createPortal } from 'react-dom'
import { PopUpModalContainer, PopupButton } from './styles'

interface PopUpModalProps {
  description: string
  onClose?: () => void
}

export const PopUpModal = ({ description, onClose }: PopUpModalProps) => {
  const popupRoot: any = document.getElementById('modal-root')

  return createPortal(
    <PopUpModalContainer>
      <span>NO SE PUDO AÑADIR EL ARTÍCULO</span>

      <p>{description}</p>

      <PopupButton onClick={onClose}>ESTÁ BIEN</PopupButton>
    </PopUpModalContainer>,
    popupRoot
  )
}
