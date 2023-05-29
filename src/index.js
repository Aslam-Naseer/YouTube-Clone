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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loginscreen from "./screens/Loginscreen";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Loginscreen />}></Route>
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
