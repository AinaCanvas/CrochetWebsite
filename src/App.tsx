import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'

import HomePage         from './pages/HomePage'
import ShopPage         from './pages/ShopPage'
import CustomOrdersPage from './pages/CustomOrdersPage'
import AboutPage        from './pages/AboutPage'
import ContactPage      from './pages/ContactPage'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"               element={<HomePage />} />
          <Route path="/shop"           element={<ShopPage />} />
          <Route path="/custom-orders"  element={<CustomOrdersPage />} />
          <Route path="/about"          element={<AboutPage />} />
          <Route path="/contact"        element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFab />
    </BrowserRouter>
  )
}
