/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
import React, { useEffect, useState } from 'react';
import Product from '../../shared/components/product';
 
export function FeatureProducts({ title }: { title: string }) {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8081/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
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
              <Product
                id={product.productId}
                name={product.name}
                description={product.description}
                price={product.price}
                oldPrice={product.oldPrice}
                image={product.images?.imageUrl}
                brand={product.brand}
                stock={product.stock}
                rating={product.ratingAvg}
                reviews={product.reviews}
                sale={product.sale}
                // Add or adjust props as needed for your Product component
              />
            </div>
          ))}
        </div>
      </div>
      {/*-- Feature Products End --*/}
    </>
  );
}

export default FeatureProducts;
