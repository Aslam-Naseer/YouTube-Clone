import {
  HOME_VID_FAIL,
  HOME_VID_REQUEST,
  HOME_VID_SUCCESS,
} from "../actionType";

import fetchData from "../../fetchData";

export const getPopularVideos = () => async (dispatch, getState) => {
  try {
    dispatch({ type: HOME_VID_REQUEST });

    const { data } = await fetchData("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        maxResults: 12,
        pageToken: getState().homeVids.nextPageToken,
      },
    });

    dispatch({
      type: HOME_VID_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: "All",
      },
    });
  } catch (e) {
    console.error(e);
    dispatch({ type: HOME_VID_FAIL, payload: e.message });
  }
};

export const getCategoryVideos = (query) => async (dispatch, getState) => {
  try {
    dispatch({ type: HOME_VID_REQUEST });

    const { data } = await fetchData("/search", {
      params: {
        part: "snippet",
        maxResults: 12,
        q: query,
        type: "video",
        pageToken: getState().homeVids.nextPageToken,
      },
    });

    console.log(data);

    dispatch({
      type: HOME_VID_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: query,
      },
    });
  } catch (e) {
    console.error(e);
    dispatch({ type: HOME_VID_FAIL, payload: e.message });
  }
};
