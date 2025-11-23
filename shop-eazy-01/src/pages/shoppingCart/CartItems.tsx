import React from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { RootState } from '../../core/redux/store';
import { removeFromCart, updateQuantity } from '../../core/redux/actions/cartActions';
 
export function CartItems({ title }: { title: string }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ productId, quantity: newQuantity }));
    }
  };

  const handleRemoveItem = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-5">
        <h4>Your cart is empty</h4>
        <p>Add some products to your cart to see them here.</p>
      </div>
    );
  }

  return (
    <>
    <table className="table table-light table-borderless table-hover text-center mb-0">
      <thead className="thead-dark">
        <tr>
          <th>Products</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody className="align-middle">
        {cartItems.map((item) => (
          <tr key={item.product.productId}>
            <td className="align-middle">
              <img src={item.product.images?.imageUrl} alt={item.product.name} style={{width: '50px'}}/>
              {' '}{item.product.name}
            </td>
            <td className="align-middle">${item.product.price.toFixed(2)}</td>
            <td className="align-middle">
              <div className="input-group quantity mx-auto" style={{width: '100px'}}>
                <div className="input-group-btn">
                  <button 
                    className="btn btn-sm btn-primary btn-minus" 
                    onClick={() => handleQuantityChange(item.product.productId, item.quantity - 1)}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                </div>
                <input 
                  type="text" 
                  className="form-control form-control-sm bg-secondary border-0 text-center" 
                  value={item.quantity}
                  readOnly
                />
                <div className="input-group-btn">
                  <button 
                    className="btn btn-sm btn-primary btn-plus"
                    onClick={() => handleQuantityChange(item.product.productId, item.quantity + 1)}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
              </div>
            </td>
            <td className="align-middle">${(item.product.price * item.quantity).toFixed(2)}</td>
            <td className="align-middle">
              <button 
                className="btn btn-sm btn-danger"
                onClick={() => handleRemoveItem(item.product.productId)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
}

export default CartItems;
