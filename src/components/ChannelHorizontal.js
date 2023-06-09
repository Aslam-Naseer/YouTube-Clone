import { useEffect, useState } from "react";
import { demoChannelTitle, demoChannelUrl } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { getChannelDetails } from "../redux/actions/channel.action";
import numeral from "numeral";
import { addSubscription, removeSubscription } from "../utils/firestore";

const ChannelHorizontal = ({ channel }) => {
  const dispatch = useDispatch();
  const { channelIds } = useSelector((state) => state.subbedChannels);

  const [subscribers, setSubscribers] = useState(0);
  const subFromSelector = useSelector(
    (state) => state.channelDetails.channel?.statistics?.subscriberCount
  );

  const { id, snippet } = channel;
  const channelId = id.channelId ? id.channelId : id;
  const isSubbed = () => channelIds.includes(channelId);

  console.log(subFromSelector);

  useEffect(() => {
    console.log(channel);
    if (channel.statistics)
      setSubscribers(channel?.statistics?.subscriberCount);
    else dispatch(getChannelDetails(channelId));
  }, [channel, channelId, dispatch]);

  return (
    <div className="channel-div-horizontal">
      <div className="img-container">
        <img
          src={snippet?.thumbnails?.high?.url || demoChannelUrl}
          alt="profile=pfp"
          className="channel-horizontal-img"
        />
      </div>
      <div className="channel-horizontal-details">
        <div className="channel-horizontal-title">
          {snippet?.title || demoChannelTitle}
        </div>
        <div>
          {numeral(subscribers || subFromSelector)
            .format("0.a")
            .toUpperCase()}{" "}
          {" Subscribers"}
        </div>
        <div>{snippet?.description}</div>
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
