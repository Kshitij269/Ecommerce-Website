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

import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import yourSliceReducer from './yourSlice'; // Import your slices here

const store = configureStore({
  reducer: {
    // Add your reducers here
    yourSliceName: yourSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk), // Optional if you want to add thunk (already included by default)
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development mode
});

export default store;











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

