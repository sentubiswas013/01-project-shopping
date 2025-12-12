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

export function About({ title }: { title: string }) {

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
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">About Shop Eazy</span></h2>
        <div className="row px-xl-5">
            <div className="about-page">

                <div className="row align-items-center mb-4">
                    <div className="col-md-6">
                    <h3>Our Mission</h3>
                    <p>
                        We aim to make online shopping simple and enjoyable by providing a clean demo
                        storefront that demonstrates common patterns: product listing, cart, checkout,
                        and session handling. This project is intended as a teaching example and starting
                        point for building real features.
                    </p>
                    </div>
                    <div className="col-md-6 text-center">
                    <img
                        src="/src/assets/img/banner-01.jpg"
                        alt="Shop Eazy"
                        className="img-fluid rounded shadow-sm"
                        style={{ maxHeight: 220 }}
                    />
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-md-4">
                    <h4>Who We Are</h4>
                    <p>
                        A small team of engineers and designers exploring modern frontend tooling with
                        React, TypeScript, Vite and Redux. This repo contains examples of services,
                        components, and patterns you can reuse.
                    </p>
                    </div>
                    <div className="col-md-4">
                    <h4>Contact</h4>
                    <p>
                        For questions or suggestions, open an issue in the repository or reach out to the
                        project maintainer listed in the README.
                    </p>
                    </div>
                    <div className="col-md-4">
                    <h4>Contribute</h4>
                    <p>
                        Contributions are welcome — PRs for bug fixes, accessibility improvements, and
                        feature demos are appreciated. See the README for contribution guidance.
                    </p>
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

export default About;
