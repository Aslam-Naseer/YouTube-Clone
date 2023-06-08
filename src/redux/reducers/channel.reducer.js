import {
  CHANNEL_DETAILS_FAIL,
  CHANNEL_DETAILS_REQUEST,
  CHANNEL_DETAILS_SUCCESS,
  SUBBED_CHANNELS_FAIL,
  SUBBED_CHANNELS_REQUEST,
  SUBBED_CHANNELS_SUCCESS,
} from "../actionType";

const inititalState = {
  loading: false,
  channel: {},
};

const inititalSubbedState = {
  loading: false,
  channels: [],
  channelIds: [],
};

export const channelDetailReducer = (state = inititalState, action) => {
  const { payload, type } = action;

  switch (type) {
    case CHANNEL_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CHANNEL_DETAILS_SUCCESS:
      return {
        ...state,
        channel: payload,
        loading: false,
      };
    case CHANNEL_DETAILS_FAIL:
      return {
        ...state,
        channel: null,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const subbedChannelsReducer = (state = inititalSubbedState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SUBBED_CHANNELS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SUBBED_CHANNELS_SUCCESS:
      return {
        ...state,
        channels: payload.channels,
        channelIds: payload.channelIds,
        loading: false,
      };
    case SUBBED_CHANNELS_FAIL:
      return {
        ...state,
        channels: [],
        channelIds: [],
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
