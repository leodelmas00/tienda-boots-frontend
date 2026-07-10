import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/reset.css'
import './styles/global.css'
import './styles/variables.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import Login from './pages/Login/Login'
import Signin from './pages/Signin/Signin'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Products from './pages/Products/Products'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

/*

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

*/