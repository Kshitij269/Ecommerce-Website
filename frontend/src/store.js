import { createStore, combineReducers, applyMiddleWares } from "redux";
import thunk from 'redux-thunk';

import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({

});

let initialState = {};

const middleWare = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleWares(...middleWare))
);

export default store;
