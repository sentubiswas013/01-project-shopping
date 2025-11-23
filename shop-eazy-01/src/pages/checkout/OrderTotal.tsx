/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
import React, { useState } from 'react';
export function OrderTotal({ title }: { title: string }) {

  return (
    <>
    {/*-- Checkout Start --*/}
    <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pe-3">Order Total</span></h5>
    <div className="bg-light p-4 mb-5">
        <div className="border-bottom">
            <h6 className="mb-3">Products</h6>
            <div className="d-flex justify-content-between">
                <p>Product Name 1</p>
                <p>$150</p>
            </div>
            <div className="d-flex justify-content-between">
                <p>Product Name 2</p>
                <p>$150</p>
            </div>
            <div className="d-flex justify-content-between">
                <p>Product Name 3</p>
                <p>$150</p>
            </div>
        </div>
        <div className="border-bottom pt-3 pb-2">
            <div className="d-flex justify-content-between mb-3">
                <h6>Subtotal</h6>
                <h6>$150</h6>
            </div>
            <div className="d-flex justify-content-between">
                <h6 className="fw-medium">Shipping</h6>
                <h6 className="fw-medium">$10</h6>
            </div>
        </div>
        <div className="pt-2">
            <div className="d-flex justify-content-between mt-2">
                <h5>Total</h5>
                <h5>$160</h5>
            </div>
        </div>
    </div>
    <div className="mb-5">
        <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pe-3">Payment</span></h5>
        <div className="bg-light p-4">
            <div className="mb-3">
                <div className="form-check">
                    <input type="radio" className="form-check-input" name="payment" id="paypal"/>
                    <label className="form-check-label" htmlFor="paypal">Paypal</label>
                </div>
            </div>
            <div className="mb-3">
                <div className="form-check">
                    <input type="radio" className="form-check-input" name="payment" id="directcheck"/>
                    <label className="form-check-label" htmlFor="directcheck">Direct Check</label>
                </div>
            </div>
            <div className="mb-4">
                <div className="form-check">
                    <input type="radio" className="form-check-input" name="payment" id="banktransfer"/>
                    <label className="form-check-label" htmlFor="banktransfer">Bank Transfer</label>
                </div>
            </div>
            <button className="btn w-100 btn-primary fw-bold py-3">Place Order</button>
        </div>
    </div>
    {/*-- Checkout End --*/}
    </>
  );
}

export default OrderTotal;
