import { useDispatch, useSelector } from "react-redux";
import CategoriesBar from "../components/CategoriesBar";
import { Video } from "../components/Video";
import { useEffect } from "react";
import { getHomeVideos } from "../redux/actions/videos.action";

const Homescreen = () => {
  const vidsData = useSelector((state) => state.homeVids.videos);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHomeVideos());
  }, [dispatch]);

  return (
    <div>
      <CategoriesBar />
      <div className="vid-grid">
        {vidsData.map((vid) => (
          <Video video={vid} key={vid.id} />
        ))}
      </div>
    </div>
  );
};

export default Homescreen;
