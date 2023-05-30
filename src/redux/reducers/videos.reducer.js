import {
  HOME_VID_FAIL,
  HOME_VID_REQUEST,
  HOME_VID_SUCCESS,
} from "../actionType";

const initialState = {
  videos: [],
  loading: false,
  nextPageToken: null,
};

export const homeVideosReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case HOME_VID_REQUEST:
      return { ...prevState, loading: true };
    case HOME_VID_SUCCESS:
      return {
        ...prevState,
        videos: payload.videos,
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
