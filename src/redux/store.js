import { createStore, applyMiddleware, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { authReducer } from "./reducers/auth.reducer";
import {
  homeVideosReducer,
  relatedVidsReducer,
  selectedVideoReducer,
} from "./reducers/videos.reducer";
import { channelDetailReducer } from "./reducers/channel.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  homeVids: homeVideosReducer,
  selected: selectedVideoReducer,
  channelDetails: channelDetailReducer,
  relatedVids: relatedVidsReducer,
});

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
