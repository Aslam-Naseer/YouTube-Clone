import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { VideoHorizontal } from "../components/VideoHorizontal";
import { useDispatch, useSelector } from "react-redux";
import { getSearchedVideos } from "../redux/actions/videos.action";
import ChannelHorizontal from "../components/ChannelHorizontal";

const Searchscreen = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  const searchVids = useSelector((state) => state.searchedVids.videos);

  useEffect(() => {
    dispatch(getSearchedVideos(query));
  }, [query, dispatch]);

  console.log(searchVids);
  return (
    <div className="search-screen-div">
      {searchVids.map((vid) =>
        vid?.id?.videoId ? (
          <VideoHorizontal
            video={vid}
            searchScreen
            key={vid?.id?.videoId + "h"}
          />
        ) : (
          <ChannelHorizontal channel={vid} key={vid?.id?.channelId + "h"} />
        )
      )}
    </div>
  );
};

export default Searchscreen;
