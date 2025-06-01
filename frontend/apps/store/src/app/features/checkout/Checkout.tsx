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
import BillingAddress from './BillingAddress';
import OrderTotal from './OrderTotal';
import ProductCarousel from '../../shared/components/ProductCarousel';
import Footer from '../../shared/common/Footer';
 
export function Checkout({ title }: { title: string }) {

  return (
    <>
    {/*-- Topbar Start --*/}
    <Topbar title="topbar"/>
    {/*-- Topbar End --*/}


    {/*-- Navbar Start --*/}
    <Navbar title="Navbar"/>
    {/*-- Navbar End --*/}

    {/*-- Breadcrumb Start --*/}
    <Breadcrumb title="Breadcrumb" />
    {/*-- Breadcrumb End --*/}


    {/*-- Checkout Start --*/}
    <div className="container-fluid">
        <div className="row px-xl-5">
            <div className="col-lg-8">
                <BillingAddress title="BillingAddress" />
            </div>
            <div className="col-lg-4">
                <OrderTotal title="OrderTotal" />
            </div>
        </div>
    </div>
    {/*-- Checkout End --*/}

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
    <Footer title="Footer" />
    {/*-- Footer End --*/}

    </>
  );
}

export default Checkout;
