import { applyMiddleware, combineReducers, compose, createStore } from "redux";
// import counterReducer from "./ducks/counter";
import counterReducer from "./reducers/counter"

import thunk from "redux-thunk";

const reducers = combineReducers({
  counter: counterReducer,
});

const middleware = [thunk];

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(...middleware),
  )
);

export default store;