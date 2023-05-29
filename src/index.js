import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./firebase";
import App from "./App";
import store from "./redux/store";

import "./styles/general.css";
import "./styles/header.css";
import "./styles/sidebar.css";
import "./styles/category-bar.css";
import "./styles/vid-grid.css";
import "./styles/login-screen.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
