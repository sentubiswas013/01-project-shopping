import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../core/redux/store'; 
 
export function CartSummary({ title }: { title: string }) {
  const { totalAmount, totalItems } = useSelector((state: RootState) => state.cart);
  const shipping = totalAmount > 0 ? 10 : 0;
  const finalTotal = totalAmount + shipping;

  return (
    <>
    <form className="mb-5" action="">
        <div className="input-group">
            <input type="text" className="form-control border-0" placeholder="Coupon Code"/>
            <div className="input-group-tex t">
                <button className="btn btn-primary py-2">Apply Coupon</button>
            </div>
        </div>
    </form>
    <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pe-3">Cart Summary</span></h5>
    <div className="bg-light p-4 mb-5">
        <div className="border-bottom pb-2">
            <div className="d-flex justify-content-between mb-3">
                <h6>Subtotal ({totalItems} items)</h6>
                <h6>${totalAmount.toFixed(2)}</h6>
            </div>
            <div className="d-flex justify-content-between">
                <h6 className="fw-medium">Shipping</h6>
                <h6 className="fw-medium">${shipping.toFixed(2)}</h6>
            </div>
        </div>
        <div className="pt-2">
            <div className="d-flex justify-content-between mt-2">
                <h5>Total</h5>
                <h5>${finalTotal.toFixed(2)}</h5>
            </div>
            <button className="btn w-100 btn-primary fw-bold my-3 py-3">Proceed To Checkout</button>
        </div>
    </div>
    </>
  );
}

export default CartSummary;
