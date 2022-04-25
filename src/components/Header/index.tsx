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
import { useState } from 'react'

export const Header = () => {
  const SIZE = '20'
  const state = useSelector(state => state)
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(!isOpen)

  return (
    <HeaderContainer>
      {window.innerWidth > 768 ? (
        <NavigationOptions>
          <ul>
            <li>
              <a href="/">Tienda</a>
            </li>
            <li>
              <a href="/">Catálogo</a>
            </li>
            <li>
              <a href="/">Acerca de</a>
            </li>
            <li>
              <a href="/">Contacto</a>
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

      <h1>Alameda</h1>

      <SocialOptions>
        <SocialButtons>
          {/* TODO: Add image - Instagram */}
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <BsFacebook size={SIZE} />
          </a>
          {/* TODO: Add image - TikTok */}
          <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">
            <FaTiktok size={SIZE} />
          </a>
        </SocialButtons>

        <ShopCart>
          <AiOutlineShoppingCart size={SIZE} />
        </ShopCart>
      </SocialOptions>
    </HeaderContainer>
  )
}
