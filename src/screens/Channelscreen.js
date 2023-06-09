import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getChannelVideos } from "../redux/actions/channel.action";
import { Video } from "../components/Video";
import ChannelHorizontal from "../components/ChannelHorizontal";
import fetchData from "../fetchData";
import { demoProfilePicture } from "../utils/constants";

const Channelscreen = () => {
  const { channelId } = useParams();
  const dispatch = useDispatch();
  const { videos } = useSelector((state) => state.channelVideos);

  const [imgurl, setImgurl] = useState(demoProfilePicture);
  const [channelObj, setChannelObj] = useState({});

  useEffect(() => {
    dispatch(getChannelVideos(channelId));

    const getChannel = async () => {
      const { data } = await fetchData("/channels", {
        params: {
          part: "snippet,brandingSettings",
          id: channelId,
        },
      });
      console.log(data);
      setImgurl(data.items[0].brandingSettings.image.bannerExternalUrl);
      setChannelObj(data.items[0]);
    };

    try {
      getChannel();
    } catch (e) {
      console.errot(e.message);
    }
  }, [dispatch, channelId]);

  return (
    <div className="channel-screen">
      <img src={imgurl} alt="banner" className="channel-banner" />
      <ChannelHorizontal channel={channelObj} />
      <div className="uploads">Uploads</div>
      <div className="vid-grid">
        {videos.map((vid) => (
          <Video video={vid} key={vid.id} channelVid={true} />
        ))}
      </div>
    </div>
  );
};

export default Channelscreen;
