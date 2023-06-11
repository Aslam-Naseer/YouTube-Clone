import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getChannelVideos } from "../redux/actions/channel.action";
import { Video } from "../components/Video";
import ChannelHorizontal from "../components/ChannelHorizontal";
import fetchData from "../fetchData";

import "../styles/channelscreen.css";

const Channelscreen = () => {
  const { channelId } = useParams();
  const dispatch = useDispatch();
  const { videos } = useSelector((state) => state.channelVideos);

  const [imgurl, setImgurl] = useState(null);
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

      setImgurl(data.items[0].brandingSettings?.image?.bannerExternalUrl);
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
      {imgurl ? (
        <img src={imgurl} alt="banner" className="channel-banner" />
      ) : null}
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
