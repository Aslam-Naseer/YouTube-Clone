import React from "react";
import CategoriesBar from "../components/CategoriesBar";
import { Video } from "../components/Video";

const Homescreen = () => {
  const videos = Array(20).fill(2);
  const videosDiv = [];

  videos.forEach((vid) => videosDiv.push(<Video />));

  console.log(videos);
  return (
    <div>
      <CategoriesBar />
      <div className="vid-grid">{videosDiv}</div>
    </div>
  );
};

export default Homescreen;
