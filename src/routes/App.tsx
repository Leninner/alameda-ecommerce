import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyles } from '../styles/GlobalStyles'
import { Home } from '../pages/Home'
import { Layout } from '../containers/Layout'
import { LookBook } from '../pages/LookBook'
import { About } from '../pages/About'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lookbook" element={<LookBook />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
