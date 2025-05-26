/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
import React, { useState } from 'react';
import VendorCarousel from '../../shared/components/VendorCarousel';
import HeaderCarousel from '../../shared/components/HeaderCarousel';

import Topbar from '../../shared/common/Topbar';
import Navbar from '../../shared/common/Navbar';
import Featured from './Featured';
import Categories from './Categories';
import FeatureProducts from './FeatureProducts';
import Offer from './Offer';
import RecentProducts from './RecentProducts';
import Footer from '../../shared/common/Footer';

 
export function Home({ title }: { title: string }) {
  return (
    <>
    {/*-- Topbar Start --*/}
    <Topbar title="topbar"/>
    {/*-- Topbar End --*/}


    {/*-- Navbar Start --*/}
    <Navbar title="Navbar"/>
    {/*-- Navbar End --*/}


    {/*-- Carousel Start --*/}
    <HeaderCarousel />
    {/*-- Carousel End --*/}


    {/*-- Featured Start --*/}
    <Featured title="Featured"/>
    {/*-- Featured End --*/}


    {/*-- Categories Start --*/}
    <Categories title="Categories"/>
    {/*-- Categories End --*/}


    {/*-- Feature Products Start --*/}
    <FeatureProducts title="FeatureProducts"/>
    {/*-- Feature Products End --*/}


    {/*-- Offer Start --*/}
    <Offer title="Offer"/>
    {/*-- Offer End --*/}


    {/*-- Recent Products Start --*/}
    <RecentProducts title="RecentProducts"/>
    {/*-- Recent Products End --*/}


    {/*-- Vendor Start --*/}
    <div className="container-fluid py-5">
        <div className="row px-xl-5">
            <div className="col">
                <VendorCarousel />
            </div>
        </div>
    </div>
    {/*-- Vendor End --*/}


    {/*-- Footer Start --*/}
    <Footer title="footer"/>
    {/*-- Footer End --*/}


    {/*-- Back to Top --*/}
    <a href="#" className="btn btn-primary back-to-top"><i className="fa fa-angle-double-up"></i></a>
    </>
  );
}

export default Home;
