import { Routes, Route, HashRouter } from 'react-router-dom'
import { GlobalStyles } from '../styles/GlobalStyles'
import { Home } from '../pages/Home'
import { Layout } from '../containers/Layout'
import { LookBook } from '../pages/LookBook'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import { ProductInfoPage } from '../pages/ProductInfoPage'
import { Cart } from '../pages/Cart'
import { Checkout } from '../pages/Checkout'
import { useState } from 'react'

function App() {
  const [isHeader, setisHeader] = useState(false)

  return (
    <HashRouter>
      {/* Hash router */}
      <GlobalStyles />
      <Layout isHeader={isHeader}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lookbook" element={<LookBook />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/checkout"
            element={<Checkout handleHeader={setisHeader} />}
          />
          <Route
            path="/shop/id=:id/:productName"
            element={<ProductInfoPage />}
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}

export default App
