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
    <div
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      {!isHeader ? <Header /> : <CheckoutHeaderComponent />}
      <Content isHeader={isHeader}>{children}</Content>
      {!isHeader ? <Footer /> : null}
    </div>
  )
}

const CheckoutHeaderComponent = () => {
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

        <CheckoutHeader>
          <h1>
            <Link
              to="/"
              style={{
                textDecoration: 'none',
                color: '#000',
              }}
            >
              Alameda
            </Link>
          </h1>
        </CheckoutHeader>
      </div>
    </CheckoutContainer>
  )
}
