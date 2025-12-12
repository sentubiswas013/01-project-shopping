import { configureStore } from '@reduxjs/toolkit';
import alertReducer from './reducer/alertReducer';
// import other reducers as needed

const store = configureStore({
  reducer: {
    alert: alertReducer,
    // add other reducers here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
