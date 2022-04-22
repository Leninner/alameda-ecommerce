import {
  HeaderContainer,
  NavigationOptions,
  SocialOptions,
  SocialButtons,
  ShopCart,
} from './styles'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaTiktok } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'
import { useSelector } from 'react-redux'

export const Header = () => {
  const SIZE = '20'
  const state = useSelector(state => state)

  console.log(state)

  return (
    <HeaderContainer>
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
