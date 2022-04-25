import { FooterContainer, SubcribeForm } from './styles'
import { FaTiktok } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'

export const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <FaTiktok size={22} />
        <BsFacebook size={22} />
      </div>

      <span>Regístrate para recibir noticias y actualizaciones.</span>

      <SubcribeForm onSubmit={e => e.preventDefault()}>
        <input type="text" placeholder="Correo electrónico" />
        <button type="submit">Registrarse</button>
      </SubcribeForm>

      <p>
        Inspirado en{' '}
        <a
          href="https://es.squarespace.com/?channel=pbr&subchannel=go&campaign=pbr-dr-go-row-es-squarespace-e-bmm&subcampaign=(Squrespace_squrespace_e)&&trg=aud-296966746928:kwd-4324697425&locint=&locphy=1005380&device=c&kw=squrespace&gclid=CjwKCAjwjZmTBhB4EiwAynRmD1DzBAWC4aRmXUH4Idpiz5xLQ2QABF5haZk0PV08v3jaBGwCLlhX7hoChs8QAvD_BwE&gclsrc=aw.ds"
          target="_blank"
          rel="noreferrer"
        >
          Squarespace
        </a>
      </p>
    </FooterContainer>
  )
}
