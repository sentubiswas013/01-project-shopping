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

function App() {

  return (
    <>
      {/* <Navbar title="store" /> */}
      <div>
        <Routes>
          <Route path="/" element={<Login title="login" />} />
          {/* <Route path="/" element={<Home title="home" />} /> */}
          <Route path="/home" element={<Home title="home" />} />
          <Route path="/Shop" element={<Shop title="Shop" />} />
          <Route path="/ProductDetails" element={<ProductDetails title="ProductDetails" />} />
          <Route path="/Checkout" element={<Checkout title="Checkout" />} />
          <Route path="/ShoppingCart" element={<ShoppingCart title="ShoppingCart" />} />
          <Route path="/Contact" element={<Contact title="Contact" />} />
        </Routes>
      </div>
    </>
  )
}

export default App
