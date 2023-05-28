import React from "react";
import {
  youtubeLogo,
  hamburgerMenu,
  voiceSearch,
  search,
  upload,
  youtubeApps,
  notifications,
} from "../icons";

const Header = () => {
  return (
    <header className="header">
      <div className="left-section">
        <img src={hamburgerMenu} className="hamburger-menu" />
        <img src={youtubeLogo} style={{ height: "20px", cursor: "pointer" }} />
      </div>
      <div className="mid-section">
        <input type="search" className="search-bar" placeholder="Search" />
        <button className="search-button">
          <img src={search} style={{ height: "24px" }} />
          <div className="toolkit">Search</div>
        </button>
        <button className="voice-button">
          <img src={voiceSearch} style={{ height: "24px" }} />
          <div className="toolkit">Search with your voice</div>
        </button>
      </div>
      <div className="right-section">
        <div className="IB">
          <img src={upload} style={{ height: "24px" }} />
          <div className="toolkit">Create</div>
        </div>
        <div className="IB">
          <img src={youtubeApps} style={{ height: "24px" }} />
          <div className="toolkit">YouTube apps</div>
        </div>
        <div className="IB">
          <img src={notifications} style={{ height: "24px" }} />
          <div className="notif-count">3</div>
          <div className="toolkit">Notifications</div>
        </div>
        <img
          src="https://img.freepik.com/free-icon/user_318-749758.jpg"
          className="my-pfp"
        />
      </div>
    </header>
  );
};

export default Header;
