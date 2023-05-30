import React, { useEffect, useState } from "react";
import {
  demoChannelTitle,
  demoProfilePicture,
  demoVideoTitle,
  demoThumbnailUrl,
} from "../utils/constants";

import fetchData from "../fetchData";

import moment from "moment";
import numeral from "numeral";

export const Video = ({ video }) => {
  const [views, setViews] = useState(0);
  const [duration, setDuration] = useState(0);
  const [channelIcon, setChannelIcon] = useState(null);

  const {
    id,
    snippet: {
      channelTitle,
      channelId,
      title,
      publishedAt,
      thumbnails: { high },
    },
  } = video;

  const seconds = moment.duration(duration).asSeconds();
  const vidDuration = moment.utc(seconds * 1000).format("mm:ss");

  const vidViews = numeral(views).format("0.a").toUpperCase();

  const vidPublished = moment(publishedAt).fromNow(false);

  const vidId = id?.videoId || id;

  useEffect(() => {
    const getVideoDetails = async () => {
      const {
        data: { items },
      } = await fetchData("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: vidId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    getVideoDetails();
  }, [vidId]);

  useEffect(() => {
    const getChannelIcon = async () => {
      const {
        data: { items },
      } = await fetchData("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default.url);
    };
    getChannelIcon();
  }, [channelId]);

  return (
    <div className="vid-div">
      <div className="thumbnail-grid">
        <img
          src={high.url || demoThumbnailUrl}
          className="thumbnail-pic"
          alt="thumbnail"
        />
        <div className="vid-time">{vidDuration}</div>
      </div>
      <div className="stats-grid">
        <div className="pfp-div">
          <img
            src={channelIcon || demoProfilePicture}
            className="pfp"
            alt="channel-pfp"
          />
        </div>
        <div className="stats-div">
          <span className="vid-title">{title || demoVideoTitle}</span>
          <span className="vid-author">{channelTitle || demoChannelTitle}</span>
          <p className="vid-stats">
            {vidViews} views · {vidPublished}
          </p>
        </div>
      </div>
    </div>
  );
};
