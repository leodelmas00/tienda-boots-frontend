import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/reset.css'
import './styles/global.css'
import './styles/variables.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Products from './pages/Products/Products'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Products" element={<Products />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App