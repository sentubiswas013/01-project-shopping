import { addToCart, removeFromCart, updateQuantity, clearCart } from '../actions/cartActions';
import type { CartItem } from '../actions/cartActions';

export interface CartState {
  items: CartItem[];
  totalItems: number;
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalAmount: 0,
};

const calculateTotals = (items: CartItem[]) => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  return { totalItems, totalAmount };
};

export default function cartReducer(state = initialState, action: any): CartState {
  console.log('Cart reducer received action:', action.type, action.payload);
  switch (action.type) {
    case addToCart.type: {
      console.log('Processing ADD_TO_CART action');
      const product = action.payload;
      const existingItem = state.items.find(item => item.product.productId === product.productId);
      
      let newItems;
      if (existingItem) {
        newItems = state.items.map(item =>
          item.product.productId === product.productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newItems = [...state.items, { product, quantity: 1 }];
      }
      
      const { totalItems, totalAmount } = calculateTotals(newItems);
      return { items: newItems, totalItems, totalAmount };
    }
    
    case removeFromCart.type: {
      const productId = action.payload;
      const newItems = state.items.filter(item => item.product.productId !== productId);
      const { totalItems, totalAmount } = calculateTotals(newItems);
      return { items: newItems, totalItems, totalAmount };
    }
    
    case updateQuantity.type: {
      const { productId, quantity } = action.payload;
      if (quantity <= 0) {
        const newItems = state.items.filter(item => item.product.productId !== productId);
        const { totalItems, totalAmount } = calculateTotals(newItems);
        return { items: newItems, totalItems, totalAmount };
      }
      
      const newItems = state.items.map(item =>
        item.product.productId === productId
          ? { ...item, quantity }
          : item
      );
      const { totalItems, totalAmount } = calculateTotals(newItems);
      return { items: newItems, totalItems, totalAmount };
    }
    
    case clearCart.type:
      return initialState;
    
    default:
      return state;
  }
}