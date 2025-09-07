/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
import React, { useState } from 'react';
import products from '../../core/config/products';
import Product from '../../shared/components/product';
 
export function FeatureProducts({ title }: { title: string }) {
  return (
    <>

    {/*-- Feature Products Start --*/}
    <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Featured Products</span></h2>
        <div className="row px-xl-5">            
            {products.slice(0, 8).map((product) => (
            <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <Product {...product} />
            </div>
            ))}            
        </div>
    </div>
    {/*-- Feature Products End --*/}

    </>
  );
}

export default FeatureProducts;
