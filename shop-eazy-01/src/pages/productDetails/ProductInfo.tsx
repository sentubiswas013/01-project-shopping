/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faMinus, faPlus, faStarHalfAlt, faStarHalfStroke} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faYoutube, faLinkedinIn, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

export function ProductInfo({ title }: { title: string }) {
  return (
    <>
    <div className="h-100 bg-light p-30">
    <h3>Product Name Goes Here</h3>
    <div className="d-flex mb-3">
        <div className="text-primary mr-2">
            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
            <small><FontAwesomeIcon icon={faStar} className="text-primary mr-1" /></small>
            <small><FontAwesomeIcon icon={faStarHalfStroke} className="text-primary mr-1" /></small>
            <small><FontAwesomeIcon icon={faStarEmpty} className="text-primary mr-1" /></small>
            <small><FontAwesomeIcon icon={faStarEmpty} className="text-primary mr-1" /></small>
        </div>
        <small className="pt-1">(99 Reviews)</small>
    </div>
    <h3 className="font-weight-semi-bold mb-4">$150.00</h3>
    <p className="mb-4">Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit
        clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea
        Nonumy</p>
        <div className="d-flex mb-3">
        <strong className="text-dark mr-3">Sizes:</strong>
        <form className="d-flex">
            <div className="custom-control custom-radio custom-control-inline mx-2">
                <input type="radio" className="custom-control-input" id="size-1" name="size"/>
                <label className="custom-control-label ms-1" htmlFor="size-1">XS</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline mx-2">
                <input type="radio" className="custom-control-input" id="size-2" name="size"/>
                <label className="custom-control-label ms-1" htmlFor="size-2">S</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline mx-2">
                <input type="radio" className="custom-control-input" id="size-3" name="size"/>
                <label className="custom-control-label ms-1" htmlFor="size-3">M</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline mx-2">
                <input type="radio" className="custom-control-input" id="size-4" name="size"/>
                <label className="custom-control-label ms-1" htmlFor="size-4">L</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline mx-2">
                <input type="radio" className="custom-control-input" id="size-5" name="size"/>
                <label className="custom-control-label ms-1" htmlFor="size-5">XL</label>
            </div>
        </form>
    </div>
    <div className="d-flex mb-4">
        <strong className="text-dark mr-3">Colors:</strong>
        <form className="d-flex">
            <div className="custom-control custom-radio custom-control-inline mx-2">
                <input type="radio" className="custom-control-input" id="color-1" name="color"/>
                <label className="custom-control-label ms-1" htmlFor="color-1">Black</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline mx-2">
                <input type="radio" className="custom-control-input" id="color-2" name="color"/>
                <label className="custom-control-label ms-1" htmlFor="color-2">White</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline mx-2">
                <input type="radio" className="custom-control-input" id="color-3" name="color"/>
                <label className="custom-control-label ms-1" htmlFor="color-3">Red</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline mx-2">
                <input type="radio" className="custom-control-input" id="color-4" name="color"/>
                <label className="custom-control-label ms-1" htmlFor="color-4">Blue</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline mx-2">
                <input type="radio" className="custom-control-input" id="color-5" name="color"/>
                <label className="custom-control-label ms-1" htmlFor="color-5">Green</label>
            </div>
        </form>
    </div>
    <div className="d-flex align-items-center mb-4 pt-2">
        <div className="input-group quantity mr-3"  style={{ width: '130px' }}>
            <div className="input-group-btn">
                <button className="btn btn-primary btn-minus fw-bold">
                    <i className="fa fa-minus"></i>
                    <FontAwesomeIcon icon={faMinus} />
                </button>
            </div>
            <input type="text" className="form-control bg-secondary border-0 text-center" value="1"/>
            <div className="input-group-btn">
                <button className="btn btn-primary btn-plus fw-bold">
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
        </div>
        <button className="btn btn-primary mx-3 fw-bold"><i className="fa fa-shopping-cart mr-1"></i> Add To
            Cart</button>
    </div>
    <div className="d-flex pt-2">
        <strong className="text-dark mr-2">Share on:</strong>
        <div className="d-inline-flex">
            <a className="text-dark px-2" href="">
                <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a className="text-dark px-2" href="">
                <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a className="text-dark px-2" href="">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className="text-dark px-2" href="">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
        </div>
    </div>
</div>
    </>
  );
}

export default ProductInfo;
