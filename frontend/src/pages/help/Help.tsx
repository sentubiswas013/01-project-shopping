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

export function Help({ title }: { title: string }) {

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
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Help & Support</span></h2>
        <div className="row px-xl-5">
            <div className="help-page">
                <div className="row mb-4">
                    <div className="col-md-6">
                    <h4>Customer Support</h4>
                    <p>
                        For order inquiries, refunds, or product questions, please contact our support
                        team via email or open an issue in the project repo. Typical response time is 1-2
                        business days.
                    </p>
                    <p>
                        <strong>Email:</strong> <a href="mailto:support@example.com">support@example.com</a>
                    </p>
                    </div>
                    <div className="col-md-6">
                    <h4>Self-Serve Resources</h4>
                    <p>
                        Check our FAQs for answers to common questions about ordering, payments, and
                        account management. If the FAQ doesn't help, use the contact details above.
                    </p>
                    <p>
                        <a href="/about" className="btn btn-outline-primary btn-sm">About this project</a>
                        <span style={{ marginLeft: 8 }} />
                        <a href="/help/faqs" className="btn btn-primary btn-sm">View FAQs</a>
                    </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                    <h4>Reporting Bugs</h4>
                    <p>
                        Found a bug or want to request a feature? Please open an issue in the repository with
                        steps to reproduce and a short description. Include screenshots or console logs when
                        possible.
                    </p>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-12 text-center">
                    <small className="text-muted">Support hours: Mon–Fri, 9:00–18:00 (local time)</small>
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

export default Help;

