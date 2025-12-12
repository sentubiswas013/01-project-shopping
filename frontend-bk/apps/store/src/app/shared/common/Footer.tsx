/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
import React, { useState } from 'react';
import payments from '../../../assets/img/payments.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhoneAlt, faAngleRight} from '@fortawesome/free-solid-svg-icons';


export function Footer({ title }: { title: string }) {


  return (
    <>
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

export default Footer;
