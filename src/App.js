import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homescreen from "./screens/Homescreen";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Loginscreen from "./screens/Loginscreen";

const Layout = ({ children }) => (
  <>
    <Header />
    <div>
      <Sidebar />
      {children}
    </div>
  </>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Homescreen />
            </Layout>
          }
        />
        <Route path="/auth" element={<Loginscreen />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
