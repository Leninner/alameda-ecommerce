import { Header } from '../../components/Header'
import {
  Content,
  CheckoutContainer,
  CheckoutHeader,
  CheckoutInfo,
} from './styles'
import { Footer } from '../../components/Footer'
import { Link } from 'react-router-dom'

export const Layout = ({ children, isHeader }) => {
  return (
    <div>
      {!isHeader ? <Header /> : <CehckoutHeader />}
      <Content>{children}</Content>
      {!isHeader ? <Footer /> : null}
    </div>
  )
}

const CehckoutHeader = () => {
  return (
    <CheckoutContainer>
      <div>
        <CheckoutInfo>
          <div>
            <span>El área de pago está cerrada</span>
            <span>Esta tienda no está configurada para procesar pagos. </span>
            <span>
              <a href="" target="_blank">
                Haz clic aquí para obtener más información.
              </a>
            </span>
          </div>
        </CheckoutInfo>

        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: '#000',
          }}
        >
          <CheckoutHeader>
            <h1>Alameda</h1>
          </CheckoutHeader>
        </Link>
      </div>
    </CheckoutContainer>
  )
}
