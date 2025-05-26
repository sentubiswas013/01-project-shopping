/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
import React, { useState } from 'react';

 import product1 from '../../../assets/img/product-1.jpg';
 import product2 from '../../../assets/img/product-2.jpg';
 import product3 from '../../../assets/img/product-3.jpg';
 import product4 from '../../../assets/img/product-4.jpg';
 import product5 from '../../../assets/img/product-5.jpg';
 import product6 from '../../../assets/img/product-6.jpg';
 import product7 from '../../../assets/img/product-7.jpg';
 import product8 from '../../../assets/img/product-8.jpg'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faSyncAlt, faSearch, faStar} from '@fortawesome/free-solid-svg-icons';

import products from '../../core/config/products';
import Product from '../../shared/components/product';
 
export function RecentProducts({ title }: { title: string }) {
  return (
    <>

    {/*-- Recent Products Start --*/}
    <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Recent Products</span></h2>
        
        <div className="row px-xl-5">            
            {products.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <Product {...product} />
            </div>
            ))}            
        </div>
    </div>
    {/*-- Recent Products End --*/}

    </>
  );
}

export default RecentProducts;
