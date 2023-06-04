import React from "react";
import { useParams } from "react-router-dom";

const Searchscreen = () => {
  const { query } = useParams();
  return <div>{query}</div>;
};

export default Searchscreen;
