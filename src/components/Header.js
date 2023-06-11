import React, { useState } from "react";
import {
  youtubeLogo,
  hamburgerMenu,
  voiceSearch,
  search,
  upload,
  youtubeApps,
  notifications,
} from "../icons";
import { Link, useNavigate } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";
import { useSelector } from "react-redux";

const Header = ({ toggleSidebar }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const pfp = useSelector((state) => state.auth?.user?.photoURL);

  const searchQuery = (e) => {
    e.preventDefault();
    if (!!searchTerm) navigate(`/search/${searchTerm}`);
  };

  return (
    <header className="header">
      <div className="left-section">
        <img
          src={hamburgerMenu}
          className="hamburger-menu"
          alt="menu"
          onClick={toggleSidebar}
        />
        <Link to="/">
          <img
            src={youtubeLogo}
            style={{ height: "20px", cursor: "pointer" }}
            alt="logo"
          />
        </Link>
      </div>

      <div className="mid-section">
        <form id="search-form" onSubmit={searchQuery}></form>
        <input
          type="search"
          className="search-bar"
          placeholder="Search"
          form="search-form"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button" type="submit" form="search-form">
          <img src={search} style={{ height: "24px" }} alt="search" />
          <div className="toolkit">Search</div>
        </button>
        <button className="voice-button">
          <img src={voiceSearch} style={{ height: "24px" }} alt="voice" />
          <div className="toolkit">Search with your voice</div>
        </button>
      </div>

      <div className="right-section">
        <div className="IB">
          <img src={upload} style={{ height: "24px" }} alt="upload" />
          <div className="toolkit">Create</div>
        </div>
        <div className="IB">
          <img src={youtubeApps} style={{ height: "24px" }} alt="apps" />
          <div className="toolkit">YouTube apps</div>
        </div>
        <div className="IB">
          <img src={notifications} style={{ height: "24px" }} alt="notifs" />
          <div className="notif-count">3</div>
          <div className="toolkit">Notifications</div>
        </div>
        <img src={pfp || demoProfilePicture} className="my-pfp" alt="pfp" />
      </div>
    </header>
  );
};

export default Header;
