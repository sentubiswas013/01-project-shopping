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
import { faShoppingCart, faHeart, faSearch, faMapMarkerAlt, faEnvelope, faPhoneAlt, faAngleDown, faAngleRight, faBars, } from '@fortawesome/free-solid-svg-icons';

import ProductCarousel from './ProductCarousel';

 
export function DetailDetails({ title }: { title: string }) {

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

    {/*-- Breadcrumb Start --*/}
    <div className="container-fluid">
        <div className="row px-xl-5">
            <div className="col-12">
                <nav className="breadcrumb bg-light mb-30">
                    <a className="breadcrumb-item text-dark" href="#">Home</a>
                    <a className="breadcrumb-item text-dark" href="#">Shop</a>
                    <span className="breadcrumb-item active">Shop Detail</span>
                </nav>
            </div>
        </div>
    </div>
    {/*-- Breadcrumb End --*/}


    {/*-- Shop Detail Start --*/}
    <div className="container-fluid pb-5">
        <div className="row px-xl-5">
            <div className="col-lg-5 mb-30">
                <div id="product-carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner bg-light">
                        <div className="carousel-item active">
                            <img className="w-100 h-100" src="img/product-1.jpg" alt="Image"/>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100 h-100" src="img/product-2.jpg" alt="Image"/>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100 h-100" src="img/product-3.jpg" alt="Image"/>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100 h-100" src="img/product-4.jpg" alt="Image"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#product-carousel" data-slide="prev">
                        <i className="fa fa-2x fa-angle-left text-dark"></i>
                    </a>
                    <a className="carousel-control-next" href="#product-carousel" data-slide="next">
                        <i className="fa fa-2x fa-angle-right text-dark"></i>
                    </a>
                </div>
            </div>

            <div className="col-lg-7 h-auto mb-30">
                <div className="h-100 bg-light p-30">
                    <h3>Product Name Goes Here</h3>
                    <div className="d-flex mb-3">
                        <div className="text-primary mr-2">
                            <small className="fas fa-star"></small>
                            <small className="fas fa-star"></small>
                            <small className="fas fa-star"></small>
                            <small className="fas fa-star-half-alt"></small>
                            <small className="far fa-star"></small>
                        </div>
                        <small className="pt-1">(99 Reviews)</small>
                    </div>
                    <h3 className="font-weight-semi-bold mb-4">$150.00</h3>
                    <p className="mb-4">Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit
                        clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea
                        Nonumy</p>
                    <div className="d-flex mb-3">
                        <strong className="text-dark mr-3">Sizes:</strong>
                        <form>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="size-1" name="size"/>
                                <label className="custom-control-label" htmlFor="size-1">XS</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="size-2" name="size"/>
                                <label className="custom-control-label" htmlFor="size-2">S</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="size-3" name="size"/>
                                <label className="custom-control-label" htmlFor="size-3">M</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="size-4" name="size"/>
                                <label className="custom-control-label" htmlFor="size-4">L</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="size-5" name="size"/>
                                <label className="custom-control-label" htmlFor="size-5">XL</label>
                            </div>
                        </form>
                    </div>
                    <div className="d-flex mb-4">
                        <strong className="text-dark mr-3">Colors:</strong>
                        <form>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="color-1" name="color"/>
                                <label className="custom-control-label" htmlFor="color-1">Black</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="color-2" name="color"/>
                                <label className="custom-control-label" htmlFor="color-2">White</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="color-3" name="color"/>
                                <label className="custom-control-label" htmlFor="color-3">Red</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="color-4" name="color"/>
                                <label className="custom-control-label" htmlFor="color-4">Blue</label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline">
                                <input type="radio" className="custom-control-input" id="color-5" name="color"/>
                                <label className="custom-control-label" htmlFor="color-5">Green</label>
                            </div>
                        </form>
                    </div>
                    <div className="d-flex align-items-center mb-4 pt-2">
                        <div className="input-group quantity mr-3"  style={{ width: '130px' }}>
                            <div className="input-group-btn">
                                <button className="btn btn-primary btn-minus">
                                    <i className="fa fa-minus"></i>
                                </button>
                            </div>
                            <input type="text" className="form-control bg-secondary border-0 text-center" value="1"/>
                            <div className="input-group-btn">
                                <button className="btn btn-primary btn-plus">
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>
                        <button className="btn btn-primary px-3"><i className="fa fa-shopping-cart mr-1"></i> Add To
                            Cart</button>
                    </div>
                    <div className="d-flex pt-2">
                        <strong className="text-dark mr-2">Share on:</strong>
                        <div className="d-inline-flex">
                            <a className="text-dark px-2" href="">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="text-dark px-2" href="">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a className="text-dark px-2" href="">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a className="text-dark px-2" href="">
                                <i className="fab fa-pinterest"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row px-xl-5">
            <div className="col">
                <div className="bg-light p-30">
                    <div className="nav nav-tabs mb-4">
                        <a className="nav-item nav-link text-dark active" data-toggle="tab" href="#tab-pane-1">Description</a>
                        <a className="nav-item nav-link text-dark" data-toggle="tab" href="#tab-pane-2">Information</a>
                        <a className="nav-item nav-link text-dark" data-toggle="tab" href="#tab-pane-3">Reviews (0)</a>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="tab-pane-1">
                            <h4 className="mb-3">Product Description</h4>
                            <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                            <p>Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.</p>
                        </div>
                        <div className="tab-pane fade" id="tab-pane-2">
                            <h4 className="mb-3">Additional Information</h4>
                            <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item px-0">
                                            Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                        </li>
                                      </ul> 
                                </div>
                                <div className="col-md-6">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item px-0">
                                            Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                        </li>
                                      </ul> 
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-pane-3">
                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className="mb-4">1 review for "Product Name"</h4>
                                    <div className="media mb-4">
                                        <img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1"  style={{ width: '45px' }} />
                                        <div className="media-body">
                                            <h6>John Doe<small> - <i>01 Jan 2045</i></small></h6>
                                            <div className="text-primary mb-2">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half-alt"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                            <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h4 className="mb-4">Leave a review</h4>
                                    <small>Your email address will not be published. Required fields are marked *</small>
                                    <div className="d-flex my-3">
                                        <p className="mb-0 mr-2">Your Rating * :</p>
                                        <div className="text-primary">
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                    </div>
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="message">Your Review *</label>
                                            <textarea id="message" cols={30} rows={5} className="form-control"></textarea>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="name">Your Name *</label>
                                            <input type="text" className="form-control" id="name"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Your Email *</label>
                                            <input type="email" className="form-control" id="email"/>
                                        </div>
                                        <div className="form-group mb-0">
                                            <input type="submit" value="Leave Your Review" className="btn btn-primary px-3"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*-- Shop Detail End --*/}

    {/*-- Vendor Start --*/}
    <div className="container-fluid py-5">
        <div className="row px-xl-5">
            <div className="col">
                <ProductCarousel />
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

export default DetailDetails;
