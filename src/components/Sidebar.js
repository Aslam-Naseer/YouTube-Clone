import React, { useEffect, useState } from "react";
import { MdExitToApp } from "react-icons/md";
import {
  explore,
  home,
  homeSelected,
  library,
  subsSelected,
  subscriptions,
} from "../icons";
import { Link, useLocation } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

import "../styles/sidebar.css";

const Sidebar = ({ show }) => {
  const [selected, setSelected] = useState("home");

  const location = useLocation();

  const handler = async () => {
    try {
      await signOut(getAuth());
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (location.pathname === "/") setSelected("home");
    else if (location.pathname === "/subscriptions") setSelected("subs");
    else setSelected(null);
  }, [location.pathname]);

  return (
    <nav className={`sidebar ${show ? "show-sidebar" : ""}`}>
      <Link to="/">
        <button className="SB">
          <img src={selected === "home" ? homeSelected : home} alt="home" />
          <div>Home</div>
        </button>
      </Link>
      <button className="SB">
        <img src={explore} alt="explore" />
        <div> Explore</div>
      </button>
      <Link to="/subscriptions">
        <button className="SB">
          <img
            src={selected === "subs" ? subsSelected : subscriptions}
            alt="subscriptons"
          />
          <div>Subscriptions</div>
        </button>
      </Link>
      <button className="SB">
        <img src={library} alt="library" />
        <div>Library</div>
      </button>
      <button className="SB" onClick={handler}>
        <MdExitToApp size="23px" />
        <div>Sign Out</div>
      </button>
    </nav>
  );
};

export default Sidebar;
