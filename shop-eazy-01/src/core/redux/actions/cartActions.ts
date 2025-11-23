import { createAction } from '@reduxjs/toolkit';
import { ProductProps } from '../../services/model';

export interface CartItem {
  product: ProductProps;
  quantity: number;
}

export const ADD_TO_CART = 'cart/addToCart';
export const REMOVE_FROM_CART = 'cart/removeFromCart';
export const UPDATE_QUANTITY = 'cart/updateQuantity';
export const CLEAR_CART = 'cart/clearCart';

export const addToCart = createAction<ProductProps>(ADD_TO_CART);
export const removeFromCart = createAction<number>(REMOVE_FROM_CART);
export const updateQuantity = createAction<{ productId: number; quantity: number }>(UPDATE_QUANTITY);
export const clearCart = createAction(CLEAR_CART);