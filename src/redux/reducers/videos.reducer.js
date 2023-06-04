import {
  HOME_VID_FAIL,
  HOME_VID_REQUEST,
  HOME_VID_SUCCESS,
  VIDEO_SEARCH_FAIL,
  VIDEO_SEARCH_REQUEST,
  VIDEO_SEARCH_SUCCESS,
} from "../actionType";

const initialStateHome = {
  videos: [],
  loading: false,
  nextPageToken: null,
  category: "All",
};

const initialStateVid = {
  video: {},
  loading: false,
};

export const homeVideosReducer = (prevState = initialStateHome, action) => {
  const { type, payload } = action;

  switch (type) {
    case HOME_VID_REQUEST:
      return { ...prevState, loading: true };
    case HOME_VID_SUCCESS:
      return {
        ...prevState,
        videos:
          prevState.category === payload.category
            ? [...prevState.videos, ...payload.videos]
            : payload.videos,
        nextPageToken: payload.nextPageToken,
        loading: false,
        category: payload.category,
      };
    case HOME_VID_FAIL:
      return { ...prevState, loading: false, error: payload.error };
    default:
      return prevState;
  }
};

export const selectedVideoReducer = (prevState = initialStateVid, action) => {
  const { type, payload } = action;

  switch (type) {
    case VIDEO_SEARCH_REQUEST:
      return {
        ...prevState,
        loading: false,
      };
    case VIDEO_SEARCH_SUCCESS:
      return {
        ...prevState,
        video: payload,
      };
    case VIDEO_SEARCH_FAIL:
      return {
        ...prevState,
        video: null,
        error: payload,
      };
    default:
      return prevState;
  }
};
