import { demoChannelTitle } from "../utils/constants";

const ChannelHorizontal = ({ channel }) => {
  return <div>{channel?.snippet?.title || demoChannelTitle}</div>;
};

export default ChannelHorizontal;
