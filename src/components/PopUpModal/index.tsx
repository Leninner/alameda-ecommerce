import { createPortal } from 'react-dom'
import { PopUpModalContainer, PopupButton } from './styles'

interface PopUpModalProps {
  description: string
  quantity?: number
}

export const PopUpModal = ({ description, quantity }: PopUpModalProps) => {
  const popupRoot: any = document.getElementById('modal-root')

  console.log(quantity)

  return createPortal(
    <PopUpModalContainer>
      <span>NO SE PUDO AÑADIR EL ARTÍCULO</span>

      {quantity ? (
        <p>
          <span>Lo sentimos, sola quedan {quantity} de este artículo</span>
        </p>
      ) : (
        <p>{description}</p>
      )}

      <PopupButton>ESTÁ BIEN</PopupButton>
    </PopUpModalContainer>,
    popupRoot
  )
}
