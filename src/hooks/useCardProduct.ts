import { useState } from 'react'

export const useCardProduct = (): any => {
  const [isHover, setIsHover] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const handleMouseEnter = () => setIsHover(true)
  const handleMouseLeave = () => setIsHover(false)
  const handleOpen = () => setIsOpen(true)

  return {
    isHover,
    isOpen,
    handleMouseEnter,
    handleMouseLeave,
    handleOpen,
    setIsOpen,
  }
}
