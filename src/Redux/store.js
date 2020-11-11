import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import authReducer from "./AuthReducer/reducer";
import productReducer from "./ProductReducer/reducer"
import locationReducer from "./LocationReducer/reducer"
import paymentReducer from "./PaymentReducer/reducer"
import thunk from "redux-thunk";

const rootReducer = combineReducers({ auth: authReducer, product: productReducer, location: locationReducer, payment: paymentReducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);