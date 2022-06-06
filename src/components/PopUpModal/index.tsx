import { createPortal } from 'react-dom'

export const PopUpModal = () => {
  const popupRoot = document.getElementById('popup-root')!

  return createPortal(
    <div>
      <p>NO SE PUDO AÑADIR EL ARTÍCULO</p>

      <p>Lo sentimos, solo quedan 3 de este artículo.</p>

      <button>ESTÁ BIEN</button>
    </div>,
    popupRoot
  )
}
