/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
import React, { useState, useEffect } from 'react';
import VendorCarousel from '../../shared/components/VendorCarousel';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Topbar from '../../shared/common/Topbar';
import Navbar from '../../shared/common/Navbar';
import Breadcrumb from '../../shared/common/Breadcrumb';
import FilterProducts from './FilterProducts';
import ShopProducts from './ShopProducts';
import Footer from '../../shared/common/Footer';
import { productService } from '../../core/services/productService';
import type { ProductProps } from '../../core/services/model';

type PriceRange = {
  min: number;
  max: number;
  label: string;
};

export function Shop() {
  const [allProducts, setAllProducts] = useState<ProductProps[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getProducts("12321");
        setAllProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handlePriceFilter = (priceRanges: PriceRange[]) => {
    if (priceRanges.length === 0) {
      setFilteredProducts(allProducts);
    } else {
      const filtered = allProducts.filter(product => 
        priceRanges.some(range => 
          product.price >= range.min && product.price <= range.max
        )
      );
      setFilteredProducts(filtered);
    }
  };
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


    {/*-- Shop Start --*/}
    <div className="container-fluid">
        <div className="row px-xl-5">
            {/*-- Shop Sidebar Start --*/}
            <FilterProducts title="FilterProducts" onPriceFilter={handlePriceFilter}/>
            {/*-- Shop Sidebar End --*/}


            {/*-- Shop Product Start --*/}
            <ShopProducts title="ShopProducts" products={filteredProducts} loading={loading}/>
            {/*-- Shop Product End --*/}
        </div>
    </div>
    {/*-- Shop End --*/}

    {/*-- Vendor Start --*/}
    <div className="container-fluid">
        <div className="row px-xl-5">
            <div className="col">
                <VendorCarousel />
            </div>
        </div>
    </div>
    {/*-- Vendor End --*/}


    {/*-- Footer Start --*/}
    <Footer title="Footer"/>
    {/*-- Footer End --*/}


    {/*-- Back to Top --*/}
    <a href="#" className="btn btn-primary back-to-top"><i className="fa fa-angle-double-up"></i></a>
    </>
  );
}

export default Shop;
