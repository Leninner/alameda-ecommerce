import { Header } from '../../components/Header'
import { Content } from './styles'

export const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />
      <Content>{children}</Content>
    </div>
  )
}
