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
import Footer from '../../shared/common/Footer';

export function Faqs({ title }: { title: string }) {

  return (
    <>
    {/*-- Topbar Start --*/}
    <Topbar title="topbar"/>
    {/*-- Topbar End --*/}


    {/*-- Navbar Start --*/}
    <Navbar title="Navbar"/>
    {/*-- Navbar End --*/}

    {/*-- Contact Start --*/}
    <div className="container-fluid">
       <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Frequently Asked Questions</span></h2>
        <div className="row px-xl-5">
            <div className="faqs-page">
                <div className="row">
                    <div className="col-12">
                    <section className="mb-3">
                        <details>
                        <summary style={{ cursor: 'pointer', fontWeight: 600 }}>How do I place an order?</summary>
                        <p>
                            Browse products, add items to your cart, then proceed to the Checkout page to
                            provide billing details and confirm your order.
                        </p>
                        </details>
                    </section>

                    <section className="mb-3">
                        <details>
                        <summary style={{ cursor: 'pointer', fontWeight: 600 }}>What payment methods are accepted?</summary>
                        <p>
                            This demo includes a placeholder payments image. In a production app you'd integrate
                            real payment gateways (Stripe, PayPal, etc.).
                        </p>
                        </details>
                    </section>

                    <section className="mb-3">
                        <details>
                        <summary style={{ cursor: 'pointer', fontWeight: 600 }}>How long is the session valid?</summary>
                        <p>
                            Sessions last 10 minutes after login. You will be warned 10 seconds before the
                            session expires and can choose to continue or logout.
                        </p>
                        </details>
                    </section>

                    <section className="mb-3">
                        <details>
                        <summary style={{ cursor: 'pointer', fontWeight: 600 }}>How can I contribute?</summary>
                        <p>
                            Contributions are welcome. See the README for contribution guidelines and open a PR
                            with proposed changes.
                        </p>
                        </details>
                    </section>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-12 text-center">
                    <a href="/help" className="btn btn-outline-secondary btn-sm">Back to Help</a>
                    </div>
                </div>
                </div>
        </div>
    </div>
    {/*-- Contact End --*/}

    {/*-- Footer Start --*/}
    <Footer title="Footer"/>
    {/*-- Footer End --*/}

    </>
  );
}

export default Faqs;

