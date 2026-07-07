import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import './styles/reset.css'
import './styles/global.css'
import './styles/variables.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Products from './pages/Products/Products'
import Admin from './pages/Admin/Admin'

function PublicLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Admin" element={<Admin />} />
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App