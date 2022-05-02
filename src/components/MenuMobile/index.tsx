import { MenuMobileContainer } from './styles'
import { motion } from 'framer-motion'
import { AiOutlineClose } from 'react-icons/ai'
import { FaTiktok } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export const MenuMobile = ({ handleOpen }) => {
  return (
    <MenuMobileContainer
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, type: 'fade' }}
    >
      <AiOutlineClose size={35} onClick={handleOpen} />

      <motion.div
        initial={{ y: 300 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
        exit={{
          y: 300,
        }}
        onClick={handleOpen}
      >
        <Link to="/">
          <span>Tienda</span>
        </Link>

        <Link to="/lookbook">
          <span>Catálogo</span>
        </Link>

        <Link to="/about">
          <span>Acerca de</span>
        </Link>

        <Link to="/contact">
          <span>Contacto</span>
        </Link>
      </motion.div>

      <motion.section
        initial={{ y: 300 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, type: 'spring' }}
      >
        <a href="/">
          <BsFacebook size={35} />
        </a>

        <a href="/">
          <FaTiktok size={35} />
        </a>
      </motion.section>
    </MenuMobileContainer>
  )
}
