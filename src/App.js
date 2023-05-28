import React from "react";
import Homescreen from "./screens/Homescreen";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Homescreen />
    </div>
  );
};

export default App;
