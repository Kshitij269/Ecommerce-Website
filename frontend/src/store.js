<<<<<<< HEAD
import { createStore, combineReducers, applyMiddleWares } from "redux";
import thunk from 'redux-thunk';

import { composeWithDevTools } from "redux-devtools-extension";
=======
import { configureStore , combineReducers} from "@reduxjs/toolkit";
import {thunk} from "redux-thunk";
>>>>>>> 5c1c9af76ca4e5c9ef917765bdc89116db9aaf79

// Dummy reducer, replace with actual reducers
const reducer = combineReducers({
    // Your reducers go here
});

let initialState = {};

const store = configureStore({
    reducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    devTools: process.env.NODE_ENV !== 'production', // This enables Redux DevTools in development
});

export default store;
