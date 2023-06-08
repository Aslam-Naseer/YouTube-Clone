import { useEffect } from "react";
import { demoChannelTitle, demoChannelUrl } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { getChannelDetails } from "../redux/actions/channel.action";
import numeral from "numeral";
import { removeSubscription } from "../utils/firestore";

const ChannelHorizontal = ({ channel }) => {
  const dispatch = useDispatch();
  const subscribers = useSelector(
    (state) => state.channelDetails.channel?.statistics?.subscriberCount
  );

  const { id, snippet } = channel;

  useEffect(() => {
    dispatch(getChannelDetails(id?.channelId));
  }, [id, dispatch]);
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
          {" "}
          {numeral(subscribers).format("0.a").toUpperCase()} {" Subscribers"}
        </div>
        <div>{snippet?.description}</div>
      </div>
      <button
        className="sub-btn-channel-horizontal"
        onClick={() => removeSubscription(id?.channelId)}
      >
        Subscribe
      </button>
    </div>
  );
};

export default ChannelHorizontal;
