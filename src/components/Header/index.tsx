import { HeaderContainer, NavigationOptions, SocialOptions } from './styles'

export const Header = () => {
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
        <div>
          {/* TODO: Add image - Instagram */}
          <img src="" alt="s" />
          {/* TODO: Add image - TikTok */}
          <img src="" alt="s" />
        </div>

        {/* TODO: Add image - Cart */}
        <img src="" alt="s" />
      </SocialOptions>
    </HeaderContainer>
  )
}
