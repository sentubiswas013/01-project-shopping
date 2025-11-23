import React, { useEffect, useState } from 'react';
// import products from '../../core/config/products';
import Product from '../../shared/components/Product';
import { productService } from '../../core/services/productService';
import type { ProductProps } from '../../core/services/model';
 
export function FeatureProducts({ title }: { title: string }) {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const data = await productService.getProducts("12321");
          console.log('Fetched products data:', data);
          setProducts(data);
          setLoading(false);
          console.log('Products fetched:', data);
        } catch (error) {
          setLoading(false)
          console.error('Error fetching products:', error);
        }
      };
  
      fetchProducts();
    }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      {/*-- Feature Products Start --*/}
      <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">{title || 'Featured Products'}</span>
        </h2>
        <div className="row px-xl-5">
          {products.slice(0, 8).map((product) => (
            <div key={product.productId} className="col-lg-3 col-md-4 col-sm-6 pb-1">
              <Product data={product}/>
            </div>
          ))}
        </div>
      </div>
      {/*-- Feature Products End --*/}
    </>
  );
}

export default FeatureProducts;
