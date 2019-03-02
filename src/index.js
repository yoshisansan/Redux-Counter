import React from "react";
import { render } from "react-dom";

import { createStore, applyMiddleware } from "redux";

import rootReducer from "./reducers";

import App from "./containers/App";

import { Provider } from "react-redux";

import thunk from "redux-thunk";

const middleWares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

console.log(store);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

export default App;
