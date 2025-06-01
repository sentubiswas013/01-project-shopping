// Product.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faSyncAlt, faSearch, faStar } from '@fortawesome/free-solid-svg-icons';

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
};

export function Product({ name, price, oldPrice, rating, image, reviews, sale, status, stock, }: ProductProps) {
  return (
    <div className="product-item bg-light mb-4">
      <div className="product-img position-relative overflow-hidden">
        <img className="img-fluid w-100" src={image} alt={name} />
        {
          sale !== '' && (
           <div className="product_bubble product_bubble_left product_bubble_red d-flex flex-column align-items-center"><span>{sale}</span></div>
          )
        }

        {
          status !== '' && (
            <div className="product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center"><span>{status}</span></div>
          )
        }

        {
          stock !== '' && (
            <div className="product_bubble product_bubble_right product_bubble_blue d-flex flex-column align-items-center">
              <span>{stock}</span>
            </div>
          )
        }

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

        <a className="h6 text-decoration-none text-truncate" href="">{name}</a>
        <div className="d-flex align-items-center justify-content-center mt-2">
          <h5>${price.toFixed(2)}</h5>
          {oldPrice && (
            <h6 className="text-muted ml-2"><del>${oldPrice.toFixed(2)}</del></h6>
          )}
        </div>
        <div className="d-flex align-items-center justify-content-center mb-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <small key={i}>
              <FontAwesomeIcon
                icon={faStar}
                className={i < rating ? 'text-primary mr-1' : 'text-muted mr-1'}
              />
            </small>
          ))}
          <small>({reviews})</small>
        </div>
      </div>
    </div>
  );
}

export default Product;
