/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
import React, { useState } from 'react';
 
export function BillingAddress({ title }: { title: string }) {

  return (
    <>

    {/*-- Checkout Start --*/}
    <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pe-3">Billing Address</span></h5>
    <div className="bg-light p-4 mb-5">
        <div className="row">
            <div className="col-md-6 mb-3">
                <label className="form-label">First Name</label>
                <input className="form-control" type="text" placeholder="John"/>
            </div>
            <div className="col-md-6 mb-3">
                <label className="form-label">Last Name</label>
                <input className="form-control" type="text" placeholder="Doe"/>
            </div>
            <div className="col-md-6 mb-3">
                <label className="form-label">E-mail</label>
                <input className="form-control" type="text" placeholder="example@email.com"/>
            </div>
            <div className="col-md-6 mb-3">
                <label className="form-label">Mobile No</label>
                <input className="form-control" type="text" placeholder="+123 456 789"/>
            </div>
            <div className="col-md-6 mb-3">
                <label className="form-label">Address Line 1</label>
                <input className="form-control" type="text" placeholder="123 Street"/>
            </div>
            <div className="col-md-6 mb-3">
                <label className="form-label">Address Line 2</label>
                <input className="form-control" type="text" placeholder="123 Street"/>
            </div>
            <div className="col-md-6 mb-3">
                <label className="form-label">Country</label>
                <select className="form-select">
                    <option defaultValue="">United States</option>
                    <option>Afghanistan</option>
                    <option>Albania</option>
                    <option>Algeria</option>
                </select>
            </div>
            <div className="col-md-6 mb-3">
                <label className="form-label">City</label>
                <input className="form-control" type="text" placeholder="New York"/>
            </div>
            <div className="col-md-6 mb-3">
                <label className="form-label">State</label>
                <input className="form-control" type="text" placeholder="New York"/>
            </div>
            <div className="col-md-6 mb-3">
                <label className="form-label">ZIP Code</label>
                <input className="form-control" type="text" placeholder="123"/>
            </div>
            <div className="col-md-12 mb-3">
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="newaccount"/>
                    <label className="form-check-label" htmlFor="newaccount">Create an account</label>
                </div>
            </div>
            <div className="col-md-12">
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="shipto"/>
                    <label className="form-check-label" htmlFor="shipto" data-bs-toggle="collapse" data-bs-target="#shipping-address">Ship to different address</label>
                </div>
            </div>
        </div>
    </div>
    <div className="collapse mb-5" id="shipping-address">
        <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pe-3">Shipping Address</span></h5>
        <div className="bg-light p-4">
            <div className="row">
                <div className="col-md-6 form-group">
                    <label>First Name</label>
                    <input className="form-control" type="text" placeholder="John"/>
                </div>
                <div className="col-md-6 form-group">
                    <label>Last Name</label>
                    <input className="form-control" type="text" placeholder="Doe"/>
                </div>
                <div className="col-md-6 form-group">
                    <label>E-mail</label>
                    <input className="form-control" type="text" placeholder="example@email.com"/>
                </div>
                <div className="col-md-6 form-group">
                    <label>Mobile No</label>
                    <input className="form-control" type="text" placeholder="+123 456 789"/>
                </div>
                <div className="col-md-6 form-group">
                    <label>Address Line 1</label>
                    <input className="form-control" type="text" placeholder="123 Street"/>
                </div>
                <div className="col-md-6 form-group">
                    <label>Address Line 2</label>
                    <input className="form-control" type="text" placeholder="123 Street"/>
                </div>
                <div className="col-md-6 mb-3">
                    <label className="form-label">Country</label>
                    <select className="form-select">
                        <option defaultValue="">United States</option>
                        <option>Afghanistan</option>
                        <option>Albania</option>
                        <option>Algeria</option>
                    </select>
                </div>
                <div className="col-md-6 form-group">
                    <label>City</label>
                    <input className="form-control" type="text" placeholder="New York"/>
                </div>
                <div className="col-md-6 form-group">
                    <label>State</label>
                    <input className="form-control" type="text" placeholder="New York"/>
                </div>
                <div className="col-md-6 form-group">
                    <label>ZIP Code</label>
                    <input className="form-control" type="text" placeholder="123"/>
                </div>
            </div>
        </div>
    </div>
    {/*-- Checkout End --*/}

    </>
  );
}

export default BillingAddress;
