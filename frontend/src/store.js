import { configureStore , combineReducers} from "@reduxjs/toolkit";
import {thunk} from "redux-thunk";

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
