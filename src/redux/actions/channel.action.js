import fetchData from "../../fetchData";
import {
  CHANNEL_DETAILS_FAIL,
  CHANNEL_DETAILS_REQUEST,
  CHANNEL_DETAILS_SUCCESS,
} from "../actionType";

export const getChannelDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: CHANNEL_DETAILS_REQUEST });
    const { data } = await fetchData("/channels", {
      params: {
        part: "snippet,statistics,contentDetails",
        id,
      },
    });

    dispatch({ type: CHANNEL_DETAILS_SUCCESS, payload: data?.items[0] });
  } catch (error) {
    console.error(error.message);
    dispatch({ type: CHANNEL_DETAILS_FAIL, payload: error.message });
  }
};
