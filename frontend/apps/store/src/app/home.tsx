/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
import React, { useState } from 'react';

 import offer1 from '../assets/img/offer-1.jpg';
 import offer2 from '../assets/img/offer-2.jpg';
 
 import cat1 from '../assets/img/cat-1.jpg';
 import cat2 from '../assets/img/cat-2.jpg';
 import cat3 from '../assets/img/cat-3.jpg';
 import cat4 from '../assets/img/cat-4.jpg';
 
 import product1 from '../assets/img/product-1.jpg';
 import product2 from '../assets/img/product-2.jpg';
 import product3 from '../assets/img/product-3.jpg';
 import product4 from '../assets/img/product-4.jpg';
 import product5 from '../assets/img/product-5.jpg';
 import product6 from '../assets/img/product-6.jpg';
 import product7 from '../assets/img/product-7.jpg';
 import product8 from '../assets/img/product-8.jpg';
 
 import payments from '../assets/img/payments.png';

 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faSyncAlt, faSearch, faCheck, faShippingFast, faExchangeAlt, faPhoneVolume, faStar, faMapMarkerAlt, faEnvelope, faPhoneAlt, faAngleDown, faAngleRight, faBars } from '@fortawesome/free-solid-svg-icons';

import VendorCarousel from './VendorCarousel';
import HeaderCarousel from './HeaderCarousel';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

 
export function Home({ title }: { title: string }) {

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

  return (
    <>
    {/*-- Topbar Start --*/}
    <div className="container-fluid">
        <div className="row bg-secondary py-1 px-xl-5">
            <div className="col-lg-6 d-none d-lg-block">
                <div className="d-inline-flex align-items-center h-100">
                    <a className="text-body mr-3" href="">About</a>
                    <a className="text-body mr-3" href="">Contact</a>
                    <a className="text-body mr-3" href="">Help</a>
                    <a className="text-body mr-3" href="">FAQs</a>
                </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
                <div className="d-inline-flex align-items-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown" onClick={toggleCollapseAccount}>My Account</button>
                        {
                          isOpenAccount && (
                            <div className="dropdown-menu dropdown-menu-show dropdown-menu-right">
                                <button className="dropdown-item" type="button">Sign in</button>
                                <button className="dropdown-item" type="button">Sign up</button>
                            </div>
                          )  
                        }                        
                    </div>
                    <div className="btn-group mx-2">
                        <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown" onClick={toggleCollapseCurrency}>USD</button>
                        {
                            isOpenCurrency && (
                                <div className="dropdown-menu dropdown-menu-show dropdown-menu-right">
                                    <button className="dropdown-item" type="button">EUR</button>
                                    <button className="dropdown-item" type="button">GBP</button>
                                    <button className="dropdown-item" type="button">CAD</button>
                                </div>
                            )                        
                        }                        
                    </div>
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown" onClick={toggleCollapseLanguage}>EN</button>
                        {
                            isOpenLanguage && (
                                <div className="dropdown-menu dropdown-menu-show dropdown-menu-right">
                                    <button className="dropdown-item" type="button">FR</button>
                                    <button className="dropdown-item" type="button">AR</button>
                                    <button className="dropdown-item" type="button">RU</button>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="d-inline-flex align-items-center d-block d-lg-none">
                    <a href="" className="btn px-0 ml-2">
                        <i className="fas fa-heart text-dark"></i>
                        <span className="badge text-dark border border-dark rounded-circle" style={{paddingBottom: '2px'}}>0 aa</span>
                    </a>
                    <a href="" className="btn px-0 ml-2">
                        <i className="fas fa-shopping-cart text-dark"></i>
                        <span className="badge text-dark border border-dark rounded-circle" style={{paddingBottom: '2px'}}>0 aa</span>
                    </a>
                </div>
            </div>
        </div>
        <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
            <div className="col-lg-4">
                <a href="" className="text-decoration-none">
                    <span className="h1 text-uppercase text-primary bg-dark px-2">Multi</span>
                    <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">Shop</span>
                </a>
            </div>
            <div className="col-lg-4 col-6 text-left">
                <form action="">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for products"/>
                        <div className="input-group-append">
                            <span className="input-group-text bg-transparent text-primary">
                                <FontAwesomeIcon icon={faSearch} />
                            </span>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-lg-4 col-6 text-right">
                <p className="m-0">Customer Service</p>
                <h5 className="m-0">+012 345 6789</h5>
            </div>
        </div>
    </div>
    {/*-- Topbar End --*/}


    {/*-- Navbar Start --*/}
    <div className="container-fluid bg-dark mb-30">
        <div className="row px-xl-5">

             <div className="col-lg-3 d-none d-lg-block">
                <button
                    className="btn d-flex align-items-center justify-content-between bg-primary w-100"
                    onClick={toggleCollapseMenu}
                    style={{ height: '65px', padding: '0 30px' }}
                >
                    <h6 className="text-dark m-0">
                    <FontAwesomeIcon icon={faBars} /> Categories
                    </h6>
                    <FontAwesomeIcon icon={faAngleDown} className="text-dark" />
                </button>

                {isOpenMenu && (
                    <nav
                    className="position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
                    style={{ width: 'calc(100% - 30px)', zIndex: 999, backgroundColor: '#f0f0f0' }}
                    >
                    <div className="navbar-nav w-100">
                        <div
                        className="nav-item dropdown dropright"
                        onMouseEnter={() => setDropdownOpenMenu(true)}
                        onMouseLeave={() => setDropdownOpenMenu(false)}
                        >
                        <div className="nav-link dropdown-toggle" style={{ cursor: 'pointer' }}>
                            Dresses <FontAwesomeIcon icon={faAngleRight} className="float-right mt-1" />
                        </div>
                        {isDropdownOpenMenu && (
                            <div className="dropdown-menu position-absolute rounded-0 border-0 m-0 show">
                            <a href="#" className="dropdown-item">Men's Dresses</a>
                            <a href="#" className="dropdown-item">Women's Dresses</a>
                            <a href="#" className="dropdown-item">Baby's Dresses</a>
                            </div>
                        )}
                        </div>
                        <a href="#" className="nav-item nav-link">Shirts</a>
                        <a href="#" className="nav-item nav-link">Jeans</a>
                        <a href="#" className="nav-item nav-link">Swimwear</a>
                        <a href="#" className="nav-item nav-link">Sleepwear</a>
                        <a href="#" className="nav-item nav-link">Sportswear</a>
                        <a href="#" className="nav-item nav-link">Jumpsuits</a>
                        <a href="#" className="nav-item nav-link">Blazers</a>
                        <a href="#" className="nav-item nav-link">Jackets</a>
                        <a href="#" className="nav-item nav-link">Shoes</a>
                    </div>
                    </nav>
                )}
            </div>
            <div className="col-lg-9">
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                    <a href="" className="text-decoration-none d-block d-lg-none">
                        <span className="h1 text-uppercase text-dark bg-light px-2">Multi</span>
                        <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">Shop</span>
                    </a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0">
                            <a href="index.html" className="nav-item nav-link active">Home</a>
                            <a href="shop.html" className="nav-item nav-link">Shop</a>
                            <a href="detail.html" className="nav-item nav-link">Shop Detail</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages <i className="fa fa-angle-down mt-1"></i></a>
                                <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                                    <a href="cart.html" className="dropdown-item">Shopping Cart</a>
                                    <a href="checkout.html" className="dropdown-item">Checkout</a>
                                </div>
                            </div>
                            <a href="contact.html" className="nav-item nav-link">Contact</a>
                        </div>
                        <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                        <a href="#" className="btn px-0">
                            <FontAwesomeIcon icon={faHeart} className="text-primary" />
                            <span className="badge text-secondary border border-secondary rounded-circle" style={{ paddingBottom: '2px' }}>0</span>
                        </a>
                        <a href="#" className="btn px-0 ml-3">
                            <FontAwesomeIcon icon={faShoppingCart} className="text-primary" />
                            <span className="badge text-secondary border border-secondary rounded-circle" style={{ paddingBottom: '2px' }}>0</span>
                        </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    {/*-- Navbar End --*/}


    {/*-- Carousel Start --*/}
    <HeaderCarousel/>
    {/*-- Carousel End --*/}


    {/*-- Featured Start --*/}
    <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center bg-light mb-4" style={{padding: '30px'}}>
                    <h1 className="text-primary m-0 mr-3">
                        <FontAwesomeIcon icon={faCheck} />
                    </h1>
                    <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center bg-light mb-4" style={{padding: '30px'}}>
                    <h1 className="text-primary m-0 mr-3">
                        <FontAwesomeIcon icon={faShippingFast} />
                    </h1>
                    <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center bg-light mb-4" style={{padding: '30px'}}>
                    <h1 className="text-primary m-0 mr-3">
                        <FontAwesomeIcon icon={faExchangeAlt} />
                    </h1>
                    <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center bg-light mb-4" style={{padding: '30px'}}>
                    <h1 className="text-primary m-0 mr-3">
                        <FontAwesomeIcon icon={faPhoneVolume } />
                    </h1>
                    <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
                </div>
            </div>
        </div>
    </div>
    {/*-- Featured End --*/}


    {/*-- Categories Start --*/}
    <div className="container-fluid pt-5">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Categories</span></h2>
        <div className="row px-xl-5 pb-3">
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <a className="text-decoration-none" href="">
                    <div className="cat-item d-flex align-items-center mb-4">
                        <div className="overflow-hidden" style={{width: '100px', height: '100px'}}>
                            <img className="img-fluid" src={cat1} alt=""/>
                        </div>
                        <div className="flex-fill pl-3">
                            <h6>Category Name</h6>
                            <small className="text-body">100 Products</small>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <a className="text-decoration-none" href="">
                    <div className="cat-item img-zoom d-flex align-items-center mb-4">
                        <div className="overflow-hidden" style={{width: '100px', height: '100px'}}>
                            <img className="img-fluid" src={cat2} alt=""/>
                        </div>
                        <div className="flex-fill pl-3">
                            <h6>Category Name</h6>
                            <small className="text-body">100 Products</small>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <a className="text-decoration-none" href="">
                    <div className="cat-item img-zoom d-flex align-items-center mb-4">
                        <div className="overflow-hidden" style={{width: '100px', height: '100px'}}>
                            <img className="img-fluid" src={cat3} alt=""/>
                        </div>
                        <div className="flex-fill pl-3">
                            <h6>Category Name</h6>
                            <small className="text-body">100 Products</small>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <a className="text-decoration-none" href="">
                    <div className="cat-item img-zoom d-flex align-items-center mb-4">
                        <div className="overflow-hidden" style={{width: '100px', height: '100px'}}>
                            <img className="img-fluid" src={cat4} alt=""/>
                        </div>
                        <div className="flex-fill pl-3">
                            <h6>Category Name</h6>
                            <small className="text-body">100 Products</small>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
    {/*-- Categories End --*/}


    {/*-- Products Start --*/}
    <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Featured Products</span></h2>
        <div className="row px-xl-5">
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src={product1} alt=""/>
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faShoppingCart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faHeart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSyncAlt} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSearch} /></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src={product2} alt=""/>
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faShoppingCart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faHeart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSyncAlt} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSearch} /></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src={product3} alt=""/>
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faShoppingCart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faHeart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSyncAlt} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSearch} /></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src={product4} alt=""/>
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faShoppingCart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faHeart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSyncAlt} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSearch} /></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src={product5} alt=""/>
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faShoppingCart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faHeart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSyncAlt} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSearch} /></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src={product6} alt=""/>
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faShoppingCart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faHeart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSyncAlt} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSearch} /></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src={product7} alt=""/>
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faShoppingCart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faHeart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSyncAlt} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSearch} /></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src={product8} alt=""/>
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faShoppingCart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faHeart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSyncAlt} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSearch} /></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*-- Products End --*/}


    {/*-- Offer Start --*/}
    <div className="container-fluid pt-5 pb-3">
        <div className="row px-xl-5">
            <div className="col-md-6">
                <div className="product-offer mb-30" style={{height: '300px'}}>
                    <img className="img-fluid" src={offer1} alt=""/>
                    <div className="offer-text">
                        <h6 className="text-white text-uppercase">Save 20%</h6>
                        <h3 className="text-white mb-3">Special Offer</h3>
                        <a href="" className="btn btn-primary">Shop Now</a>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="product-offer mb-30" style={{height: '300px'}}>
                    <img className="img-fluid" src={offer2} alt=""/>
                    <div className="offer-text">
                        <h6 className="text-white text-uppercase">Save 20%</h6>
                        <h3 className="text-white mb-3">Special Offer</h3>
                        <a href="" className="btn btn-primary">Shop Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*-- Offer End --*/}


    {/*-- Products Start --*/}
    <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Recent Products</span></h2>
        <div className="row px-xl-5">
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src={product1} alt=""/>
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faShoppingCart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faHeart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSyncAlt} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSearch} /></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src={product2} alt=""/>
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faShoppingCart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faHeart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSyncAlt} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSearch} /></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src={product3} alt=""/>
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faShoppingCart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faHeart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSyncAlt} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSearch} /></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src={product4} alt=""/>
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faShoppingCart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faHeart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSyncAlt} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSearch} /></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src={product5} alt=""/>
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faShoppingCart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faHeart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSyncAlt} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSearch} /></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src={product6} alt=""/>
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faShoppingCart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faHeart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSyncAlt} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSearch} /></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src={product7} alt=""/>
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faShoppingCart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faHeart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSyncAlt} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSearch} /></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src={product8} alt=""/>
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faShoppingCart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faHeart} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSyncAlt} /></a>
                            <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSearch} /></a>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*-- Products End --*/}


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
    <div className="container-fluid bg-dark text-secondary mt-5 pt-5">
        <div className="row px-xl-5 pt-5">
            <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
                <h5 className="text-secondary text-uppercase mb-4">Get In Touch</h5>
                <p className="mb-4">No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no</p>
                <div>
                    <p className="mb-2">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary mr-3" />
                        123 Street, New York, USA
                    </p>
                    <p className="mb-2">
                        <FontAwesomeIcon icon={faEnvelope} className="text-primary mr-3" />
                        info@example.com
                    </p>
                    <p className="mb-0">
                        <FontAwesomeIcon icon={faPhoneAlt} className="text-primary mr-3" />
                        +012 345 67890
                    </p>
                </div>
            </div>
            <div className="col-lg-8 col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-5">
                        <h5 className="text-secondary text-uppercase mb-4">Quick Shop</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-secondary mb-2" href="#"><FontAwesomeIcon icon={faAngleRight} className="mr-2" />Home</a>
                            <a className="text-secondary mb-2" href="#"><FontAwesomeIcon icon={faAngleRight} className="mr-2" />Our Shop</a>
                            <a className="text-secondary mb-2" href="#"><FontAwesomeIcon icon={faAngleRight} className="mr-2" />Shop Detail</a>
                            <a className="text-secondary mb-2" href="#"><FontAwesomeIcon icon={faAngleRight} className="mr-2" />Shopping Cart</a>
                            <a className="text-secondary mb-2" href="#"><FontAwesomeIcon icon={faAngleRight} className="mr-2" />Checkout</a>
                            <a className="text-secondary" href="#"><FontAwesomeIcon icon={faAngleRight} className="mr-2" />Contact Us</a>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <h5 className="text-secondary text-uppercase mb-4">My Account</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-secondary mb-2" href="#"><FontAwesomeIcon icon={faAngleRight} className="mr-2" />Home</a>
                            <a className="text-secondary mb-2" href="#"><FontAwesomeIcon icon={faAngleRight} className="mr-2" />Our Shop</a>
                            <a className="text-secondary mb-2" href="#"><FontAwesomeIcon icon={faAngleRight} className="mr-2" />Shop Detail</a>
                            <a className="text-secondary mb-2" href="#"><FontAwesomeIcon icon={faAngleRight} className="mr-2" />Shopping Cart</a>
                            <a className="text-secondary mb-2" href="#"><FontAwesomeIcon icon={faAngleRight} className="mr-2" />Checkout</a>
                            <a className="text-secondary" href="#"><FontAwesomeIcon icon={faAngleRight} className="mr-2" />Contact Us</a>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <h5 className="text-secondary text-uppercase mb-4">Newsletter</h5>
                        <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
                        <form action="">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Your Email Address"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary">Sign Up</button>
                                </div>
                            </div>
                        </form>
                        <h6 className="text-secondary text-uppercase mt-4 mb-3">Follow Us</h6>
                        <div className="d-flex">
                            <a className="btn btn-primary btn-square mr-2" href="#"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-primary btn-square mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-primary btn-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-primary btn-square" href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row border-top mx-xl-5 py-4" style={{ border: '1px solid', borderColor: 'rgba(255, 255, 255, 0.1)', padding: '20px' }}>
            <div className="col-md-6 px-xl-0">
                <p className="mb-md-0 text-center text-md-left text-secondary">
                    &copy; <a className="text-primary" href="#">Domain</a>. All Rights Reserved. Designed
                    by
                    <a className="text-primary" href="https://htmlcodex.com">HTML Codex</a>
                </p>
            </div>
            <div className="col-md-6 px-xl-0 text-center text-md-right">
                <img className="img-fluid" src={payments} alt=""/>
            </div>
        </div>
    </div>
    {/*-- Footer End --*/}


    {/*-- Back to Top --*/}
    <a href="#" className="btn btn-primary back-to-top"><i className="fa fa-angle-double-up"></i></a>
    </>
  );
}

export default Home;
