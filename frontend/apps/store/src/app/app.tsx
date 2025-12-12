// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Home from './features/home/Home';
import Shop from './features/shop/Shop';
import ProductDetails from './features/productDetails/ProductDetails';
import Checkout from './features/checkout/Checkout';
import ShoppingCart from './features/shoppingCart/ShoppingCart';
import Contact from './features/contact/Contact';
import Login from './features/login/login';
import Navbar from './shared/common/Navbar';

export function App() {
  return (
    <Router>
      {/* <Navbar title="store" /> */}
      <div >
        <Routes>
          {/* <Route path="/" element={<Login title="login" />} /> */}
          <Route path="/" element={<Home title="home" />} />
          <Route path="/home" element={<Home title="home" />} />
          <Route path="/Shop" element={<Shop title="Shop" />} />
          <Route path="/ProductDetails" element={<ProductDetails title="ProductDetails" />} />
          <Route path="/Checkout" element={<Checkout title="Checkout" />} />
          <Route path="/ShoppingCart" element={<ShoppingCart title="ShoppingCart" />} />
          <Route path="/Contact" element={<Contact title="Contact" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

