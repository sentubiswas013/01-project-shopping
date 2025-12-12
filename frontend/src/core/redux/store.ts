import { configureStore } from '@reduxjs/toolkit';
import alertReducer from './reducer/alertReducer';
import cartReducer from './reducer/cartReducer';

const store = configureStore({
  reducer: {
    alert: alertReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
