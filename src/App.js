import React from 'react'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Breadcumb from './pages/Breadcumb'
import { BrowserRouter, Routes, Route, Link, Router } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Index from './pages/Index'

function App() {
  return (
    <div>
      <BrowserRouter>

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/' element={<Index />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product-details" element={<Breadcumb />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
