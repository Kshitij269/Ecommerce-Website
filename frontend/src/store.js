// import {createStore,combineReducers,applyMiddleware} from "redux"
// import thunk from "redux-thunk"
// import {composeWithDevTools} from "redux-devtools-extension"

// const reducer=combineReducers({});
// let initialState={};
// const middleware=[thunk];
// const store=createStore(
//     reducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(...middleware))
// );
// export default store;

<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit';

import yourSliceReducer from "./reducers/slice" // Import your slices here
=======
// import { configureStore } from '@reduxjs/toolkit';
// import {thunk} from 'redux-thunk';
// import productsReducer from './reducers/productReducers'; // Import your slices here
>>>>>>> 28360492b218da5a16b1fb910ad0ea94b9fe1529

// const store = configureStore({
//   reducer: {
//     // Add your reducers here
//     yourSliceName: productsReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(thunk), // Optional if you want to add thunk (already included by default)
//   devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development mode
// });

// export default store;


import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {productsReducer} from './reducers/productReducers'; // Import your slices here

// Combine reducers
const reducer = combineReducers({
  products: productsReducer,
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
<<<<<<< HEAD
  reducer: {
    // Add your reducers here
    yourSliceName: yourSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(), // Optional if you want to add thunk (already included by default)
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development mode
=======
  reducer,
  preloadedState: initialState, // Preloaded state if necessary
  // Middleware is automatically included by default, including thunk
  // But you can customize the middleware if needed
>>>>>>> 28360492b218da5a16b1fb910ad0ea94b9fe1529
});

export default store;




<<<<<<< HEAD
=======





>>>>>>> 28360492b218da5a16b1fb910ad0ea94b9fe1529
// import { configureStore , combineReducers} from "@reduxjs/toolkit";
// import {thunk} from "redux-thunk";

// // Dummy reducer, replace with actual reducers
// const reducer = combineReducers({
//     // Your reducers go here
// });

// // let initialState = {};
// const initialState = {
//     loading: false, // Ensure this is defined in your initial state
//     data: [],
//     error: null,
//   };


// const store = configureStore({
//     reducer,
//     preloadedState: initialState,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
//     devTools: import.meta.env.NODE_ENV !== 'production', // This enables Redux DevTools in development
// });

// export default store;

