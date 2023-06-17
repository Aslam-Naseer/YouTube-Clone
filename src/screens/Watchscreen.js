import React, { useEffect } from "react";
import { VideoHorizontal } from "../components/VideoHorizontal";
import {
  demoChannelTitle,
  demoProfilePicture,
  demoVideoTitle,
} from "../utils/constants";
import { MdThumbUpOffAlt, MdThumbDownOffAlt } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getRelatedVideos,
  getSelectedVideo,
} from "../redux/actions/videos.action";

import ReactShowMoreText from "react-show-more-text";
import numeral from "numeral";
import moment from "moment";
import { getChannelDetails } from "../redux/actions/channel.action";
import { addSubscription, removeSubscription } from "../utils/firestore";

import "../styles/watchscreen.css";

const Watchscreen = () => {
  const { channelIds } = useSelector((state) => state.subbedChannels);
  const isSubbed = () => channelIds.includes(snippet?.channelId);

  const { id } = useParams();

  const dispatch = useDispatch();
  const { snippet, statistics } = useSelector((state) => state.selected.video);
  const channelDetails = useSelector((state) => state.channelDetails.channel);
  const vidsData = useSelector((state) => state.relatedVids.videos);

  useEffect(() => {
    dispatch(getSelectedVideo(id));
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(getChannelDetails(snippet?.channelId));
  }, [snippet, dispatch]);

  useEffect(() => {
    dispatch(getRelatedVideos(id));
  }, [id, dispatch]);

  return (
    <div className="watch-screen">
      <div className="watch-section">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title="video"
          allowFullScreen
          className="vid-frame"
        ></iframe>

        <div className="vid-title-watch">
          {snippet?.title || demoVideoTitle}
        </div>

        <div className="main-details">
          <div className="channel-details">
            <Link to={`/channel/${snippet?.channelId}`}>
              <img
                src={
                  channelDetails?.snippet?.thumbnails?.high?.url ||
                  demoProfilePicture
                }
                alt="channel profile pic"
              />
            </Link>
            <Link to={`/channel/${snippet?.channelId}`}>
              <div>
                <div style={{ fontWeight: 500, fontSize: 16, color: "white" }}>
                  {channelDetails?.snippet?.title || demoChannelTitle}
                </div>
                <div style={{ fontSize: 12 }}>{`${numeral(
                  channelDetails?.statistics?.subscriberCount
                )
                  .format("0.a")
                  .toUpperCase()} subscribers`}</div>
              </div>
            </Link>

            <button
              className={`sub-button ${isSubbed() ? "subbed" : ""}`}
              onClick={() => {
                isSubbed()
                  ? removeSubscription(snippet?.channelId)
                  : addSubscription(snippet?.channelId);
              }}
            >
              {isSubbed() ? "Subscribed" : "Subscribe"}
            </button>
          </div>

          <div className="like-dislike">
            <button>
              <MdThumbUpOffAlt />

              <span className="like-count">
                &nbsp;
                {` ${numeral(statistics?.likeCount)
                  .format("0.a")
                  .toUpperCase()}`}
              </span>
            </button>
            <button>
              <MdThumbDownOffAlt />
            </button>
          </div>
        </div>

        <div className="more-details">
          <div className="views-release">
            <span>{numeral(statistics?.viewCount).format(0, 0.0)} views</span>
            &nbsp;&nbsp;
            <span>
              {moment().subtract(7, "days").isBefore(snippet?.publishedAt)
                ? moment(snippet?.publishedAt).fromNow()
                : moment(snippet?.publishedAt).format("MMM DD, YYYY")}
            </span>
          </div>
          <ReactShowMoreText
            lines={3}
            more="Show More"
            less="Show Less"
            expanded={false}
            anchorClass="show-more-less"
          >
            <span className="description">{snippet?.description}</span>
          </ReactShowMoreText>
        </div>
      </div>

      <div className="recommendations">
        {vidsData.map((vid) => (
          <VideoHorizontal video={vid} key={vid.id.videoId} />
        ))}
      </div>
    </div>
  );
};

export default Watchscreen;
