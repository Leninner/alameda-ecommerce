import {
  HeaderContainer,
  NavigationOptions,
  SocialOptions,
  SocialButtons,
  ShopCart,
  Box,
} from './styles'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaTiktok } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'
import { MenuMobile } from '../MenuMobile'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { StateInterface } from '../../interfaces'
import { useProductDescription } from '../../hooks/useProductDescription'

export const Header = () => {
  const SIZE = '20'
  const { cart } = useSelector((state: StateInterface) => state.cart)
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => setIsOpen(!isOpen)
  const { getTotalProductsOnCart } = useProductDescription()

  return (
    <HeaderContainer>
      {window.innerWidth > 768 ? (
        <NavigationOptions>
          <ul>
            <li>
              <NavLink to="/">Tienda</NavLink>
            </li>
            <li>
              <NavLink to="/lookbook">Catálogo</NavLink>
            </li>
            <li>
              <NavLink to="/about">Acerca de</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contacto</NavLink>
            </li>
          </ul>
        </NavigationOptions>
      ) : (
        <>
          <Box>
            {!isOpen && <HiOutlineMenuAlt4 size={35} onClick={handleOpen} />}
          </Box>

          {isOpen ? <MenuMobile handleOpen={handleOpen} /> : null}
        </>
      )}

      <h1>
        <Link to="/">Alameda</Link>
      </h1>

      <SocialOptions>
        <SocialButtons>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <BsFacebook size={SIZE} />
          </a>
          <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">
            <FaTiktok size={SIZE} />
          </a>
        </SocialButtons>

        <Link to="cart">
          <ShopCart>
            <AiOutlineShoppingCart size={SIZE} />

            <span>{getTotalProductsOnCart(cart)}</span>
          </ShopCart>
        </Link>
      </SocialOptions>
    </HeaderContainer>
  )
}
