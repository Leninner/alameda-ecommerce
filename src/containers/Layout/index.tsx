import { Header } from '../../components/Header'
import { Content } from './styles'
import { Footer } from '../../components/Footer'

export const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  )
}
