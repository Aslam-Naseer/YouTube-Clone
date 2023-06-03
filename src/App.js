import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Homescreen from "./screens/Homescreen";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useSelector } from "react-redux";
import Watchscreen from "./screens/Watchscreen";

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
    if (!authStatus) navigate("/auth");
  }, [authStatus, navigate]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/watch/:id" element={<Watchscreen />} />
      </Routes>
    </Layout>
  );
};

export default App;
