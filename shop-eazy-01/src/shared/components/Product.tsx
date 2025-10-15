// Product.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faSyncAlt, faSearch, faStar } from '@fortawesome/free-solid-svg-icons';
import product1 from '../../assets/img/products/product-1.jpg';

export type ProductProps = {
  name: string;
  price: number;
  oldPrice?: number;
  rating: number;
  image: string;
  reviews: number;
  sale:  string;
  status:  string;
  stock: string;
  data: any
};

export function Product({data}: {data: any}) {
  console.log('Product data===:', data);
  // If data is an array, use the first item
  const product = Array.isArray(data) ? data[0] : data;
  return (
    <div className="product-item bg-light mb-4">
      <div className="product-img position-relative overflow-hidden">
        <img className="img-fluid w-100" src={product.images?.imageUrl} alt={product.name} />
        {product.sale && (
          <div className="product_bubble product_bubble_left product_bubble_red d-flex flex-column align-items-center"><span>{product.sale}</span></div>
        )}
        
        {product.stock && (
          <div className="product_bubble product_bubble_right product_bubble_blue d-flex flex-column align-items-center">
            <span>{product.stock}</span>
          </div>
        )}
        <div className="product-action">
          <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faShoppingCart} /></a>
          <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faHeart} /></a>
          <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSyncAlt} /></a>
          <a className="btn btn-outline-dark btn-square" href=""><FontAwesomeIcon icon={faSearch} /></a>
        </div>
      </div>
      <div className="text-center py-4 position-relative">
        <div className="product-add-to-cart">
          <a className="btn btn-outline-dark " href="#">Add To Cart</a>
          <a className="btn btn-outline-dark " href="#">Buy</a>
        </div>
        <a className="h6 text-decoration-none text-truncate" href="">{product.name}</a>
        <div className="d-flex align-items-center justify-content-center mt-2">
          <h5>${product.price?.toFixed(2)} </h5>
          {product.oldPrice && (
            <h6 className="text-muted ms-2"><del> ${product.oldPrice?.toFixed(2)}</del></h6>
          )}
        </div>
        <div className="d-flex align-items-center justify-content-center mb-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <small key={i}>
              <FontAwesomeIcon
                icon={faStar}
                className={i < Math.round(product.ratingAvg) ? 'text-primary mr-1' : 'text-muted mr-1'}
              />
            </small>
          ))}
          <small>({product.reviews})</small>
        </div>
        <div className="mt-2">
          <span className="text-muted">{product.description}</span>
        </div>
      </div>
    </div>
  );
}

export default Product;
