import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import configureStore from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore();

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
