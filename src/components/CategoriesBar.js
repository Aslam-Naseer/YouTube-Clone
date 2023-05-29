import React from "react";
import { categories } from "../utils/constants";

const CategoriesBar = () => {
  const selected = "All";

  const divs = [];
  categories.forEach((category, index) =>
    divs.push(
      <button
        className={category === selected ? "selected-category" : "category"}
        key={index}
      >
        {category}
      </button>
    )
  );

  return <nav className="subheader">{divs}</nav>;
};

export default CategoriesBar;
