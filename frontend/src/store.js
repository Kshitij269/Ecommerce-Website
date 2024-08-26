import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productsReducer, productDetailsReducer } from './reducers/productReducers'; // Import your slices here
import {allUsersReducer,forgotPasswordReducer,profileReducer,userDetailsReducer,userReducer} from "./reducers/userReducers"


// Combine reducers
const reducer = combineReducers({
  user:userReducer,
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
  preloadedState: initialState,
});

export default store;








