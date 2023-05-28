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
        <a href="https://www.youtube.com/watch?v=n2RNcPRtAiY&t=542s">
          <img
            src={demoThumbnailUrl}
            className="thumbnail-pic"
            alt="thumbnail"
          />
        </a>
        <div className="vid-time">14:20</div>
      </div>
      <div className="stats-grid">
        <div className="pfp-div">
          <a href="https://www.youtube.com/c/mkbhd">
            <img src={demoProfilePicture} className="pfp" alt="channel-pfp" />
          </a>
        </div>
        <div className="stats-div">
          <a
            className="vid-title"
            href="https://www.youtube.com/watch?v=n2RNcPRtAiY&t=542s"
          >
            Talking Tech and AI with Google CEO Sundar Pichai!
          </a>
          <a className="vid-author" href="https://www.youtube.com/c/mkbhd">
            Marques Brownlee
          </a>
          <p className="vid-stats">3.4M views · 6 months ago</p>
        </div>
      </div>
    </div>
  );
};
