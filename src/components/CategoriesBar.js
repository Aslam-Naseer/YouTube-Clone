import React, { useState } from "react";
import { categories } from "../utils/constants";
import {
  getCategoryVideos,
  getPopularVideos,
} from "../redux/actions/videos.action";
import { useDispatch } from "react-redux";

import "../styles/category-bar.css";

const CategoriesBar = () => {
  const [selected, setSelected] = useState("All");
  const dispatch = useDispatch();

  const selectCategory = (query) => {
    if (query === "All") dispatch(getPopularVideos());
    else dispatch(getCategoryVideos(query));
    setSelected(query);
  };

  const divs = [];
  categories.forEach((category, index) =>
    divs.push(
      <button
        className={category === selected ? "selected-category" : "category"}
        key={index}
        onClick={() => selectCategory(category)}
      >
        {category}
      </button>
    )
  );

  return <nav className="subheader">{divs}</nav>;
};

export default CategoriesBar;
