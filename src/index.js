import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./firebase";
import "./utils/firestore";

import App from "./App";
import store from "./redux/store";

import "./styles/general.css";

import { HashRouter, Route, Routes } from "react-router-dom";
import Loginscreen from "./screens/Loginscreen";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Routes>
        <Route path="/auth" element={<Loginscreen />}></Route>
        <Route path="/*" element={<App />} />
      </Routes>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
