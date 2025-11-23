// Product.tsx
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faSyncAlt, faSearch, faStar } from '@fortawesome/free-solid-svg-icons';
import type { ProductProps } from '../../core/services/model';
import { addToCart } from '../../core/redux/actions/cartActions';
import { useNavigate } from 'react-router-dom';

export function Product({data}: {data: ProductProps}) {
  const dispatch = useDispatch();
  console.log('Product data===:', data);
  // If data is an array, use the first item
  const product = Array.isArray(data) ? data[0] : data;

  const handleAddToCart = () => {
    console.log('Adding to cart:', product);
    dispatch(addToCart(product));
    console.log('Action dispatched');
  };
  const navigate = useNavigate();

  const handleBuy = () => {
    // Add item to cart then go to checkout
    dispatch(addToCart(product));
    // navigate to checkout page
    navigate('/Checkout');
  };
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
          <button className="btn btn-outline-dark btn-square" type="button" onClick={handleAddToCart}><FontAwesomeIcon icon={faShoppingCart} /></button>
          <button className="btn btn-outline-dark btn-square" type="button"><FontAwesomeIcon icon={faHeart} /></button>
          <button className="btn btn-outline-dark btn-square" type="button"><FontAwesomeIcon icon={faSyncAlt} /></button>
          <button className="btn btn-outline-dark btn-square" type="button"><FontAwesomeIcon icon={faSearch} /></button>
        </div>
      </div>
      <div className="text-center py-4 position-relative">
        <div className="product-add-to-cart">
          <button className="btn btn-outline-dark" type="button" onClick={handleAddToCart}>Add To Cart</button>
          <button className="btn btn-outline-dark" type="button" onClick={handleBuy}>Buy</button>
        </div>
        <h6 className="text-decoration-none text-truncate">{product.name}</h6>
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
                className={i < Math.round(product.ratingAvg || 0) ? 'text-primary mr-1' : 'text-muted mr-1'}
              />
            </small>
          ))}
          <small>({product.reviews})</small>
        </div>
        <div className="mt-2 description">
          <span className="text-muted">{product.description}</span>
        </div>
      </div>
    </div>
  );
}

export default Product;
