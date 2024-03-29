import { useEffect, useState } from "react";
import { demoChannelTitle, demoChannelUrl } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { getChannelDetails } from "../redux/actions/channel.action";
import numeral from "numeral";
import { addSubscription, removeSubscription } from "../utils/firestore";
import { Link } from "react-router-dom";

import "../styles/channel-horizontal.css";

const ChannelHorizontal = ({ channel }) => {
  const dispatch = useDispatch();
  const { channelIds } = useSelector((state) => state.subbedChannels);

  const [subscribers, setSubscribers] = useState(0);
  const subFromSelector = useSelector(
    (state) => state.channelDetails.channel?.statistics?.subscriberCount
  );

  const { id, snippet } = channel;
  const channelId = id?.channelId ? id.channelId : id;
  const isSubbed = () => channelIds.includes(channelId);

  useEffect(() => {
    if (channel.statistics)
      setSubscribers(channel?.statistics?.subscriberCount);
    else dispatch(getChannelDetails(channelId));
  }, [channel, channelId, dispatch]);

  return (
    <div className="channel-div-horizontal">
      <Link to={`/channel/${channelId}`}>
        <div className="img-container">
          <img
            src={snippet?.thumbnails?.high?.url || demoChannelUrl}
            alt="profile=pfp"
            className="channel-horizontal-img"
          />
        </div>
      </Link>
      <div className="channel-horizontal-details">
        <Link to={`/channel/${channelId}`}>
          <div className="channel-horizontal-title">
            {snippet?.title || demoChannelTitle}
          </div>
        </Link>
        <div>
          {numeral(subscribers || subFromSelector)
            .format("0.a")
            .toUpperCase()}{" "}
          {" Subscribers"}
        </div>
        <div className="channel-description">{snippet?.description}</div>
      </div>
      <button
        className={`sub-btn-channel-horizontal ${isSubbed() ? "subbed" : ""}`}
        onClick={() => {
          isSubbed()
            ? removeSubscription(channelId)
            : addSubscription(channelId);
        }}
      >
        {isSubbed() ? "Subscribed" : "Subscribe"}
      </button>
    </div>
  );
};

export default ChannelHorizontal;
