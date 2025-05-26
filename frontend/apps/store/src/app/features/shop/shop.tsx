/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
import React, { useState } from 'react';
import VendorCarousel from '../../shared/components/VendorCarousel';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Topbar from '../../shared/common/Topbar';
import Navbar from '../../shared/common/Navbar';
import Breadcrumb from '../../shared/common/Breadcrumb';
import FilterProducts from './FilterProducts';
import ShopProducts from './ShopProducts';
import Footer from '../../shared/common/Footer';

export function Shop({ title }: { title: string }) {

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


    {/*-- Shop Start --*/}
    <div className="container-fluid">
        <div className="row px-xl-5">
            {/*-- Shop Sidebar Start --*/}
            <FilterProducts title="FilterProducts"/>
            {/*-- Shop Sidebar End --*/}


            {/*-- Shop Product Start --*/}
            <ShopProducts title="ShopProducts"/>
            {/*-- Shop Product End --*/}
        </div>
    </div>
    {/*-- Shop End --*/}

    {/*-- Vendor Start --*/}
    <div className="container-fluid">
        <div className="row px-xl-5">
            <div className="col">
                <VendorCarousel />
            </div>
        </div>
    </div>
    {/*-- Vendor End --*/}


    {/*-- Footer Start --*/}
    <Footer title="Footer"/>
    {/*-- Footer End --*/}


    {/*-- Back to Top --*/}
    <a href="#" className="btn btn-primary back-to-top"><i className="fa fa-angle-double-up"></i></a>
    </>
  );
}

export default Shop;
