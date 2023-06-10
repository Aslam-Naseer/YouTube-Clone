import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChannelHorizontal from "../components/ChannelHorizontal";
import { setSubbedChannels } from "../redux/actions/channel.action";

const Subscriptions = () => {
  const dispatch = useDispatch();
  const { channels } = useSelector((state) => state.subbedChannels);

  return (
    <div className="subscriptions-div">
      {!channels || channels?.length === 0 ? (
        <h2
          style={{
            color: "#fff",
            fontWeight: 500,
            display: "flex",
            width: "85vw",
            justifyContent: "center",
          }}
        >
          You are not Subscribed to anybody
        </h2>
      ) : (
        channels.map((channel) => (
          <ChannelHorizontal channel={channel} key={channel?.id + "sub"} />
        ))
      )}
    </div>
  );
};

export default Subscriptions;
