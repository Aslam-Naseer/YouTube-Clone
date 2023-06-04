import React from "react";
import { useParams } from "react-router-dom";
import { VideoHorizontal } from "../components/VideoHorizontal";

const Searchscreen = () => {
  const { query } = useParams();
  return (
    <div className="search-screen-div">
      {Array(20)
        .fill({
          snippet: { title: query },
        })
        .map((vid) => (
          <VideoHorizontal video={vid} searchScreen />
        ))}
    </div>
  );
};

export default Searchscreen;
