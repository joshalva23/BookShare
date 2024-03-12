import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const initialState = {};

const middleware = [thunk];

// compose is to pass multiple store enhancers to store
// Store enhancers are higher order functions that add extra functionalities to the store
// The only store enhancer supplied with Redux by default is applyMiddleware


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    initialState, // Ensure initialState is defined
    composeEnhancers(applyMiddleware(...middleware))
);


// const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;
