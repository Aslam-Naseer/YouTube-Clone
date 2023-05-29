import React from "react";
import { MdExitToApp } from "react-icons/md";
import { explore, home, library, subscriptions } from "../icons";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/auth.action";

const Sidebar = () => {
  const dispatch = useDispatch();
  const handler = () => {
    dispatch(logout());
  };

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
      <button className="SB" onClick={handler}>
        <MdExitToApp size="23px" />
        <div>Sign Out</div>
      </button>
    </nav>
  );
};

export default Sidebar;
