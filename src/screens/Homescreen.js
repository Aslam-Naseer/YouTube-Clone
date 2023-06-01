import { useDispatch, useSelector } from "react-redux";
import CategoriesBar from "../components/CategoriesBar";
import { Video } from "../components/Video";
import { useEffect } from "react";
import {
  getCategoryVideos,
  getPopularVideos,
} from "../redux/actions/videos.action";
import InfiniteScroll from "react-infinite-scroll-component";

const Homescreen = () => {
  const vidsData = useSelector((state) => state.homeVids.videos);
  const category = useSelector((state) => state.homeVids.category);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const fetchMore = () => {
    if (category === "All") dispatch(getPopularVideos());
    else dispatch(getCategoryVideos(category));
  };

  return (
    <div>
      <CategoriesBar />
      <InfiniteScroll
        dataLength={vidsData.length}
        next={fetchMore}
        hasMore={true}
      >
        <div className="vid-grid">
          {vidsData.map((vid) => (
            <Video video={vid} key={vid.id?.videoId || vid.id} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Homescreen;
