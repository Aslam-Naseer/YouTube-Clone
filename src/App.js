import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Homescreen from "./screens/Homescreen";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useSelector } from "react-redux";
import Watchscreen from "./screens/Watchscreen";
import Searchscreen from "./screens/Searchscreen";
import Subscriptions from "./screens/Subscriptions";
import Channelscreen from "./screens/Channelscreen";

const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleShowSidebar = () => setShowSidebar(!showSidebar);

  return (
    <>
      <Header toggleSidebar={toggleShowSidebar} />
      <div>
        <Sidebar show={showSidebar} />
        {children}
      </div>
    </>
  );
};

const App = () => {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (!authStatus) navigate("/auth");
  }, [authStatus, navigate]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/watch/:id" element={<Watchscreen />} />
        <Route path="/search/:query" element={<Searchscreen />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/channel/:channelId" element={<Channelscreen />} />
      </Routes>
    </Layout>
  );
};

export default App;
