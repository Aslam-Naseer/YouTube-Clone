import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoProfilePicture,
  demoThumbnailUrl,
  demoVideoTitle,
} from "../utils/constants";

import fetchData from "../fetchData";
import moment from "moment";
import numeral from "numeral";

export const VideoHorizontal = ({ video, searchScreen }) => {
  const { id, snippet } = video;

  const [duration, setDuration] = useState(0);
  const [views, setViews] = useState(0);

  console.log(searchScreen);

  const seconds = moment.duration(duration).asSeconds();

  useEffect(() => {
    const getVideoDetails = async () => {
      const {
        data: { items },
      } = await fetchData("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: id?.videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    getVideoDetails();
  }, [id]);

  console.log(video);
  return (
    <div className={`vid-div-horizontal ${searchScreen ? "searchScreen" : ""}`}>
      <div className={`thumbnail-horizontal`}>
        <Link to={`/watch/${id?.videoId}`}>
          <img
            src={snippet?.thumbnails?.high.url || demoThumbnailUrl}
            alt="thumbnail"
            className="thumbnail-horizontal-image"
          />
        </Link>
        <span>{moment.utc(seconds * 1000).format("mm:ss")}</span>
      </div>
      <div className="vid-details-horizontal">
        <Link to={`/watch/${id?.videoId}`}>
          <div className="vid-title-horizontal">
            {snippet?.title || demoVideoTitle}
          </div>
        </Link>
        <div className="channel-horizontal">
          {searchScreen ? (
            <img
              src={demoProfilePicture}
              alt="channel-pfp"
              className="channel-pfp-horizontal"
            />
          ) : null}
          {snippet?.channelTitle || demoChannelTitle}
        </div>
        <div className="views-publish-horizontal">
          <span>{numeral(views).format("0.a").toUpperCase()} views</span>{" "}
          &#x2022; <span>{moment(snippet?.publishedAt).fromNow(false)}</span>
        </div>
        <div className="description-horizontal">
          {searchScreen
            ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Lacinia quis vel eros donec ac odio tempor. Aliquam malesuada bibendum arcu vitae elementum. Eget arcu dictum varius duis at consectetur lorem donec massa. Aliquam malesuada bibendum arcu vitae. Faucibus et molestie ac feugiat. Nibh praesent tristique magna sit amet purus. Faucibus in ornare quam viverra orci sagittis eu volutpat odio. Integer malesuada nunc vel risus commodo viverra maecenas accumsan. Duis ultricies lacus sed turpis tincidunt id aliquet risus."
            : ""}
        </div>
      </div>
    </div>
  );
};
