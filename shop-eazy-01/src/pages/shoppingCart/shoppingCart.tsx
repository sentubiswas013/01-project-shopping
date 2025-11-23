/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
import React, { useState } from 'react';

import Topbar from '../../shared/common/Topbar';
import Navbar from '../../shared/common/Navbar';
import Breadcrumb from '../../shared/common/Breadcrumb';
import CartItems from './CartItems';
import CartSummary from './CartSummary';
import ProductCarousel from '../../shared/components/ProductCarousel';
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

    {/*-- Product Carousel Start --*/}
    <div className="container-fluid py-5">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">You May Also Like</span></h2>
        <div className="row px-xl-5">
            <div className="col">
                <ProductCarousel />
            </div>
        </div>
    </div>
    {/*-- Product Carousel End --*/}

    {/*-- Footer Start --*/}
    <Footer title="Footer"/>
    {/*-- Footer End --*/}
    </>
  );
}

export default ShoppingCart;
