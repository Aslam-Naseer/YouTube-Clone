import { useDispatch, useSelector } from "react-redux";
import CategoriesBar from "../components/CategoriesBar";
import { Video } from "../components/Video";
import { useEffect } from "react";
import { getPopularVideos } from "../redux/actions/videos.action";

const Homescreen = () => {
  const vidsData = useSelector((state) => state.homeVids.videos);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  return (
    <div>
      <CategoriesBar />
      <div className="vid-grid">
        {vidsData.map((vid) => (
          <Video video={vid} key={vid.id?.videoId || vid.id} />
        ))}
      </div>
    </div>
  );
};

export default Homescreen;
