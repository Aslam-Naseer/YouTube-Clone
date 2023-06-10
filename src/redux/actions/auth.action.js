import { getAuth } from "firebase/auth";
import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "../actionType";

export const login = (user) => (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const { displayName, photoURL } = user;
    dispatch({ type: LOGIN_SUCCESS, payload: { displayName, photoURL } });
  } catch (error) {
    alert("Sign in Failed");
    console.error(error);
    dispatch({ type: LOGIN_FAIL, payload: error.message });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOG_OUT });
};
