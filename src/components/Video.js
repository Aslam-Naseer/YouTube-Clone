import React from "react";
import {
  demoChannelTitle,
  demoProfilePicture,
  demoVideoTitle,
  demoThumbnailUrl,
} from "../utils/constants";

export const Video = () => {
  return (
    <div className="vid-div">
      <div className="thumbnail-grid">
        <img src={demoThumbnailUrl} className="thumbnail-pic" alt="thumbnail" />
        <div className="vid-time">14:20</div>
      </div>
      <div className="stats-grid">
        <div className="pfp-div">
          <img src={demoProfilePicture} className="pfp" alt="channel-pfp" />
        </div>
        <div className="stats-div">
          <span className="vid-title">{demoVideoTitle}</span>
          <span className="vid-author">{demoChannelTitle}</span>
          <p className="vid-stats">3.4M views · 6 months ago</p>
        </div>
      </div>
    </div>
  );
};
