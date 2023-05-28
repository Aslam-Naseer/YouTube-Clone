import React from "react";
import { explore, home, library, subscriptions } from "../icons";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <button className="SB">
        <img src={home} alt="home" />
        <div>Home</div>
      </button>
      <button className="SB">
        <img src={explore} alt="explore" />
        <div> Explore</div>
      </button>
      <button className="SB">
        <img src={subscriptions} alt="subscriptons" />
        <div>Subscriptions</div>
      </button>
      <button className="SB">
        <img src={library} alt="library" />
        <div>Library</div>
      </button>
    </nav>
  );
};

export default Sidebar;
