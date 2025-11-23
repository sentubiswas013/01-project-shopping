/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import payments from '../../assets/img/payments.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhoneAlt, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


export function Footer({ title }: { title: string }) {


  return (
    <>
    {/*-- Footer Start --*/}
    <div className="container-fluid bg-dark text-secondary mt-0 pt-1">
        <div className="row px-xl-5 pt-5">
            <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
                <h5 className="text-secondary text-uppercase mb-4">Get In Touch</h5>
                <div>
                    <p className="mb-2">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary me-3" />
                        123 Street, New York, USA
                    </p>
                    <p className="mb-2">
                        <FontAwesomeIcon icon={faEnvelope} className="text-primary me-3" />
                        info@example.com
                    </p>
                    <p className="mb-0">
                        <FontAwesomeIcon icon={faPhoneAlt} className="text-primary me-3" />
                        +012 345 67890
                    </p>
                </div>
            </div>
            <div className="col-lg-8 col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-5">
                        <h5 className="text-secondary text-uppercase mb-4">Quick Shop</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <nav>
                                <Link className="nav-link mt-1" to="/home"> <FontAwesomeIcon icon={faAngleRight} className="me-2" /> Home</Link>
                                <Link className="nav-link mt-1" to="/Shop"><FontAwesomeIcon icon={faAngleRight} className="me-2" /> Shop</Link>
                                <Link className="nav-link mt-1" to="/shopping-cart"><FontAwesomeIcon icon={faAngleRight} className="me-2" /> Cart</Link>
                                <Link className="nav-link" to="/Account"><FontAwesomeIcon icon={faAngleRight} className="me-2" /> My Account</Link>
                            </nav>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <h5 className="text-secondary text-uppercase mb-4">My Account</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <nav>
                                <Link className="nav-link mt-1" to="/about"><FontAwesomeIcon icon={faAngleRight} className="me-2" /> About</Link>
                                <Link className="nav-link mt-1" to="/Contact"><FontAwesomeIcon icon={faAngleRight} className="me-2" /> Contact</Link>
                                <Link className="nav-link mt-1" to="/help"><FontAwesomeIcon icon={faAngleRight} className="me-2" /> Help</Link>
                                <Link className="nav-link" to="/help/faqs"><FontAwesomeIcon icon={faAngleRight} className="me-2" /> FAQs</Link>
                            </nav>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <h5 className="text-secondary text-uppercase mb-4">Follow Us</h5>
                        <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
                        <div className="d-flex">
                            <a className="btn btn-primary btn-square me-2" href="#">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a className="btn btn-primary btn-square me-2" href="#">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a className="btn btn-primary btn-square me-2" href="#">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                            <a className="btn btn-primary btn-square" href="#">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row mx-xl-5 py-4" style={{ borderTop: '1px solid #333',  padding: '20px' }}>
            <div className="col-md-6 px-xl-0">
                <p className="mb-md-0 text-start text-md-left text-secondary">
                    &copy; <a className="text-primary" href="#">Domain</a>. All Rights Reserved.
                </p>
            </div>
            <div className="col-md-6 px-xl-0 text-end text-md-right">
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

export default Footer;
