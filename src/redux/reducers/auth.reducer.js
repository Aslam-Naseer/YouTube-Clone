import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "../actionType";

const initState = {
  user: null,
  loading: false,
};

export const authReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, user: payload, loading: false };
    case LOGIN_FAIL:
      return { ...state, user: null, loading: false, error: payload };
    case LOG_OUT:
      return { ...state, user: null, loading: false };
    default:
      return state;
  }
};
