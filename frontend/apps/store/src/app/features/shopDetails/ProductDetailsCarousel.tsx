/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
import React, { useState } from 'react';
 
import product1 from '../../../assets/img/product-1.jpg';

export function ProductDetailsCarousel({ title }: { title: string }) {

  return (
    <>
    <div id="product-carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner bg-light">
            <div className="carousel-item active">
                <img className="w-100 h-100" src={product1} alt="Image"/>
            </div>
            <div className="carousel-item">
                <img className="w-100 h-100" src="img/product-2.jpg" alt="Image"/>
            </div>
            <div className="carousel-item">
                <img className="w-100 h-100" src="img/product-3.jpg" alt="Image"/>
            </div>
            <div className="carousel-item">
                <img className="w-100 h-100" src="img/product-4.jpg" alt="Image"/>
            </div>
        </div>
        <a className="carousel-control-prev" href="#product-carousel" data-slide="prev">
            <i className="fa fa-2x fa-angle-left text-dark"></i>
        </a>
        <a className="carousel-control-next" href="#product-carousel" data-slide="next">
            <i className="fa fa-2x fa-angle-right text-dark"></i>
        </a>
    </div>
    </>
  );
}

export default ProductDetailsCarousel;
