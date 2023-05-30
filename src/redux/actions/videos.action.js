import {
  HOME_VID_FAIL,
  HOME_VID_REQUEST,
  HOME_VID_SUCCESS,
} from "../actionType";

import fetchData from "../../fetchData";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

export const getPopularVideos = () => async (dispatch) => {
  try {
    dispatch({ type: HOME_VID_REQUEST });

    const { data } = await fetchData("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        maxResults: 18,
      },
    });

    dispatch({
      type: HOME_VID_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: "",
        category: "All",
      },
    });
  } catch (e) {
    console.error(e);
    dispatch({ type: HOME_VID_FAIL, payload: e.message });
  }
};

export const getCategoryVideos = (query) => async (dispatch) => {
  try {
    dispatch({ type: HOME_VID_REQUEST });

    const { data } = await fetchData("/search", {
      params: {
        part: "snippet",
        maxResults: 18,
        q: query,
        type: "video",
      },
    });

    console.log(data);

    dispatch({
      type: HOME_VID_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: "",
        category: query,
      },
    });
  } catch (e) {
    console.error(e);
    dispatch({ type: HOME_VID_FAIL, payload: e.message });
  }
};
