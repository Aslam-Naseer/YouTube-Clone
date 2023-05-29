import {
  HOME_VID_FAIL,
  HOME_VID_REQUEST,
  HOME_VID_SUCCESS,
} from "../actionType";

import fetchData from "../../fetchData";

export const getHomeVideos = () => async (dispatch) => {
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
        nextPAgeToken: "",
      },
    });
  } catch (e) {
    console.error(e);
    dispatch({ type: HOME_VID_FAIL, payload: e.message });
  }
};
