import {
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOG_OUT,
} from "../actionType";

const initialState = {
  accessToken: sessionStorage.getItem("ytc-access-token") || null,
  user: sessionStorage.getItem("ytc-user")
    ? JSON.parse(sessionStorage.getItem("ytc-user"))
    : null,
  loading: false,
};

export const authReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...prevState,
        loading: true,
      };

    case LOGIN_FAIL:
      return {
        ...prevState,
        accessToken: null,
        user: null,
        error: payload,
      };

    case LOGIN_SUCCESS:
      return {
        ...prevState,
        accessToken: payload,
        loading: false,
      };

    case LOG_OUT:
      return {
        ...prevState,
        accessToken: null,
        user: null,
      };

    case LOAD_PROFILE:
      return {
        ...prevState,
        user: payload,
      };

    default:
      return prevState;
  }
};
