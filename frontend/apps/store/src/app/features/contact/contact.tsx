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
import ContactLeft from './ContactLeft';
import ContactRight from './ContactRight';
import Footer from '../../shared/common/Footer';

export function Contact({ title }: { title: string }) {

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


    {/*-- Contact Start --*/}
    <div className="container-fluid">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Contact Us</span></h2>
        <div className="row px-xl-5">
            <div className="col-lg-7 mb-5">
                <ContactLeft />
            </div>
            <div className="col-lg-5 mb-5">
                <ContactRight/>
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

export default Contact;
