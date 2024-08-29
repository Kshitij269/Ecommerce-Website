import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productsReducer, productDetailsReducer,newProductReducer,newReviewReducer,productReducer,reviewReducer,productReviewsReducer } from './reducers/productReducers'; // Import your slices here
import {allUsersReducer,forgotPasswordReducer,profileReducer,userDetailsReducer,userReducer} from "./reducers/userReducers"
import { newReview } from "./actions/productAction";


// Combine reducers
const reducer = combineReducers({
  user:userReducer,
  products: productsReducer,
  productDetails: productDetailsReducer,
  newReview:newReview
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








