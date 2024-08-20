import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {productsReducer,productDetailsReducer} from './reducers/productReducers'; // Import your slices here


// Combine reducers
const reducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
});

// Define the initial state if necessary
const initialState = {
  products: {
    loading: false, // Ensure this is defined in your initial state
    data: [],
    error: null,
  }
};

// Configure the store
const store = configureStore({
  reducer,
  preloadedState: initialState, // Preloaded state if necessary
  // Middleware is automatically included by default, including thunk
  // But you can customize the middleware if needed
});

export default store;








