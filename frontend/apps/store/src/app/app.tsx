// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Home from './features/home/home';
import Shop from './features/shop/shop';
import ShopDetails from './features/shopDetails/shopDetails';
import Checkout from './features/checkout/checkout';
import ShoppingCart from './features/shoppingCart/shoppingCart';
import Contact from './features/contact/contact';
import Navbar from './shared/common/Navbar';

export function App() {
  return (
    <Router>
      {/* <Navbar title="store" /> */}
      <div >
        <Routes>
          <Route path="/" element={<Home title="home" />} />
          <Route path="/Shop" element={<Shop title="Shop" />} />
          <Route path="/ShopDetails" element={<ShopDetails title="ShopDetails" />} />
          <Route path="/Checkout" element={<Checkout title="Checkout" />} />
          <Route path="/ShoppingCart" element={<ShoppingCart title="ShoppingCart" />} />
          <Route path="/Contact" element={<Contact title="Contact" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

