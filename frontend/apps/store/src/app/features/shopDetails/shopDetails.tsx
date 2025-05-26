/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
import React, { useState } from 'react';

import ProductCarousel from '../../shared/components/ProductCarousel';

import Topbar from '../../shared/common/Topbar';
import Navbar from '../../shared/common/Navbar';
import Breadcrumb from '../../shared/common/Breadcrumb';
import ProductDetailsCarousel from './ProductDetailsCarousel';
import ProductDescription from './ProductDescription';
import ProductInfo from './ProductInfo';
import Footer from '../../shared/common/Footer';
 

export function ShopDetails({ title }: { title: string }) {

  // Section: for account
  const [isOpenAccount, setIsOpenAccount] = useState(false);            
  const toggleCollapseAccount = () => setIsOpenAccount(!isOpenAccount);

  // Section: for currency
  const [isOpenCurrency, setIsOpenCurrency] = useState(false);            
  const toggleCollapseCurrency = () => setIsOpenCurrency(!isOpenCurrency);

  // Section: for language
  const [isOpenLanguage, setIsOpenLanguage] = useState(false);            
  const toggleCollapseLanguage = () => setIsOpenLanguage(!isOpenLanguage);

  // Section: for category menu
  const [isOpenMenu, setIsOpenMenu] = useState(false);               // Controls category collapse
  const [isDropdownOpenMenu, setDropdownOpenMenu] = useState(false); // Controls dresses sub-menu

  const toggleCollapseMenu = () => setIsOpenMenu(!isOpenMenu);
  const toggleDropdownMenu = () => setDropdownOpenMenu(!isDropdownOpenMenu);

  // Section: for sorting
  const [isOpenSort, setIsOpenSort] = useState(false);            
  const toggleCollapseSort = () => setIsOpenSort(!isOpenSort);

  // Section: for showing
  const [isOpenLimit, setIsOpenLimit] = useState(false);          
  const toggleCollapseLimit = () => setIsOpenLimit(!isOpenLimit);

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


    {/*-- Shop Detail Start --*/}
    <div className="container-fluid pb-5">
        <div className="row px-xl-5">
            <div className="col-lg-5 mb-30">
                <ProductDetailsCarousel title="ProductDescription"/>
            </div>

            <div className="col-lg-7 h-auto mb-30">
                <ProductInfo title="ProductInfo"/>
            </div>
        </div>
        <div className="row px-xl-5">
            <div className="col">
                <ProductDescription title="ProductDescription"/>
            </div>
        </div>
    </div>
    {/*-- Shop Detail End --*/}

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


    {/*-- Back to Top --*/}
    <a href="#" className="btn btn-primary back-to-top"><i className="fa fa-angle-double-up"></i></a>
    </>
  );
}

export default ShopDetails;
