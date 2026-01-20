import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import cartReducer from "./cart/cartReducer";
import cartSaga from "./cart/cartSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(cartSaga);

export default store;
