import fetchData from "../../fetchData";
import { getSubscriptions } from "../../utils/firestore";
import {
  CHANNEL_DETAILS_FAIL,
  CHANNEL_DETAILS_REQUEST,
  CHANNEL_DETAILS_SUCCESS,
  SUBBED_CHANNELS_FAIL,
  SUBBED_CHANNELS_REQUEST,
  SUBBED_CHANNELS_SUCCESS,
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

export const setSubbedChannels = () => async (dispatch) => {
  try {
    dispatch({ type: SUBBED_CHANNELS_REQUEST });
    const channelIds = await getSubscriptions();

    const subList = [];
    // await Promise.all(
    //   channelIds.forEach(async (channelId) => {
    //     const { data } = await fetchData("/channels", {
    //       params: {
    //         part: "snippet,statistics,contentDetails",
    //         id: channelId,
    //       },
    //     });
    //     subList.push(data?.items[0]);
    //   })
    // );

    dispatch({
      type: SUBBED_CHANNELS_SUCCESS,
      payload: { channels: subList, channelIds },
    });
  } catch (error) {
    console.error(error.message);
    dispatch({ type: SUBBED_CHANNELS_FAIL, payload: error.message });
  }
};
