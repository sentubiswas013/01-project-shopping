/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faAngleDown, faAngleRight, faBars } from '@fortawesome/free-solid-svg-icons';
 
export function Navbar({ title }: { title: string }) {

    // Section: for category menu
    const [isOpenMenu, setIsOpenMenu] = useState(false);               // Controls category collapse
    const [isDropdownOpenMenu, setDropdownOpenMenu] = useState(false); // Controls dresses sub-menu
  
    const toggleCollapseMenu = () => setIsOpenMenu(!isOpenMenu);
    const toggleDropdownMenu = () => setDropdownOpenMenu(!isDropdownOpenMenu);

  return (
    <>   

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
                            <Link className="nav-link active" to="/">Home</Link> 
                            <Link className="nav-link" to="/Shop">Shop</Link>                            
                            <Link className="nav-link" to="/ProductDetails">Product Details</Link>                            
                            <Link className="nav-link" to="/Checkout">Checkout</Link>                            
                            <Link className="nav-link" to="/ShoppingCart">Shopping Cart</Link>                            
                            <Link className="nav-link" to="/Contact">Contact</Link>
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

    </>
  );
}

export default Navbar;
