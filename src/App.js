import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Homescreen from "./screens/Homescreen";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Loginscreen from "./screens/Loginscreen";
import { useSelector } from "react-redux";

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
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.accessToken);
  useEffect(() => {
    console.log(authStatus);
    if (!authStatus) navigate("/auth");
  }, [authStatus, navigate]);

  return (
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
  );
};

export default App;
