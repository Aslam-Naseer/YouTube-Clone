import React from "react";
import { MdExitToApp } from "react-icons/md";
import { explore, home, library, subscriptions } from "../icons";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Sidebar = () => {
  const handler = async () => {
    try {
      await signOut(getAuth());
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <nav className="sidebar">
      <Link to="/">
        <button className="SB">
          <img src={home} alt="home" />
          <div>Home</div>
        </button>
      </Link>
      <button className="SB">
        <img src={explore} alt="explore" />
        <div> Explore</div>
      </button>
      <Link to="/subscriptions">
        <button className="SB">
          <img src={subscriptions} alt="subscriptons" />
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
