import React from "react";
import { VideoHorizontal } from "../components/VideoHorizontal";
import {
  demoChannelTitle,
  demoProfilePicture,
  demoVideoTitle,
} from "../utils/constants";
import { MdThumbUpOffAlt, MdThumbDownOffAlt } from "react-icons/md";

const Watchscreen = () => {
  return (
    <div className="watch-screen">
      <div className="watch-section">
        <iframe
          src={`https://www.youtube.com/embed/3E0r78yQG7o`}
          // frameBorder="0"
          title="video"
          allowFullScreen
          className="vid-frame"
        ></iframe>

        <div className="vid-title-watch">{demoVideoTitle}</div>

        <div className="main-details">
          <div className="channel-details">
            <img src={demoProfilePicture} alt="channel profile pic" />
            <div>
              <div style={{ fontWeight: 500, fontSize: 16, color: "white" }}>
                {demoChannelTitle}
              </div>
              <div style={{ fontSize: 12 }}>123212 subscribers</div>
            </div>
            <button className="sub-button">Subscribe</button>
          </div>

          <div className="like-dislike">
            <button>
              <MdThumbUpOffAlt />
            </button>
            <button>
              <MdThumbDownOffAlt />
            </button>
          </div>
        </div>

        <div className="more-details">
          <div className="views-release">
            <span>900,000 views</span>&nbsp;&nbsp;
            <span>Jan 12, 2024</span>
          </div>
          Description
        </div>
      </div>

      <div className="recommendations">
        {Array(20)
          .fill(2)
          .map((val, index) => (
            <VideoHorizontal key={index} />
          ))}
      </div>
    </div>
  );
};

export default Watchscreen;
