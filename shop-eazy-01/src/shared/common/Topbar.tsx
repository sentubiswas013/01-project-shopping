/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
import React, { useState } from 'react'; 
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export function Topbar({ title }: { title: string }) {
    const navigate = useNavigate();
    // Section: for account
    const [isOpenAccount, setIsOpenAccount] = useState(false);            
    const toggleCollapseAccount = () => setIsOpenAccount(!isOpenAccount);
  
    // Section: for currency
    const [isOpenCurrency, setIsOpenCurrency] = useState(false);            
    const toggleCollapseCurrency = () => setIsOpenCurrency(!isOpenCurrency);
  
    // Section: for language
    const [isOpenLanguage, setIsOpenLanguage] = useState(false);            
    const toggleCollapseLanguage = () => setIsOpenLanguage(!isOpenLanguage);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('token_expires_at')
        navigate('/');
    };

  return (
    <>
    {/*-- Topbar Start --*/}
    <div className="container-fluid">
        <div className="row bg-secondary py-1 px-xl-5">
            <div className="col-lg-6 d-none d-lg-block">
                    <div className="d-inline-flex align-items-center h-100">
                    <nav className='d-inline-flex'>
                        <Link className="nav-link me-3" to="/about">About</Link>
                        <Link className="nav-link me-3" to="/Contact">Contact</Link>
                        <Link className="nav-link me-3" to="/help">Help</Link>
                        <Link className="nav-link" to="/help/faqs">FAQs</Link>
                    </nav>
                </div>
            </div>
            <div className="col-lg-6 text-end text-lg-right">
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
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-light" onClick={handleLogout}>Logout</button>
                    </div>
                </div>
                <div className="d-inline-flex align-items-center d-block d-lg-none">
                    <a href="" className="btn px-0 ms-2">
                        <i className="fas fa-heart text-dark"></i>
                        <span className="badge text-dark border border-dark rounded-circle" style={{paddingBottom: '2px'}}>0 aa</span>
                    </a>
                    <a href="" className="btn px-0 ms-2">
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
                    <span className="h1 text-uppercase text-dark bg-primary px-2 ms-n1">Shop</span>
                </a>
            </div>
            <div className="col-lg-4 col-6 text-left">
                <form action="">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for products"/>
                        <div className="input-group-append d-flex">
                            <span className="input-group-text bg-transparent text-primary">
                                <FontAwesomeIcon icon={faSearch} />
                            </span>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-lg-4 col-6 text-end">
                <p className="m-0">Customer Service</p>
                <h5 className="m-0">+012 345 6789</h5>
            </div>
        </div>
    </div>
    {/*-- Topbar End --*/}
    </>
  );
}

export default Topbar;
