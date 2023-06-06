import {
  HOME_VID_FAIL,
  HOME_VID_REQUEST,
  HOME_VID_SUCCESS,
  RELATED_VIDEOS_FAIL,
  RELATED_VIDEOS_REQUEST,
  RELATED_VIDEOS_SUCCESS,
  SEARCHED_VIDEO_FAIL,
  SEARCHED_VIDEO_REQUEST,
  SEARCHED_VIDEO_SUCCESS,
  VIDEO_SEARCH_FAIL,
  VIDEO_SEARCH_REQUEST,
  VIDEO_SEARCH_SUCCESS,
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

export const getSelectedVideo = (id) => async (dispatch) => {
  try {
    dispatch({ type: VIDEO_SEARCH_REQUEST });
    const { data } = await fetchData("/videos", {
      params: {
        part: "snippet,statistics",
        id: id,
      },
    });
    dispatch({ type: VIDEO_SEARCH_SUCCESS, payload: data.items[0] });
  } catch (e) {
    console.log(e.message);
    dispatch({
      type: VIDEO_SEARCH_FAIL,
      payload: e.message,
    });
  }
};

export const getRelatedVideos = (id) => async (dispatch) => {
  try {
    dispatch({
      type: RELATED_VIDEOS_REQUEST,
    });

    const { data } = await fetchData("/search", {
      params: {
        part: "snippet",
        relatedToVideoId: id,
        maxResults: 3,
        type: "video",
      },
    });
    dispatch({
      type: RELATED_VIDEOS_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    console.error(error.response.data.message);
    dispatch({
      type: RELATED_VIDEOS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getSearchedVideos = (query) => async (dispatch) => {
  try {
    dispatch({ type: SEARCHED_VIDEO_REQUEST });

    const { data } = await fetchData("/search", {
      params: {
        part: "snippet",
        maxResults: 3,
        q: query,
        type: "video,channel",
      },
    });

    dispatch({
      type: SEARCHED_VIDEO_SUCCESS,
      payload: data.items,
    });
  } catch (e) {
    console.error(e);
    dispatch({ type: SEARCHED_VIDEO_FAIL, payload: e.message });
  }
};
