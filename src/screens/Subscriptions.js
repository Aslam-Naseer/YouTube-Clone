import { useSelector } from "react-redux";
import ChannelHorizontal from "../components/ChannelHorizontal";

const Subscriptions = () => {
  const { channels } = useSelector((state) => state.subbedChannels);

  return (
    <div className="subscriptions-div">
      {!channels || channels?.length === 0 ? (
        <h2 className="error-text">You are not Subscribed to anybody</h2>
      ) : (
        channels.map((channel) => (
          <ChannelHorizontal channel={channel} key={channel?.id + "sub"} />
        ))
      )}
    </div>
  );
};

export default Subscriptions;
