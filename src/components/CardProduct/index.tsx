import {
  CardProductContainer,
  CardProductImgContainer,
  CardProductInfo,
} from './styles'
import { useState } from 'react'
import { motion } from 'framer-motion'

export const CardProduct = ({ name, images }) => {
  const [isHover, setIsHover] = useState(false)
  const handleMouseEnter = () => setIsHover(true)
  const handleMouseLeave = () => setIsHover(false)

  return (
    <CardProductContainer
      as={motion.div}
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 150,
        duration: 0.5,
      }}
      viewport={{ once: true }}
    >
      <CardProductImgContainer
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {!isHover ? (
          <img src={images[0]} alt={name} data-load="false" />
        ) : (
          <>
            <motion.img
              src={images.length > 1 ? images[1] : images[0]}
              alt={name}
              data-load="false"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.5 } }}
            />
            <motion.button
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.3,
                  ease: 'easeIn',
                },
              }}
            >
              Vista Rápida
            </motion.button>
          </>
        )}
      </CardProductImgContainer>

      <CardProductInfo>
        <h3>{name}</h3>
        <span>$50.00</span>
      </CardProductInfo>
    </CardProductContainer>
  )
}
