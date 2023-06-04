import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoThumbnailUrl,
  demoVideoTitle,
} from "../utils/constants";

import fetchData from "../fetchData";
import moment from "moment";
import numeral from "numeral";

export const VideoHorizontal = ({ video }) => {
  const { id, snippet } = video;

  const [duration, setDuration] = useState(0);
  const [views, setViews] = useState(0);

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
    <div className="vid-div-horizontal">
      <div className="thumbnail-horizontal">
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
        <div>{snippet?.channelTitle || demoChannelTitle}</div>
        <div>
          <span>{numeral(views).format("0.a").toUpperCase()} views</span>{" "}
          &#x2022; <span>{moment(snippet?.publishedAt).fromNow(false)}</span>
        </div>
      </div>
    </div>
  );
};
