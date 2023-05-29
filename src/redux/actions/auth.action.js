import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import {
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "../actionType";

export const login = () => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const provider = new GoogleAuthProvider();
    const data = await signInWithPopup(getAuth(), provider);

    const accessToken = data.user.accessToken;
    const profile = {
      name: data.user.displayName,
      photoURL: data.user.photoURL,
    };

    dispatch({ type: LOGIN_SUCCESS, payload: accessToken });
    dispatch({ type: LOAD_PROFILE, payload: profile });
  } catch (e) {
    console.error(e);
    dispatch({ type: LOGIN_FAIL, payload: e.message });
  }
};

export const logout = () => async (dispatch) => {
  try {
    await signOut(getAuth());
    dispatch({ type: LOG_OUT });
    console.log("logout");
  } catch (e) {
    console.error(e);
  }
};
