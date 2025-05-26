/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
import React, { useState } from 'react'; 
import payments from '../assets/img/payments.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faSearch, faMapMarkerAlt, faEnvelope, faPhoneAlt, faAngleDown, faAngleRight, faMinus, faPlus, faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

 import product1 from '../assets/img/product-1.jpg';
 import product2 from '../assets/img/product-2.jpg';
 import product3 from '../assets/img/product-3.jpg';
 import product4 from '../assets/img/product-4.jpg';
 import product5 from '../assets/img/product-5.jpg';
 import product6 from '../assets/img/product-6.jpg';
 import product7 from '../assets/img/product-7.jpg';
 import product8 from '../assets/img/product-8.jpg';
 

import Topbar from '../../shared/common/Topbar';
import Navbar from '../../shared/common/Navbar';
import Breadcrumb from '../../shared/common/Breadcrumb';
import CartItems from './CartItems';
import CartSummary from './CartSummary';
import Footer from '../../shared/common/Footer';

export function ShoppingCart({ title }: { title: string }) {


  return (
    <>
    {/*-- Topbar Start --*/}
    <Topbar title="topbar"/>
    {/*-- Topbar End --*/}


    {/*-- Navbar Start --*/}
    <Navbar title="Navbar"/>
    {/*-- Navbar End --*/}

    {/*-- Breadcrumb Start --*/}
    <Breadcrumb title="Breadcrumb"/>
    {/*-- Breadcrumb End --*/}


    {/*-- Cart Start --*/}
    <div className="container-fluid">
        <div className="row px-xl-5">
            <div className="col-lg-8 table-responsive mb-5">
                <CartItems title="CartItems"/>
            </div>
            <div className="col-lg-4">
                <CartSummary title="CartSummary"/>
            </div>
        </div>
    </div>
    {/*-- Cart End --*/}

    {/*-- Footer Start --*/}
    <Footer title="Footer"/>
    {/*-- Footer End --*/}
    </>
  );
}

export default ShoppingCart;
