import { Header } from '../../components/Header'
import { Content } from './styles'
import { Footer } from '../../components/Footer'
import { useState, cloneElement } from 'react'

export const Layout = ({ children }: any) => {
  const [isHeader, setisHeader] = useState(false)

  const handleHeader = () => setisHeader(true)

  return (
    <div>
      {!isHeader && <Header />}
      <Content>{cloneElement(children, { handleHeader })}</Content>
      <Footer />
    </div>
  )
}
