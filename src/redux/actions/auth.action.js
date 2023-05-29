import {
  getAuth,
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
    // provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");
    const data = await signInWithPopup(getAuth(), provider);

    const accessToken = data.user.accessToken;
    const profile = {
      name: data.user.displayName,
      photoURL: data.user.photoURL,
    };

    dispatch({ type: LOGIN_SUCCESS, payload: accessToken });
    dispatch({ type: LOAD_PROFILE, payload: profile });

    sessionStorage.setItem("ytc-access-token", accessToken);
    sessionStorage.setItem("ytc-user", JSON.stringify(profile));
  } catch (e) {
    console.error(e);
    dispatch({ type: LOGIN_FAIL, payload: e.message });
  }
};

export const logout = () => async (dispatch) => {
  try {
    await signOut(getAuth());
    dispatch({ type: LOG_OUT });

    sessionStorage.removeItem("ytc-access-token");
    sessionStorage.removeItem("ytc-user");
  } catch (e) {
    console.error(e);
  }
};
