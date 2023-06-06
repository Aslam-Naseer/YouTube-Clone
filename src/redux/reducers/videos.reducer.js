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

const initialRelatedVids = {
  videos: [],
  loading: false,
};

const initialSearchedVids = {
  videos: [],
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
        loading: true,
      };
    case VIDEO_SEARCH_SUCCESS:
      return {
        ...prevState,
        video: payload,
        loading: false,
      };
    case VIDEO_SEARCH_FAIL:
      return {
        ...prevState,
        video: {},
        error: payload,
        loading: false,
      };
    default:
      return prevState;
  }
};

export const relatedVidsReducer = (state = initialRelatedVids, action) => {
  const { type, payload } = action;

  switch (type) {
    case RELATED_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case RELATED_VIDEOS_SUCCESS:
      return {
        ...state,
        videos: payload,
        loading: false,
      };
    case RELATED_VIDEOS_FAIL:
      return {
        ...state,
        loading: false,
        video: [],
        error: payload,
      };

    default:
      return state;
  }
};

export const searchedVideoReducer = (
  prevState = initialSearchedVids,
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case SEARCHED_VIDEO_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case SEARCHED_VIDEO_SUCCESS:
      return {
        ...prevState,
        videos: payload,
        loading: false,
      };
    case SEARCHED_VIDEO_FAIL:
      return {
        ...prevState,
        videos: {},
        error: payload,
        loading: false,
      };
    default:
      return prevState;
  }
};
