import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/style.css';
import './App.css'

import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import ProductDetails from './pages/productDetails/ProductDetails';
import Checkout from './pages/checkout/Checkout';
import ShoppingCart from './pages/shoppingCart/ShoppingCart';
import Contact from './pages/contact/Contact';
import Login from './pages/login/login';
import Navbar from './shared/common/Navbar';
import About from './pages/about/About';
import Help from './pages/help/Help';
import Faqs from './pages/help/Faqs';

function App() {

  return (
    <>
      {/* <Navbar title="store" /> */}
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/help/faqs" element={<Faqs />} />
        </Routes>
      </div>
    </>
  )
}

export default App
