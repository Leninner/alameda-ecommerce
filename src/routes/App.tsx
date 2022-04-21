import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyles } from '../styles/GlobalStyles'
import { Home } from '../pages/Home'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>Leninner</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
